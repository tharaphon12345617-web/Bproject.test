"use client";

export default function ProfileImageUpload({ user, setUser }: any) {
  async function handleUpload(e: any) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result;

      const res = await fetch("/api/profile/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ profileImage: base64 }),
      });

      const data = await res.json();
      if (data.success) {
        setUser(data.user);
      }
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
      <img
        src={user.profileImage || "/default-avatar.png"}
        alt="Profile"
        className="w-28 h-28 rounded-full object-cover border border-slate-300"
      />
      <div className="flex-1 w-full">
        <p className="text-sm text-slate-500 mb-2">Profile Photo</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="block w-full text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
        />
      </div>
    </div>
  );
}