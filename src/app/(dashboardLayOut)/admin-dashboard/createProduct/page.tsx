"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

interface ProductFormData {
  title: string;
  description: string;
  category: "beauty" | "electronics" | "fashion" | "";
  price: number | "";
  discountPercentage?: number | "";
  rating?: number | "";
  stock?: number | "";
  tags?: string;
  brand: string;
  sku: string;
  weight?: number | "";
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: "In Stock" | "Low Stock" | "Out of Stock" | "";
  returnPolicy?: string;
  minimumOrderQuantity?: number | "";
  images?: string;
  thumbnail: string;
  meta: {
    title: string;
    description: string;
  };
  dimensions: {
    length: number | "";
    width: number | "";
    height: number | "";
  };
}

const initialFormState: ProductFormData = {
  title: "",
  description: "",
  category: "",
  price: "",
  discountPercentage: "",
  rating: "",
  stock: "",
  tags: "",
  brand: "",
  sku: "",
  weight: "",
  warrantyInformation: "",
  shippingInformation: "",
  availabilityStatus: "",
  returnPolicy: "",
  minimumOrderQuantity: "",
  images: "",
  thumbnail: "",
  meta: {
    title: "",
    description: "",
  },
  dimensions: {
    length: "",
    width: "",
    height: "",
  },
};

const CreateProduct = () => {
  const [formData, setFormData] = useState<ProductFormData>(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("meta.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        meta: {
          ...prev.meta,
          [key]: value,
        },
      }));
    } else if (name.startsWith("dimensions.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("accessToken");

      const res = await fetch(
        "http://localhost:5001/api/v1/product/create-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        toast.success("Product created successfully!");
        setFormData(initialFormState);
      } else {
        toast.error("Failed to create product");
      }
    } catch (err) {
      console.error("Network error:", err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Required Fields */}
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="discountPercentage"
          value={formData.discountPercentage}
          onChange={handleChange}
          placeholder="Discount Percentage"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Rating"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="w-full p-2 border rounded"
        />
        <input
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="w-full p-2 border rounded"
        />
        <input
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="Brand"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          placeholder="SKU"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="warrantyInformation"
          value={formData.warrantyInformation}
          onChange={handleChange}
          placeholder="Warranty Information"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="shippingInformation"
          value={formData.shippingInformation}
          onChange={handleChange}
          placeholder="Shipping Information"
          className="w-full p-2 border rounded"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="beauty">Beauty</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
        <select
          name="availabilityStatus"
          value={formData.availabilityStatus}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Availability Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <textarea
          name="returnPolicy"
          value={formData.returnPolicy}
          onChange={handleChange}
          placeholder="Return Policy"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="minimumOrderQuantity"
          value={formData.minimumOrderQuantity}
          onChange={handleChange}
          placeholder="Minimum Order Quantity"
          className="w-full p-2 border rounded"
        />
        <input
          name="images"
          value={formData.images}
          onChange={handleChange}
          placeholder="Image URLs (comma separated)"
          className="w-full p-2 border rounded"
        />
        <input
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          placeholder="Thumbnail URL"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="dimensions.length"
          value={formData.dimensions.length}
          onChange={handleChange}
          placeholder="Length"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="dimensions.width"
          value={formData.dimensions.width}
          onChange={handleChange}
          placeholder="Width"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="dimensions.height"
          value={formData.dimensions.height}
          onChange={handleChange}
          placeholder="Height"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
