import { useCart, cart } from "@/lib/cart-store";
import { checkout, formatMXN } from "@/lib/checkout";
import { X } from "lucide-react";

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
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-foreground/30 z-[60] transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[440px] bg-background z-[70] shadow-2xl transition-transform duration-500 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground py-12 text-center">
              Tu carrito está vacío.
            </p>
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
                        className="w-7 h-7 border border-border rounded-full text-sm hover:border-foreground"
                      >
                        −
                      </button>
                      <span className="text-sm w-6 text-center">{it.qty}</span>
                      <button
                        onClick={() => cart.setQty(it.key, it.qty + 1)}
                        className="w-7 h-7 border border-border rounded-full text-sm hover:border-foreground"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-serif">{formatMXN(it.unitPrice * it.qty)}</span>
                    <button
                      onClick={() => cart.remove(it.key)}
                      className="block text-[11px] text-muted-foreground hover:text-destructive mt-2"
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-6 py-5 space-y-4">
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
            Se descargará tu nota de remisión y se abrirá WhatsApp para validar inventario.
          </p>
        </div>
      </aside>
    </>
  );
}
