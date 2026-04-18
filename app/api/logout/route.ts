import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = NextResponse.redirect(new URL("/login", req.url));

  // ✅ แก้ตรงนี้
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // 🔥 สำคัญ
    path: "/",
    maxAge: 0,
  });

  return response;
}