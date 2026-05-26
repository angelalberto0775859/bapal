import { useMemo, useState } from "react";
import { categories, products, type Product } from "@/data/menu";
import { cart } from "@/lib/cart-store";
import { formatMXN } from "@/lib/checkout";
import { toast } from "sonner";

// Load all edited bread images dynamically
const breadImages = Object.values(
  import.meta.glob("@/assets/Panes/edited/*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  }),
) as string[];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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

  // Match each product to an image using a hash of its ID
  const imageSrc = useMemo(() => {
    if (breadImages.length === 0) return null;
    const hash = product.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return breadImages[hash % breadImages.length];
  }, [product.id]);

  function add() {
    cart.add(product, variant);
    toast.success("Añadido al carrito", { description: product.name });
  }

  return (
    <article className="bg-card border border-border p-5 flex gap-5 group hover:border-foreground/45 transition duration-300 md:p-6 rounded-sm">
      {imageSrc && (
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 overflow-hidden border border-border bg-secondary rounded-sm">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0 justify-between">
        <div>
          <h3 className="font-serif text-xl md:text-2xl leading-tight truncate">{product.name}</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 md:line-clamp-3">
            {product.description}
          </p>

          {product.variants && (
            <div className="mt-3">
              <div className="flex flex-wrap gap-1">
                {product.variants.map((v, i) => (
                  <button
                    key={v.name}
                    onClick={() => setVariantIdx(i)}
                    className={`text-[9px] md:text-[10px] px-2.5 py-1 rounded-full border transition ${
                      variantIdx === i
                        ? "border-accent text-accent"
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

        <div className="pt-4 flex items-center justify-between border-t border-border/40 mt-3">
          <span className="font-serif text-lg md:text-xl">{formatMXN(price)}</span>
          <button
            onClick={add}
            className="text-[9px] md:text-xs uppercase tracking-widest px-4 py-2 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition"
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}
