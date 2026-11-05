import { useEffect, useRef, useState } from "react";
import { MessageCircle, Star, X, Facebook, Instagram, ArrowUpRight } from "lucide-react";

const contacts = [
  { href: "https://www.instagram.com/panetteria.bapal/", label: "Instagram", icon: Instagram },
  {
    href: "https://www.facebook.com/people/Panetteria-BaPal/100091691280340/",
    label: "Facebook",
    icon: Facebook,
  },
  { href: "https://maps.app.goo.gl/MUimij8Hxa5uN3Tp8", label: "Reseña en Google", icon: Star },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  return (
    <div
      ref={container}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      {open && (
        <nav
          id="contact-options"
          aria-label="Redes y contacto"
          className="w-64 rounded-xl border border-border bg-background p-3 shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <p className="px-3 pb-2 pt-1 font-serif text-xl">Sigamos en contacto</p>
          {contacts.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center gap-3 rounded-lg px-3 text-sm transition-colors hover:bg-secondary"
            >
              <Icon className="size-4 text-accent" />
              <span className="flex-1">{label}</span>
              <ArrowUpRight className="size-3.5 text-muted-foreground" />
            </a>
          ))}
        </nav>
      )}
      <button
        ref={trigger}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Cerrar menú de contacto" : "Abrir menú de contacto"}
        aria-expanded={open}
        aria-controls={open ? "contact-options" : undefined}
        className="grid size-14 place-items-center rounded-full border border-background/20 bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
