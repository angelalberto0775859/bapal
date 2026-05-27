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

  const accept = () => {
    localStorage.setItem("bapal_cookies_accepted", "true");
    setVisible(false);
    window.dispatchEvent(new CustomEvent("bapal:cookies-accepted"));
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pointer-events-none"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
    >
      <div className="mx-auto w-full max-w-2xl rounded-sm border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-md pointer-events-auto animate-in slide-in-from-bottom-4 duration-300">
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
          <button
            onClick={accept}
            className="text-[10px] tracking-widest uppercase font-semibold bg-accent text-accent-foreground px-4 py-2.5 rounded-full hover:bg-accent/90 active:scale-95 shadow-sm transition-all duration-300 cursor-pointer shrink-0 self-center"
            autoFocus
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
