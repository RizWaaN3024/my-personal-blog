import { EmailTemplate, BlogPost } from '../types';

export const newsletterEmailTemplate = (post: BlogPost, unsubscribeUrl: string): EmailTemplate => {
    return {
        subject: `Fresh code insights: ${post.title}`,
        html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        
        <!-- Header Section -->
        <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0; letter-spacing: -0.5px;">
            📝 Fresh from the code kitchen!
          </h1>
          <p style="color: #e0e7ff; font-size: 16px; margin: 8px 0 0 0; font-weight: 400;">
            New insights just dropped
          </p>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 32px;">
          
          <!-- Article Preview -->
          <div style="background: #f9fafb; padding: 32px; border-radius: 8px; border-left: 4px solid #6366f1; margin-bottom: 32px;">
            <h2 style="color: #111827; font-size: 22px; font-weight: 600; margin: 0 0 16px 0; line-height: 1.3;">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}" 
                 style="color: #111827; text-decoration: none;">
                ${post.title}
              </a>
            </h2>
            
            <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
              ${post.excerpt}
            </p>
            
            <div style="text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}" 
                 style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); transition: all 0.3s ease;">
                🚀 Dive into the code
              </a>
            </div>
          </div>

          <!-- Engagement Section -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #06d6a0 100%); padding: 24px; border-radius: 8px; margin-bottom: 32px; text-align: center;">
            <h3 style="color: #ffffff; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">
              💡 Found this useful?
            </h3>
            <p style="color: #ffffff; font-size: 14px; margin: 0; opacity: 0.95; line-height: 1.5;">
              Hit reply and let me know what you think! Your feedback helps me write better content for the community.
            </p>
          </div>

          <!-- Quote Section -->
          <div style="background: #111827; color: white; padding: 24px; border-radius: 8px; margin-bottom: 32px; text-align: center;">
            <p style="font-size: 16px; font-style: italic; margin: 0; line-height: 1.5; color: #e5e7eb;">
              "Learning never exhausts the mind... but debugging definitely does."
            </p>
            <p style="font-size: 12px; margin: 12px 0 0 0; color: #9ca3af;">
              — Leonardo da Vinci (if he coded)
            </p>
          </div>

          <!-- Personal Note -->
          <div style="border-left: 4px solid #10b981; padding-left: 24px;">
            <p style="color: #111827; font-size: 15px; line-height: 1.6; margin: 0; font-style: italic;">
              Hope this helps level up your coding game! More insights coming your way soon. 
              <span style="color: #6b7280;">Keep building awesome things!</span> ✨
            </p>
          </div>

        </div>

        <!-- Footer -->
        <div style="background: #f9fafb; padding: 24px 32px; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0;">
            You're getting this because you're part of our amazing developer community! 🎉
          </p>
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Not feeling it anymore? <a href="${unsubscribeUrl}" style="color: #6366f1; text-decoration: none;">Unsubscribe here</a>
          </p>
        </div>
      </div>
    `,
        text: `
FRESH CODE INSIGHTS: ${post.title.toUpperCase()}

📝 Fresh from the code kitchen!
New insights just dropped

${post.title}

${post.excerpt}

🚀 Read the full article: ${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}

💡 FOUND THIS USEFUL?
Hit reply and let me know what you think! Your feedback helps me write better content for the community.

"Learning never exhausts the mind... but debugging definitely does." — Leonardo da Vinci (if he coded)

Hope this helps level up your coding game! More insights coming your way soon. Keep building awesome things! ✨

---
You're getting this because you're part of our amazing developer community! 🎉
Not feeling it anymore? Unsubscribe here: ${unsubscribeUrl}
    `
    };
};