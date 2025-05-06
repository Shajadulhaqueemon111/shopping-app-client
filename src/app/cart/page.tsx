"use client";
import CartProducts from "@/components/cartPage/CartProducts";
import Container from "@/components/Container";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

import React from "react";

const AllCartpage = () => {
  // const { data: session } = useSession();
  // console.log(session);
  // if (!session?.user) {
  //   redirect("/");
  // }
  return (
    <Container>
      <CartProducts />
    </Container>
  );
};

export default AllCartpage;
