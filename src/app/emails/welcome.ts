import { EmailTemplate } from "../types";

export const welcomeEmailTemplate = (subscriberEmail: string, unsubscribeUrl: string): EmailTemplate => {
    return {
        subject: "Welcome to my blog! 🎉",
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; text-align: center;">Welcome to the Newsletter!</h1>
        <p style="color: #666; font-size: 16px;">
          Hi there! 👋
        </p>
        <p style="color: #666; font-size: 16px;">
          Thank you for subscribing to my blog newsletter. You'll be the first to know when I publish new content!
        </p>
        <p style="color: #666; font-size: 16px;">
          You'll receive notifications whenever I post new articles, tutorials, and insights.
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}" 
             style="background-color: #007cba; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Visit My Blog
          </a>
        </div>
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #999; font-size: 12px; text-align: center;">
          You can <a href="${unsubscribeUrl}" style="color: #999;">unsubscribe</a> at any time.
        </p>
      </div>
    `,
        text: `
      Welcome to the Newsletter!
      
      Hi there!
      
      Thank you for subscribing to my blog newsletter. You'll be the first to know when I publish new content!
      
      You'll receive notifications whenever I post new articles, tutorials, and insights.
      
      Visit my blog: ${process.env.NEXT_PUBLIC_BASE_URL}
      
      You can unsubscribe at any time: ${unsubscribeUrl}
    `
    };
};