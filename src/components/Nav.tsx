import logo from "@/assets/bapal-logo.png";
import { useCart } from "@/lib/cart-store";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { AnnouncementBanner } from "./AnnouncementBanner";

const navLinks = [
  { href: "/#alianzas", label: "Alianzas" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#catalogo", label: "Catálogo" },
  { href: "/#pasteleria", label: "Pastelería" },
  { href: "/eventos", label: "Eventos" },
];

export function Nav({ onCart }: { onCart: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);

  function openCart() {
    setMobileOpen(false);
    onCart();
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40 flex flex-col">
      <AnnouncementBanner />
      <div className="backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="BaPal Panettería" className="h-14 md:h-16 w-auto" />
            <span className="font-serif text-2xl md:text-3xl tracking-wide">BaPal</span>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-foreground transition">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative hidden sm:inline-flex text-sm font-semibold px-5 py-2.5 rounded-full bg-accent text-accent-foreground shadow-md hover:bg-accent/90 hover:scale-105 active:scale-97 transition-all duration-300 cursor-pointer"
            >
              Carrito
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] w-5 h-5 rounded-full grid place-items-center shadow-sm font-bold animate-bounce">
                  {count}
                </span>
              )}
            </button>

            <button
              onClick={openCart}
              className="relative sm:hidden size-10 grid place-items-center rounded-full bg-accent text-accent-foreground shadow-md"
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="size-4" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-foreground text-background text-[10px] min-w-5 h-5 px-1 rounded-full grid place-items-center shadow-sm font-bold">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="md:hidden size-10 grid place-items-center rounded-full border border-foreground/15 bg-background/70 text-foreground shadow-sm"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden border-t border-border/60 bg-background/95 shadow-xl transition-[max-height,opacity] duration-300 ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-border/70 py-4 font-serif text-2xl text-foreground"
              >
                {link.label}
                <span className="text-sm font-sans text-muted-foreground">Ver</span>
              </a>
            ))}
            <button
              type="button"
              onClick={openCart}
              className="mt-4 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-md"
            >
              Ver carrito
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
