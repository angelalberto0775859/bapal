const EVENTS_TO_EMAIL = "panetteriabapal@gmail.com";

type EventsEnv = {
  RECAPTCHA_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  EVENTS_FROM_EMAIL?: string;
  EVENTS_TO_EMAIL?: string;
};

type EventPayload = {
  name?: string;
  email?: string;
  date?: string;
  guests?: string;
  service?: string;
  message?: string;
  recaptchaToken?: string;
};

function json(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...init?.headers,
    },
  });
}

function clean(value: unknown) {
  return String(value ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function requiredEnv(env: EventsEnv) {
  const missing = [];
  if (!env.RECAPTCHA_SECRET_KEY) missing.push("RECAPTCHA_SECRET_KEY");
  if (!env.RESEND_API_KEY) missing.push("RESEND_API_KEY");
  return missing;
}

async function verifyRecaptcha(token: string, request: Request, env: EventsEnv) {
  if (!env.RECAPTCHA_SECRET_KEY) return false;

  const form = new URLSearchParams({
    secret: env.RECAPTCHA_SECRET_KEY,
    response: token,
  });

  const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for");
  if (ip) form.set("remoteip", ip.split(",")[0].trim());

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: form,
  });

  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

function buildEmail(payload: Required<EventPayload>) {
  const rows = [
    ["Nombre", payload.name],
    ["Correo", payload.email],
    ["Fecha del evento", payload.date],
    ["Invitados", payload.guests],
    ["Servicio", payload.service],
    ["Mensaje", payload.message || "Sin mensaje adicional"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #eadfce;color:#7a6a5a;font-size:12px;text-transform:uppercase;letter-spacing:.08em;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #eadfce;color:#2d241f;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;background:#f8f1e6;padding:28px;">
      <div style="max-width:640px;margin:auto;background:#fffaf3;border:1px solid #eadfce;padding:28px;">
        <p style="margin:0 0 8px;color:#b7682c;font-size:12px;text-transform:uppercase;letter-spacing:.18em;">BaPal Eventos</p>
        <h1 style="margin:0 0 22px;font-family:Georgia,serif;font-weight:400;color:#2d241f;">Nueva solicitud de cotización</h1>
        <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
      </div>
    </div>`;
}

async function sendEventEmail(payload: Required<EventPayload>, env: EventsEnv) {
  const to = env.EVENTS_TO_EMAIL || EVENTS_TO_EMAIL;
  const from = env.EVENTS_FROM_EMAIL || "BaPal Eventos <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `Nueva cotización BaPal: ${payload.service}`,
      html: buildEmail(payload),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend failed: ${response.status} ${body}`);
  }
}

export async function handleEventsApi(request: Request, env: unknown) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }

  const typedEnv = (env || {}) as EventsEnv;
  const missing = requiredEnv(typedEnv);
  if (missing.length > 0) {
    return json(
      {
        error: "Configuración incompleta del servidor.",
        missing,
      },
      { status: 500 },
    );
  }

  let rawPayload: EventPayload;
  try {
    rawPayload = (await request.json()) as EventPayload;
  } catch {
    return json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const payload: Required<EventPayload> = {
    name: clean(rawPayload.name),
    email: clean(rawPayload.email),
    date: clean(rawPayload.date),
    guests: clean(rawPayload.guests),
    service: clean(rawPayload.service),
    message: clean(rawPayload.message),
    recaptchaToken: clean(rawPayload.recaptchaToken),
  };

  if (!payload.name || !payload.email || !payload.date || !payload.guests || !payload.service) {
    return json({ error: "Completa los campos obligatorios." }, { status: 400 });
  }

  if (!payload.recaptchaToken) {
    return json({ error: "Confirma el reCAPTCHA antes de enviar." }, { status: 400 });
  }

  const captchaOk = await verifyRecaptcha(payload.recaptchaToken, request, typedEnv);
  if (!captchaOk) {
    return json({ error: "No pudimos validar el reCAPTCHA." }, { status: 400 });
  }

  await sendEventEmail(payload, typedEnv);
  return json({ ok: true });
}
