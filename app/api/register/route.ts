import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";
import { generateOtp, sendOtpEmail } from "@/lib/otp";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, fullName: bodyFullName, email, password, level, phone, province } = body;
    const fullName = bodyFullName || name;

    if (!fullName || !email || !password || !level) {
      return NextResponse.json({ success: false, error: "Please fill in all required fields" }, { status: 400 });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      if (!existing.isActive && existing.otpExpiresAt && new Date() > existing.otpExpiresAt) {
        await User.deleteOne({ email });
      } else {
        return NextResponse.json({ success: false, error: "Email already exists" }, { status: 400 });
      }
    }

    const hashed = await bcrypt.hash(password, 10);
    const otp = generateOtp();
    const otpExpiresAt = new Date(Date.now() + 60 * 1000);

    await sendOtpEmail(email, otp);

    await User.create({
      fullName,
      email,
      password: hashed,
      level,
      phone,
      province,
      role: "user",
      isActive: false,
      otpCode: otp,
      otpExpiresAt,
      otpRefreshCount: 0,
    });

    return NextResponse.json({ success: true, message: "OTP sent to your email" });
  } catch (err) {
    console.log("🔥 REGISTER ERROR:", err);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}