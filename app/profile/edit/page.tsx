"use client";

import { useEffect, useState } from "react";
import ProfileForm from "@/components/ProfileForm";
import ProfileImageUpload from "@/components/ProfileImageUpload";

export default function ProfileEditPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const res = await fetch("/api/profile/me", {
        credentials: "include",
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
        <h1 className="text-3xl font-bold text-slate-900">Edit Safety Officer Profile</h1>
        <p className="mt-2 text-slate-500">
          Update your qualifications, certificates, and password from a single page.
        </p>
      </div>

      <ProfileImageUpload user={user} setUser={setUser} />
      <ProfileForm user={user} setUser={setUser} />
    </div>
  );
}
