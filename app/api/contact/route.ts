import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Validate the request data
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Here you would typically send the form data to an email service,
    // add to a database, or integrate with a third-party service like
    // Formspree, SendGrid, etc.
    
    // For now, we'll just log it and return a success message
    console.log('Contact form submission:', data);

    // Return a success response
    return NextResponse.json(
      { message: 'Thank you for your message! I will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Error processing your submission. Please try again.' },
      { status: 500 }
    );
  }
}
