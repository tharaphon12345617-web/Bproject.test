"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const res = await fetch("/api/profile/me", {
        credentials: "include",   // ⭐ ส่ง cookie ไปด้วย
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setUser(data.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    }

    loadProfile();
  }, []);

  if (loading) return <p className="p-10">Loading...</p>;

  if (!user) {
    window.location.href = "/login";
    return <p className="p-10">Redirecting to login...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src={user.profileImage || "/default-avatar.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border border-slate-300"
          />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{user.fullName || "Safety Officer"}</h1>
            <p className="text-slate-600 mt-2">{user.level || "Professional Safety Officer"}</p>
            <p className="text-slate-500 mt-1">{user.province || "Province not specified"}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Safety License</p>
            <p className="mt-2 font-semibold text-slate-900">{user.safetyOfficerLicense || "Not set"}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Certificate</p>
            <p className="mt-2 font-semibold text-slate-900">{user.safetyOfficerCertificate || "Not set"}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Safety Level</p>
            <p className="mt-2 font-semibold text-slate-900">{user.safetyOfficerLevel || "Not set"}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Experience</p>
            <p className="mt-2 font-semibold text-slate-900">{user.experience || "-"} years</p>
          </div>
        </div>

        <div className="mt-6 text-right">
          <a
            href="/profile/edit"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition"
          >
            Edit Profile
          </a>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">About your safety profile</h2>
          <p className="text-slate-600 leading-7">
            This profile helps safety officers manage certifications, licenses, training and workplace safety details.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Key details</h2>
          <ul className="space-y-3 text-slate-600">
            <li>
              <span className="font-semibold text-slate-900">Phone:</span> {user.phone || "Not provided"}
            </li>
            <li>
              <span className="font-semibold text-slate-900">Province:</span> {user.province || "Not provided"}
            </li>
            <li>
              <span className="font-semibold text-slate-900">Skills:</span> {(user.skills || []).join(", ") || "Not provided"}
            </li>
            <li>
              <span className="font-semibold text-slate-900">Certificates:</span> {(user.certificates || []).join(", ") || "Not provided"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}