import { EmailTemplate } from "../types";

export const welcomeEmailTemplate = (subscriberEmail: string, unsubscribeUrl: string): EmailTemplate => {
  return {
    subject: "Welcome aboard! Your coding adventure starts now ⚡",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        
        <!-- Header Section -->
        <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 48px 32px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 32px; font-weight: 600; margin: 0; letter-spacing: -0.5px;">
            Welcome aboard!
          </h1>
          <p style="color: #e0e7ff; font-size: 18px; margin: 8px 0 0 0; font-weight: 400;">
            Your developer journey just got more interesting
          </p>
        </div>

        <!-- Main Content -->
        <div style="padding: 48px 32px;">
          
          <!-- Greeting -->
          <div style="margin-bottom: 40px;">
            <h2 style="color: #111827; font-size: 24px; font-weight: 600; margin: 0 0 16px 0; line-height: 1.3;">
              Hey there, coding enthusiast! 👋
            </h2>
            <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0;">
              You've officially joined a community of developers who turn coffee into code and bugs into features. Welcome to the club where "it works on my machine" is both a meme and a way of life!
            </p>
          </div>

          <!-- What to Expect -->
          <div style="margin-bottom: 40px;">
            <h3 style="color: #111827; font-size: 20px; font-weight: 600; margin: 0 0 24px 0;">
              What's heading your way:
            </h3>
            
            <div style="background: #f9fafb; padding: 32px; border-radius: 8px; border-left: 4px solid #6366f1;">
              <div style="margin-bottom: 20px;">
                <div style="color: #111827; font-weight: 600; font-size: 16px; margin-bottom: 4px;">
                  🧠 Mind-bending tutorials
                </div>
                <div style="color: #6b7280; font-size: 14px;">
                  The kind that make you go "Wait, THAT'S how it works?!"
                </div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <div style="color: #111827; font-weight: 600; font-size: 16px; margin-bottom: 4px;">
                  💡 Lightbulb moments
                </div>
                <div style="color: #6b7280; font-size: 14px;">
                  Those beautiful "aha!" revelations that make everything click
                </div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <div style="color: #111827; font-weight: 600; font-size: 16px; margin-bottom: 4px;">
                  🐛 Debugging adventures
                </div>
                <div style="color: #6b7280; font-size: 14px;">
                  From "Why won't this work?!" to "Oh, missing semicolon... again"
                </div>
              </div>
              
              <div>
                <div style="color: #111827; font-weight: 600; font-size: 16px; margin-bottom: 4px;">
                  ☕ Coffee-fueled insights
                </div>
                <div style="color: #6b7280; font-size: 14px;">
                  Industry trends and tips that pair perfectly with your favorite brew
                </div>
              </div>
            </div>
          </div>

          <!-- Fun Fact -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #06d6a0 100%); padding: 24px; border-radius: 8px; margin-bottom: 40px; text-align: center;">
            <h3 style="color: #ffffff; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">
              🎯 Fun fact about you:
            </h3>
            <p style="color: #ffffff; font-size: 16px; margin: 0; opacity: 0.95; line-height: 1.5;">
              You're now part of an exclusive group that understands why <code style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px; font-family: 'Monaco', 'Courier New', monospace;">== </code> and <code style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px; font-family: 'Monaco', 'Courier New', monospace;">===</code> are totally different beasts!
            </p>
          </div>
          <div style="text-align: center; margin: 40px 0;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}" 
               style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); transition: all 0.3s ease;">
              Start Reading
            </a>
          </div>

          <!-- Quote Section -->
          <div style="background: #111827; color: white; padding: 32px; border-radius: 8px; margin-bottom: 40px; text-align: center;">
            <p style="font-size: 18px; font-style: italic; margin: 0; line-height: 1.5; color: #e5e7eb;">
              "Code never lies, comments sometimes do, but pizza always delivers."
            </p>
            <p style="font-size: 14px; margin: 16px 0 0 0; color: #9ca3af;">
              — Ancient Developer Wisdom
            </p>
          </div>

          <!-- Personal Touch -->
          <div style="border-left: 4px solid #10b981; padding-left: 24px; margin-bottom: 40px;">
            <p style="color: #111827; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
              I'm genuinely excited to have you here! Whether you're debugging your first "Hello World" or architecting the next big thing, this journey is going to be epic.
            </p>
            <p style="color: #6b7280; font-size: 14px; margin: 0; font-style: italic;">
              P.S. - If you ever build something awesome using what you learn here, hit reply and show it off! I love seeing what the community creates! 🎨
            </p>
          </div>

        </div>

        <!-- Footer -->
        <div style="background: #f9fafb; padding: 32px; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="color: #6b7280; font-size: 14px; margin: 0 0 16px 0;">
            Thanks for joining the adventure! ✨
          </p>
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Had enough of our awesome content? 😢 <a href="${unsubscribeUrl}" style="color: #6366f1; text-decoration: none;">Unsubscribe here</a>
            <br>
            <span style="font-size: 11px; opacity: 0.8;">
              (But we both know you won't... this stuff is too good! 😉)
            </span>
          </p>
        </div>
      </div>
    `,
    text: `
WELCOME ABOARD! YOUR CODING ADVENTURE STARTS NOW ⚡

Hey there, coding enthusiast! 👋

You've officially joined a community of developers who turn coffee into code and bugs into features. Welcome to the club where "it works on my machine" is both a meme and a way of life!

WHAT'S HEADING YOUR WAY:

🧠 Mind-bending tutorials - The kind that make you go "Wait, THAT'S how it works?!"
💡 Lightbulb moments - Those beautiful "aha!" revelations that make everything click
🐛 Debugging adventures - From "Why won't this work?!" to "Oh, missing semicolon... again"
☕ Coffee-fueled insights - Industry trends and tips that pair perfectly with your favorite brew

🎯 FUN FACT ABOUT YOU:
You're now part of an exclusive group that understands why == and === are totally different beasts!

"Code never lies, comments sometimes do, but pizza always delivers." — Ancient Developer Wisdom

I'm genuinely excited to have you here! Whether you're debugging your first "Hello World" or architecting the next big thing, this journey is going to be epic.

Visit the blog: ${process.env.NEXT_PUBLIC_BASE_URL}

P.S. - If you ever build something awesome using what you learn here, hit reply and show it off! I love seeing what the community creates! 🎨

Thanks for joining the adventure! ✨

Had enough of our awesome content? 😢 Unsubscribe here: ${unsubscribeUrl}
(But we both know you won't... this stuff is too good! 😉)
    `
  };
};