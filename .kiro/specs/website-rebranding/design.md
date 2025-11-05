# Design Document - Website Rebranding

## Overview

This design document outlines the systematic approach to rebrand the existing Next.js website from "G1 Group of Companies" to "Adams Minerals and Consultancy". The rebranding will maintain the existing technical architecture, user experience, and 90% of the content while updating all company references, branding elements, and domain-specific information.

The website is built using Next.js 15 with TypeScript, Tailwind CSS, Radix UI components, and Supabase integration. The rebranding will be implemented through targeted text replacements, asset updates, and configuration changes without altering the core functionality.

## Architecture

### Current Technology Stack
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.1.9
- **UI Components**: Radix UI primitives with custom components
- **Email Service**: Resend API integration
- **Database**: Supabase (for any backend functionality)
- **Analytics**: Vercel Analytics
- **Deployment**: Configured for Vercel deployment

### Rebranding Architecture Approach
The rebranding will follow a systematic replacement strategy across multiple layers:

1. **Content Layer**: Text content, company names, descriptions
2. **Asset Layer**: Images, logos, favicons, Open Graph images
3. **Configuration Layer**: Environment variables, metadata, sitemap
4. **Communication Layer**: Email templates, contact information
5. **SEO Layer**: Meta tags, structured data, robots.txt

## Components and Interfaces

### 1. Brand Identity Components

#### Company Name Mapping
- **From**: "G1 Group of Companies"
- **To**: "Adams Minerals and Consultancy"
- **Legal Entity From**: "G1 Holdings & Security Limited"
- **Legal Entity To**: "Adams Minerals and Consultancy Limited" (to be confirmed)

#### Domain and Email Mapping
- **Domain From**: g1groupofcompanies.com
- **Domain To**: adamsmineralsconsultancy.com
- **Email From**: info@g1groupofcompanies.com
- **Email To**: info@adamsmineralsconsultancy.com
- **Abbreviation**: AMC

### 2. File Categories Requiring Updates

#### React Components
- `app/layout.tsx` - Metadata, titles, Open Graph data
- `components/navigation.tsx` - Logo alt text, company name display
- `components/footer.tsx` - Company name, contact information
- `app/page.tsx` - Hero section company description
- `app/about/page.tsx` - Company overview and history

#### Email Templates
- `lib/email-templates/contact-form.tsx` - Company branding in emails
- `lib/email-templates/service-quote.tsx` - Quote request templates
- `app/api/contact/route.ts` - Contact form email content
- `app/api/service-quote/route.ts` - Service quote email content

#### Configuration Files
- `env.example` - Default email addresses and domain references
- `RESEND_SETUP.md` - Setup documentation with domain references
- `public/sitemap.xml` - All URL references
- `public/robots.txt` - Sitemap URL reference
- `public/llm.txt` - Company information for AI/LLM systems

#### Legal and Policy Pages
- `app/terms/page.tsx` - Terms of service with company details
- `app/privacy/page.tsx` - Privacy policy with contact information
- `app/news/page.tsx` - Newsletter subscription references

### 3. Asset Management Strategy

#### Logo and Branding Assets
- Replace `/public/logo.png` with Adams Minerals and Consultancy logo
- Update `/public/og-image.png` for social media sharing
- Create new favicon files if needed
- Update any branded images in the public directory

#### Content Assets
- Review and update any company-specific images
- Ensure all visual assets align with new brand identity
- Maintain existing image optimization and responsive behavior

## Data Models

### 1. Brand Configuration Model
```typescript
interface BrandConfig {
  companyName: string;
  legalName: string;
  domain: string;
  primaryEmail: string;
  supportEmail: string;
  salesEmail: string;
  tagline: string;
  description: string;
}

// Current Configuration
const currentBrand: BrandConfig = {
  companyName: "G1 Group of Companies",
  legalName: "G1 Holdings & Security Limited",
  domain: "g1groupofcompanies.com",
  primaryEmail: "info@g1groupofcompanies.com",
  supportEmail: "support@g1groupofcompanies.com",
  salesEmail: "sales@g1groupofcompanies.com",
  tagline: "Securing High-Value Trade Across Borders",
  description: "End-to-end protection, movement, and facilitation for high-value assets..."
}

// Target Configuration
const newBrand: BrandConfig = {
  companyName: "Adams Minerals and Consultancy",
  legalName: "Adams Minerals and Consultancy Limited",
  domain: "adamsmineralsconsultancy.com",
  primaryEmail: "info@adamsmineralsconsultancy.com",
  supportEmail: "support@adamsmineralsconsultancy.com",
  salesEmail: "sales@adamsmineralsconsultancy.com",
  tagline: "Excellence in Minerals and Strategic Consultancy",
  description: "Comprehensive minerals trading and strategic consultancy services..."
}
```

### 2. Contact Information Model
```typescript
interface ContactInfo {
  phone: string[];
  emergencyHotline: string;
  address: string;
  city: string;
  country: string;
}

// This may need updates based on Adams Minerals and Consultancy's actual contact details
```

## Error Handling

### 1. Validation Strategy
- Implement pre-deployment validation to ensure all G1 references are replaced
- Create automated tests to verify email functionality with new addresses
- Validate all internal and external links after domain changes

### 2. Rollback Plan
- Maintain backup of original files before making changes
- Use version control to track all modifications
- Prepare rollback scripts for quick reversion if needed

### 3. Email Service Continuity
- Ensure Resend API configuration works with new domain
- Test email delivery to prevent service disruption
- Update DNS records for email authentication (SPF, DKIM, DMARC)

## Testing Strategy

### 1. Content Verification Testing
- **Automated Text Search**: Scan all files for remaining G1 references
- **Visual Regression Testing**: Compare before/after screenshots
- **Link Validation**: Verify all internal and external links work correctly
- **Email Template Testing**: Send test emails to verify branding updates

### 2. Functional Testing
- **Form Submissions**: Test contact and quote request forms
- **Navigation**: Verify all menu items and links function correctly
- **Responsive Design**: Ensure layout works across all device sizes
- **SEO Elements**: Validate meta tags, structured data, and sitemap

### 3. Integration Testing
- **Email Service**: Test Resend integration with new configuration
- **Analytics**: Verify Vercel Analytics continues to work
- **Third-party Services**: Test any external integrations

### 4. Performance Testing
- **Page Load Times**: Ensure rebranding doesn't impact performance
- **Asset Loading**: Verify new images and assets load efficiently
- **Core Web Vitals**: Maintain existing performance metrics

## Implementation Phases

### Phase 1: Content and Text Updates
- Replace all company name references in React components
- Update metadata and SEO elements
- Modify email templates and API routes

### Phase 2: Asset and Configuration Updates
- Replace logo and branding assets
- Update configuration files and environment variables
- Modify sitemap and robots.txt

### Phase 3: Domain and Email Migration
- Update domain references (when new domain is confirmed)
- Configure email service with new addresses
- Update DNS and email authentication records

### Phase 4: Testing and Validation
- Comprehensive testing across all functionality
- Content verification and link validation
- Performance and SEO validation

## Migration Considerations

### 1. SEO Impact Mitigation
- Implement proper redirects if domain changes
- Update Google Search Console and analytics
- Monitor search rankings during transition

### 2. Email Continuity
- Ensure email service remains functional during transition
- Test all automated email workflows
- Update email signatures and templates

### 3. User Experience Preservation
- Maintain existing navigation and user flows
- Preserve all functional features and interactions
- Ensure consistent visual hierarchy and design patterns

This design provides a comprehensive framework for systematically rebranding the website while maintaining its technical integrity and user experience.