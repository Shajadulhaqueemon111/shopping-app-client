"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    router.push("/signin"); // redirect to login
  };

  return (
    <div className="flex justify-between px-6 py-4 bg-white shadow">
      <h1 className="text-lg font-bold">My App</h1>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => router.push("/signin")}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Logout;
