"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ime } from "@/content/ime";
import { Container, SectionTitle, Card, Button } from "@/components/ui";

type FormState = {
  name: string;
  school: string;
  phone: string;
  email: string;
  message: string;
};

function buildWhatsAppMessage(form: FormState) {
  const name = form.name.trim() || "—";
  const school = form.school.trim() || "—";
  const phone = form.phone.trim() || "—";
  const email = form.email.trim() || "—";
  const notes = form.message.trim();

  const lines = [
    `Hello, I’m ${name}${school !== "—" ? ` from ${school}` : ""}.`,
    "We’d like a school website (or an upgrade). When can we view a demo?",
    "",
    "Details:",
    `School/Institution: ${school}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
  ];

  if (notes) lines.push("", `Notes: ${notes}`);

  return lines.join("\n");
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    school: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sendingBackup, setSendingBackup] = useState(false);
  const [backupStatus, setBackupStatus] = useState<null | "ok" | "fail">(null);

  const waLink = useMemo(() => {
    const message = buildWhatsAppMessage(form);
    const encoded = encodeURIComponent(message);
    return `${ime.contact.whatsappHref}?text=${encoded}`;
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function openWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.open(waLink, "_blank", "noreferrer");
  }

  async function sendBackupLead() {
    setSendingBackup(true);
    setBackupStatus(null);

    try {
      const payload = {
        name: form.name.trim(),
        school: form.school.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send");
      setBackupStatus("ok");
    } catch {
      setBackupStatus("fail");
    } finally {
      setSendingBackup(false);
    }
  }

  return (
    <div className="py-10">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Request a demo, ask a question, or share your school details — we’ll respond promptly."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* LEFT: Quick actions */}
          <Card className="p-6 lg:col-span-1">
            <h3 className="text-lg font-semibold">Quick actions</h3>
            <p className="mt-2 text-sm text-gray-600">
              WhatsApp is usually the quickest for schools. You can also call or email.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Button asChild>
                <Link href={waLink} target="_blank" rel="noreferrer">
                  Message on WhatsApp
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href={`tel:${ime.contact.phoneHref}`}>
                  Call {ime.contact.phoneDisplay}
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href={`mailto:${ime.contact.email}`}>Email {ime.contact.email}</Link>
              </Button>
            </div>

            <div className="mt-6 rounded-2xl border bg-gray-50 p-4 text-sm text-gray-700">
              <p className="font-medium">What happens next</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-gray-600">
                <li>We confirm your needs (5–10 minutes).</li>
                <li>We share a reference demo and recommended plan.</li>
                <li>If approved, we start Phase 1 (LV1).</li>
              </ol>
            </div>
          </Card>

          {/* RIGHT: Form */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold">Request a demo</h3>
            <p className="mt-2 text-sm text-gray-600">
              Fill what you can. Clicking submit opens WhatsApp with your message ready to send.
              You can also use the backup form submit below.
            </p>

            <form onSubmit={openWhatsApp} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Your name</label>
                <input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
                  placeholder="e.g., Mr. Otieno"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-sm font-medium">School / Institution</label>
                <input
                  value={form.school}
                  onChange={(e) => update("school", e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
                  placeholder="e.g., St. Marks Senior School"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Phone</label>
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
                  placeholder="e.g., 0712 345 678"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Email (optional)</label>
                <input
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
                  placeholder="e.g., info@school.ac.ke"
                  type="email"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="mt-1 min-h-[120px] w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
                  placeholder="Tell us what you need (new website, update, domain help, etc.)"
                />
              </div>

              {/* ACTION BUTTONS (single block) */}
              <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                <Button type="submit">Send on WhatsApp (Primary)</Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={sendBackupLead}
                  disabled={sendingBackup}
                >
                  {sendingBackup ? "Sending..." : "Send via Form (Backup)"}
                </Button>

                <Button asChild variant="outline">
                  <Link href="/work">View work</Link>
                </Button>

                {backupStatus === "ok" ? (
                  <span className="text-sm text-gray-600">Backup sent successfully.</span>
                ) : null}

                {backupStatus === "fail" ? (
                  <span className="text-sm text-gray-600">
                    Backup failed. Please use WhatsApp, call, or email.
                  </span>
                ) : null}

                {submitted ? (
                  <span className="text-sm text-gray-600">
                    If WhatsApp didn’t open, use the WhatsApp button on the left.
                  </span>
                ) : null}
              </div>

              <div className="sm:col-span-2 rounded-2xl border bg-white p-4 text-sm text-gray-700">
                <p className="font-medium">Tip for faster delivery</p>
                <p className="mt-1 text-gray-600">
                  If you already have a logo, official contacts, and a few photos, we can start Phase 1
                  immediately and share a first draft within 48–72 hours.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
}

