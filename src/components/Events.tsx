import { useEffect, useRef, useState } from "react";
import corp from "@/assets/catering-corporate.jpg";
import weddings from "@/assets/catering-weddings.jpg";
import pastry from "@/assets/catering-pastry.jpg";
import { toast } from "sonner";

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, parameters: { sitekey: string }) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
  }
}

const tabs = [
  {
    id: "corp",
    label: "Catering Corporativo",
    img: corp,
    title: "Catering Corporativo & Mesas de Eventos",
    body: "Soluciones sofisticadas con panadería miniatura, estaciones de café de especialidad y bocadillos finos para reuniones empresariales o salas de eventos.",
  },
  {
    id: "wed",
    label: "Bodas & Banquetes",
    img: weddings,
    title: "Bodas & Grandes Banquetes",
    body: "Pastelería de alta costura, diseños personalizados y barras de postres conceptuales que se adaptan a la paleta cromática de la celebración.",
  },
  {
    id: "pat",
    label: "Alta Repostería",
    img: pastry,
    title: "Alta Repostería en General",
    body: "Tartas finas, macarons franceses y pan rústico salado ideal para maridajes en cenas privadas y eventos íntimos.",
  },
];

export function Events() {
  const [active, setActive] = useState(tabs[0]);
  const [submitting, setSubmitting] = useState(false);
  const [captchaReady, setCaptchaReady] = useState(false);
  const captchaContainerRef = useRef<HTMLDivElement | null>(null);
  const captchaWidgetIdRef = useRef<number | null>(null);
  const recaptchaSiteKey = (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined)?.trim();

  useEffect(() => {
    if (!recaptchaSiteKey) return;

    const existing = document.querySelector<HTMLScriptElement>("script[data-bapal-recaptcha]");
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.dataset.bapalRecaptcha = "true";
      script.onload = () => setCaptchaReady(true);
      document.head.appendChild(script);
    } else {
      setCaptchaReady(Boolean(window.grecaptcha));
    }

    const interval = window.setInterval(() => {
      if (window.grecaptcha && captchaContainerRef.current && captchaWidgetIdRef.current === null) {
        captchaWidgetIdRef.current = window.grecaptcha.render(captchaContainerRef.current, {
          sitekey: recaptchaSiteKey,
        });
        setCaptchaReady(true);
      }
    }, 250);

    return () => window.clearInterval(interval);
  }, [recaptchaSiteKey]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    if (!name) return;

    if (!recaptchaSiteKey) {
      toast.error("Formulario temporalmente en revisión", {
        description: "Escríbenos por WhatsApp y te cotizamos el evento de inmediato.",
      });
      return;
    }

    const widgetId = captchaWidgetIdRef.current ?? undefined;
    const recaptchaToken = window.grecaptcha?.getResponse(widgetId);
    if (!recaptchaToken) {
      toast.error("Confirma el reCAPTCHA", {
        description: "Necesitamos verificar que la solicitud no sea spam.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email: String(fd.get("email") || "").trim(),
          date: String(fd.get("date") || "").trim(),
          guests: String(fd.get("guests") || "").trim(),
          service: String(fd.get("service") || "").trim(),
          message: String(fd.get("message") || "").trim(),
          recaptchaToken,
        }),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "No se pudo enviar la solicitud.");
      }

      toast.success("Solicitud enviada", {
        description: "La cotización se envió a panetteriabapal@gmail.com.",
      });
      form.reset();
      window.grecaptcha?.reset(widgetId);
    } catch (error) {
      toast.error("No se pudo enviar", {
        description:
          error instanceof Error
            ? error.message
            : "Inténtalo de nuevo o escríbenos directamente por WhatsApp.",
      });
      window.grecaptcha?.reset(widgetId);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="eventos" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal max-w-2xl mb-16 mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">División Exclusiva</p>
          <h2 className="font-serif text-4xl md:text-5xl md:text-6xl">Eventos & Catering</h2>
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
            <Field
              id="event-guests"
              name="guests"
              label="Número de invitados"
              type="number"
              required
            />
            <div className="md:col-span-2">
              <label
                htmlFor="event-service"
                className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
              >
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
              <label
                htmlFor="event-message"
                className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="event-message"
                name="message"
                rows={3}
                className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-accent transition resize-none"
              />
            </div>
            <div className="md:col-span-2 min-h-[78px]">
              {recaptchaSiteKey ? (
                <div ref={captchaContainerRef} />
              ) : (
                <div className="rounded-sm border border-accent/20 bg-accent/5 p-4 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Verificación segura pendiente</p>
                  <p className="mt-1">
                    Para cotizar ahora, envíanos los detalles por WhatsApp y te respondemos con una
                    propuesta personalizada.
                  </p>
                  <a
                    href="https://wa.me/525567857724?text=Hola%20BaPal%2C%20quiero%20cotizar%20un%20evento."
                    className="mt-3 inline-flex text-xs font-semibold uppercase tracking-widest text-accent hover:text-foreground"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cotizar por WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting || !captchaReady || !recaptchaSiteKey}
            className="mt-10 px-8 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Enviando..." : "Solicitar propuesta"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
      >
        {label}
      </label>
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
