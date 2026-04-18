import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  // ⭐ กำหนด routes ที่ต้องล็อกอินถึงเข้าได้
  const protectedRoutes = ["/admin"];

  // ⭐ ถ้าเจอเส้นทางที่ต้องการป้องกัน
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    // ❌ ไม่มี token → เด้งไป login
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // ⭐ ตรวจสอบ token
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

      // ⭐ ป้องกัน /admin เฉพาะ role = admin
      if (pathname.startsWith("/admin") && decoded.role !== "admin") {
        return NextResponse.redirect(new URL("/profile", req.url));
      }

      // ⭐ ทุกอย่างปกติ → ผ่าน
      return NextResponse.next();
    } catch {
      // ❌ token หมดอายุ / ผิด → เด้ง login
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // ⭐ default: ให้ผ่านทุกหน้า
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/profile/:path*", "/admin", "/admin/:path*"],
};