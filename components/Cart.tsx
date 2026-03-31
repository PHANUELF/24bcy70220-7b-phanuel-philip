"use client";

import { useProductStore } from "../store/useProductStore";

export default function Cart() {
  const products = useProductStore((s) => s.products);
  const updateQuantity = useProductStore((s) => s.updateQuantity);
  const deleteProduct = useProductStore((s) => s.deleteProduct);
  const hydrated = useProductStore((s) => s.hydrated);

  // Prevent hydration issues (VERY IMPORTANT)
  if (!hydrated) return null;

  // Calculate total price
  const total = products.reduce(
    (acc, p) => acc + p.price * p.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Cart</h1>

      {/* Table Header */}
      <div className="grid grid-cols-4 font-semibold border-b pb-3">
        <span>Product</span>
        <span>Price</span>
        <span className="text-center">Quantity</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Products */}
      {products.map((p) => (
        <div
          key={p.id}
          className="grid grid-cols-4 items-center py-4 border-b"
        >
          {/* Name */}
          <span>{p.name}</span>

          {/* Price */}
          <span>${p.price.toFixed(2)}</span>

          {/* Quantity controls */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() =>
                updateQuantity(p.id, Math.max(0, p.quantity - 1))
              }
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>

            <span className="w-6 text-center">{p.quantity}</span>

            <button
              onClick={() => updateQuantity(p.id, p.quantity + 1)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          {/* Remove button */}
          <div className="flex justify-end">
            <button
              onClick={() => deleteProduct(p.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Empty cart message */}
      {products.length === 0 && (
        <p className="text-center text-gray-400 mt-6">
          Your cart is empty
        </p>
      )}

      {/* Total */}
      <div className="flex justify-end mt-6 text-xl font-semibold">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}