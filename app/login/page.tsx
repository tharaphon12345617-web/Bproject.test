"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Login success");

      // ✅ ใช้ replace เพื่อเปลี่ยนหน้าไป profile ทันที
      window.location.replace("/profile");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Safety Officer Login</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">Welcome Back</h1>
          <p className="mt-3 text-slate-500">Login to update your safety profile, certifications and field experience.</p>
        </div>

        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
        <input
          type="email"
          autoComplete="email"
          placeholder="your@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-slate-200 rounded-2xl p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-slate-200 rounded-2xl p-3 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-sky-600 hover:bg-sky-700 transition text-white rounded-2xl py-3 font-semibold shadow-sm"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <a href="/register" className="text-sky-600 hover:underline">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
}