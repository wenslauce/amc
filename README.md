# 💎 Adams Minerals and Consultancy

> **Excellence in Minerals Trading and Strategic Consultancy**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

## 🌍 About Adams Minerals and Consultancy

Adams Minerals and Consultancy Limited is a specialized minerals trading and strategic consultancy firm headquartered in **Entebbe, Uganda**. We provide expert minerals trading and strategic consultancy services across Africa, the Middle East, Asia, Europe, and the Americas.

### 🎯 Our Mission
To deliver excellence in minerals trading, resource assessment, and strategic business consultancy through deep expertise in mineral resources, market analysis, and comprehensive business advisory services.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or later
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/wenslauce/amc.git
cd amc

# Install dependencies
npm install

# Set up environment variables
cp env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

---

## 🏗️ Project Structure

```
adams-minerals-consultancy/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 api/               # API routes
│   ├── 📁 services/          # Service pages
│   ├── 📁 about/             # About page
│   ├── 📁 news/              # News & updates
│   └── 📄 layout.tsx         # Root layout
├── 📁 components/            # Reusable UI components
├── 📁 lib/                   # Utilities & configurations
├── 📁 public/                # Static assets & images
├── 📁 scripts/               # Automation scripts
└── 📁 .kiro/                 # Development specifications
```

---

## 💼 Core Services

### 🏆 **Minerals Trading**
- Precious metals (Gold, Silver, Platinum)
- Industrial minerals
- Rare earth elements
- Global market access

### 📊 **Strategic Consultancy**
- Market analysis & intelligence
- Business advisory services
- Strategic planning
- Operational optimization

### 🚚 **Trade Facilitation & Finance**
- End-to-end transaction support
- Documentation services
- Financial solutions
- Risk management

### 🔐 **Specialized Services**
- **Crypto Desk**: Digital payment solutions for international trading
- **Regulatory Compliance**: Legal advisory and compliance management
- **Logistics & Supply Chain**: Secure transportation and supply chain management
- **Investment Advisory**: Strategic investment guidance and wealth management

---

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

### **Backend & Services**
- **API**: Next.js API Routes
- **Email**: Resend for transactional emails
- **Database**: Supabase (PostgreSQL)
- **Analytics**: Vercel Analytics

### **Development Tools**
- **Package Manager**: npm
- **Linting**: ESLint
- **Code Formatting**: Prettier (via Tailwind)
- **Version Control**: Git

---

## 📧 Environment Configuration

Create a `.env.local` file with the following variables:

```env
# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key_here

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 🖼️ Image Management

### Automated Image Downloads
The project includes an automated Pexels integration for professional images:

```bash
# Download all professional images
npm run download-images
```

### Image Inventory
- **Service Images**: 8 professional service-specific images
- **News Images**: 6 news article images
- **Corporate Images**: Headquarters and branding assets
- **Social Media**: Optimized og-image for sharing

All images are sourced from [Pexels](https://www.pexels.com) with proper licensing.

---

## 📱 Features

### ✨ **User Experience**
- 📱 Fully responsive design
- ⚡ Fast loading with Next.js optimization
- 🎨 Professional UI with Tailwind CSS
- 🌙 Dark/Light mode support
- 🍪 GDPR-compliant cookie management

### 🔧 **Technical Features**
- 🚀 Server-side rendering (SSR)
- 📊 Built-in analytics
- 📧 Contact forms with email integration
- 🔍 SEO optimized
- 📱 Progressive Web App (PWA) ready

### 🛡️ **Security & Compliance**
- 🔒 Secure API endpoints
- 📋 Privacy policy & terms of service
- 🛡️ Input validation and sanitization
- 🔐 Environment variable protection

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npm run build
vercel --prod
```

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
Ensure all environment variables are configured in your deployment platform.

---

## 📊 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Utilities
npm run download-images    # Download Pexels images
```

---

## 🌍 Global Presence

Adams Minerals and Consultancy operates across multiple continents:

- 🌍 **Africa**: Kenya (HQ), East & Central Africa, COMESA, EAC, South Africa, West Africa
- 🕌 **Middle East**: UAE, Saudi Arabia, Qatar, Turkey
- 🏯 **Asia-Pacific**: China, India, Southeast Asia
- 🏰 **Europe**: United Kingdom, European Union
- 🌎 **Americas**: United States, Brazil, Latin America

---

## 📞 Contact Information

**Headquarters**: Entebbe, Uganda

**Services**: Global minerals trading and strategic consultancy

**Website**: [Contact Form](./contact) for inquiries

---

## 🤝 Contributing

We welcome contributions to improve the website. Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is proprietary software owned by **Adams Minerals and Consultancy Limited**.

---

## 🔗 Links

- **Website**: [Live Site](https://your-domain.com)
- **Repository**: [GitHub](https://github.com/wenslauce/amc)
- **Issues**: [Report Issues](https://github.com/wenslauce/amc/issues)
- **Documentation**: [Project Specs](./.kiro/specs/website-rebranding/)

---

## 📈 Project Status

- ✅ **Core Website**: Complete
- ✅ **Service Pages**: All 8 services implemented
- ✅ **Professional Images**: Pexels integration complete
- ✅ **Contact Forms**: Email integration active
- ✅ **SEO Optimization**: Implemented
- ✅ **Mobile Responsive**: Fully responsive
- 🔄 **Ongoing**: Content updates and enhancements

---

<div align="center">

**Built with ❤️ for Adams Minerals and Consultancy**

*Excellence in Minerals Trading and Strategic Consultancy*

</div>"