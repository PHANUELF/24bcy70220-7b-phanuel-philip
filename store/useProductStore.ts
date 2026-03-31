"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
};

type ProductStore = {
  products: Product[];
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
  addProduct: () => void;
  deleteProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

const initialProducts: Product[] = [
  { id: 1, name: "Headphones", price: 80, category: "Electronics", quantity: 10 },
];

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: initialProducts,
      hydrated: false,

      setHydrated: (value) => set({ hydrated: value }),

      addProduct: () => {
        const products = get().products;
        const newId = products.length + 1;

        set({
          products: [
            ...products,
            { id: newId, name: "New Product", price: 0, category: "General", quantity: 1 },
          ],
        });
      },

      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, quantity } : p
          ),
        })),
    }),
    {
      name: "products-storage",
      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        products: state.products,
      }),

      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);