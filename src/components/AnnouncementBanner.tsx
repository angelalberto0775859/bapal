import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const announcements = [
  { text: "Pan artesanal, pastelería y momentos para compartir", href: null },
  { text: "Encuentra tu favorito en nuestro catálogo", href: "/#catalogo" },
  { text: "Pastelería para una ocasión especial", href: "/#pasteleria" },
  { text: "Lleva BaPal a tu próximo evento", href: "/eventos" },
];

export function AnnouncementBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(
      () => setCurrent((value) => (value + 1) % announcements.length),
      6500,
    );
    return () => clearInterval(interval);
  }, [paused]);
  const item = announcements[current];
  const content = (
    <>
      {item.text}
      <ArrowUpRight className="ml-2 inline size-3 shrink-0" />
    </>
  );
  return (
    <div
      className="flex min-h-11 w-full items-center justify-between border-b border-white/10 bg-primary px-2 text-primary-foreground sm:px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false);
      }}
    >
      <span className="hidden text-[10px] uppercase tracking-[0.22em] lg:block">
        BaPal · Panettería
      </span>
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between">
        <button
          onClick={() =>
            setCurrent((value) => (value - 1 + announcements.length) % announcements.length)
          }
          className="grid size-11 shrink-0 place-items-center rounded-full transition-colors hover:bg-white/10"
          aria-label="Anuncio anterior"
        >
          <ChevronLeft className="size-4" />
        </button>
        {item.href ? (
          <a
            href={item.href}
            className="flex min-h-11 items-center justify-center px-2 text-center text-[11px] leading-snug sm:text-xs"
          >
            {content}
          </a>
        ) : (
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("bapal:discover"))}
            className="flex min-h-11 items-center justify-center px-2 text-center text-[11px] leading-snug sm:text-xs"
          >
            {content}
          </button>
        )}
        <button
          onClick={() => setCurrent((value) => (value + 1) % announcements.length)}
          className="grid size-11 shrink-0 place-items-center rounded-full transition-colors hover:bg-white/10"
          aria-label="Siguiente anuncio"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      <span className="hidden text-[10px] uppercase tracking-[0.22em] lg:block">
        Hecho para compartir
      </span>
    </div>
  );
}
