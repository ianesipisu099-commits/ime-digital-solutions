import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  school?: string;
  phone?: string;
  email?: string;
  message?: string;
};

function asStr(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: Request) {
  try {
    const endpoint = process.env.FORMSPREE_ENDPOINT;
    if (!endpoint) {
      return NextResponse.json(
        { ok: false, error: "Missing FORMSPREE_ENDPOINT" },
        { status: 500 }
      );
    }

    const data = (await req.json()) as LeadPayload;

    // Basic payload normalization
    const payload = {
      name: asStr(data.name),
      school: asStr(data.school),
      phone: asStr(data.phone),
      email: asStr(data.email),
      message: asStr(data.message),

      source: "ime-digital-solutions-site",
      page: "contact",
      createdAt: new Date().toISOString(),
    };

    // Simple size guard (avoid abuse)
    const bodyStr = JSON.stringify(payload);
    if (bodyStr.length > 10_000) {
      return NextResponse.json(
        { ok: false, error: "Payload too large" },
        { status: 413 }
      );
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: bodyStr,
    });

    if (!res.ok) {
      const details = await res.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: "Form provider error", details },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
