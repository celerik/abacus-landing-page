# Abacus Landing Page

A stunning, professional landing page for **Abacus — Loan Lifecycle Management**, built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Fintech SaaS Design**: Clean, cinematic, and precise aesthetic inspired by Stripe, Rippling, and Notion
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion with fade-ins, slide-ups, and parallax effects
- **SEO Optimized**: Complete metadata, Open Graph tags, and semantic HTML
- **23 Interactive Scenes**: Dynamic sections showcasing the complete Abacus loan lifecycle
- **Performance Optimized**: Image optimization with Next.js Image, lazy loading, and code splitting

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter (Google Fonts)
- **Language**: TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit the files.

## 📂 Project Structure

```
abacus-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── HeroSection.tsx     # Hero section with CTA
│   ├── SceneSection.tsx    # Reusable scene component
│   ├── FeatureCards.tsx    # Feature highlights
│   ├── ClosingSection.tsx  # Closing section
│   └── Footer.tsx          # Footer with links
├── data/
│   └── scenes.json         # Structured scene content
├── public/
│   └── scenes/             # Scene images
├── lib/
│   └── utils.ts            # Utility functions
└── package.json
```

## 🎨 Design System

### Colors
- **Background**: `#FAFBFC` (light gray)
- **Foreground**: `#0F172A` (slate-900)
- **Primary**: `#3B82F6` (blue-500)
- **Accent**: `#1E40AF` (blue-800)

### Typography
- **Font**: Inter (Google Fonts)
- **Hero**: 4xl-7xl
- **Section Titles**: 2xl-5xl
- **Body**: base-xl

### Spacing
- **Section Padding**: py-20 (mobile), py-32 (desktop)
- **Max Width**: 1280px
- **Grid Gaps**: gap-8, gap-12, gap-16

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Manual Deployment

```bash
# Build the application
npm run build

# The output will be in the .next folder
# Deploy the .next folder to your hosting provider
```

## 📝 Content Management

Scene content is stored in `/data/scenes.json`. To add or modify scenes:

1. Edit `scenes.json`
2. Add corresponding images to `/public/scenes/`
3. The page will automatically render the new content

## 🎯 Performance

- ✅ Image optimization with Next.js Image
- ✅ Lazy loading for scenes
- ✅ Code splitting by route
- ✅ Font optimization with next/font
- ✅ Smooth scroll behavior
- ✅ Accessible and semantic HTML

## 📄 License

© 2025 Celerik. All rights reserved.

## 🤝 Support

For support, email info@celerik.com or visit our website.

---

Built with ❤️ by Celerik
