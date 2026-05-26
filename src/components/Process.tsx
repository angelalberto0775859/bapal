import p1 from "@/assets/process-1.jpg";
import p2 from "@/assets/process-2.jpg";
import p3 from "@/assets/process-3.jpg";

const steps = [
  {
    n: "01",
    title: "Masa Madre Selecta",
    img: p1,
    body:
      "Maduración y fermentación lenta controlada de más de 48 horas. Una miga aireada, sabor profundo y digestibilidad perfecta.",
  },
  {
    n: "02",
    title: "Ingredientes Nobles",
    img: p2,
    body:
      "Harinas orgánicas, masas rústicas y respeto absoluto por los tiempos de reposo. Sin atajos, sin aditivos.",
  },
  {
    n: "03",
    title: "Horneado del Día",
    img: p3,
    body:
      "Piezas que salen del horno directamente a las manos del cliente. Frescura instantánea, costra crujiente.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal max-w-2xl mb-24 mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Experiencia Artesanal</p>
          <h2 className="font-serif text-4xl md:text-5xl md:text-6xl">Nuestro Proceso</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
            Tres etapas. Tres obsesiones. La promesa silenciosa detrás de cada pieza BaPal.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`reveal grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-6">
                <div className="polaroid inline-block max-w-md">
                  <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover" loading="lazy" width={1200} height={900} />
                  <p className="font-serif text-sm text-center mt-3 text-muted-foreground">{s.title}</p>
                </div>
              </div>
              <div className="md:col-span-6 md:pl-8">
                <span className="font-serif text-7xl text-accent/30">{s.n}</span>
                <h3 className="font-serif text-3xl md:text-4xl mt-2">{s.title}</h3>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
