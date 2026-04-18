import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";

export default async function Dashboard() {
  await connectDB();

  const cookieStore = await cookies(); // ✅ ต้อง await
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login"); // ✅ ใช้ redirect แทน meta
  }

  let decoded: any;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    redirect("/login");
  }

  const user = await User.findById(decoded.id);

  if (!user) {
    redirect("/login");
  }

  return (
    <section className="pt-40 max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-primary">
        Welcome, {user.fullName}
      </h1>

      <p className="mt-3 text-dark/70">Your role: {user.role}</p>

      <button
        onClick={() => (window.location.href = "/api/logout")}
        className="inline-block mt-6 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </section>
  );
}