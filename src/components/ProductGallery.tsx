const galleryImages = Object.entries(
  import.meta.glob("@/assets/Panes/edited/*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  }),
)
  .map(([path, src]) => ({
    src: `${src as string}?v=paper`,
    name:
      path.split("/").pop()?.replace(".jpg", "").replace("pan-", "Pieza ").replaceAll("-", " ") ??
      "Pan artesanal",
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "es"));

export function ProductGallery() {
  return (
    <section id="panes-vendidos" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Panes vendidos</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Antojo real, presentación boutique
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-2xl md:ml-auto">
            Estas piezas vienen de producción real. Las estandarizamos con fondo cálido y luz más
            apetecible para que el cliente vea variedad sin sentir una galería improvisada de
            WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {galleryImages.map((item, index) => (
            <figure
              key={item.src}
              className="reveal group overflow-hidden border border-border bg-card"
              style={{ transitionDelay: `${Math.min(index, 10) * 35}ms` }}
            >
              <img
                src={item.src}
                alt={`Pan artesanal BaPal ${index + 1}`}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading={index < 8 ? "eager" : "lazy"}
                width={1200}
                height={1200}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
