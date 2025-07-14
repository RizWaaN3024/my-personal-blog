import { connectToDatabase } from "@/app/lib/mongodb";
import Subscriber from "@/app/models/subscriber";
import { BlogPost } from "@/app/types";
import { sendNewsLetterEmail } from "@/lib/email";
import { generateUnsubscribeUrl } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const apiKey = request.headers.get('x-api-key');
        if (apiKey !== process.env.NOTIFICATION_API_KEY) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { post }: { post: BlogPost } = await request.json();

        if (!post || !post.title || !post.slug) {
            return NextResponse.json(
                { error: 'Invalid Post Data' },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const activeSubscribers = await Subscriber.find({ isActive: true });

        if (activeSubscribers.length === 0) {
            return NextResponse.json(
                { message: "No active subscribers found" },
                { status: 200 }
            );
        }

        // Sending Emails in batch for optimization
        const batchSize = 50;
        let successCount = 0;
        let errorCount = 0;

        for (let i = 0; i < activeSubscribers.length; i += batchSize) {
            const batch = activeSubscribers.slice(i, i + batchSize);
            const emailPromises = batch.map(async (subscriber) => {
                try {
                    const unsubscribeUrl = generateUnsubscribeUrl(subscriber.unsubscribeToken);
                    const result = await sendNewsLetterEmail([subscriber.email], post, unsubscribeUrl);

                    if (result.success) {
                        subscriber.stats.emailsSent += 1;
                        subscriber.stats.lastEmailSent = new Date();
                        await subscriber.save();
                        successCount++;
                    } else {
                        errorCount++;
                    }
                } catch (error) {
                    console.error(`Error sending email to ${subscriber.email}:`, error);
                    errorCount++;
                }
            })

            await Promise.all(emailPromises);

            if (i + batchSize < activeSubscribers.length) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

        return NextResponse.json(
            { 
                message: `Newsletter sent to ${successCount} subscribers`,
                success: successCount,
                errors: errorCount,
                total: activeSubscribers.length
            }
        )
    } catch (error) {
        console.error('Newsletter notification error:', error);
        return NextResponse.json(
            { error: "An error occurred while sending notification" },
            { status: 500 }
        )
    }
}