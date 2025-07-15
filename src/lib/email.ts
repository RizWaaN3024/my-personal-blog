import { welcomeEmailTemplate } from "@/app/emails/welcome";
import { resend } from "./resend";
import { BlogPost } from "@/app/types";
import { newsletterEmailTemplate } from "@/app/emails/newsletter";


export async function sendWelcomeEmail(email: string, unsubscribeUrl: string) {

    const template = welcomeEmailTemplate(email, unsubscribeUrl);

    try {
        const result = await resend.emails.send({
            from: process.env.FROM_EMAIL!,
            to: email,
            subject: template.subject,
            html: template.html,
            text: template.text
        });

        return { success: true, data: result };
    } catch (error) {
        console.error("Error sending welcome email:", error);
        return { success: false, error };
    }
}

export async function sendNewsLetterEmail(
    subscribers: string[],
    post: BlogPost,
    unsubscribeUrl: string
) {
    const template = newsletterEmailTemplate(post, unsubscribeUrl);

    try {
        const result = await resend.emails.send({
            from: process.env.FROM_EMAIL!,
            to: subscribers,
            subject: template.subject,
            html: template.html,
            text: template.text
        });

        return { success: true, data: result };
    } catch (error) {
        console.log("Error sending newsletter emails ", error);
        return { success: false, error };
    }
}