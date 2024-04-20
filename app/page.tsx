import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { Product } from "@prisma/client";

async function getData() {
  const res = await fetch("http://localhost:3000/api/v1/product");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { products, message } = await getData();
  return (
    <div>
      <HeroBanner />
      <div className="flex align-center justify-start gap-4 mt-10 px-4">
        {products.map((product: Product, index: Number) => {
          return (
            <ProductCard key={`product__level__${index}`} product={product} />
          );
        })}
      </div>
    </div>
  );
}
