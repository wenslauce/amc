# Resend Email Configuration Setup

This guide explains how to configure Resend email functionality for the Adams Minerals and Consultancy website.

## Prerequisites

1. **Resend Account**: Sign up at [resend.com](https://resend.com)
2. **Domain Verification**: Verify your domain `adamsmineralsconsultancy.com` in Resend
3. **API Key**: Generate an API key from your Resend dashboard

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Resend Email Configuration
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=noreply@adamsmineralsconsultancy.com
TO_EMAIL=info@adamsmineralsconsultancy.com

# Optional: Additional email addresses for different departments
SUPPORT_EMAIL=support@adamsmineralsconsultancy.com
SALES_EMAIL=sales@adamsmineralsconsultancy.com

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=https://adamsmineralsconsultancy.com
```

## Email Templates

The system includes two types of email templates:

### 1. Contact Form Emails
- **Location**: `lib/email-templates/contact-form.tsx`
- **API Route**: `app/api/contact/route.ts`
- **Features**:
  - Professional HTML email design
  - Client confirmation email
  - Team notification email
  - Form data validation

### 2. Service Quote Emails
- **Location**: `lib/email-templates/service-quote.tsx`
- **API Route**: `app/api/service-quote/route.ts`
- **Features**:
  - Quote request processing
  - Reference ID generation
  - Detailed requirements handling
  - Priority marking for team

## Form Integration

### Contact Form (`app/contact/page.tsx`)
- Sends to: `/api/contact`
- Fields: name, email, phone, company, country, service, message
- Validation: Required fields and email format

### Service Quote Forms (`components/service-onboarding-form.tsx`)
- Sends to: `/api/service-quote`
- Fields: firstName, lastName, email, phone, company, country, serviceName, requirements
- Used on all service pages

## Email Features

### For Clients (Confirmation Emails)
- ✅ Professional branding
- ✅ Service-specific content
- ✅ Contact information
- ✅ Next steps guidance
- ✅ Emergency contact details

### For Adams Minerals and Consultancy Team (Notification Emails)
- ✅ Complete form data
- ✅ Priority indicators
- ✅ Action requirements
- ✅ Reference tracking
- ✅ Professional formatting

## Testing

1. **Development Testing**:
   ```bash
   npm run dev
   ```
   - Test forms on localhost
   - Check console for errors
   - Verify email delivery

2. **Production Testing**:
   - Deploy to staging environment
   - Test with real email addresses
   - Verify email formatting and delivery

## Troubleshooting

### Common Issues

1. **"Failed to send email" Error**:
   - Check RESEND_API_KEY is correct
   - Verify domain is verified in Resend
   - Check FROM_EMAIL domain matches verified domain

2. **Emails Not Received**:
   - Check spam/junk folders
   - Verify TO_EMAIL address is correct
   - Check Resend dashboard for delivery status

3. **Form Validation Errors**:
   - Ensure all required fields are filled
   - Check email format is valid
   - Verify country selection is made

### Debug Mode

Add console logging to API routes for debugging:

```typescript
console.log('Form data received:', formData)
console.log('Email sending result:', result)
```

## Security Considerations

1. **API Key Protection**:
   - Never commit `.env.local` to version control
   - Use environment variables in production
   - Rotate API keys regularly

2. **Input Validation**:
   - All forms validate required fields
   - Email format validation
   - XSS protection through React

3. **Rate Limiting**:
   - Consider implementing rate limiting for production
   - Monitor for spam submissions

## Production Deployment

1. **Environment Variables**:
   - Set environment variables in your hosting platform
   - Use secure environment variable management

2. **Domain Configuration**:
   - Ensure domain is verified in Resend
   - Set up SPF, DKIM, and DMARC records

3. **Monitoring**:
   - Monitor email delivery rates
   - Set up error alerting
   - Track form submission success rates

## Support

For issues with this email configuration:
- Check Resend documentation: [resend.com/docs](https://resend.com/docs)
- Review Next.js API routes documentation
- Contact development team for technical support
