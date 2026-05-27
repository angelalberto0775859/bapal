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
        <div className="reveal mb-12 text-center">
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Catálogo</p>
          <h2 className="font-serif text-4xl md:text-5xl md:text-6xl">La carta del día</h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full border transition cursor-pointer ${
                active === c
                  ? "bg-foreground text-background border-foreground font-medium"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto justify-center">
          {filtered.map((p, index) => (
            <ProductCard key={`${active}-${p.id}`} product={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [variantIdx, setVariantIdx] = useState(0);
  const variant = product.variants?.[variantIdx];
  const price = product.price + (variant?.priceDelta ?? 0);

  const currentImage =
    variant?.image || product.image ? `${variant?.image || product.image}?v=paper` : undefined;

  function add() {
    cart.add(product, variant);
    toast.success("Añadido al carrito", { description: product.name });
  }

  return (
    <article
      className="bg-card border border-border p-5 flex flex-col sm:flex-row gap-5 group hover:border-foreground/45 transition-all duration-300 hover:shadow-md md:p-6 rounded-sm animate-card-in opacity-0"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {currentImage && (
        <div className="w-full aspect-[2/1] sm:w-28 sm:h-28 md:w-32 md:h-32 sm:aspect-square shrink-0 overflow-hidden border border-border bg-secondary rounded-sm">
          <img
            src={currentImage}
            alt={product.name}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0 justify-between text-center sm:text-left">
        <div>
          <h3 className="font-serif text-xl md:text-2xl leading-tight truncate transition-colors duration-300 group-hover:text-accent">
            {product.name}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 md:line-clamp-3">
            {product.description}
          </p>

          {product.variants && (
            <div className="mt-3">
              <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
                {product.variants.map((v, i) => (
                  <button
                    key={v.name}
                    onClick={() => setVariantIdx(i)}
                    className={`text-[9px] md:text-[10px] px-2.5 py-1 rounded-full border transition cursor-pointer ${
                      variantIdx === i
                        ? "border-accent text-accent font-medium bg-accent/5"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-border/40 mt-4">
          <span className="font-serif text-lg md:text-xl font-medium">{formatMXN(price)}</span>
          <button
            onClick={add}
            className="flex items-center justify-center text-center text-xs uppercase tracking-widest px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-full hover:scale-105 active:scale-95 shadow-md transition-all duration-300 hover:bg-accent/90 cursor-pointer"
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}
