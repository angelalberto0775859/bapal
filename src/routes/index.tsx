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
    links: [{ rel: "canonical", href: "https://bapal.mx/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "BaPal Panettería Boutique",
          description:
            "Panadería boutique de alta gama: masa madre de 48h, ingredientes nobles y catering para eventos premium.",
          url: "https://bapal.mx",
          image:
            "https://storage.googleapis.com/gpt-engineer-file-uploads/HqYWfn1frdbcCrJM8AUXvb21OiC3/social-images/social-1779980553228-Captura_de_pantalla_2026-05-28_a_la(s)_9.02.13_a.m..webp",
          servesCuisine: ["Panadería", "Repostería", "Catering"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "20:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "08:00",
              closes: "20:00",
            },
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Spanish"],
          },
        }),
      },
    ],
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
