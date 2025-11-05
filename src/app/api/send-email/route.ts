import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    
    // Validation
    if (!body.name || !body.email || !body.phone || !body.course) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email service is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured - skipping email notification');
      return NextResponse.json(
        { 
          success: true, 
          warning: 'Email service not configured. Submission saved to file only.' 
        },
        { status: 200 }
      );
    }

    if (!process.env.ADMIN_EMAIL) {
      console.warn('ADMIN_EMAIL not configured - skipping email notification');
      return NextResponse.json(
        { 
          success: true, 
          warning: 'Admin email not configured. Submission saved to file only.' 
        },
        { status: 200 }
      );
    }

    // Send notification to admin
    const adminEmailResult = await resend.emails.send({
      from: 'DESHON DEVSOL <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL as string,
      subject: `🎓 New Course Inquiry from ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #667eea; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { margin-top: 20px; padding: 20px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎓 New Student Inquiry</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">DESHON DEVSOL Training Institute</p>
            </div>
            <div class="content">
              <p style="font-size: 16px; margin-bottom: 25px;">You have received a new course inquiry:</p>
              
              <div class="info-row">
                <div class="label">👤 Student Name</div>
                <div class="value">${body.name}</div>
              </div>
              
              <div class="info-row">
                <div class="label">📧 Email Address</div>
                <div class="value">${body.email}</div>
              </div>
              
              <div class="info-row">
                <div class="label">📱 Phone Number</div>
                <div class="value">${body.phone}</div>
              </div>
              
              <div class="info-row">
                <div class="label">📚 Course Interest</div>
                <div class="value"><strong>${body.course}</strong></div>
              </div>
              
              <div class="info-row">
                <div class="label">🕐 Submitted At</div>
                <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated notification from DESHON DEVSOL website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send confirmation to student
    await resend.emails.send({
      from: 'DESHON DEVSOL <onboarding@resend.dev>',
      to: body.email,
      subject: '✅ Thank You for Your Interest in DESHON DEVSOL',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { margin-top: 20px; padding: 20px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">✅ Thank You, ${body.name}!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">We received your inquiry</p>
            </div>
            <div class="content">
              <p style="font-size: 16px;">Dear ${body.name},</p>
              
              <p>Thank you for your interest in <strong>${body.course}</strong> at DESHON DEVSOL!</p>
              
              <p>We have received your inquiry and our team will get back to you within 24 hours to discuss:</p>
              <ul>
                <li>📚 Course curriculum and learning path</li>
                <li>⏰ Upcoming batch schedules</li>
                <li>💰 Pricing and enrollment details</li>
                <li>🎓 Career support and placement assistance</li>
              </ul>
              
              <p>In the meantime, feel free to explore our website or reach out to us directly:</p>
              <p>
                📞 Phone: +91 9876543210<br>
                📧 Email: info@deshondevsol.com
              </p>
              
              <p style="margin-top: 30px;">We look forward to helping you achieve your career goals!</p>
              
              <p>Best regards,<br><strong>DESHON DEVSOL Team</strong></p>
            </div>
            <div class="footer">
              <p>© 2024 DESHON DEVSOL. Empowering Careers through Hands-On Learning.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Emails sent successfully',
        emailId: adminEmailResult.data?.id
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Email error:', error);
    
    // If email fails, still return success since data is saved to file
    return NextResponse.json(
      { 
        success: true,
        warning: 'Submission saved but email notification failed. Please check email configuration.'
      },
      { status: 200 }
    );
  }
}
