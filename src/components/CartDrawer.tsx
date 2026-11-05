import { useCart, cart } from "@/lib/cart-store";
import { checkout, formatMXN } from "@/lib/checkout";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const items = useCart();
  const total = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);

  function handleCheckout() {
    const folio = checkout(items);
    if (folio) {
      cart.clear();
      onClose();
    }
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-primary/45 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            const trigger = Array.from(
              document.querySelectorAll<HTMLButtonElement>("header button"),
            ).find(
              (button) =>
                (button.getAttribute("aria-label") === "Abrir carrito" ||
                  button.textContent?.includes("Carrito")) &&
                button.getClientRects().length > 0,
            );
            trigger?.focus();
          }}
          className="fixed inset-y-0 right-0 z-[90] flex h-dvh w-full flex-col bg-background shadow-2xl sm:max-w-[440px] data-[state=open]:animate-in data-[state=open]:slide-in-from-right duration-300"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-accent">
                Hecho para compartir
              </p>
              <Dialog.Title className="font-serif text-3xl">Tu carrito</Dialog.Title>
            </div>
            <Dialog.Close
              className="grid size-11 place-items-center hover:bg-secondary rounded-full transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-4 h-4" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Revisa tus productos y cantidades antes de confirmar tu orden.
          </Dialog.Description>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex min-h-64 flex-col items-center justify-center py-10 text-center">
                <span className="mb-5 grid size-16 place-items-center rounded-full bg-secondary">
                  <ShoppingBag className="size-6 text-accent" strokeWidth={1.5} />
                </span>
                <p className="font-serif text-3xl">Tu carrito está vacío.</p>
                <p className="mt-3 max-w-60 text-sm leading-relaxed text-muted-foreground">
                  Encuentra tu pan favorito y agrégalo a tu pedido.
                </p>
                <a
                  href="/#catalogo"
                  onClick={onClose}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground"
                >
                  Explorar catálogo <ArrowRight className="size-4" />
                </a>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((it) => (
                  <li key={it.key} className="flex gap-4 pb-5 border-b border-border/60">
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-base leading-tight">{it.product.name}</p>
                      {it.variant && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {it.variant.name}
                          {it.variant.brand && ` · ${it.variant.brand}`}
                        </p>
                      )}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => cart.setQty(it.key, it.qty - 1)}
                          aria-label={`Reducir cantidad de ${it.product.name}`}
                          className="w-11 h-11 border border-border rounded-full text-sm hover:border-foreground"
                        >
                          −
                        </button>
                        <span className="text-sm w-6 text-center tabular-nums" aria-live="polite">
                          {it.qty}
                        </span>
                        <button
                          onClick={() => cart.setQty(it.key, it.qty + 1)}
                          aria-label={`Aumentar cantidad de ${it.product.name}`}
                          className="w-11 h-11 border border-border rounded-full text-sm hover:border-foreground"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-serif">{formatMXN(it.unitPrice * it.qty)}</span>
                      <button
                        onClick={() => cart.remove(it.key)}
                        aria-label={`Quitar ${it.product.name} del carrito`}
                        className="block min-h-11 text-xs text-muted-foreground hover:text-destructive mt-2"
                      >
                        Quitar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="shrink-0 border-t border-border px-6 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Total</span>
              <span className="font-serif text-2xl">{formatMXN(total)}</span>
            </div>
            <button
              disabled={items.length === 0}
              onClick={handleCheckout}
              className="w-full py-4 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-widest hover:bg-accent/90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Confirmar orden · WhatsApp + PDF
            </button>
            <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
              Pago por transferencia. Se descargará tu nota de remisión y se abrirá WhatsApp para
              enviar el ticket y validar inventario.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
