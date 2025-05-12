/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Hourglass } from "react-loader-spinner";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const response = await fetch("http://localhost:5001/api/v1/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });

        const result = await response.json();
        console.log("API response:", result);

        if (Array.isArray(result.data)) {
          setUsers(result.data);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err: any) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const handleUpdate = async (_id: string) => {
  //   console.log("Update user:", _id);

  //   try {
  //     const token = localStorage.getItem("accessToken"); // or wherever you store the token

  //     const response = await fetch(
  //       `http://localhost:5001/api/v1/users/${_id}`,
  //       {
  //         method: "PATCH", // use PATCH or PUT depending on your backend
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({
  //           role: "admin", // 👈 example update data
  //         }),
  //       }
  //     );

  //     const result = await response.json();

  //     if (response.ok) {
  //       console.log("User updated successfully", result);
  //       // Optionally: re-fetch users or update state
  //     } else {
  //       console.error("Update failed:", result.message || result);
  //     }
  //   } catch (error) {
  //     console.error("Error updating user:", error);
  //   }
  // };

  const handleDelete = (id: string) => {
    console.log("Delete user:", id);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>

      {loading && (
        <p>
          <Hourglass
            visible={true}
            height="30"
            width="30"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </p>
      )}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Update</th>
                <th className="px-6 py-3">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 capitalize">{user.role}</td>
                  <td className="px-6 py-4">
                    <Link href={`/admin-dashboard/updateUser/${user._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
