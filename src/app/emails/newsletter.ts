import { EmailTemplate, BlogPost } from '../types';

export const newsletterEmailTemplate = (post: BlogPost, unsubscribeUrl: string): EmailTemplate => {
    return {
        subject: `New Post: ${post.title}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">📝 New Blog Post Published!</h1>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}" 
               style="color: #007cba; text-decoration: none;">
              ${post.title}
            </a>
          </h2>
          
          <p style="color: #666; font-size: 16px; line-height: 1.5;">
            ${post.excerpt}
          </p>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}" 
               style="background-color: #007cba; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Read Full Article →
            </a>
          </div>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #999; font-size: 12px; text-align: center;">
          You received this because you subscribed to my blog newsletter.<br>
          <a href="${unsubscribeUrl}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>
    `,
        text: `
      New Blog Post Published!
      
      ${post.title}
      
      ${post.excerpt}
      
      Read the full article: ${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}
      
      ---
      You received this because you subscribed to my blog newsletter.
      Unsubscribe: ${unsubscribeUrl}
    `
    };
};