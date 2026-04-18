import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ success: false, error: "Invalid Email" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return new Response(JSON.stringify({ success: false, error: "Wrong Password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!user.isActive) {
      return new Response(JSON.stringify({ success: false, error: "Please verify your email OTP before logging in." }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const cookieValue = `token=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}${process.env.NODE_ENV === "production" ? "; Secure" : ""}`;

    return new Response(JSON.stringify({ success: true, message: "Login success" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": cookieValue,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return new Response(JSON.stringify({ success: false, error: "Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}