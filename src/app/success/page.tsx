"use client";
/* eslint-disable @typescript-eslint/no-unused-expressions */
import Container from "@/components/Container";
import Title from "@/components/footer/Title";
import { resetCart } from "@/redux/shopingSlice";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const dispatch = useDispatch();

  !sessionId && redirect("/");
  useEffect(() => {
    if (sessionId) {
      dispatch(resetCart());
      toast.success("payment Successfully");
    }
  }, [dispatch, sessionId]);
  return (
    <Container className="py-10 text-center">
      {/* Success Message */}
      <div className="text-center justify-center">
        <Title className="text-green-600 text-center justify-center">
          Payment Successful 🎉
        </Title>
        <p className="mt-3 text-gray-600">
          Thank you for your purchase! Your order has been processed
          successfully.
        </p>
      </div>

      {/* Go to Home Button */}
      <Link href={"/"}>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Go to Home
        </button>
      </Link>

      {/* Auto-Redirect Notice */}
      <p className="mt-4 text-sm text-gray-500">
        Redirecting to home in 5 seconds...
      </p>
    </Container>
  );
};

export default SuccessPage;
