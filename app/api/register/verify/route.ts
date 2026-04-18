import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, otp } = body;

    if (!email || !otp) {
      return NextResponse.json({ success: false, error: "Missing email or OTP" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found. Please register again." }, { status: 404 });
    }

    if (user.isActive) {
      return NextResponse.json({ success: true, message: "Already verified. Please login." });
    }

    if (!user.otpCode || !user.otpExpiresAt) {
      return NextResponse.json({ success: false, error: "No OTP pending. Please register again." }, { status: 400 });
    }

    if (new Date() > user.otpExpiresAt) {
      await User.deleteOne({ email });
      return NextResponse.json({ success: false, error: "OTP expired. Please register again." }, { status: 400 });
    }

    if (user.otpCode !== otp) {
      return NextResponse.json({ success: false, error: "Invalid OTP." }, { status: 400 });
    }

    user.isActive = true;
    user.otpCode = undefined;
    user.otpExpiresAt = undefined;
    user.otpRefreshCount = undefined;
    await user.save();

    return NextResponse.json({ success: true, message: "Registration verified. Please login." });
  } catch (err) {
    console.error("OTP VERIFY ERROR:", err);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
