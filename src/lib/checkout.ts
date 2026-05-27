import jsPDF from "jspdf";
import type { CartItem } from "./cart-store";

const WHATSAPP_NUMBER = "525560660606";

export function generateFolio() {
  const d = new Date();
  return `BP-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}-${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}${String(Math.floor(Math.random() * 99)).padStart(2, "0")}`;
}

export function formatMXN(n: number) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(n);
}

export function generatePDF(folio: string, items: CartItem[], total: number) {
  const doc = new jsPDF({ unit: "pt", format: "a5" });
  const W = doc.internal.pageSize.getWidth();
  let y = 50;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(20);
  doc.text("BaPal", W / 2, y, { align: "center" });
  doc.setFontSize(9);
  doc.setTextColor(120);
  y += 14;
  doc.text("PANETTERIA · BOUTIQUE", W / 2, y, { align: "center" });

  y += 28;
  doc.setDrawColor(220);
  doc.line(40, y, W - 40, y);
  y += 22;

  doc.setTextColor(30);
  doc.setFontSize(10);
  doc.text(`Folio: ${folio}`, 40, y);
  doc.text(new Date().toLocaleString("es-MX"), W - 40, y, { align: "right" });
  y += 22;

  doc.setFontSize(11);
  doc.text("Producto", 40, y);
  doc.text("Cant.", W - 130, y, { align: "right" });
  doc.text("Importe", W - 40, y, { align: "right" });
  y += 8;
  doc.setDrawColor(220);
  doc.line(40, y, W - 40, y);
  y += 16;

  doc.setFontSize(10);
  items.forEach((it) => {
    const name = it.product.name + (it.variant ? ` — ${it.variant.name}` : "");
    const lines = doc.splitTextToSize(name, W - 220);
    doc.text(lines, 40, y);
    doc.text(String(it.qty), W - 130, y, { align: "right" });
    doc.text(formatMXN(it.unitPrice * it.qty), W - 40, y, { align: "right" });
    if (it.variant?.brand) {
      doc.setTextColor(140);
      doc.setFontSize(8);
      doc.text(`Marca: ${it.variant.brand}`, 40, y + 12);
      doc.setFontSize(10);
      doc.setTextColor(30);
      y += 12;
    }
    y += Math.max(16, lines.length * 12);
  });

  y += 6;
  doc.setDrawColor(30);
  doc.line(40, y, W - 40, y);
  y += 20;
  doc.setFontSize(13);
  doc.text("TOTAL", 40, y);
  doc.text(formatMXN(total), W - 40, y, { align: "right" });

  y += 36;
  doc.setFontSize(8);
  doc.setTextColor(140);
  doc.text("Gracias por elegir BaPal. Este documento es una nota de remisión digital.", W / 2, y, {
    align: "center",
  });

  doc.save(`BaPal-${folio}.pdf`);
}

export function buildWhatsappURL(folio: string, items: CartItem[], total: number) {
  const lines = [
    `*BaPal — Nueva orden*`,
    `Folio: ${folio}`,
    ``,
    `*Productos:*`,
    ...items.map(
      (i) =>
        `• ${i.qty}× ${i.product.name}${i.variant ? ` — ${i.variant.name}` : ""}${i.variant?.brand ? ` (${i.variant.brand})` : ""} — ${formatMXN(i.unitPrice * i.qty)}`,
    ),
    ``,
    `*Total neto:* ${formatMXN(total)}`,
    ``,
    `📄 PDF generado y descargado para validación de inventario.`,
  ];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function checkout(items: CartItem[]) {
  if (items.length === 0) return;
  const folio = generateFolio();
  const total = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  generatePDF(folio, items, total);
  window.open(buildWhatsappURL(folio, items, total), "_blank");
  return folio;
}
