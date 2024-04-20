import { Product } from "@prisma/client";
import Image from "next/image";
import React from "react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border-2 rounded-md min-w-[250px] p-2">
      <Image
        src={String(product.image)}
        alt={product.name}
        fill
        className="object-contain"
      />
    </div>
  );
}
