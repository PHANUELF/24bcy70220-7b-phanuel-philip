"use client";

import { useProductStore } from "../store/useProductStore";
import ProductItem from "./ProductItem";
import { Button } from "@/components/ui/button";

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  const addProduct = useProductStore((state) => state.addProduct);
  const hydrated = useProductStore((state) => state.hydrated);

  if (!hydrated) return null;

  return (
    <div>
      <h1>Products ({products.length})</h1>
      <Button onClick={addProduct}>Add</Button>

      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}