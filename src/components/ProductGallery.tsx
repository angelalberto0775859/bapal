import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

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
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const activeImage = galleryImages[selected];
  const previewImages = useMemo(() => galleryImages.slice(0, 12), []);

  function move(direction: number) {
    setSelected((current) => (current + direction + galleryImages.length) % galleryImages.length);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section id="panes-vendidos" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Panes vendidos</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Antojo real, presentación artesanal
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-2xl md:ml-auto">
            Estas piezas vienen de producción real. Las estandarizamos con fondo cálido y luz más
            apetecible para que el cliente pueda revisar textura, forma y variedad sin sentir una
            galería improvisada de WhatsApp.
          </p>
        </div>

        <div className="reveal grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <figure className="relative overflow-hidden border border-border bg-card">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="group block w-full cursor-zoom-in"
              aria-label="Ver pan seleccionado en grande"
            >
              <img
                src={activeImage.src}
                alt={`Pan artesanal BaPal ${selected + 1}`}
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                loading="eager"
                width={1200}
                height={900}
              />
              <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition group-hover:bg-foreground group-hover:text-background">
                <Expand className="h-4 w-4" />
              </span>
            </button>
            <figcaption className="flex items-center justify-between border-t border-border px-4 py-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span>
                Pieza {selected + 1} de {galleryImages.length}
              </span>
              <span>Click para ampliar</span>
            </figcaption>
          </figure>

          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-3">
            {previewImages.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setSelected(index)}
                className={`group relative aspect-square overflow-hidden border bg-card transition ${
                  selected === index
                    ? "border-foreground shadow-md"
                    : "border-border hover:border-foreground/50"
                }`}
                aria-label={`Ver pan artesanal ${index + 1}`}
              >
                <img
                  src={item.src}
                  alt={`Miniatura pan artesanal BaPal ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading={index < 6 ? "eager" : "lazy"}
                  width={420}
                  height={420}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/90 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de panes BaPal"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition hover:scale-105"
            aria-label="Cerrar visor"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => move(-1)}
            className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition hover:scale-105 md:inline-flex"
            aria-label="Ver pan anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <img
            src={activeImage.src}
            alt={`Pan artesanal BaPal ${selected + 1}`}
            className="max-h-[82vh] w-auto max-w-full border border-background/20 object-contain shadow-2xl"
            width={1400}
            height={1400}
          />

          <button
            type="button"
            onClick={() => move(1)}
            className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition hover:scale-105 md:inline-flex"
            aria-label="Ver pan siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-background px-4 py-2 text-xs uppercase tracking-[0.22em] text-muted-foreground shadow-lg">
            <button
              type="button"
              onClick={() => move(-1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border md:hidden"
              aria-label="Ver pan anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span>
              {selected + 1} / {galleryImages.length}
            </span>
            <button
              type="button"
              onClick={() => move(1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border md:hidden"
              aria-label="Ver pan siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
