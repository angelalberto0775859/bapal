import logo from "@/assets/bapal-logo.png";
import { useCart } from "@/lib/cart-store";
import { AnnouncementBanner } from "./AnnouncementBanner";

export function Nav({ onCart }: { onCart: () => void }) {
  const items = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  return (
    <header className="fixed top-0 inset-x-0 z-40 flex flex-col">
      <AnnouncementBanner />
      <div className="backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="BaPal Panettería" className="h-10 w-auto" />
          <span className="font-serif text-xl tracking-wide">BaPal</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="/#alianzas" className="hover:text-foreground transition">
            Alianzas
          </a>
          <a href="/#proceso" className="hover:text-foreground transition">
            Proceso
          </a>
          <a href="/#catalogo" className="hover:text-foreground transition">
            Catálogo
          </a>
          <a href="/eventos" className="hover:text-foreground transition">
            Eventos
          </a>
        </nav>
        <button
          onClick={onCart}
          className="relative text-sm font-semibold px-5 py-2.5 rounded-full bg-accent text-accent-foreground shadow-md hover:bg-accent/90 hover:scale-105 active:scale-97 transition-all duration-300 cursor-pointer"
        >
          Carrito
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] w-5 h-5 rounded-full grid place-items-center shadow-sm font-bold animate-bounce">
              {count}
            </span>
          )}
        </button>
      </div>
      </div>
    </header>
  );
}
