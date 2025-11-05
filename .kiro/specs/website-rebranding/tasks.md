# Implementation Plan

- [x] 1. Update core layout and metadata



  - Replace company name and metadata in app/layout.tsx with "Adams Minerals and Consultancy"
  - Update Open Graph data, Twitter cards, and SEO metadata
  - Change domain references from g1groupofcompanies.com to adamsmineralsconsultancy.com
  - _Requirements: 1.1, 1.2_

- [x] 2. Update navigation and header components


  - Replace company name display in components/navigation.tsx
  - Update logo alt text from "G1 Group of Companies" to "Adams Minerals and Consultancy"
  - _Requirements: 1.1_

- [x] 3. Update footer component and contact information



  - Replace company name in components/footer.tsx
  - Update email address from info@g1groupofcompanies.com to info@adamsmineralsconsultancy.com
  - Update company description and branding text
  - _Requirements: 1.4, 3.1_

- [x] 4. Update main page content



  - Replace company references in app/page.tsx hero section
  - Update company description from "G1 Group of Companies (AMCs & Security Limited)" to "Adams Minerals and Consultancy"
  - _Requirements: 1.3_

- [x] 5. Update about page content



  - Replace all company name references in app/about/page.tsx
  - Update page title and company description
  - Modify legal entity references appropriately
  - _Requirements: 1.3, 6.2_

- [x] 6. Update contact form API and email templates


  - Replace company branding in app/api/contact/route.ts email templates
  - Update FROM_EMAIL and TO_EMAIL default values to adamsmineralsconsultancy.com domain
  - Update email subject lines and content with new company name
  - _Requirements: 3.2, 4.1_

- [x] 7. Update service quote API and email templates



  - Replace company branding in app/api/service-quote/route.ts
  - Update email templates with "Adams Minerals and Consultancy" branding
  - Update default email addresses to adamsmineralsconsultancy.com domain
  - _Requirements: 3.2, 4.1_

- [x] 8. Update standalone email template components


  - Replace company branding in lib/email-templates/contact-form.tsx
  - Replace company branding in lib/email-templates/service-quote.tsx
  - Update email headers and signatures with new company name
  - _Requirements: 3.2, 4.1_

- [x] 9. Update legal and policy pages


  - Replace company name and contact information in app/terms/page.tsx
  - Replace company name and contact information in app/privacy/page.tsx
  - Update legal entity references and email addresses
  - _Requirements: 3.1, 3.3_

- [x] 10. Update news page and newsletter references



  - Replace email address in app/news/page.tsx newsletter subscription
  - Update company references in news content
  - _Requirements: 3.1_

- [x] 11. Update configuration and environment files


  - Update default email addresses in env.example
  - Update domain references in RESEND_SETUP.md documentation
  - Replace g1groupofcompanies.com with adamsmineralsconsultancy.com
  - _Requirements: 4.3_

- [x] 12. Update SEO and sitemap files


  - Replace all domain references in public/sitemap.xml
  - Update sitemap URL in public/robots.txt
  - Change all g1groupofcompanies.com references to adamsmineralsconsultancy.com
  - _Requirements: 1.2_

- [x] 13. Update AI/LLM information file



  - Replace company name and description in public/llm.txt
  - Update website URL reference to adamsmineralsconsultancy.com
  - Update company overview and business description for Adams Minerals and Consultancy
  - _Requirements: 1.3, 6.1_

- [x] 14. Replace logo and branding assets

  - Replace /public/logo.png with Adams Minerals and Consultancy logo
  - Update /public/og-image.png for social media sharing
  - Create new favicon files if provided
  - _Requirements: 2.1, 2.3_

- [x] 15. Final validation and testing



  - Search entire codebase for any remaining "G1" or "g1groupofcompanies" references
  - Test all forms and email functionality with new branding
  - Verify all navigation links and internal references work correctly
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ]* 15.1 Create automated tests for brand consistency
  - Write tests to scan for any remaining old brand references
  - Create email template tests to verify new branding
  - _Requirements: 5.1_

- [ ]* 15.2 Performance testing with new assets
  - Test page load times with new logo and images
  - Verify Core Web Vitals remain optimal
  - _Requirements: 5.4_