import { useState, useEffect } from "react";
import { X, Sparkles, ExternalLink } from "lucide-react";

export function PromoPopup() {
  const [show, setShow] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const promoSeen = localStorage.getItem("bapal_promo_seen") === "true";
    if (promoSeen) return; // Solo una vez por cliente

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
      }, delay + 5000);
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
    localStorage.setItem("bapal_promo_seen", "true");
    // Unmount after animation completes (300ms)
    setTimeout(() => {
      setShouldRender(false);
    }, 300);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 pointer-events-auto bg-black/45 backdrop-blur-[3px] ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* Square Promotional Banner Card */}
      <div
        className={`bg-card border border-border/80 w-full max-w-[320px] aspect-square flex flex-col justify-between p-6 md:p-8 relative rounded-sm shadow-2xl overflow-hidden transition-all duration-300 pointer-events-auto
          ${show ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95 md:translate-y-0"}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Subtle decorative background pattern */}
        <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-accent/5 pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-accent/5 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 hover:opacity-75 transition-opacity text-muted-foreground hover:text-foreground cursor-pointer"
          aria-label="Cerrar promoción"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header/Celebration */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1 bg-accent/10 text-accent text-[9px] tracking-widest uppercase px-2.5 py-0.5 rounded-full font-medium mb-1.5">
            <Sparkles className="w-3 h-3 text-accent animate-pulse" />
            <span>Reseña en Google</span>
          </div>
          <h3 className="font-serif text-base text-muted-foreground uppercase tracking-widest leading-none mt-0.5">
            5% en tu cuenta
          </h3>
        </div>

        {/* Big Promo Value */}
        <div className="text-center my-1 flex flex-col items-center">
          <div className="flex items-start justify-center font-serif text-accent leading-none">
            <span className="text-6xl font-semibold">5</span>
            <span className="text-3xl font-semibold mt-0.5">%</span>
          </div>
          <div className="text-[9px] uppercase tracking-[0.25em] font-medium text-foreground mt-1">
            De Descuento
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[240px] mx-auto mb-2">
            Obtén 5% de descuento en tu cuenta al dejarnos una reseña en Google.
          </p>

          {/* Action Voucher Card */}
          <div className="bg-accent/5 border border-accent/10 py-1.5 px-3 rounded-sm text-[10px] text-foreground font-medium leading-snug max-w-[260px] mx-auto mb-3">
            📸 Deja tu reseña en Google y muestra la confirmación en mostrador
            <span className="text-muted-foreground text-[9px] block mt-0.5 font-normal">
              Válido: 01 de Junio al 01 de Julio, 2026. Uno por cliente.
            </span>
          </div>

          {/* Progress bar to show 5s timer */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-16 h-[2px] bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-5000 ease-linear"
                style={{
                  width: show ? "0%" : "100%",
                  transitionDuration: "5000ms",
                }}
              />
            </div>
            <span className="text-[8px] text-accent/80 tracking-widest uppercase font-medium mt-0.5">
              Promo temporal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
