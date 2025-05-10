"use client";
import CartProducts from "@/components/cartPage/CartProducts";
import Container from "@/components/Container";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import React from "react";
import { useAuth } from "../authContext/contaxt";

const AllCartpage = () => {
  const { data: session } = useSession();
  console.log(session);
  const { user } = useAuth();
  console.log("Session from NextAuth:", session);
  console.log("User from Context:", user);

  if (!session?.user && !user?.email) {
    redirect("/");
  }
  return (
    <Container>
      <CartProducts />
    </Container>
  );
};

export default AllCartpage;
