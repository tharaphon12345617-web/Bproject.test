import { NextResponse } from "next/server";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";
import { generateOtp, sendOtpEmail } from "@/lib/otp";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, error: "Missing email" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found. Please register again." }, { status: 404 });
    }

    if (user.isActive) {
      return NextResponse.json({ success: true, message: "Already verified. Please login." });
    }

    if (!user.otpExpiresAt || new Date() > user.otpExpiresAt) {
      await User.deleteOne({ email });
      return NextResponse.json({ success: false, error: "OTP expired. Please register again." }, { status: 400 });
    }

    const refreshCount = (user.otpRefreshCount || 0) + 1;
    if (refreshCount > 3) {
      await User.deleteOne({ email });
      return NextResponse.json({ success: false, error: "Too many OTP refreshes. Please register again." }, { status: 429 });
    }

    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 60 * 1000);

    user.otpCode = otp;
    user.otpExpiresAt = expiresAt;
    user.otpRefreshCount = refreshCount;
    await user.save();

    await sendOtpEmail(email, otp);

    return NextResponse.json({ success: true, message: "OTP refreshed.", refreshCount, expiresAt });
  } catch (err) {
    console.error("OTP REFRESH ERROR:", err);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
