import Banner from "@/components/banner/Banner";
import ProductList from "@/components/ProductList";
import GetData from "@/constants/helpers";

export default async function Home() {
  const endpoint = "https://dummyjson.com/products";
  const { products } = await GetData(endpoint);
  return (
    <main>
      <div>
        <Banner></Banner>
        <ProductList products={products}></ProductList>
      </div>
    </main>
  );
}
