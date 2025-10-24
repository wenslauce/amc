import { ReactElement } from 'react'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  country?: string
  service: string
  message: string
}

export function ContactFormEmail({ data }: { data: ContactFormData }): ReactElement {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '20px', borderRadius: '8px 8px 0 0' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>New Contact Form Submission</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>G1 Group of Companies</p>
      </div>
      
      <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '0 0 8px 8px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#1e3a8a', marginTop: 0 }}>Contact Details</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Name:</strong> {data.name}
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Email:</strong> {data.email}
          </p>
          {data.phone && (
            <p style={{ margin: '5px 0', fontSize: '16px' }}>
              <strong>Phone:</strong> {data.phone}
            </p>
          )}
          {data.company && (
            <p style={{ margin: '5px 0', fontSize: '16px' }}>
              <strong>Company:</strong> {data.company}
            </p>
          )}
          {data.country && (
            <p style={{ margin: '5px 0', fontSize: '16px' }}>
              <strong>Country:</strong> {data.country}
            </p>
          )}
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Service Interest:</strong> {data.service}
          </p>
        </div>

        <h3 style={{ color: '#1e3a8a', marginTop: '30px' }}>Message</h3>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '6px', 
          border: '1px solid #e2e8f0',
          whiteSpace: 'pre-wrap',
          fontSize: '16px',
          lineHeight: '1.6'
        }}>
          {data.message}
        </div>

        <div style={{ 
          marginTop: '30px', 
          padding: '20px', 
          backgroundColor: '#fef3c7', 
          borderRadius: '6px',
          border: '1px solid #f59e0b'
        }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#92400e' }}>
            <strong>Action Required:</strong> Please respond to this inquiry within 24 hours as per our service commitment.
          </p>
        </div>
      </div>
    </div>
  )
}

export function ContactFormConfirmationEmail({ data }: { data: ContactFormData }): ReactElement {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '20px', borderRadius: '8px 8px 0 0' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Thank You for Contacting G1 Group</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Your inquiry has been received</p>
      </div>
      
      <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '0 0 8px 8px', border: '1px solid #e2e8f0' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Dear {data.name},
        </p>
        
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Thank you for reaching out to G1 Group of Companies. We have received your inquiry regarding <strong>{data.service}</strong> and our team will review your requirements.
        </p>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '6px', 
          border: '1px solid #e2e8f0',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#1e3a8a', marginTop: 0 }}>Your Inquiry Summary</h3>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Service:</strong> {data.service}
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Submitted:</strong> {new Date().toLocaleString()}
          </p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Our team will contact you within <strong>24 hours</strong> to discuss your requirements and provide detailed information about our services.
        </p>

        <div style={{ 
          backgroundColor: '#dcfce7', 
          padding: '20px', 
          borderRadius: '6px',
          border: '1px solid #16a34a',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#166534', marginTop: 0 }}>What Happens Next?</h3>
          <ul style={{ color: '#166534', fontSize: '14px', lineHeight: '1.6' }}>
            <li>Our specialists will review your requirements</li>
            <li>We'll prepare a customized proposal</li>
            <li>A team member will contact you to discuss next steps</li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#fef3c7', 
          padding: '20px', 
          borderRadius: '6px',
          border: '1px solid #f59e0b'
        }}>
          <h3 style={{ color: '#92400e', marginTop: 0 }}>Need Immediate Assistance?</h3>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#92400e' }}>
            <strong>24/7 Emergency Hotline:</strong> +243 861 005 766
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#92400e' }}>
            <strong>Business Hours:</strong> +32 465 93 22 50 | +254 789 764 967 | +243 861 005 766 (Mon-Fri: 8:00 AM - 6:00 PM EAT)
          </p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '30px' }}>
          Best regards,<br />
          <strong>G1 Group of Companies</strong><br />
          <em>Securing High-Value Trade Across Borders</em>
        </p>
      </div>
    </div>
  )
}
