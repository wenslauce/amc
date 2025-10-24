import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateEmail, validateRequiredFields, sanitizeInput } from '@/lib/email-utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, country, serviceName, requirements } = body

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'country', 'serviceName', 'requirements']
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
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: company ? sanitizeInput(company) : '',
      country,
      serviceName: sanitizeInput(serviceName),
      requirements: sanitizeInput(requirements)
    }

    // Create HTML email content
    const teamEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">G1 Group of Companies</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
          <h2 style="color: #1e3a8a; margin-top: 0;">Client Details</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0; font-size: 16px;"><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Email:</strong> ${formData.email}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Phone:</strong> ${formData.phone}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Country:</strong> ${formData.country}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Service Requested:</strong> ${formData.serviceName}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e3a8a;">Requirements</h3>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #1e3a8a;">
              <p style="margin: 0; line-height: 1.6;">${formData.requirements}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This quote request was submitted from the G1 Group of Companies website.</p>
            <p>Please respond to the client directly at: <a href="mailto:${formData.email}" style="color: #1e3a8a;">${formData.email}</a></p>
          </div>
        </div>
      </div>
    `

    const confirmationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Quote Request Received</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">G1 Group of Companies</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Dear ${formData.firstName} ${formData.lastName},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in our <strong>${formData.serviceName}</strong> services. We have received your quote request and our team will prepare a comprehensive proposal for you.
          </p>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Your Requirements Summary</h3>
            <p style="margin: 0; line-height: 1.6;">${formData.requirements}</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Our specialists will review your requirements and provide you with a detailed quote within 24-48 hours. We will include pricing, timelines, and any additional recommendations based on your specific needs.
          </p>
          
          <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Need Immediate Assistance?</h3>
            <p style="margin: 5px 0;"><strong>Phone:</strong> +32 465 93 22 50 | +254 789 764 967 | +243 861 005 766</p>
            <p style="margin: 5px 0;"><strong>Emergency Hotline:</strong> +243 861 005 766 (24/7)</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> info@g1groupofcompanies.com</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 0;">
            Best regards,<br>
            <strong>G1 Group of Companies Team</strong>
          </p>
        </div>
      </div>
    `

    // Send email to G1 Group team
    const teamEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@g1groupofcompanies.com',
      to: [process.env.TO_EMAIL || 'info@g1groupofcompanies.com'],
      subject: `New Quote Request - ${serviceName}`,
      html: teamEmailHtml,
    })

    // Send confirmation email to client
    const confirmationEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@g1groupofcompanies.com',
      to: [email],
      subject: `Quote Request Received - ${serviceName}`,
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
        message: 'Service quote request submitted successfully',
        emailId: teamEmailResult.data?.id,
        confirmationId: confirmationEmailResult.data?.id,
        referenceId: `G1-${Date.now().toString().slice(-6)}`
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Service quote submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
