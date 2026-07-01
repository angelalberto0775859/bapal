import { useState, useEffect } from "react";
import { X, ExternalLink, Trophy } from "lucide-react";

export function PromoPopup() {
  const [show, setShow] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const promoSeen = localStorage.getItem("bapal_promo_mundial_seen") === "true";
    if (promoSeen) return;

    const cookiesAccepted = localStorage.getItem("bapal_cookies_accepted") === "true";

    let startTimeout: ReturnType<typeof setTimeout>;
    let closeTimeout: ReturnType<typeof setTimeout>;

    const trigger = (delay: number) => {
      startTimeout = setTimeout(() => {
        setShouldRender(true);
        setShow(true);
      }, delay);
      closeTimeout = setTimeout(() => {
        handleClose();
      }, delay + 7000);
    };

    const onAccepted = () => trigger(600);

    if (cookiesAccepted) {
      trigger(800);
    } else {
      window.addEventListener("bapal:cookies-accepted", onAccepted, { once: true });
    }

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(closeTimeout);
      window.removeEventListener("bapal:cookies-accepted", onAccepted);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("bapal_promo_mundial_seen", "true");
    setTimeout(() => {
      setShouldRender(false);
    }, 300);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 pointer-events-auto bg-black/50 backdrop-blur-[3px] ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-card border border-border/80 w-full max-w-[340px] flex flex-col p-7 md:p-8 rounded-sm shadow-2xl overflow-hidden transition-all duration-300 pointer-events-auto
          ${show ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95 md:translate-y-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mundial 2026 top band — tricolor */}
        <div aria-hidden className="absolute top-0 left-0 right-0 h-1.5 flex pointer-events-none">
          <div className="flex-1 bg-[#006847]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#ce1126]" />
        </div>

        {/* Subtle field-lines background */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 22px, currentColor 22px 23px)",
          }}
        />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 hover:opacity-75 transition-opacity text-muted-foreground hover:text-foreground cursor-pointer z-10"
          aria-label="Cerrar promoción"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mt-2">
          <div className="inline-flex items-center gap-1.5 border border-border/70 bg-background text-foreground text-[9px] tracking-[0.22em] uppercase px-3 py-1 rounded-full font-medium">
            <Trophy className="w-3 h-3 text-[#006847]" />
            <span>Mundial <span className="text-[#006847]">·</span> 2026 <span className="text-[#ce1126]">·</span> México</span>
          </div>
          <h3 className="font-serif text-[13px] text-muted-foreground uppercase tracking-[0.25em] leading-none mt-4">
            Promo de la afición
          </h3>
        </div>

        {/* Big value */}
        <div className="text-center my-5 flex flex-col items-center">
          <div className="flex items-start justify-center font-serif text-accent leading-none">
            <span className="text-7xl font-semibold">5</span>
            <span className="text-3xl font-semibold mt-1">%</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] font-medium text-foreground mt-1.5">
            Descuento en tu cuenta
          </div>
        </div>

        {/* Copy */}
        <div className="text-center">
          <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[260px] mx-auto mb-3">
            Anota gol con nosotros: déjanos una reseña en Google y recibe 5% de descuento en tu cuenta.
          </p>

          <a
            href="https://maps.app.goo.gl/yHLswxv6VPFUNyn97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-accent text-accent-foreground text-[11px] font-medium tracking-wide uppercase px-4 py-2.5 rounded-sm hover:bg-accent/90 transition-colors mb-3 w-full"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Dejar reseña en Google
          </a>

          <div className="bg-accent/5 border border-accent/15 py-2 px-3 rounded-sm text-[10px] text-foreground font-medium leading-snug max-w-[280px] mx-auto">
            ⚽ Muestra la confirmación en mostrador
            <span className="text-muted-foreground text-[9px] block mt-0.5 font-normal">
              Válido hasta el 18 de julio, 2026. Uno por cliente.
            </span>
          </div>
        </div>

        {/* Mundial 2026 bottom band — tricolor */}
        <div aria-hidden className="absolute bottom-0 left-0 right-0 h-1.5 flex pointer-events-none">
          <div className="flex-1 bg-[#006847]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#ce1126]" />
        </div>
      </div>
    </div>
  );
}
