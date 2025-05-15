/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface ProductData {
  title: string;
  description: string;
  price: number;
  category: string;
}

const UpdateProduct = () => {
  const params = useParams();
  const productId = params?.productId as string;
  const router = useRouter();

  const [productData, setProductData] = useState<ProductData>({
    title: "",
    description: "",
    price: 0,
    category: "",
  });

  const [loading, setLoading] = useState(true);

  // ✅ Fetch product data on load
  useEffect(() => {
    const fetchProduct = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        toast.error("No token found");
        router.push("/login");
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5001/api/v1/product/${productId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const data = await res.json();
        if (res.ok) {
          setProductData(data.data);
        } else {
          toast.error(data.message || "Failed to load product");
        }
      } catch (err) {
        toast.error("Error fetching product");
      } finally {
        setLoading(false);
      }
    };

    if (productId) fetchProduct();
  }, [productId, router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");

    try {
      const res = await fetch(
        `http://localhost:5001/api/v1/product/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(productData),
        }
      );

      const result = await res.json();
      console.log("Server Response:", result);
      if (res.ok) {
        toast.success("Product updated successfully!");
        router.push("/admin-dashboard/allProduct");
      } else {
        toast.error(result.message || "Update failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Update Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={productData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={productData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <input
          name="price"
          value={productData.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          className="w-full p-2 border rounded"
        />
        <select
          name="category"
          value={productData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="beauty">Beauty</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
