import { brands } from "@/data/menu";

export function BrandsCarousel() {
  const loop = [...brands, ...brands];
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
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex marquee gap-20 w-max">
          {loop.map((b, i) => (
            <div
              key={i}
              className="font-serif italic text-3xl md:text-4xl whitespace-nowrap text-muted-foreground/50 hover:text-accent transition-colors duration-500 cursor-default"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
