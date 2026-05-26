import { useSyncExternalStore } from "react";
import type { Product, Variant } from "@/data/menu";

export type CartItem = {
  key: string;
  product: Product;
  variant?: Variant;
  qty: number;
  unitPrice: number;
};

let items: CartItem[] = [];
const listeners = new Set<() => void>();

function emit() { listeners.forEach((l) => l()); }

export const cart = {
  subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); },
  get() { return items; },
  add(product: Product, variant?: Variant) {
    const key = product.id + (variant?.name ?? "");
    const unitPrice = product.price + (variant?.priceDelta ?? 0);
    const existing = items.find((i) => i.key === key);
    if (existing) existing.qty += 1;
    else items = [...items, { key, product, variant, qty: 1, unitPrice }];
    items = [...items];
    emit();
  },
  setQty(key: string, qty: number) {
    items = items.map((i) => (i.key === key ? { ...i, qty: Math.max(0, qty) } : i)).filter((i) => i.qty > 0);
    emit();
  },
  remove(key: string) {
    items = items.filter((i) => i.key !== key);
    emit();
  },
  clear() { items = []; emit(); },
  total() { return items.reduce((s, i) => s + i.unitPrice * i.qty, 0); },
  count() { return items.reduce((s, i) => s + i.qty, 0); },
};

export function useCart() {
  return useSyncExternalStore(cart.subscribe, cart.get, cart.get);
}
