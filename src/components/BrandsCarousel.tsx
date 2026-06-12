import { brands } from "@/data/menu";

export function BrandsCarousel() {
  // 4× duplication for a wide, seamless infinite loop
  const loop = [...brands, ...brands, ...brands, ...brands];
  return (
    <section id="alianzas" className="py-24 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">
          Alianzas de Alta Calidad
        </p>
        <h2 className="font-serif text-3xl md:text-5xl">
          Respaldados por los mejores ingredientes
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex marquee gap-12 w-max">
          {loop.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-12 shrink-0"
            >
              <span className="font-serif italic text-3xl md:text-4xl whitespace-nowrap text-muted-foreground/50 hover:text-accent transition-colors duration-500 cursor-default">
                {b}
              </span>
              {/* Decorative diamond separator */}
              <span className="hidden md:block w-1.5 h-1.5 rotate-45 bg-accent/30 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
