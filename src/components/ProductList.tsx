/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Container from "./Container";

import ProductCard from "./ProductCard";
import { ProductType } from "@/constants/helpers/type";
interface Props {
  products: ProductType[];
}
const ProductList = ({ products }: Props) => {
  console.log(products);
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {products?.map((item: any) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </Container>
  );
};

export default ProductList;
