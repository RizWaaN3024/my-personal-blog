import { connectToDatabase } from "@/app/lib/mongodb";
import Subscriber from "@/app/models/subscriber";
import { sendWelcomeEmail } from "@/lib/email";
import { rateLimiter } from "@/lib/rateLimit";
import { generateUnsubscribeUrl, isValidEmail } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email || !isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address'},
                { status: 400 }
            );
        }

        // Rate Limiting Check
        const clientIP = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
        const rateLimitKey = `subscribe-${email}-${clientIP}`;
        const rateLimit = rateLimiter(rateLimitKey, {
            windowMs: 60000,
            maxAttempts: 5
        });
        
        if (!rateLimit.success) {
            return NextResponse.json(
                {
                    error: 'Too many attempts. Please try again later.',
                    remainingAttempts: rateLimit.remaining
                },
                { status: 429 }
            )
        }

        await connectToDatabase();

        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            if (existingSubscriber.isActive) {
                return NextResponse.json(
                    {
                        error: "This email is already subscribed"
                    },
                    { status: 409 }
                );
            } else {
                // Reactivate
                existingSubscriber.isActive = true;
                existingSubscriber.subscribedAt = new Date();
                existingSubscriber.generateUnsubscribeToken();
                await existingSubscriber.save();

                // Unsubscribe Token
                const unsubscribeUrl = generateUnsubscribeUrl(existingSubscriber.unsubscribeToken);
                await sendWelcomeEmail(email, unsubscribeUrl);

                return NextResponse.json(
                    { message: 'Successfullt subscribed! Check your email for confirmation' },
                    { status: 200 }
                )
            }
        }

        // Create new subscriber
        const subscriber = new Subscriber({
            email,
            isActive: true,
            isVerified: false
        });

        subscriber.generateUnsubscribeToken();
        await subscriber.save();

        const unsubscribeUrl = generateUnsubscribeUrl(subscriber.unsubscribeToken);
        const emailResult = await sendWelcomeEmail(email, unsubscribeUrl);
        
        if (!emailResult.success) {
            console.error("Failed to send welcome email", emailResult.error);
        }

        return  NextResponse.json(
            { message: "Susccessfully subscribed! Check your email for subscription." },
            { status: 201 }
        );
    } catch (error) {
        console.error("Subscription Error", error);
        return NextResponse.json(
            { message: "An error occurred while processing your subscription" },
            { status: 500 }
        );
    }
}