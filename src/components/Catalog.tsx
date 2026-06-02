import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { categories, products, type Product } from "@/data/menu";
import { cart } from "@/lib/cart-store";
import { formatMXN } from "@/lib/checkout";
import { toast } from "sonner";

const INITIAL_VISIBLE = 4;

export function Catalog() {
  const [active, setActive] = useState<string>(categories[0]);
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();
  const normalizedSubmitted = submitted.trim().toLowerCase();
  const isTyping = normalizedQuery.length > 0;
  const isSearching = normalizedSubmitted.length > 0;

  function matches(p: Product, q: string) {
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      !!p.variants?.some((v) => v.name.toLowerCase().includes(q))
    );
  }

  const suggestions = useMemo(() => {
    if (!isTyping) return [];
    return products.filter((p) => matches(p, normalizedQuery)).slice(0, 6);
  }, [normalizedQuery, isTyping]);

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    return products.filter((p) => matches(p, normalizedSubmitted));
  }, [normalizedSubmitted, isSearching]);

  const categoryProducts = useMemo(
    () => products.filter((p) => p.category === active),
    [active],
  );

  const visible = isSearching
    ? searchResults
    : showAll
      ? categoryProducts
      : categoryProducts.slice(0, INITIAL_VISIBLE);

  const hasMore = !isSearching && !showAll && categoryProducts.length > INITIAL_VISIBLE;

  function selectSuggestion(p: Product) {
    setSubmitted(p.name);
    setQuery(p.name);
    setShowSuggestions(false);
    setHighlighted(0);
  }

  function submitSearch() {
    setSubmitted(query);
    setShowSuggestions(false);
  }

  function clearSearch() {
    setQuery("");
    setSubmitted("");
    setShowSuggestions(false);
    setHighlighted(0);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" && suggestions.length > 0) {
      e.preventDefault();
      setHighlighted((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp" && suggestions.length > 0) {
      e.preventDefault();
      setHighlighted((i) => (i - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (suggestions.length > 0 && showSuggestions) {
        selectSuggestion(suggestions[highlighted]);
      } else {
        submitSearch();
      }
    } else if (e.key === "Escape") {
      clearSearch();
    }
  }


  return (
    <section id="catalogo" className="py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-12 text-center">
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Catálogo</p>
          <h2 className="font-serif text-4xl md:text-5xl md:text-6xl">La carta del día</h2>
          <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            Las piezas están sujetas a disponibilidad y al horario de horneado.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto mb-10">
          <div className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setHighlighted(0); setShowSuggestions(true); }}
              onFocus={() => setShowSuggestions(true)}
              onKeyDown={handleKeyDown}
              placeholder="Buscar un pan, sabor o categoría..."
              className="w-full pl-11 pr-10 py-3 bg-card border border-border rounded-full text-sm focus:outline-none focus:border-foreground transition"
            />
            {(query || submitted) && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground cursor-pointer"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {isTyping && showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-10 left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
              {suggestions.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => selectSuggestion(p)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition cursor-pointer border-b border-border/40 last:border-0 ${
                    idx === highlighted ? "bg-secondary" : "hover:bg-secondary"
                  }`}
                >
                  {p.image && (
                    <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-sm" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{p.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{p.category}</p>
                  </div>
                  <span className="text-xs font-serif">{formatMXN(p.price)}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {isSearching && (
          <div className="text-center mb-8 text-sm text-muted-foreground">
            {searchResults.length > 0
              ? `${searchResults.length} resultado${searchResults.length === 1 ? "" : "s"} para "${submitted}"`
              : `Sin resultados para "${submitted}"`}
          </div>
        )}


        </div>

        {!isSearching && (
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setActive(c);
                  setShowAll(false);
                }}
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
        )}

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto justify-center">
          {visible.map((p, index) => (
            <ProductCard key={`${active}-${p.id}`} product={p} index={index} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 text-xs uppercase tracking-widest border border-foreground rounded-full hover:bg-foreground hover:text-background transition cursor-pointer"
            >
              Ver más ({categoryProducts.length - INITIAL_VISIBLE})
            </button>
          </div>
        )}

        {!isSearching && showAll && categoryProducts.length > INITIAL_VISIBLE && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 text-xs uppercase tracking-widest border border-border text-muted-foreground rounded-full hover:border-foreground hover:text-foreground transition cursor-pointer"
            >
              Ver menos
            </button>
          </div>
        )}
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
      id={`product-${product.id}`}
      className="bg-card border border-border p-5 flex flex-col sm:flex-row gap-5 group hover:border-foreground/45 transition-all duration-300 hover:shadow-md md:p-6 rounded-sm animate-card-in opacity-0"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {currentImage && (
        <div className="w-full aspect-[2/1] sm:w-28 sm:h-28 md:w-32 md:h-32 sm:aspect-square shrink-0 overflow-hidden border border-border bg-secondary rounded-sm">
          <img
            src={currentImage}
            alt={product.name}
            width={512}
            height={512}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index < 2 ? "high" : "low"}
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
