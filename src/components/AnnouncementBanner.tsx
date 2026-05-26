import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";

export function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(true);

  const announcements = [
    "✨ ¡Celebramos la apertura de nuestra página web! Explora el catálogo en línea. 🥖",
    "🎉 Eventos y Catering Premium: Lleva la alta panadería a tus reuniones. 🥐",
    "🕒 Horneo diario con masa madre de fermentación lenta. ¡Pedidos listos hoy! 🥖",
  ];

  // Load visibility state from localStorage to remember user's choice
  useEffect(() => {
    const isDismissed = localStorage.getItem("bapal_announcement_dismissed");
    if (isDismissed === "true") {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [visible, announcements.length]);

  if (!visible) return null;

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
      setFade(true);
    }, 200);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
      setFade(true);
    }, 200);
  };

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem("bapal_announcement_dismissed", "true");
  };

  return (
    <div className="bg-accent text-accent-foreground w-full relative h-9 md:h-10 flex items-center justify-between px-4 md:px-12 select-none border-b border-white/10 z-50 text-[10px] md:text-xs tracking-wider uppercase font-medium">
      {/* Sparkle decorative icon left */}
      <div className="hidden md:flex items-center gap-1.5 opacity-90">
        <Sparkles className="w-3.5 h-3.5 text-accent-foreground animate-pulse" />
        <span>Boutique</span>
      </div>

      <div className="flex items-center justify-center flex-1 max-w-3xl mx-auto">
        {/* Navigation Left */}
        <button
          onClick={handlePrev}
          className="hover:opacity-75 transition-opacity focus:outline-none shrink-0 p-1 cursor-pointer"
          aria-label="Anuncio anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Content Center */}
        <div className="flex-1 text-center overflow-hidden px-4 select-text">
          <span
            className={`inline-block transition-all duration-200 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {announcements[currentIndex]}
          </span>
        </div>

        {/* Navigation Right */}
        <button
          onClick={handleNext}
          className="hover:opacity-75 transition-opacity focus:outline-none shrink-0 p-1 cursor-pointer"
          aria-label="Siguiente anuncio"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={dismiss}
        className="hover:opacity-75 transition-opacity focus:outline-none shrink-0 border-l border-white/20 pl-3 p-1 cursor-pointer"
        aria-label="Cerrar aviso"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
