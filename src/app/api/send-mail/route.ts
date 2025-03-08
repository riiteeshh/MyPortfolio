import { ContactForm } from "@/app/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, subject }: ContactForm = await req.json();
    
    if (!email || !message) {
      return NextResponse.json(
        { message: "Email and message are required." },
        { status: 400 }
      );
    }

    // ElasticEmail API configuration
    const elasticEmailApiKey = process.env.NEXT_PUBLIC_ELASTICEMAIL_API_KEY as string;
    const toEmail = process.env.NEXT_PUBLIC_EMAIL as string;
    const fromEmail = process.env.NEXT_PUBLIC_FROM as string;

    // Prepare the request body for ElasticEmail API
    const emailData = {
      apikey: elasticEmailApiKey,
      from: fromEmail,
      fromName: name,
      to: toEmail,
      subject: subject,
      bodyHtml: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`
    };

    // Send email using ElasticEmail API
    const response = await fetch('https://api.elasticemail.com/v2/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(emailData),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || 'Failed to send email');
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}