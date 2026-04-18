import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendOtpEmail(email: string, otp: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: 'Your OTP Code',
      html: `<p>Your OTP code is: <strong>${otp}</strong></p><p>This code will expire in 1 minute.</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return false;
    }

    console.log('OTP sent successfully:', data);
    return true;
  } catch (err) {
    console.error('Failed to send OTP email:', err);
    return false;
  }
}
