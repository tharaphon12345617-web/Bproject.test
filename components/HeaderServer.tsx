import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import HeaderClient from "./HeaderClient";
import { connectDB } from "@/lib/mongodb";
import User from "@/lib/models/User";

type UserType = {
  id: string;
  fullName: string;
  email: string;
  level: string;
  province: string;
  isApproved: boolean;
};

export default async function HeaderServer() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  let user: UserType | null = null;

  if (token) {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      await connectDB();
      const dbUser = await User.findById(decoded.id).select("fullName email level province isApproved");

      if (dbUser) {
        user = {
          id: dbUser._id.toString(),
          fullName: dbUser.fullName,
          email: dbUser.email,
          level: dbUser.level,
          province: dbUser.province,
          isApproved: dbUser.isApproved,
        };
      }
    } catch {
      user = null;
    }
  }

  return <HeaderClient user={user} />;
}