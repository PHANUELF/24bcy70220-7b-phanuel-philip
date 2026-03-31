"use client";

import { useState } from "react";
import { useProductStore, type Product } from "../store/useProductStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProductItem({ product }: { product: Product }) {
  const deleteProduct = useProductStore((s) => s.deleteProduct);
  const updateQuantity = useProductStore((s) => s.updateQuantity);

  const [qty, setQty] = useState(String(product.quantity));

  return (
    <div>
      <span>{product.name}</span>
      <span>${product.price}</span>

      <Input
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />

      <Button
        onClick={() => {
          const num = parseInt(qty);
          if (!isNaN(num)) updateQuantity(product.id, num);
        }}
      >
        Save
      </Button>

      <Button onClick={() => deleteProduct(product.id)}>
        Delete
      </Button>
    </div>
  );
}