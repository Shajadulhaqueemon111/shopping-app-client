// app/admin-dashboard/page.tsx
"use client";
import React from "react";
import { Users, DollarSign, ShoppingCart } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Books", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

const AdminDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome to Admin Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Total Users Card */}
        <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Total Users
              </h2>
              <p className="text-2xl font-bold text-gray-900">1,204</p>
            </div>
          </div>
        </div>

        {/* Total Sales Card */}
        <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <ShoppingCart className="text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Total Sales
              </h2>
              <p className="text-2xl font-bold text-gray-900">3,580</p>
            </div>
          </div>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <DollarSign className="text-yellow-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Total Revenue
              </h2>
              <p className="text-2xl font-bold text-gray-900">$25,400</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Sales by Category
        </h2>
        <div className="h-72">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
