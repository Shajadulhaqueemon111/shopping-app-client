// src/app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../authContext/contaxt";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";

interface DecodedToken {
  email?: string;
  role?: string;
  profilImage?: string;
  // ...অন্যান্য প্রোপার্টি
}

const SignInPage = () => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Enter both email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const err = await response.json();
        toast.error(err.message || "Login failed");
        return;
      }

      const data = await response.json();
      console.log(data);
      toast.success("Logged in successfully!");
      const token = data.data?.accessToken;
      if (!token) {
        console.error("Token missing!", data);
        toast.error("Invalid token received");
        return;
      }
      console.log("✔️ Got token:", token);

      // 1) AccessToken & RefreshToken already সেট হচ্ছে
      localStorage.setItem("accessToken", data.data.accessToken);

      // পরবর্তীতে কোথাও দরকার হলে…
      // const storedToken = localStorage.getItem("accessToken");

      // 2) Decode token (optional, যদি response.data বাদ দিয়ে টোকেনের ভিতর থেকে পেতে চান)
      const decoded = jwtDecode<DecodedToken>(token);
      console.log("decode:", decoded);
      const userEmail = decoded.email || data.data.email;
      const userRole = decoded.role || data.data.role;
      const userProfile = decoded.profilImage || data.data.profilImage;
      // 3) Context & localStorage–এ ইউজার সেট
      const loggedInUser = {
        email: userEmail,
        role: userRole,
        profilImage: userProfile,
      };
      console.log(loggedInUser);
      setUser(loggedInUser);
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

      // 4) Redirect
      router.push("/");
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300"
        >
          Login
        </button>
        <p className="text-sm">
          Do not have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:text-blue-800">
            SingUp here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
