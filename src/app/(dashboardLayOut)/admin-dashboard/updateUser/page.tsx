"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";

const UpdatedUser = () => {
  const { user } = useParams();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `http://localhost:5001/api/v1/users/${user}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ email, role }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("User updated successfully!");
        console.log(result);
      } else {
        console.error("Update failed:", result.message || result);
        alert("Update failed");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Update User</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdatedUser;
