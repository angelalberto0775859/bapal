import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("bapal_cookies_accepted");
    if (consent !== "true") {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  const accept = () => {
    localStorage.setItem("bapal_cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-[3px] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <div className="w-full max-w-md rounded-sm border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-md transition-all duration-300">
        <div className="flex gap-3 items-start">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 text-accent shrink-0">
            <Cookie className="w-4 h-4 animate-spin-slow" />
          </span>
          <div className="flex-1 min-w-0">
            <h4
              id="cookie-banner-title"
              className="font-serif text-base font-semibold tracking-wide text-foreground"
            >
              Control de Cookies
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground mt-1.5">
              Utilizamos cookies para garantizar el correcto funcionamiento del carrito y mejorar tu
              experiencia. Para continuar usando el sitio debes aceptar nuestra Política de
              Privacidad.
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={accept}
            className="text-[10px] tracking-widest uppercase font-semibold bg-accent text-accent-foreground px-5 py-2.5 rounded-full hover:bg-accent/90 active:scale-95 shadow-sm transition-all duration-300 cursor-pointer"
            autoFocus
          >
            Aceptar Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
