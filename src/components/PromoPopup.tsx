import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CakeSlice, Croissant, CalendarDays } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import bread from "@/assets/hero-bread.jpg";

const SEEN_KEY = "bapal_discover_v1_seen";
const destinations = [
  { href: "/#catalogo", title: "Pan artesanal", detail: "Explora el catálogo", icon: Croissant },
  {
    href: "/#pasteleria",
    title: "Pastelería",
    detail: "Encuentra tu próximo pastel",
    icon: CakeSlice,
  },
  {
    href: "/eventos",
    title: "Eventos y catering",
    detail: "Planea algo para compartir",
    icon: CalendarDays,
  },
];

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const show = () => {
      if (document.querySelector('[role="dialog"][data-state="open"]')) return;
      opener.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "true");
      } catch {
        /* Storage may be unavailable. */
      }
    };
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (
          window.location.pathname !== "/" ||
          window.location.hash ||
          document.visibilityState !== "visible" ||
          document.querySelector('[role="dialog"][data-state="open"]')
        )
          return;
        show();
      }, 1800);
    };
    window.addEventListener("bapal:discover", show);
    window.addEventListener("bapal:cookies-accepted", schedule);
    try {
      if (
        localStorage.getItem("bapal_cookies_accepted") === "true" &&
        !sessionStorage.getItem(SEEN_KEY) &&
        !window.location.hash
      )
        schedule();
    } catch {
      /* Explicit discovery remains available without storage. */
    }
    return () => {
      clearTimeout(timer);
      window.removeEventListener("bapal:discover", show);
      window.removeEventListener("bapal:cookies-accepted", schedule);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          const target =
            opener.current?.isConnected && opener.current !== document.body
              ? opener.current
              : document.querySelector<HTMLElement>('header a[href="/"]');
          target?.focus({ preventScroll: true });
        }}
        className="discover-popup block overflow-y-auto p-0 sm:max-w-[760px]"
      >
        <div className="grid sm:grid-cols-[0.85fr_1fr]">
          <div className="relative min-h-36 sm:min-h-full">
            <img
              src={bread}
              alt="Pan artesanal de BaPal"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
            <p className="absolute bottom-5 left-6 font-serif text-3xl text-primary-foreground sm:bottom-8 sm:text-4xl">
              BaPal{" "}
              <span className="mt-1 block font-sans text-[10px] uppercase tracking-[0.3em]">
                Panettería artesanal
              </span>
            </p>
          </div>
          <div className="px-6 pb-6 pt-7 sm:px-8 sm:py-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
              Hecho para compartir
            </p>
            <DialogTitle className="font-serif text-4xl font-normal leading-[1.05] sm:text-5xl">
              ¿Qué se te antoja hoy?
            </DialogTitle>
            <DialogDescription className="mt-4 text-sm leading-relaxed">
              Pan artesanal, un pastel especial o algo para tu próximo evento. Descubre lo que
              preparamos en BaPal.
            </DialogDescription>
            <div className="my-5 divide-y divide-border border-y border-border">
              {destinations.map(({ href, title, detail, icon: Icon }) => (
                <DialogClose key={href} asChild>
                  <a
                    href={href}
                    className="group flex items-center gap-3 py-4 transition-colors hover:text-accent"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium">{title}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{detail}</span>
                    </span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </DialogClose>
              ))}
            </div>
            <DialogClose className="min-h-11 w-full text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground">
              Seguir explorando
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
