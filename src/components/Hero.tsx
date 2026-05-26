import hero from "@/assets/hero-bread.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-6">Panettería Boutique</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-foreground">
            El arte del pan,<br/>
            <em className="text-accent not-italic">elevado.</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
            Masa madre de fermentación lenta, ingredientes nobles y un horneado del día.
            Para mesas exigentes y eventos memorables.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#catalogo" className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition">
              Explorar catálogo
            </a>
            <a href="#eventos" className="px-6 py-3 rounded-full border border-foreground/20 text-sm font-medium hover:border-foreground transition">
              Eventos & Catering
            </a>
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="Hogaza artesanal" className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl" width={1600} height={1200} />
          <div className="absolute -bottom-6 -left-6 hidden md:block polaroid w-40 rotate-[-4deg]">
            <div className="aspect-square bg-secondary" />
            <p className="font-serif text-xs text-center mt-2 text-muted-foreground">desde 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}
