/**
 * Email validation utility functions
 */

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateRequiredFields(data: Record<string, any>, requiredFields: string[]): string[] {
  const missingFields: string[] = []
  
  for (const field of requiredFields) {
    if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
      missingFields.push(field)
    }
  }
  
  return missingFields
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')
  
  // Format based on length
  if (digits.length === 12 && digits.startsWith('254')) {
    // Kenyan number: +254 XXX XXX XXX
    return `+254 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`
  } else if (digits.length === 12 && digits.startsWith('243')) {
    // Congolese number: +243 XXX XXX XXX
    return `+243 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`
  } else if (digits.length === 10) {
    // Assume US format: (XXX) XXX-XXXX
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  
  // Return original if no pattern matches
  return phone
}
