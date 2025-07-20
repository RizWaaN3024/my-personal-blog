# Personal Blog
<img width="1470" height="878" alt="Screenshot 2025-07-20 at 3 46 50 PM" src="https://github.com/user-attachments/assets/18bbc5ed-35a1-480f-a306-2182a49d1221" /><img width="1470" height="878" alt="Screenshot 2025-07-20 at 3 48 02 PM" src="https://github.com/user-attachments/assets/4c0ceb3b-44ce-4a3b-a0fa-103e6b71d4f4" />

<img width="1470" height="878" alt="Screenshot 2025-07-20 at 3 47 03 PM" src="https://github.com/user-attachments/assets/eab99e09-f675-4308-808d-138e90e38f69" />

A modern, full-stack personal blog built with Next.js, featuring a clean design and robust email functionality.

## 🚀 Features

- **Modern UI**: Built with Tailwind CSS for responsive, clean design
- **Dynamic Content**: Server-side rendering with Next.js for optimal performance
- **Database Integration**: MongoDB with Mongoose for efficient data management
- **Email Functionality**: Welcome emails and newsletter subscriptions powered by Resend
- **SEO Optimized**: Built-in Next.js SEO capabilities
- **Responsive Design**: Mobile-first approach for all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Email Service**: Resend
- **Deployment**: [Add your deployment platform]

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB database (local or MongoDB Atlas)
- Resend API key

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-blog-repo.git
cd your-blog-repo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   └── app/           # Next.js 13+ App Router
│       ├── api/       # API route handlers
│       ├── blog/      # Blog pages and layouts
│       ├── components/ # Reusable UI components
│       ├── globals.css # Global styles
│       ├── layout.tsx  # Root layout
│       └── page.tsx    # Homepage
├── models/            # Mongoose schemas
├── lib/               # Utility functions and configurations
├── public/            # Static assets
├── tailwind.config.js # Tailwind CSS configuration
└── ...
```

## 🌟 Key Features

### Blog Management
- Create, edit, and delete blog posts
- Rich text editor support
- Categories and tags system
- SEO-friendly URLs

### Email System
- Automated welcome emails for new subscribers
- Newsletter functionality with Resend integration
- Email template customization

### Database Schema
- User management with Mongoose
- Blog post storage and retrieval
- Newsletter subscriber management

## 📧 Email Features

This blog includes comprehensive email functionality:

- **Welcome Emails**: Automatically sent to new subscribers using Resend
- **Newsletter System**: Manage and send newsletters to subscriber list
- **Email Templates**: Customizable HTML email templates
- **Subscriber Management**: Add, remove, and manage newsletter subscribers

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
This Next.js application can be deployed on various platforms including Netlify, Railway, or any Node.js hosting service.

## 🔐 Environment Variables

Make sure to set up the following environment variables:

- `MONGODB_URI`: MongoDB connection string
- `RESEND_API_KEY`: API key from Resend for email functionality
- `NEXTAUTH_SECRET`: Secret for authentication (if using NextAuth)
- `NEXT_PUBLIC_BASE_URL`: Your domain URL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: rizwaan.ansari@proton.me
- **LinkedIn**: [[Your LinkedIn](https://linkedin.com/in/yourprofile)](https://www.linkedin.com/in/rizwaan-dev/)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB team for the database solution
- Resend team for reliable email delivery

---

⭐ If you found this project helpful, please give it a star!
