import { useState } from "react";
import { MessageCircle, Star, X, Facebook, Instagram } from "lucide-react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Acciones expandibles */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/525560660606"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
          aria-label="Abrir WhatsApp"
        >
          <span className="text-sm font-medium text-foreground bg-background border border-border rounded-lg px-3 py-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp
          </span>
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform">
            <MessageCircle className="w-5 h-5 fill-current" />
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/panetteria.bapal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
          aria-label="Abrir Instagram"
        >
          <span className="text-sm font-medium text-foreground bg-background border border-border rounded-lg px-3 py-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Instagram
          </span>
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E1306C] text-white shadow-lg hover:scale-105 transition-transform">
            <Instagram className="w-5 h-5" />
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/people/Panetteria-BaPal/100091691280340/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
          aria-label="Abrir Facebook"
        >
          <span className="text-sm font-medium text-foreground bg-background border border-border rounded-lg px-3 py-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Facebook
          </span>
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] text-white shadow-lg hover:scale-105 transition-transform">
            <Facebook className="w-5 h-5 fill-current" />
          </span>
        </a>

        {/* Google Reviews */}
        <a
          href="https://maps.app.goo.gl/MUimij8Hxa5uN3Tp8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
          aria-label="Dejar reseña en Google"
        >
          <span className="text-sm font-medium text-foreground bg-background border border-border rounded-lg px-3 py-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Reseña en Google
          </span>
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-105 transition-transform">
            <Star className="w-5 h-5 fill-current" />
          </span>
        </a>
      </div>

      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú de contacto" : "Abrir menú de contacto"}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
          open ? "bg-muted text-foreground rotate-45" : "bg-primary text-primary-foreground"
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
