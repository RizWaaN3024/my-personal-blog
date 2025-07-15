import { welcomeEmailTemplate } from "@/app/emails/welcome";
import { resend } from "./resend";
import { BlogPost } from "@/app/types";
import { newsletterEmailTemplate } from "@/app/emails/newsletter";


export async function sendWelcomeEmail(email: string, unsubscribeUrl: string) {
    console.log("🚀 Starting welcome email send process");
    console.log("📧 Email:", email);
    console.log("🔗 Unsubscribe URL:", unsubscribeUrl);
    console.log("📨 FROM_EMAIL:", process.env.FROM_EMAIL);

    // Check if required environment variables exist
    if (!process.env.FROM_EMAIL) {
        console.error("❌ FROM_EMAIL environment variable is not set");
        return { success: false, error: "FROM_EMAIL environment variable is not set" };
    }

    if (!process.env.RESEND_API_KEY) {
        console.error("❌ RESEND_API_KEY environment variable is not set");
        return { success: false, error: "RESEND_API_KEY environment variable is not set" };
    }

    try {
        console.log("📝 Generating email template...");
        const template = welcomeEmailTemplate(email, unsubscribeUrl);
        console.log("✅ Template generated successfully");
        console.log("📋 Subject:", template.subject);
        console.log("📄 HTML length:", template.html?.length || 0);
        console.log("📄 Text length:", template.text?.length || 0);

        console.log("📤 Sending email via Resend...");
        const result = await resend.emails.send({
            from: process.env.FROM_EMAIL!,
            to: email,
            subject: template.subject,
            html: template.html,
            text: template.text
        });

        console.log("✅ Email sent successfully:", result);
        return { success: true, data: result };
    } catch (error) {
        console.error("❌ Error sending welcome email:", error);
        
        // More detailed error logging
        if (error instanceof Error) {
            console.error("Error name:", error.name);
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }
        
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