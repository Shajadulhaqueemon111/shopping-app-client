// components/Sidebar.tsx
"use client";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-3">
        <li>
          <Link href="/admin-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin-dashboard/users">Users</Link>
        </li>
        <li>
          <Link href="/admin-dashboard/allProduct">Product</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
