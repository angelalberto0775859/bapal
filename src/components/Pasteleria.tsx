import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import c1 from "@/assets/pasteleria/cake-4-03-36pm_1.jpg.asset.json";
import c2 from "@/assets/pasteleria/cake-4-03-36pm_3.jpg.asset.json";
import c3 from "@/assets/pasteleria/cake-4-04-34pm.jpg.asset.json";
import c4 from "@/assets/pasteleria/cake-4-04-34pm_1.jpg.asset.json";
import c5 from "@/assets/pasteleria/cake-4-04-34pm_2.jpg.asset.json";
import c6 from "@/assets/pasteleria/cake-4-04-34pm_3.jpg.asset.json";
import c7 from "@/assets/pasteleria/cake-4-04-35pm_1.jpg.asset.json";
import c8 from "@/assets/pasteleria/cake-4-04-35pm_2.jpg.asset.json";
import c9 from "@/assets/pasteleria/cake-4-04-35pm_3.jpg.asset.json";

const cakes = [
  { src: c3.url, title: "Pastel de Bodas", tag: "Eventos" },
  { src: c9.url, title: "Pastel Nupcial", tag: "Bodas" },
  { src: c1.url, title: "Pastel de Durazno", tag: "Del día" },
  { src: c2.url, title: "Chantilly con Fruta", tag: "Clásico" },
  { src: c4.url, title: "Cumpleaños Personalizado", tag: "A pedido" },
  { src: c5.url, title: "Cumpleaños Clásico", tag: "Clásico" },
  { src: c6.url, title: "Impresión Comestible", tag: "A pedido" },
  { src: c7.url, title: "Mesa de Postres", tag: "Eventos" },
  { src: c8.url, title: "Pastel de Nuez", tag: "Firma" },
];

export function Pasteleria() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    servings: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Nombre y teléfono son requeridos");
      return;
    }
    const msg = `Hola BaPal, quiero cotizar un pastel:%0A%0A👤 ${form.name}%0A📞 ${form.phone}%0A📅 Fecha: ${form.date || "—"}%0A🍰 Porciones: ${form.servings || "—"}%0A📝 ${form.details || "—"}`;
    window.open(`https://wa.me/525667663556?text=${msg}`, "_blank");
    toast.success("Abriendo WhatsApp para tu cotización");
  };

  return (
    <section id="pasteleria" className="relative overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-10 flex items-end justify-between border-b border-border pb-5">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Pastelería</p>
            </div>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Pasteles para cada ocasión</h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Bodas · Cumpleaños<br />
            <span className="font-serif text-lg normal-case tracking-normal text-accent">a tu medida</span>
          </p>
        </div>

        {/* Grid compacto de pasteles */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          {cakes.map((cake) => (
            <article
              key={cake.src}
              className="group relative aspect-square overflow-hidden rounded-xl bg-card"
            >
              <img
                src={cake.src}
                alt={cake.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-background">
                <span className="mb-0.5 inline-block text-[9px] font-medium uppercase tracking-[0.22em] text-background/80">
                  {cake.tag}
                </span>
                <h3 className="font-serif text-sm leading-tight md:text-base">{cake.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Cotización */}
        <div className="mt-14 rounded-2xl border border-border bg-card p-6 md:p-10">
          <div className="mb-6 flex flex-col gap-2 border-b border-border pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">Cotiza tu pastel</p>
              <h3 className="font-serif text-2xl text-foreground md:text-3xl">Diseñamos el pastel que imaginas</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cuéntanos los detalles y recibirás tu cotización por WhatsApp.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="cake-name">Nombre</Label>
              <Input
                id="cake-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                maxLength={80}
                required
              />
            </div>
            <div>
              <Label htmlFor="cake-phone">Teléfono</Label>
              <Input
                id="cake-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="55 0000 0000"
                maxLength={20}
                required
              />
            </div>
            <div>
              <Label htmlFor="cake-date">Fecha del evento</Label>
              <Input
                id="cake-date"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="cake-servings">Porciones aprox.</Label>
              <Input
                id="cake-servings"
                type="number"
                min={1}
                value={form.servings}
                onChange={(e) => setForm({ ...form, servings: e.target.value })}
                placeholder="20"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="cake-details">Detalles del pastel</Label>
              <Textarea
                id="cake-details"
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="Sabor, relleno, colores, temática, mensaje…"
                rows={4}
                maxLength={500}
              />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Enviar cotización por WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
