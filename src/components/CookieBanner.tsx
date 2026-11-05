import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      setVisible(localStorage.getItem("bapal_cookies_accepted") !== "true");
    } catch {
      setVisible(true);
    }
  }, []);
  const accept = () => {
    try {
      localStorage.setItem("bapal_cookies_accepted", "true");
    } catch {
      /* Keep browsing if storage is blocked. */
    }
    setVisible(false);
    window.dispatchEvent(new CustomEvent("bapal:cookies-accepted"));
  };
  if (!visible) return null;
  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-[60] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-5 pointer-events-none"
      aria-labelledby="cookie-banner-title"
    >
      <div className="mx-auto w-full max-w-3xl rounded-xl border border-border bg-background p-5 shadow-[0_12px_60px_-16px_rgba(50,30,15,0.3)] pointer-events-auto sm:flex sm:items-center sm:gap-6">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-accent">
            <Cookie className="size-5" strokeWidth={1.5} />
          </span>
          <div>
            <h4 id="cookie-banner-title" className="font-serif text-xl">
              Control de cookies
            </h4>
            <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-muted-foreground">
              Utilizamos cookies para garantizar el correcto funcionamiento del carrito y mejorar tu
              experiencia. Para continuar usando el sitio debes aceptar nuestra Política de
              Privacidad.
            </p>
            <a
              href="/privacidad"
              className="mt-2 inline-flex min-h-8 items-center text-xs font-medium underline underline-offset-4 hover:text-accent"
            >
              Leer Política de Privacidad
            </a>
          </div>
        </div>
        <button
          onClick={accept}
          className="mt-4 min-h-11 w-full shrink-0 rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground transition hover:bg-primary/85 active:scale-[0.98] sm:mt-0 sm:w-auto"
        >
          Aceptar
        </button>
      </div>
    </aside>
  );
}
