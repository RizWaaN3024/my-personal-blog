import { BlogPost } from "../types";


export async function notifySubscribersOnPublish(post: BlogPost) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notify-subscribers`, {
            method: 'POST',
            headers: {
                'Content Type': 'application/json',
                'x-api-key': process.env.NOTIFICATION_API_KEY!,
            },
            body: JSON.stringify({ post }),
        })

        const result = await response.json();

        if (response.ok) {
            console.log('Newsletter sent successfully: ', result);
            return { success: true, data: result };
        } else {
            console.error('Failed to send newsletter: ', result);
            return { success: false, error: result.error };
        }
    } catch (error) {
        console.error('Error notifying subscribers:', error);
        return { success: false, error: 'Network error' };
    }
}