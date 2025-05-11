"use client";

import Container from "@/components/Container";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import React from "react";
import { useAuth } from "../authContext/contaxt";
import FavouriteAllProduct from "@/components/favoriutePage/FavouriteAllProduct";

const AllFavouritetpage = () => {
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
      <FavouriteAllProduct></FavouriteAllProduct>
    </Container>
  );
};

export default AllFavouritetpage;
