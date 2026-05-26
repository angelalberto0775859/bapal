import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner after a short delay if consent hasn't been given
    const consent = localStorage.getItem("bapal_cookies_accepted");
    if (consent !== "true") {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("bapal_cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-background/95 backdrop-blur-md border border-border p-4 rounded-sm shadow-xl flex flex-col gap-3 transition-all duration-500 transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex gap-3 items-start">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent shrink-0">
          <Cookie className="w-4 h-4 animate-spin-slow" />
        </span>
        <div className="flex-1 min-w-0">
          <h4 className="font-serif text-sm font-semibold tracking-wide text-foreground">Control de Cookies</h4>
          <p className="text-[11px] leading-relaxed text-muted-foreground mt-1">
            Utilizamos cookies para garantizar el correcto funcionamiento del carrito y mejorar tu experiencia. Al continuar navegando, aceptas nuestra{" "}
            <Link to="/privacidad" className="text-accent hover:underline font-medium">
              Política de Privacidad
            </Link>.
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-muted-foreground hover:text-foreground hover:bg-secondary p-1 rounded-full transition cursor-pointer"
          aria-label="Cerrar aviso"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="flex justify-end">
        <button
          onClick={accept}
          className="text-[10px] tracking-widest uppercase font-semibold bg-accent text-accent-foreground px-4 py-2 rounded-full hover:bg-accent/90 hover:scale-105 active:scale-95 shadow-sm transition-all duration-300 cursor-pointer"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
