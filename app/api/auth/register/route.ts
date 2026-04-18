import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, password, level, phone, province } = body;

    // เช็คว่า email ซ้ำไหม
    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    // เข้ารหัสรหัสผ่าน
    const hashed = await bcrypt.hash(password, 10);

    // บันทึกลง DB
    await User.create({
      name,
      email,
      password: hashed,
      level,
      phone,
      province,
      role: "user", // 👈 เพิ่ม role ให้ชัดเจน
    });

    return NextResponse.json({ message: "Registered successfully" });
  } catch (err) {
    console.log("Register Error:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}