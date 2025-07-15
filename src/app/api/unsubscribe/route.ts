import { connectToDatabase } from "@/app/lib/mongodb";
import Subscriber from "@/app/models/subscriber";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const { token } = await request.json();

        if (!token) {
            return NextResponse.json(
                { error: "Unsubscribe Token is required " },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const subscriber = await Subscriber.findOne({ unsubscribeToken: token });
        if (!subscriber) {
            return NextResponse.json(
                { error: "Invalid unsubscribe token" },
                { status: 404 }
            );
        }

        subscriber.isActive = false;
        await subscriber.save();

        return NextResponse.json(
            { message: "Successfully Unsubscribed" },
            { status: 200 }
        );
    } catch (error) {
        console.error('Unsubscribe Token: ', error);
        return NextResponse.json(
            { error: 'An error occurred while Unsubscribing' },
            { status: 500 }
        );
    }
}