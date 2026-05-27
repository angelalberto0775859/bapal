import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { FloatingContact } from "@/components/FloatingContact";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/privacidad")({
  component: PrivacidadPage,
  head: () => ({
    meta: [
      { title: "Aviso de Privacidad & Cookies — BaPal" },
      {
        name: "description",
        content:
          "Consulta el aviso de privacidad, política de cookies y el tratamiento de datos personales de BaPal Panettería Boutique.",
      },
    ],
  }),
});

function PrivacidadPage() {
  const [cartOpen, setCartOpen] = useState(false);
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Nav onCart={() => setCartOpen(true)} />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="reveal mb-12 text-center">
            <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Aspectos Legales</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
              Aviso de Privacidad
            </h1>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
              En BaPal Panettería Boutique valoramos y respetamos tu privacidad. Conoce cómo
              recopilamos, utilizamos y protegemos tu información.
            </p>
          </div>

          <div className="reveal space-y-10 text-sm md:text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground mt-4">
                1. Identidad y Domicilio del Responsable
              </h2>
              <p>
                BaPal Panettería Boutique (en adelante "BaPal"), con domicilio en Av. Alfredo V.
                Bonfil 157, Coapa, Presidentes Ejidales 2da Secc, Coyoacán, 04470 Ciudad de México,
                CDMX, es responsable de recabar sus datos personales, del uso que se le dé a los
                mismos y de su protección.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground mt-4">
                2. Datos Personales Recabados
              </h2>
              <p>
                Para las finalidades señaladas en el presente Aviso de Privacidad, recopilamos los
                siguientes datos personales al utilizar nuestro catálogo de compra digital,
                solicitar cotizaciones de catering o interactuar con nuestros canales oficiales:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nombre completo o razón social.</li>
                <li>Dirección de correo electrónico.</li>
                <li>Teléfono celular o de contacto (vía WhatsApp).</li>
                <li>Detalles sobre sus eventos (fecha, número de invitados, tipo de catering).</li>
                <li>Datos de facturación (en caso de ser solicitados).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground mt-4">
                3. Finalidades del Tratamiento de Datos
              </h2>
              <p>
                Sus datos personales serán utilizados exclusivamente para las siguientes finalidades
                primarias y necesarias:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Procesar y validar sus pedidos de panadería y repostería.</li>
                <li>
                  Generar y enviar sus notas de remisión en PDF y confirmaciones a través de
                  WhatsApp.
                </li>
                <li>
                  Proporcionar cotizaciones personalizadas de nuestro servicio de catering y
                  eventos.
                </li>
                <li>Mantener comunicación directa sobre el estado de su pedido o entrega.</li>
                <li>Emitir las facturas fiscales correspondientes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground mt-4">4. Política de Cookies</h2>
              <p>
                Nuestra página web utiliza "cookies" para mejorar su experiencia de usuario. Las
                cookies son pequeños archivos de datos que se almacenan en su navegador para
                recordar información sobre su carrito de compras (artículos añadidos y cantidades) e
                interacciones básicas en la sesión actual.
              </p>
              <p>
                Usted puede desactivar o eliminar las cookies en cualquier momento configurando las
                opciones de privacidad de su navegador de internet. Tenga en cuenta que esto podría
                inhabilitar funciones esenciales del sitio, como el correcto procesamiento de su
                pedido en el catálogo.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground mt-4">5. Derechos ARCO</h2>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los
                utilizamos y las condiciones del uso que les damos (<strong>Acceso</strong>).
                Asimismo, es su derecho solicitar la corrección de su información personal en caso
                de que esté desactualizada, sea inexacta o incompleta (
                <strong>Rectificación</strong>); que la eliminemos de nuestros registros cuando
                considere que la misma no está siendo utilizada adecuadamente (
                <strong>Cancelación</strong>); así como oponerse al uso de sus datos personales para
                fines específicos (<strong>Oposición</strong>).
              </p>
              <p>
                Para ejercer sus derechos ARCO, deberá enviar una solicitud por escrito dirigida a
                nuestro correo electrónico de atención:{" "}
                <a href="mailto:panetteriabapal@gmail.com" className="text-accent hover:underline">
                  panetteriabapal@gmail.com
                </a>
                , indicando detalladamente el derecho que desea ejercer y acompañando su
                identificación oficial.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground mt-4">
                6. Modificaciones al Aviso de Privacidad
              </h2>
              <p>
                Nos reservamos el derecho de efectuar en cualquier momento modificaciones o
                actualizaciones al presente Aviso de Privacidad, para la atención de novedades
                legislativas, políticas internas o nuevos requerimientos para la prestación de
                nuestros servicios. Estas modificaciones estarán disponibles al público a través de
                esta sección de nuestro sitio web.
              </p>
              <p className="text-xs text-muted-foreground pt-4">
                Última actualización: Mayo de 2026.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Toaster position="bottom-right" />
      <FloatingContact />
    </div>
  );
}
