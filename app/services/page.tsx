import Link from "next/link";
import { ime } from "@/content/ime";
import { Container, SectionTitle, Card, Button } from "@/components/ui";

export const metadata = {
  title: "Services | IME Digital Solutions",
  description: "A simple, phased approach to building school websites.",
};

export default function ServicesPage() {
  return (
    <div className="py-10">
      <Container>
        <SectionTitle
          title="Services"
          subtitle="A simple, phased approach — start small, then expand when ready."
        />

        {/* Phase cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {ime.services.map((svc) => (
            <Card key={svc.title} className="p-6">
              <h3 className="text-lg font-semibold">{svc.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{svc.desc}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {svc.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact">Request a demo</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/work">View work</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">How it works</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-gray-700">
              <li>
                <span className="font-medium">Quick needs check:</span> we confirm what the school
                needs and what’s available (logo, contacts, photos, pages).
              </li>
              <li>
                <span className="font-medium">Phase 1 build:</span> we deliver a clean LV1 website in
                48–72 hours after receiving essentials.
              </li>
              <li>
                <span className="font-medium">Review + improvements:</span> you share feedback and we
                adjust the content/layout.
              </li>
              <li>
                <span className="font-medium">Phase 2 (optional):</span> we expand into a full official
                website + domain connection.
              </li>
              <li>
                <span className="font-medium">Maintenance (optional):</span> we keep the site updated
                and running smoothly.
              </li>
            </ol>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">What we typically need</h3>
            <p className="mt-2 text-sm text-gray-600">
              To move fast, here are the essentials that help us deliver Phase 1 quickly:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>School official name and contacts</li>
              <li>Logo (if available) + preferred colours</li>
              <li>Brief school profile / history (even a short paragraph)</li>
              <li>Admissions contacts / basic requirements</li>
              <li>Any photos (even 5–10 is enough to start)</li>
            </ul>

            <div className="mt-6 rounded-2xl border bg-gray-50 p-4 text-sm text-gray-700">
              <p className="font-medium">No photos yet?</p>
              <p className="mt-1 text-gray-600">
                That’s okay. We can launch with placeholders and update the gallery later.
              </p>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border bg-white p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Start with Phase 1 and go live quickly
              </h2>
              <p className="mt-2 text-gray-600">
                The goal is momentum: get a credible website online first, then expand when the school
                is ready.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild>
                <Link href="/contact">Request a demo</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={ime.contact.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={`tel:${ime.contact.phoneHref}`}>Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
