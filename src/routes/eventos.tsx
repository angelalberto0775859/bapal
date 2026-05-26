import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Events } from "@/components/Events";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/eventos")({
  component: EventosPage,
  head: () => ({
    meta: [
      { title: "Eventos & Catering Premium — BaPal" },
      {
        name: "description",
        content:
          "Catering exclusivo de panadería boutique y repostería fina para bodas, banquetes y eventos corporativos de alta gama.",
      },
    ],
  }),
});

function EventosPage() {
  const [cartOpen, setCartOpen] = useState(false);
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav onCart={() => setCartOpen(true)} />
      <main className="pt-16">
        <Events />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Toaster position="bottom-right" />
      <FloatingContact />
    </div>
  );
}
