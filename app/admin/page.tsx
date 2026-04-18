"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      setUsers(data.users || []);
    }

    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto pt-32 px-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid gap-4">
        {users.map((u: any) => (
          <div key={u._id} className="p-4 border rounded shadow">
            <p><b>Name:</b> {u.fullName}</p>
            <p><b>Email:</b> {u.email}</p>
            <p><b>Level:</b> {u.level}</p>
            <p><b>Province:</b> {u.province}</p>
            <p>
              <b>Status:</b>{" "}
              {u.isApproved ? "Approved" : "Pending"}
            </p>

            <div className="mt-2 flex gap-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded">
                Approve
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}