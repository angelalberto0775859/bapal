import { useEffect, useRef, useState } from "react";
import g1 from "@/assets/gallery/gallery-1.jpg.asset.json";
import g2 from "@/assets/gallery/gallery-2.jpg.asset.json";
import g3 from "@/assets/gallery/gallery-3.jpg.asset.json";
import g4 from "@/assets/gallery/gallery-4.jpg.asset.json";
import s1 from "@/assets/gallery/suela-1.jpg.asset.json";
import s2 from "@/assets/gallery/suela-2.jpg.asset.json";
import h147 from "@/assets/gallery/horneado-147.jpg.asset.json";
import h150 from "@/assets/gallery/horneado-150.jpg.asset.json";
import h160 from "@/assets/gallery/horneado-160.jpg.asset.json";
import h164 from "@/assets/gallery/horneado-164.jpg.asset.json";
import h168 from "@/assets/gallery/horneado-168.jpg.asset.json";
import h182 from "@/assets/gallery/horneado-182.jpg.asset.json";
import h186 from "@/assets/gallery/horneado-186.jpg.asset.json";
import h195 from "@/assets/gallery/horneado-195.jpg.asset.json";

type Shot = { src: string; title: string; meta: string };

const shots: Shot[] = [
  { src: g1.url, title: "Pan artesanal", meta: "Recién horneados · 06:42 AM" },
  { src: g2.url, title: "Masa trabajada a mano", meta: "Bañado a mano · 07:05 AM" },
  { src: g3.url, title: "Recién salido del horno", meta: "Mantequilla pura · 06:58 AM" },
  { src: g4.url, title: "Tradición en cada pieza", meta: "Finalizado · 07:12 AM" },
  { src: s1.url, title: "Suelas doradas", meta: "Recién horneadas · 07:20 AM" },
  { src: s2.url, title: "Suelas esponjadas", meta: "Corteza brillante · 07:25 AM" },
  { src: h147.url, title: "Conchas de vainilla", meta: "Recién decoradas · 06:50 AM" },
  { src: h150.url, title: "Concha de canela", meta: "Azúcar cristalizada · 06:55 AM" },
  { src: h160.url, title: "Cazuela glaseada", meta: "Brillo de horno · 07:00 AM" },
  { src: h164.url, title: "Bollo con ajonjolí", meta: "Salidos del horno · 07:08 AM" },
  { src: h168.url, title: "Empanada de piña", meta: "Jalea natural · 07:15 AM" },
  { src: h182.url, title: "Dona glaseada", meta: "Chocolate brillante · 07:18 AM" },
  { src: h186.url, title: "Masa recién formada", meta: "Textura suave · 07:22 AM" },
  { src: h195.url, title: "Dona con chispas", meta: "Cobertura crujiente · 07:28 AM" },
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
          className="flex flex-col gap-6"
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
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
            {shots.map((s, i) => (
              <button
                key={s.src}
                onClick={() => {
                  setActive(i);
                  setProgress(0);
                }}
                className={`relative flex-shrink-0 overflow-hidden rounded-sm border transition-all duration-500 group ${
                  i === active
                    ? "border-accent shadow-lg scale-[1.02]"
                    : "border-border hover:border-foreground/40"
                }`}
                style={{ width: "100px", height: "80px" }}
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
                {i === active && (
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
