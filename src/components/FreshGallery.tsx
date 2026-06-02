import { useEffect, useRef, useState } from "react";
import g1 from "@/assets/gallery/gallery-1.jpg.asset.json";
import g2 from "@/assets/gallery/gallery-2.jpg.asset.json";
import g3 from "@/assets/gallery/gallery-3.jpg.asset.json";
import g4 from "@/assets/gallery/gallery-4.jpg.asset.json";

type Shot = { src: string; title: string; meta: string };

const shots: Shot[] = [
  { src: g1.url, title: "Roles de Cajeta", meta: "Recién horneados · 06:42 AM" },
  { src: g2.url, title: "Cajeta artesanal", meta: "Bañado a mano · 07:05 AM" },
  { src: g3.url, title: "Hojaldre de 81 capas", meta: "Mantequilla pura · 06:58 AM" },
  { src: g4.url, title: "Glaseado de vainilla", meta: "Finalizado · 07:12 AM" },
];

export function FreshGallery() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const hovering = useRef(false);

  useEffect(() => {
    const t = setInterval(() => {
      if (hovering.current) return;
      setProgress((p) => {
        if (p >= 100) {
          setActive((a) => (a + 1) % shots.length);
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="galeria" className="py-28 bg-secondary/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-14 text-center">
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Del Horno a tu Mesa</p>
          <h2 className="font-serif text-4xl md:text-5xl">Recién Horneado</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Una mirada al ritual diario de nuestra panadería: hojaldre vivo, cajeta tibia y manos
            que trabajan desde antes del amanecer.
          </p>
        </div>

        <div
          className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch"
          onMouseEnter={() => (hovering.current = true)}
          onMouseLeave={() => (hovering.current = false)}
        >
          {/* Featured stage */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden rounded-sm border border-border bg-card group">
            {shots.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-80 mb-2">
                {shots[active].meta}
              </p>
              <h3 className="font-serif text-2xl md:text-4xl">{shots[active].title}</h3>
            </div>
            <div className="absolute top-4 left-4 right-4 flex gap-1.5">
              {shots.map((_, i) => (
                <div key={i} className="h-[2px] flex-1 bg-white/30 overflow-hidden rounded-full">
                  <div
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{
                      width: i < active ? "100%" : i === active ? `${progress}%` : "0%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thumb strip */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4 content-stretch">
            {shots.map((s, i) => (
              <button
                key={s.src}
                onClick={() => {
                  setActive(i);
                  setProgress(0);
                }}
                className={`relative overflow-hidden rounded-sm border transition-all duration-500 group ${
                  i === active
                    ? "border-accent shadow-lg scale-[1.02]"
                    : "border-border hover:border-foreground/40"
                }`}
                style={{ aspectRatio: "1 / 1" }}
                aria-label={s.title}
              >
                <img
                  src={s.src}
                  alt={s.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    i === active ? "scale-110 brightness-110" : "scale-100 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-left text-white text-[10px] md:text-xs font-serif leading-tight">
                  {s.title}
                </span>
                {i === active && (
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
