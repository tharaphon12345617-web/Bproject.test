import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return Response.json({ success: false });
  }

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

  if (decoded.role !== "admin") {
    return Response.json({ success: false, message: "Forbidden" });
  }

  const users = await User.find();

  return Response.json({ success: true, users });
}