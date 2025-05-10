import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// The AWS Lambda endpoint for SES from environment variables
const LAMBDA_SES_ENDPOINT = process.env.CONTACT_FORM_ENDPOINT;

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

    // Validate that we have an endpoint configured
    if (!LAMBDA_SES_ENDPOINT) {
      console.error('Contact form endpoint not configured');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    // Map the form data to the expected SES Lambda format
    const lambdaPayload = {
      contactName: data.name,
      contactEmail: data.email,
      contactMessage: data.message
    };

    // Send the request to AWS Lambda SES endpoint
    const sesResponse = await fetch(LAMBDA_SES_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lambdaPayload),
    });

    // Check if the request was successful
    if (!sesResponse.ok) {
      console.error('SES Error Response:', await sesResponse.text());
      throw new Error('Failed to send email through SES');
    }

    // Return success response
    return NextResponse.json(
      { message: 'Thank you for your message! I will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Error sending your message. Please try again later.' },
      { status: 500 }
    );
  }
}
