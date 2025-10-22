import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactFormEmail, ContactFormConfirmationEmail } from '@/lib/email-templates/contact-form'
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

    // Send email to G1 Group team
    const teamEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@g1groupofcompanies.com',
      to: [process.env.TO_EMAIL || 'info@g1groupofcompanies.com'],
      subject: `New Contact Form Submission - ${service}`,
      react: ContactFormEmail({ data: formData }),
    })

    // Send confirmation email to client
    const confirmationEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@g1groupofcompanies.com',
      to: [email],
      subject: 'Thank You for Contacting G1 Group of Companies',
      react: ContactFormConfirmationEmail({ data: formData }),
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
