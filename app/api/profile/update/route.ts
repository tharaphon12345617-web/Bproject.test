import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";

export async function PUT(req: Request) {
  await connectDB();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return Response.json({ success: false, message: "No token" }, { status: 401 });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const body = await req.json();

    if (body.password && body.password !== body.confirmPassword) {
      return Response.json({ success: false, message: "Passwords do not match" }, { status: 400 });
    }

    const updateFields: any = {
      fullName: body.fullName,
      phone: body.phone,
      province: body.province,
      age: body.age,
      gender: body.gender,
      experience: body.experience,
      skills: body.skills,
      certificates: body.certificates,
      workHistory: body.workHistory,
      profileImage: body.profileImage,
      isSafetyOfficer: body.isSafetyOfficer,
      safetyOfficerLevel: body.safetyOfficerLevel,
      safetyOfficerLicense: body.safetyOfficerLicense,
      safetyOfficerCertificate: body.safetyOfficerCertificate,
    };

    if (body.password) {
      updateFields.password = await bcrypt.hash(body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(decoded.id, updateFields, {
      new: true,
    });

    if (!updatedUser) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    return Response.json({ success: true, user: updatedUser });
  } catch (err) {
    return Response.json({ success: false, message: "Invalid token" }, { status: 401 });
  }
}