import Link from "next/link";
import { ime } from "@/content/ime";
import { Container, SectionTitle, Card, Button } from "@/components/ui";

export const metadata = {
  title: "IME Digital Solutions",
  description: "Practical web solutions for education.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="py-10">
      <Container>
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-gray-700">
              <span>Education-focused</span>
              <span className="text-gray-300">•</span>
              <span>Mobile-first</span>
              <span className="text-gray-300">•</span>
              <span>Fast delivery</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {ime.brand.name}
            </h1>

            <p className="mt-2 text-lg text-gray-700">{ime.brand.tagline}</p>

            <p className="mt-4 text-gray-600">
              We help schools build modern, fast websites that improve communication with parents,
              students, and stakeholders — with a process that’s simple, affordable, and reliable.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Request a demo</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/work">View our work</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href={ime.contact.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </Link>
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600 sm:grid-cols-4">
              <div className="rounded-xl border bg-white p-3">
                <p className="font-semibold text-gray-900">48–72 hrs</p>
                <p className="mt-1">LV1 delivery</p>
              </div>
              <div className="rounded-xl border bg-white p-3">
                <p className="font-semibold text-gray-900">Mobile-first</p>
                <p className="mt-1">All devices</p>
              </div>
              <div className="rounded-xl border bg-white p-3">
                <p className="font-semibold text-gray-900">Fast</p>
                <p className="mt-1">Optimised pages</p>
              </div>
              <div className="rounded-xl border bg-white p-3">
                <p className="font-semibold text-gray-900">Local</p>
                <p className="mt-1">Real support</p>
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-900">Quick contact</p>

            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-600">Phone</span>
                <Link
                  href={`tel:${ime.contact.phoneHref}`}
                  className="font-medium underline underline-offset-4"
                >
                  {ime.contact.phoneDisplay}
                </Link>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-600">Email</span>
                <Link
                  href={`mailto:${ime.contact.email}`}
                  className="font-medium underline underline-offset-4"
                >
                  {ime.contact.email}
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href={ime.contact.whatsappHref} target="_blank" rel="noreferrer">
                  Message on WhatsApp
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href={`tel:${ime.contact.phoneHref}`}>Call</Link>
              </Button>
            </div>

            <div className="mt-6 rounded-xl border bg-gray-50 p-4 text-sm text-gray-700">
              <p className="font-medium">What you get</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
                <li>Professional school website</li>
                <li>Clear structure and easy navigation</li>
                <li>Fast loading on mobile data</li>
                <li>Support for updates after launch</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="mt-16">
          <SectionTitle
            title="Services"
            subtitle="A simple, phased approach — start small, then expand when ready."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ime.services.map((svc) => (
              <Card key={svc.title} className="p-6">
                <h3 className="text-lg font-semibold">{svc.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{svc.desc}</p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  {svc.bullets.slice(0, 3).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-5">
                  <Button asChild variant="outline">
                    <Link href="/services">Learn more</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* WORK PREVIEW */}
        <section className="mt-16">
          <SectionTitle
            title="Reference builds & early deployments"
            subtitle="A few examples to show quality, performance, and usability."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ime.work.map((item) => {
              const isLive = item.kind === "live";
              return (
                <Card key={item.href} className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{item.note}</p>
                    </div>
                    {isLive ? <Badge>🟢 Live</Badge> : <Badge>Demo</Badge>}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Button asChild>
                      <Link href={item.href} target="_blank" rel="noreferrer">
                        Open
                      </Link>
                    </Button>

                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-600 underline underline-offset-4"
                    >
                      {item.href.replace("https://", "")}
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/work">See all work</Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl border bg-white p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Ready to modernise your school’s online presence?
              </h2>
              <p className="mt-2 text-gray-600">
                Share your school name and contacts — we’ll schedule a quick demo and outline the
                fastest path to launch.
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
        </section>
      </Container>
    </div>
  );
}
