import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ServiceQuoteEmail, ServiceQuoteConfirmationEmail } from '@/lib/email-templates/service-quote'
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

    // Send email to G1 Group team
    const teamEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@g1groupofcompanies.com',
      to: [process.env.TO_EMAIL || 'info@g1groupofcompanies.com'],
      subject: `New Quote Request - ${serviceName}`,
      react: ServiceQuoteEmail({ data: formData }),
    })

    // Send confirmation email to client
    const confirmationEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@g1groupofcompanies.com',
      to: [email],
      subject: `Quote Request Received - ${serviceName}`,
      react: ServiceQuoteConfirmationEmail({ data: formData }),
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
