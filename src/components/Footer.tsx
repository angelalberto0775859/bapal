import logo from "@/assets/bapal-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <img src={logo} alt="BaPal" className="h-16 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-xs">
            Panettería boutique. Masa madre, ingredientes nobles y horneado del día.
          </p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="uppercase text-xs tracking-widest text-foreground mb-3">Contacto</p>
          <p>WhatsApp: +52 55 6066 0606</p>
          <p>hola@bapal.mx</p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="uppercase text-xs tracking-widest text-foreground mb-3">Horario</p>
          <p>Mar – Dom · 8:00 a 20:00</p>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-12">
        © {new Date().getFullYear()} BaPal Panettería. Todos los derechos reservados.
      </p>
    </footer>
  );
}
