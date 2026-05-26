import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { Recommendations } from "@/components/Recommendations";
import { Catalog } from "@/components/Catalog";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/useReveal";
import { PromoPopup } from "@/components/PromoPopup";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "BaPal — Panettería Boutique" },
      {
        name: "description",
        content:
          "Panadería boutique de alta gama: masa madre de 48h, ingredientes nobles y catering para eventos premium.",
      },
      { property: "og:title", content: "BaPal — Panettería Boutique" },
      {
        property: "og:description",
        content: "El arte del pan, elevado. Catálogo, eventos y catering premium.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [cartOpen, setCartOpen] = useState(false);
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav onCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <BrandsCarousel />
        <Process />
        <Recommendations />
        <Catalog />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Toaster position="bottom-right" />
      <FloatingContact />
      <PromoPopup />
    </div>
  );
}
