"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState<any>({});

  const handleRegister = async () => {
    if (!form.fullName || !form.email || !form.password || !form.level) {
      alert("Please complete all required fields.");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      window.localStorage.setItem("pendingEmail", form.email);
      window.location.href = "/register/verify";
    } else {
      alert(data.error || "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Safety Officer Registration</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">Create your safety profile</h1>
          <p className="mt-3 text-slate-500">Join as a safety officer and manage your training, certifications and workplace safety experience.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
            <input
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              onChange={e => setForm({ ...form, fullName: e.target.value })}
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
            <input
              type="tel"
              autoComplete="tel"
              placeholder="080-123-4567"
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              type="email"
              autoComplete="email"
              placeholder="your@example.com"
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Province</label>
            <input
              type="text"
              placeholder="Bangkok"
              onChange={e => setForm({ ...form, province: e.target.value })}
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              placeholder="Create a strong password"
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Professional Level</label>
            <select
              value={form.level || ""}
              onChange={e => setForm({ ...form, level: e.target.value })}
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="" disabled>
                Select your level
              </option>
              <option value="Professional Level">Professional Level</option>
              <option value="Advanced Technical Level">Advanced Technical Level</option>
              <option value="Technical Level">Technical Level</option>
              <option value="Supervisor Level">Supervisor Level</option>
              <option value="Management Level">Management Level</option>
            </select>
          </div>
        </div>

        <button onClick={handleRegister}
          className="mt-6 w-full bg-sky-600 hover:bg-sky-700 transition text-white rounded-2xl py-3 font-semibold shadow-sm"
        >
          Register
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <a href="/login" className="text-sky-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}