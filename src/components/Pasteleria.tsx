import p1 from "@/assets/pasteleria/pasteleria-37_2.jpg.asset.json";
import p2 from "@/assets/pasteleria/pasteleria-37_3.jpg.asset.json";
import p3 from "@/assets/pasteleria/pasteleria-37_4.jpg.asset.json";
import p4 from "@/assets/pasteleria/pasteleria-37_5.jpg.asset.json";
import p5 from "@/assets/pasteleria/pasteleria-37_7.jpg.asset.json";

const items = [
  {
    src: p5.url,
    title: "Cuernos de Mantequilla",
    desc: "Hojaldre laminado a mano, dorado y brillante.",
    tag: "Clásico",
  },
  {
    src: p2.url,
    title: "Cuerno de Chocolate",
    desc: "Bañado con chocolate templado y goteado a mano.",
    tag: "Firma",
  },
  {
    src: p1.url,
    title: "Cuerno con Zarzamora",
    desc: "Relleno frutal casero con miga mantecosa.",
    tag: "Temporada",
  },
  {
    src: p3.url,
    title: "Chocolatín Doble",
    desc: "Capas de hojaldre y chocolate belga fundido.",
    tag: "Firma",
  },
  {
    src: p4.url,
    title: "Concha con Crema Pastelera",
    desc: "Concha abierta y untada con crema pastelera fresca.",
    tag: "Del día",
  },
];

export function Pasteleria() {
  return (
    <section id="pasteleria" className="relative overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-10 flex items-end justify-between border-b border-border pb-5">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Pastelería</p>
            </div>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Lo que horneamos con las manos</h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Repostería fina<br />
            <span className="font-serif text-lg normal-case tracking-normal text-accent">todos los días</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-5">
          {/* Hero */}
          <article className="group relative col-span-1 aspect-[4/3] overflow-hidden rounded-2xl bg-card md:col-span-3 md:row-span-2 md:aspect-auto">
            <img
              src={items[0].src}
              alt={items[0].title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-background md:p-8">
              <span className="mb-2 inline-block rounded-full bg-background/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-background/90 backdrop-blur-sm">
                {items[0].tag}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl">{items[0].title}</h3>
              <p className="mt-1 max-w-xs text-sm text-background/85">{items[0].desc}</p>
            </div>
          </article>

          {/* Small tiles */}
          {items.slice(1).map((it) => (
            <article
              key={it.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-card md:col-span-3 md:aspect-auto lg:col-span-3"
            >
              <img
                src={it.src}
                alt={it.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                <span className="mb-1 inline-block text-[9px] font-medium uppercase tracking-[0.22em] text-background/80">
                  {it.tag}
                </span>
                <h3 className="font-serif text-xl leading-tight">{it.title}</h3>
                <p className="mt-0.5 text-[11px] text-background/80">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
