import logo from "@/assets/bapal-logo.png";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <img src={logo} alt="BaPal Panettería" className="h-16 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-xs mb-4">
            Panettería boutique. Masa madre, ingredientes nobles y horneado del día.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Panetteria-BaPal/100091691280340/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/panetteria.bapal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="uppercase text-xs tracking-widest text-foreground mb-3">Contacto</p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/525560660606"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              +52 55 6066 0606
            </a>
          </p>
          <p>
            <a
              href="mailto:panetteriabapal@gmail.com"
              className="hover:text-foreground transition"
            >
              panetteriabapal@gmail.com
            </a>
          </p>
          <p className="pt-2 leading-relaxed">
            Av. Alfredo V. Bonfil 157, Coapa<br />
            Presidentes Ejidales 2da Secc<br />
            Coyoacán, 04470 Ciudad de México, CDMX
          </p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="uppercase text-xs tracking-widest text-foreground mb-3">Horario</p>
          <p>Lun – Sáb · 8:00 a 21:00</p>
          <p>Dom · 8:00 a 20:00</p>
          <a
            href="https://maps.app.goo.gl/MUimij8Hxa5uN3Tp8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-accent hover:underline"
          >
            Déjanos una reseña en Google →
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="overflow-hidden rounded-lg border border-border shadow-sm">
          <iframe
            title="Mapa de BaPal Panettería"
            src="https://www.google.com/maps?q=Av.+Alfredo+V.+Bonfil+157,+Coapa,+Presidentes+Ejidales+2da+Secc,+Coyoac%C3%A1n,+04470+Ciudad+de+M%C3%A9xico,+CDMX&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          href="https://maps.app.goo.gl/MUimij8Hxa5uN3Tp8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-accent hover:underline"
        >
          Cómo llegar →
        </a>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-12">
        © {new Date().getFullYear()} BaPal Panettería. Todos los derechos reservados.
      </p>
    </footer>
  );
}
