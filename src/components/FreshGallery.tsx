import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
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
import j36 from "@/assets/gallery/julio-36.jpg.asset.json";
import j36_2 from "@/assets/gallery/julio-36_2.jpg.asset.json";
import j36_4 from "@/assets/gallery/julio-36_4.jpg.asset.json";
import j37_1 from "@/assets/gallery/julio-37_1.jpg.asset.json";
import j37_6 from "@/assets/gallery/julio-37_6.jpg.asset.json";

type Shot = { src: string; title: string };

const shots: Shot[] = [
  { src: g1.url, title: "Delicioso" },
  { src: g2.url, title: "Sabroso" },
  { src: g3.url, title: "Doradito" },
  { src: g4.url, title: "Esponjoso" },
  { src: s1.url, title: "Crujiente" },
  { src: s2.url, title: "Suavecito" },
  { src: h147.url, title: "Dulce" },
  { src: h150.url, title: "Aromático" },
  { src: h160.url, title: "Glaseado" },
  { src: h164.url, title: "Tostadito" },
  { src: h168.url, title: "Jugoso" },
  { src: h182.url, title: "Tentador" },
  { src: h186.url, title: "Tierno" },
  { src: h195.url, title: "Irresistible" },
  { src: j36.url, title: "Recién Horneado" },
  { src: j36_2.url, title: "Nuez Caramelizada" },
  { src: j36_4.url, title: "Multigrano" },
  { src: j37_1.url, title: "Hojaldrado" },
  { src: j37_6.url, title: "Nevado" },
];

export function FreshGallery() {
  const [active, setActive] = useState(0);
  const hovering = useRef(false);

  useEffect(() => {
    const t = setInterval(() => {
      if (hovering.current) return;
      setActive((a) => (a + 1) % shots.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const sideShots = [1, 2, 3].map((offset) => (active + offset) % shots.length);

  return (
    <section id="galeria" className="relative overflow-hidden bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-8 flex items-end justify-between border-b border-border pb-5">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Recién Horneado</p>
            </div>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Nuestra tanda de la mañana</h2>
          </div>
          <p className="hidden text-right text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Del horno<br /><span className="font-serif text-lg normal-case tracking-normal text-accent">a tu mesa</span>
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-3 md:h-[430px] md:grid-cols-12 md:gap-4"
          onMouseEnter={() => (hovering.current = true)}
          onMouseLeave={() => (hovering.current = false)}
        >
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-card md:col-span-7 md:aspect-auto">
            {shots.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-background md:p-9">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-background/80">El favorito del día</p>
              <h3 className="font-serif text-4xl md:text-5xl">{shots[active].title}</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:col-span-5 md:gap-4">
            {sideShots.map((shotIndex) => {
              const shot = shots[shotIndex];
              return (
              <Button
                key={shot.src}
                variant="ghost"
                onClick={() => setActive(shotIndex)}
                className="group relative h-36 overflow-hidden rounded-2xl p-0 md:h-auto"
                aria-label={`Ver ${shot.title}`}
              >
                <img
                  src={shot.src}
                  alt={shot.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/70 to-transparent p-4 text-left font-serif text-xl text-background">
                  {shot.title}
                </span>
              </Button>
              );
            })}
            <Button
              variant="outline"
              onClick={() => setActive((active + 4) % shots.length)}
              className="h-36 flex-col rounded-2xl border-dashed border-accent/50 bg-accent/5 text-accent hover:bg-accent/10 md:h-auto"
              aria-label="Ver más panes"
            >
              <span className="font-serif text-3xl">+{shots.length - 4}</span>
              <span className="text-[10px] uppercase tracking-[0.18em]">Más delicias</span>
            </Button>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-1.5" aria-label={`Imagen ${active + 1} de ${shots.length}`}>
          {shots.map((shot, index) => (
            <Button
              key={shot.src}
              variant="ghost"
              size="icon"
              onClick={() => setActive(index)}
              className={`h-2 rounded-full p-0 transition-all ${index === active ? "w-8 bg-accent hover:bg-accent" : "w-2 bg-border hover:bg-muted-foreground/40"}`}
              aria-label={`Ver imagen ${index + 1}: ${shot.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
