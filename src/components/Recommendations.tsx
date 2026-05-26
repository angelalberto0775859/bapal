import { useMemo } from "react";
import { products } from "@/data/menu";
import { cart } from "@/lib/cart-store";
import { formatMXN } from "@/lib/checkout";
import { toast } from "sonner";



export function Recommendations() {
  // Find the exact products in our database
  const bestSellers = useMemo(() => {
    const ids = ["hoj-1", "dul-1", "bis-1"];
    return ids
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean) as typeof products;
  }, []);

  const itemsWithCustomMeta = useMemo(() => {
    const meta = [
      {
        tag: "El Más Vendido",
        customDesc: "Crujiente hojaldre francés de 81 capas con una variedad de rellenos selectos.",
      },
      {
        tag: "Favorito Tradicional",
        customDesc: "Masa brioche de fermentación lenta de 48h con costra artesanal y vainilla de Papantla.",
      },
      {
        tag: "Recomendación del Chef",
        customDesc: "Bisquet dorado de mantequilla pura, de miga densa y sabor inigualable.",
      },
    ];

    return bestSellers.map((product, i) => {
      const info = meta[i % meta.length];
      return {
        ...product,
        tag: info.tag,
        customDesc: info.customDesc,
        imageSrc: product.image,
      };
    });
  }, [bestSellers]);

  function addToCart(product: typeof products[0]) {
    const firstVariant = product.variants?.[0];
    cart.add(product, firstVariant);
    toast.success("Añadido al carrito", { 
      description: `${product.name} ${firstVariant ? `(${firstVariant.name})` : ""}` 
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
            Descubre las piezas que se han convertido en las preferidas de nuestros clientes habituales. Recién horneadas y listas para disfrutar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {itemsWithCustomMeta.map((item, index) => (
            <article 
              key={item.id}
              className="reveal bg-card border border-border rounded-sm overflow-hidden flex flex-col group hover:border-foreground/30 transition duration-300 shadow-sm"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.imageSrc && (
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-medium shadow-md">
                    {item.tag}
                  </span>
                </div>
              )}
              
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl mb-2.5 leading-snug group-hover:text-accent transition duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.customDesc}
                  </p>
                </div>

                <div className="pt-5 border-t border-border/40 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-0.5">Desde</span>
                    <span className="font-serif text-2xl text-foreground">{formatMXN(item.price)}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="text-xs uppercase tracking-widest px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-accent hover:text-accent-foreground transition duration-300 font-medium"
                  >
                    Añadir al carrito
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
