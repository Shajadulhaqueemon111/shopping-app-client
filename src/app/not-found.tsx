import { notFound } from "@/assets";
import Button from "@/components/banner/Button";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <Container className="flex flex-col items-center justify-center py-10">
      <Image className="max-w-[60]" src={notFound} alt="not-found image" />
      <p className="text-xl font-semibold">Oops! Page not found</p>
      <p className="text-sm max-w-80 text-center text-gray-500 mb-5">
        Whoops, this is embarrassing. Looks like the page you were looking for
        wasnt found.
      </p>
      <Button href="/">Back to Home</Button>
    </Container>
  );
};

export default NotFoundPage;
