import { useMemo, useState } from "react";
import { categories, products, type Product } from "@/data/menu";
import { cart } from "@/lib/cart-store";
import { formatMXN } from "@/lib/checkout";
import { toast } from "sonner";

export function Catalog() {
  const [active, setActive] = useState<string>(categories[0]);
  const filtered = useMemo(() => products.filter((p) => p.category === active), [active]);

  return (
    <section id="catalogo" className="py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Catálogo</p>
          <h2 className="font-serif text-4xl md:text-6xl">La carta del día</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full border transition ${
                active === c
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [variantIdx, setVariantIdx] = useState(0);
  const variant = product.variants?.[variantIdx];
  const price = product.price + (variant?.priceDelta ?? 0);

  function add() {
    cart.add(product, variant);
    toast.success("Añadido al carrito", { description: product.name });
  }

  return (
    <article className="bg-card border border-border p-7 flex flex-col group hover:border-foreground/40 transition">
      <h3 className="font-serif text-2xl leading-tight">{product.name}</h3>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{product.description}</p>

      {product.variants && (
        <div className="mt-5">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Alternativas precisas</p>
          <div className="flex flex-wrap gap-1.5">
            {product.variants.map((v, i) => (
              <button
                key={v.name}
                onClick={() => setVariantIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${
                  variantIdx === i
                    ? "border-accent text-accent"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
          {variant?.brand && (
            <p className="text-[11px] text-muted-foreground mt-2 italic">con {variant.brand}</p>
          )}
        </div>
      )}

      <div className="mt-auto pt-6 flex items-center justify-between">
        <span className="font-serif text-xl">{formatMXN(price)}</span>
        <button
          onClick={add}
          className="text-xs uppercase tracking-widest px-4 py-2 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition"
        >
          Añadir
        </button>
      </div>
    </article>
  );
}
