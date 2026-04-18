"use client";

import { useEffect, useState } from "react";

export default function VerifyOtpPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const savedEmail = window.localStorage.getItem("pendingEmail");
    if (!savedEmail) {
      window.location.href = "/register";
      return;
    }
    setEmail(savedEmail);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      setCountdown(0);
      setMessage("OTP expired. Please refresh to request a new code.");
      return;
    }

    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  async function handleVerify() {
    if (!otp.trim()) {
      setMessage("Please enter the OTP.");
      return;
    }

    if (countdown <= 0) {
      setMessage("OTP expired. Please refresh to request a new code.");
      return;
    }

    const res = await fetch("/api/register/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    if (data.success) {
      window.localStorage.removeItem("pendingEmail");
      alert("Registration verified. Please login.");
      window.location.href = "/login";
    } else {
      setMessage(data.error || "Verification failed.");
      if (data.error?.includes("register again")) {
        window.localStorage.removeItem("pendingEmail");
        setTimeout(() => window.location.href = "/register", 2000);
      }
    }
  }

  async function handleRefresh() {
    const res = await fetch("/api/register/refresh-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.success) {
      setRefreshCount(data.refreshCount || 0);
      setCountdown(60);
      setMessage("A new OTP has been sent to your email.");
    } else {
      setMessage(data.error || "Unable to refresh OTP.");
      if (data.error?.includes("register again")) {
        window.localStorage.removeItem("pendingEmail");
        setTimeout(() => window.location.href = "/register", 2000);
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">OTP Verification</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">Enter the code sent to your email</h1>
          <p className="mt-3 text-slate-500">Please input the 6-digit code within 1 minute to complete registration.</p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-6 mb-6">
          <p className="text-sm text-slate-600">Email</p>
          <p className="font-semibold text-slate-900">{email}</p>
          <p className="mt-3 text-sm text-slate-600">Time left: <span className="font-semibold">{countdown}s</span></p>
          <p className="text-sm text-slate-600">Refresh used: {refreshCount} / 3</p>
        </div>

        <div className="grid gap-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP code"
            className="border border-slate-200 rounded-2xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            onClick={handleVerify}
            className="w-full rounded-2xl bg-sky-600 py-3 text-white font-semibold transition hover:bg-sky-700"
          >
            Verify OTP
          </button>
          <button
            onClick={handleRefresh}
            disabled={countdown > 0}
            className={`w-full rounded-2xl py-3 font-semibold transition ${countdown > 0 ? "border border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed" : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100"}`}
          >
            Refresh OTP
          </button>
          {message ? <p className="text-sm text-rose-600">{message}</p> : null}
        </div>
      </div>
    </div>
  );
}
