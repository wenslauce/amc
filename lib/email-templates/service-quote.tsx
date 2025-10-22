import { ReactElement } from 'react'

interface ServiceQuoteData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  country: string
  serviceName: string
  requirements: string
}

export function ServiceQuoteEmail({ data }: { data: ServiceQuoteData }): ReactElement {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '20px', borderRadius: '8px 8px 0 0' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>New Service Quote Request</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>G1 Group of Companies</p>
      </div>
      
      <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '0 0 8px 8px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#1e3a8a', marginTop: 0 }}>Quote Request Details</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Service:</strong> {data.serviceName}
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Client:</strong> {data.firstName} {data.lastName}
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Email:</strong> {data.email}
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Phone:</strong> {data.phone}
          </p>
          {data.company && (
            <p style={{ margin: '5px 0', fontSize: '16px' }}>
              <strong>Company:</strong> {data.company}
            </p>
          )}
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Country:</strong> {data.country}
          </p>
        </div>

        <h3 style={{ color: '#1e3a8a', marginTop: '30px' }}>Requirements</h3>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '6px', 
          border: '1px solid #e2e8f0',
          whiteSpace: 'pre-wrap',
          fontSize: '16px',
          lineHeight: '1.6'
        }}>
          {data.requirements}
        </div>

        <div style={{ 
          marginTop: '30px', 
          padding: '20px', 
          backgroundColor: '#fef3c7', 
          borderRadius: '6px',
          border: '1px solid #f59e0b'
        }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#92400e' }}>
            <strong>Priority:</strong> High - Quote request requires prompt attention and detailed proposal preparation.
          </p>
        </div>

        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          backgroundColor: '#dbeafe', 
          borderRadius: '6px',
          border: '1px solid #3b82f6'
        }}>
          <h3 style={{ color: '#1e40af', marginTop: 0 }}>Next Steps</h3>
          <ul style={{ color: '#1e40af', fontSize: '14px', lineHeight: '1.6' }}>
            <li>Review requirements and prepare customized proposal</li>
            <li>Schedule consultation call with client</li>
            <li>Provide detailed quote within 48 hours</li>
            <li>Follow up with additional information if needed</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function ServiceQuoteConfirmationEmail({ data }: { data: ServiceQuoteData }): ReactElement {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '20px', borderRadius: '8px 8px 0 0' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Quote Request Received</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>G1 Group of Companies</p>
      </div>
      
      <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '0 0 8px 8px', border: '1px solid #e2e8f0' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Dear {data.firstName} {data.lastName},
        </p>
        
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Thank you for your interest in our <strong>{data.serviceName}</strong> services. We have received your quote request and our specialists are already reviewing your requirements.
        </p>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '6px', 
          border: '1px solid #e2e8f0',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#1e3a8a', marginTop: 0 }}>Your Quote Request</h3>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Service:</strong> {data.serviceName}
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Submitted:</strong> {new Date().toLocaleString()}
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            <strong>Reference ID:</strong> G1-{Date.now().toString().slice(-6)}
          </p>
        </div>

        <div style={{ 
          backgroundColor: '#dcfce7', 
          padding: '20px', 
          borderRadius: '6px',
          border: '1px solid #16a34a',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#166534', marginTop: 0 }}>What Happens Next?</h3>
          <ul style={{ color: '#166534', fontSize: '14px', lineHeight: '1.6' }}>
            <li><strong>Within 4 hours:</strong> Initial acknowledgment and requirements clarification</li>
            <li><strong>Within 24 hours:</strong> Detailed consultation call scheduled</li>
            <li><strong>Within 48 hours:</strong> Comprehensive quote and proposal delivered</li>
            <li><strong>Ongoing:</strong> Dedicated account manager assigned for follow-up</li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#fef3c7', 
          padding: '20px', 
          borderRadius: '6px',
          border: '1px solid #f59e0b',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#92400e', marginTop: 0 }}>Why Choose G1 Group?</h3>
          <ul style={{ color: '#92400e', fontSize: '14px', lineHeight: '1.6' }}>
            <li>15+ years of experience in high-value trade facilitation</li>
            <li>Global network across 50+ countries</li>
            <li>Comprehensive compliance and security protocols</li>
            <li>24/7 support and real-time tracking capabilities</li>
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
            <strong>Business Hours:</strong> +254 789 764 967 (Mon-Fri: 8:00 AM - 6:00 PM EAT)
          </p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '30px' }}>
          We look forward to providing you with a comprehensive solution tailored to your specific needs.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '20px' }}>
          Best regards,<br />
          <strong>G1 Group of Companies</strong><br />
          <em>Securing High-Value Trade Across Borders</em>
        </p>
      </div>
    </div>
  )
}
