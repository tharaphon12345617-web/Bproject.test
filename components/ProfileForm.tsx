"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/navigation";

const LEVEL_OPTIONS = [
  "Professional Level",
  "Advanced Technical Level",
  "Technical Level",
  "Supervisor Level",
  "Management Level",
];

type ProfileFormProps = {
  user: Record<string, any> | null;
  setUser: Dispatch<SetStateAction<Record<string, any> | null>>;
};

export default function ProfileForm({ user, setUser }: ProfileFormProps) {
  const [form, setForm] = useState<Record<string, any>>(user || {});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setForm(user || {});
  }, [user]);

  function handleChange(e: any) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSave() {
    setLoading(true);

    const payload = {
      ...form,
      skills:
        typeof form.skills === "string"
          ? form.skills.split(",").map((item: string) => item.trim()).filter(Boolean)
          : form.skills,
      certificates:
        typeof form.certificates === "string"
          ? form.certificates.split(",").map((item: string) => item.trim()).filter(Boolean)
          : form.certificates,
    };

    const res = await fetch("/api/profile/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      setUser(data.user);
      alert("Profile updated successfully!");
    } else {
      alert(data.message || "Unable to save profile.");
    }

    setLoading(false);
  }

  function handleCancel() {
    router.push("/profile");
  }

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl mt-6">
      <h2 className="text-xl font-bold mb-5">Edit Profile</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
          <input
            name="fullName"
            autoComplete="name"
            value={form.fullName || ""}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Professional Level</label>
          <select
            name="level"
            value={form.level || ""}
            onChange={handleChange}
            className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">Select level</option>
            {LEVEL_OPTIONS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
          <input
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
            placeholder="Phone"
            className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Province</label>
          <input
            name="province"
            value={form.province || ""}
            onChange={handleChange}
            placeholder="Province"
            className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
          <input
            name="age"
            type="number"
            value={form.age || ""}
            onChange={handleChange}
            placeholder="Age"
            className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Gender</label>
          <select
            name="gender"
            value={form.gender || ""}
            onChange={handleChange}
            className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Skills</label>
          <input
            name="skills"
            value={typeof form.skills === "string" ? form.skills : (form.skills || []).join(", ")}
            onChange={handleChange}
            placeholder="job safety, supervision, first aid"
            className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Certificates</label>
          <input
            name="certificates"
            value={typeof form.certificates === "string" ? form.certificates : (form.certificates || []).join(", ")}
            onChange={handleChange}
            placeholder="Safety training, ISO, license"
            className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      <div className="mt-6 p-5 bg-slate-50 rounded-3xl border border-slate-200">
        <h3 className="text-lg font-semibold mb-4">จป. / Safety Officer Details</h3>

        <label className="flex items-center gap-3 mb-4">
          <input
            type="checkbox"
            name="isSafetyOfficer"
            checked={!!form.isSafetyOfficer}
            onChange={handleChange}
            className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />
          <span className="text-sm text-slate-700">I am a licensed safety officer</span>
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Safety Officer Level</label>
            <input
              name="safetyOfficerLevel"
              value={form.safetyOfficerLevel || ""}
              onChange={handleChange}
              placeholder="e.g. จป.หัวหน้างาน"
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">License / Certificate No.</label>
            <input
              name="safetyOfficerLicense"
              value={form.safetyOfficerLicense || ""}
              onChange={handleChange}
              placeholder="License or certificate number"
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Safety Certificate</label>
          <input
            name="safetyOfficerCertificate"
            value={form.safetyOfficerCertificate || ""}
            onChange={handleChange}
            placeholder="e.g. จป.วิชาชีพเฉพาะ"
            className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      <div className="mt-6 p-5 bg-slate-50 rounded-3xl border border-slate-200">
        <h3 className="text-lg font-semibold mb-4">Change Password</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              value={form.password || ""}
              onChange={handleChange}
              placeholder="Leave blank to keep current password"
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              value={form.confirmPassword || ""}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="border border-slate-200 rounded-2xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <button
          type="button"
          onClick={handleCancel}
          className="w-full rounded-2xl border border-slate-300 bg-white px-6 py-3 text-slate-900 font-semibold transition hover:bg-slate-100"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-2xl py-3 font-semibold transition"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </div>
    </div>
  );
}
