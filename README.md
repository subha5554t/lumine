🎨 Lumine — AI-Powered Image Editing SaaS

Lumine is a modern full-stack AI image editing platform that enables users to create, edit, and enhance images using intelligent tools and a real-time canvas editor.

Built with a production-grade architecture using Next.js 15, Convex, Clerk, and Fabric.js, Lumine demonstrates scalable SaaS design and modern web engineering practices.

🌐 Live Demo: https://lumine-two.vercel.app
📂 GitHub: https://github.com/subha5554t/lumine

---

🚀 Features

🧠 AI-Powered Editing

- Background Removal – Automatically remove image backgrounds
- AI Upscaler – Enhance image resolution without losing quality
- Image Extension – Expand images beyond original dimensions
- Smart Crop & Resize – Maintain aspect ratio with precision
- Color & Light Adjustments – Fine-tune brightness, contrast, saturation

---

🎛️ Advanced Editor

- Real-time canvas editor powered by Fabric.js
- Drag & drop image upload
- Instant preview of edits
- Smooth UI animations & transitions
- Dark / Light theme support

---

🔐 Authentication System

- Secure login/signup with Clerk
- OAuth & session handling
- Protected routes and user sessions

---

📂 Project Management

- Create, update, delete projects
- Save edited images in real-time
- Persistent data using Convex database

---

💳 SaaS Monetization

- Free & Pro plans
- Upgrade modal system
- Feature gating for premium users

---

🏗️ Tech Stack

Frontend

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Radix UI / ShadCN

Backend (BaaS)

- Convex – Database, serverless functions, real-time sync

Authentication

- Clerk – User management & security

Image Processing

- Fabric.js – Canvas-based editing
- ImageKit – Image storage & optimization

Utilities

- React Dropzone – File uploads
- Sonner – Notifications
- Next Themes – Theme management

Deployment

- Vercel – Serverless hosting with global CDN

---

📁 Project Structure

lumine/
├── app/                # Next.js App Router
│   ├── (auth)/         # Authentication routes
│   ├── (main)/         # Main application
│   ├── api/            # API routes
│   └── layout.js
│
├── components/         # Reusable UI components
├── convex/             # Backend functions & schema
├── context/            # Global state management
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
├── middleware.js       # Middleware
└── package.json

---

⚙️ Getting Started

Prerequisites

- Node.js (v18+)
- npm

Installation

git clone https://github.com/subha5554t/lumine.git
cd lumine
npm install

Environment Variables

Create a ".env.local" file:

NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=

Run the App

npm run dev

Open 👉 http://localhost:3000

---

📦 Available Scripts

Command| Description
npm run dev| Start development server
npm run build| Build for production
npm start| Start production server
npm run lint| Run ESLint

---

🔥 Key Highlights

- ⚡ Real-time editing experience
- 🧠 AI-powered image processing
- 🔐 Secure authentication system
- 📦 Scalable backend using Convex
- 🌍 Deployed on Vercel (CDN + Edge)

---

🧠 Technical Strength (For Recruiters)

- Built using latest modern stack (Next.js 15 + React 19)
- Implements full SaaS architecture (auth + billing logic + projects)
- Uses BaaS (Convex) for scalable backend design
- Integrates canvas-based image processing (Fabric.js)
- Production-ready deployment with Vercel

---

🚀 Future Improvements

- TypeScript migration
- Batch image processing
- AI-based auto-enhancements
- Collaboration features
- Mobile app version

---

👨‍💻 Author

Subhadip Mahanty
GitHub: https://github.com/subha5554t

---

⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
