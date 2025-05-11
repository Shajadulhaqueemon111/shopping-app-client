// app/dashboard/layout.tsx
"use client";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function adminLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
