"use client";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-3">
        <li>
          <Link className=" font-bold" href="/admin-dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className=" font-bold" href="/admin-dashboard/users">
            Users
          </Link>
        </li>
        <li>
          <Link className=" font-bold" href="/admin-dashboard/allProduct">
            Product-Manage
          </Link>
        </li>
        <li>
          <Link className=" font-bold" href="/admin-dashboard/createProduct">
            Product-Create
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
