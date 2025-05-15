/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Hourglass } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  brand: string;
  stock_quantity: string;
  rating: number;
  image: string;
  thumbnail: string;
}

const AllProductPage = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          toast.error("No token found in localStorage");
          router.push("/login");
          return;
        }

        const response = await fetch("http://localhost:5001/api/v1/product", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });

        const result = await response.json();
        console.log("API Response", result);

        if (Array.isArray(result?.data)) {
          setProduct(result.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("accessToken");
        fetch(`http://localhost:5001/api/v1/product/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire("Deleted!", "The product has been deleted.", "success");
              setProduct((prevProduct) =>
                prevProduct.filter((prod) => prod._id !== id)
              );
            } else {
              Swal.fire("Error!", "Failed to delete the product.", "error");
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      {loading ? (
        <div className="flex justify-center items-center h-20">
          <Hourglass
            visible={true}
            height="40"
            width="40"
            ariaLabel="hourglass-loading"
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase">
              <tr>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Brand</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Rating</th>
                <th className="px-6 py-3">Update</th>
                <th className="px-6 py-3">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {product.map((prod) => (
                <tr key={prod._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <Image
                      src={prod?.thumbnail}
                      alt="image"
                      height={30}
                      width={30}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4">{prod.name}</td>
                  <td className="px-6 py-4">${prod.price}</td>
                  <td className="px-6 py-4">{prod.category}</td>
                  <td className="px-6 py-4">{prod.brand}</td>
                  <td className="px-6 py-4">{prod.stock_quantity}</td>
                  <td className="px-6 py-4">{prod.rating}</td>
                  <td className="px-6 py-4">
                    <Link href={`/admin-dashboard/UpdateProduct/${prod._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(prod._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {product.length === 0 && (
                <tr>
                  <td colSpan={9} className="text-center py-4 text-gray-500">
                    No products found.
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

export default AllProductPage;
