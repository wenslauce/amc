import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateEmail, validateRequiredFields, sanitizeInput } from '@/lib/email-utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, country, service, message } = body

    // Validate required fields
    const requiredFields = ['name', 'email', 'service', 'message']
    const missingFields = validateRequiredFields(body, requiredFields)
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const formData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : '',
      company: company ? sanitizeInput(company) : '',
      country: country || '',
      service: sanitizeInput(service),
      message: sanitizeInput(message)
    }

    // Create HTML email content
    const teamEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Adams Minerals and Consultancy</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
          <h2 style="color: #1e3a8a; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0; font-size: 16px;"><strong>Name:</strong> ${formData.name}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Email:</strong> ${formData.email}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Country:</strong> ${formData.country || 'Not provided'}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Service Interest:</strong> ${formData.service}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e3a8a;">Message</h3>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #1e3a8a;">
              <p style="margin: 0; line-height: 1.6;">${formData.message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This message was sent from the Adams Minerals and Consultancy contact form.</p>
            <p>Please respond to the client directly at: <a href="mailto:${formData.email}" style="color: #1e3a8a;">${formData.email}</a></p>
          </div>
        </div>
      </div>
    `

    const confirmationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Adams Minerals and Consultancy</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Dear ${formData.name},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to Adams Minerals and Consultancy. We have received your inquiry regarding <strong>${formData.service}</strong> and will respond within 24 hours.
          </p>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Your Message Summary</h3>
            <p style="margin: 0; line-height: 1.6;">${formData.message}</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Our team of mineral and consultancy experts will review your requirements and provide you with a comprehensive response tailored to your needs.
          </p>
          
          <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Need Immediate Assistance?</h3>
            <p style="margin: 5px 0;"><strong>Phone:</strong> +32 465 93 22 50 | +254 789 764 967 | +243 861 005 766</p>
            <p style="margin: 5px 0;"><strong>Emergency Hotline:</strong> +243 861 005 766 (24/7)</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> info@adamsmineralsconsultancy.com</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 0;">
            Best regards,<br>
            <strong>Adams Minerals and Consultancy Team</strong>
          </p>
        </div>
      </div>
    `

    // Send email to Adams Minerals and Consultancy team
    const teamEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@adamsmineralsconsultancy.com',
      to: [process.env.TO_EMAIL || 'info@adamsmineralsconsultancy.com'],
      subject: `New Contact Form Submission - ${service}`,
      html: teamEmailHtml,
    })

    // Send confirmation email to client
    const confirmationEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@adamsmineralsconsultancy.com',
      to: [email],
      subject: 'Thank You for Contacting Adams Minerals and Consultancy',
      html: confirmationEmailHtml,
    })

    if (teamEmailResult.error || confirmationEmailResult.error) {
      console.error('Email sending failed:', {
        teamEmail: teamEmailResult.error,
        confirmationEmail: confirmationEmailResult.error
      })
      
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        emailId: teamEmailResult.data?.id,
        confirmationId: confirmationEmailResult.data?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
