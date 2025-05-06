"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/dashboard" }); // or any route after login
  };

  const handleGitHubSignIn = () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };
  const handleFacebookSignIn = () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.name as unknown as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;
    const fileInput = form.file as HTMLInputElement;
    const profilImage = fileInput.files?.[0];

    const userData = {
      name,
      email,
      password,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(userData));
    if (profilImage) {
      formData.append("file", profilImage); // ✅ matches backend
    }

    try {
      const response = await fetch(
        "http://localhost:5001/api/v1/users/create-user",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }
      toast.success("User registered  Successfully!");
      router.push("/login");
      console.log("User registered:", result);
    } catch (error) {
      toast.error("Error registering user");
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="profileImage"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Image URL
          </label>
          <input
            type="file"
            name="file" // Corrected the name
            id="file"
            accept="image/*" // only allow image files
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@example.com"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300"
        >
          Register
        </button>
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Login here
          </Link>
        </p>
        <div className="space-y-2">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition duration-300"
          >
            Sign in with Google
          </button>
          <button
            type="button"
            onClick={handleGitHubSignIn}
            className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl transition duration-300"
          >
            Sign in with GitHub
          </button>
          <button
            type="button"
            onClick={handleFacebookSignIn}
            className="w-full py-2 px-4 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl transition duration-300"
          >
            Sign in with Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
