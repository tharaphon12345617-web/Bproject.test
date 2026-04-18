import jwt from "jsonwebtoken";
import User from "./models/User";
import { connectDB } from "./mongodb";

export const getUserFromToken = async (token: string) => {
  try {
    await connectDB();
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await User.findById(decoded.id).lean();
    return user;
  } catch (err) {
    return null;
  }
};