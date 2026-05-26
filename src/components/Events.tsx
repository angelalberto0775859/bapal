import { useState } from "react";
import corp from "@/assets/catering-corporate.jpg";
import weddings from "@/assets/catering-weddings.jpg";
import pastry from "@/assets/catering-pastry.jpg";
import { toast } from "sonner";

const tabs = [
  {
    id: "corp",
    label: "Catering Corporativo",
    img: corp,
    title: "Catering Corporativo & Mesas de Eventos",
    body:
      "Soluciones sofisticadas con panadería miniatura, estaciones de café de especialidad y bocadillos finos para reuniones empresariales o salas de eventos.",
  },
  {
    id: "wed",
    label: "Bodas & Banquetes",
    img: weddings,
    title: "Bodas & Grandes Banquetes",
    body:
      "Pastelería de alta costura, diseños personalizados y barras de postres conceptuales que se adaptan a la paleta cromática de la celebración.",
  },
  {
    id: "pat",
    label: "Alta Repostería",
    img: pastry,
    title: "Alta Repostería en General",
    body:
      "Tartas finas, macarons franceses y pan rústico salado ideal para maridajes en cenas privadas y eventos íntimos.",
  },
];

export function Events() {
  const [active, setActive] = useState(tabs[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    if (!name) return;
    toast.success("Solicitud recibida", { description: "Te contactaremos en menos de 24 horas." });
    e.currentTarget.reset();
  }

  return (
    <section id="eventos" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal max-w-2xl mb-16">
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">División Exclusiva</p>
          <h2 className="font-serif text-4xl md:text-6xl">Eventos & Catering</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              className={`px-5 py-3 text-sm transition relative ${active.id === t.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t.label}
              {active.id === t.id && (
                <span className="absolute -bottom-px inset-x-0 h-px bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            key={active.id}
            src={active.img}
            alt={active.title}
            className="w-full aspect-[4/3] object-cover rounded-sm animate-in fade-in duration-700"
            loading="lazy"
            width={1200}
            height={900}
          />
          <div>
            <h3 className="font-serif text-3xl md:text-4xl">{active.title}</h3>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{active.body}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal mt-24 bg-card border border-border p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-2xl md:text-3xl mb-2">Cotización Premium</h3>
          <p className="text-muted-foreground text-sm mb-8">
            Cuéntanos los detalles de tu evento. Recibirás una propuesta personalizada.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <Field id="event-name" name="name" label="Nombre" required />
            <Field id="event-email" name="email" label="Correo" type="email" required />
            <Field id="event-date" name="date" label="Fecha del evento" type="date" required />
            <Field id="event-guests" name="guests" label="Número de invitados" type="number" required />
            <div className="md:col-span-2">
              <label htmlFor="event-service" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Tipo de servicio
              </label>
              <select
                id="event-service"
                name="service"
                className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-accent transition text-foreground"
              >
                <option>Catering Corporativo</option>
                <option>Bodas & Banquetes</option>
                <option>Alta Repostería</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="event-message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Mensaje
              </label>
              <textarea
                id="event-message"
                name="message"
                rows={3}
                className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-accent transition resize-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-10 px-8 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition"
          >
            Solicitar propuesta
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ id, name, label, type = "text", required }: { id: string; name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-accent transition"
      />
    </div>
  );
}
