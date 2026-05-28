import { useMemo } from "react";
import { products } from "@/data/menu";
import { cart } from "@/lib/cart-store";
import { formatMXN } from "@/lib/checkout";
import { toast } from "sonner";

export function Recommendations() {
  // Find the exact products in our database
  const bestSellers = useMemo(() => {
    const ids = ["hoj-1", "dul-1", "bis-1"];
    return ids.map((id) => products.find((p) => p.id === id)).filter(Boolean) as typeof products;
  }, []);

  const itemsWithCustomMeta = useMemo(() => {
    const meta = [
      {
        tag: "Más vendido",
        customDesc: "Crujiente hojaldre francés de 81 capas con una variedad de rellenos selectos.",
      },
      {
        tag: "Favorito",
        customDesc: "Masa brioche súper esponjosa con costra artesanal y un toque de vainilla de Papantla.",
      },
      {
        tag: "Recomendación",
        customDesc: "Cazuela dorada de mantequilla pura, de miga densa y sabor inigualable.",
      },
    ];

    return bestSellers.map((product, i) => {
      const info = meta[i % meta.length];
      return {
        ...product,
        tag: info.tag,
        customDesc: info.customDesc,
        imageSrc: product.image ? `${product.image}?v=paper` : undefined,
      };
    });
  }, [bestSellers]);

  function addToCart(product: (typeof products)[0]) {
    const firstVariant = product.variants?.[0];
    cart.add(product, firstVariant);
    toast.success("Añadido al carrito", {
      description: `${product.name} ${firstVariant ? `(${firstVariant.name})` : ""}`,
    });
  }

  if (bestSellers.length === 0) return null;

  return (
    <section id="recomendaciones" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-14 text-center">
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Selección Premium</p>
          <h2 className="font-serif text-4xl md:text-5xl">Los Favoritos de la Casa</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Descubre las piezas que se han convertido en las preferidas de nuestros clientes
            habituales. Recién horneadas y listas para disfrutar.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
          {itemsWithCustomMeta.map((item, index) => (
            <article
              key={item.id}
              className="bg-card border border-border p-5 flex flex-col sm:flex-row gap-5 group hover:border-foreground/45 transition-all duration-300 hover:shadow-md md:p-6 rounded-sm animate-card-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.imageSrc && (
                <div className="w-full aspect-[2/1] sm:w-28 sm:h-28 md:w-32 md:h-32 sm:aspect-square shrink-0 overflow-hidden border border-border bg-secondary rounded-sm relative">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[8px] tracking-wider uppercase px-2 py-0.5 rounded-full font-medium shadow-sm inline-flex items-center justify-center leading-none">
                    {item.tag}
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-1 min-w-0 justify-between text-center sm:text-left">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl leading-tight truncate transition-colors duration-300 group-hover:text-accent">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 md:line-clamp-3">
                    {item.customDesc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-border/40 mt-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-0.5">
                      Desde
                    </span>
                    <span className="font-serif text-lg md:text-xl font-medium">
                      {formatMXN(item.price)}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="flex items-center justify-center text-center text-xs uppercase tracking-widest px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-full hover:scale-105 active:scale-95 shadow-md hover:bg-accent/90 transition duration-300 cursor-pointer"
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
