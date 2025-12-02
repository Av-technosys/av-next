'use server';
import nodemailer from "nodemailer";

export async function sendLeadMail({ name, email, number, message, slug }) {
  try {
    const transporter = nodemailer.createTransport({
      host: "email-smtp.ap-south-1.amazonaws.com", // SES endpoint
      port: 587, // or 2587 or 25
      secure: false, // TLS starts automatically
      auth: {
        user: process.env.SES_USER,
        pass: process.env.SES_PASS,
      },
    });

    const mailOptions = {
      from: '"AV Technosys" <info@avtechnosys.com>',
      to: ["info@avtechnosys.com", "ashish@avtechnosys.com"],
      subject: "🚀 New Lead Received!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Lead Information</h2>
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${number}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Source Page:</strong> ${slug}</p>

          <br/>
          <p style="color: #777;">This email was sent via your website lead form.</p>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);

    return { success: true, result };
  } catch (error) {
    console.error("SES Email Error:", error);
    return { success: false, error };
  }
}
