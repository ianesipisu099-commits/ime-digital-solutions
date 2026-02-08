import Link from "next/link";
import { ime } from "@/content/ime";
import { Container, SectionTitle, Card, Button } from "@/components/ui";

export const metadata = {
  title: "About | IME Digital Solutions",
  description: "About IME Digital Solutions and our approach to school websites.",
};

export default function AboutPage() {
  return (
    <div className="py-10">
      <Container>
        <SectionTitle
          title="About IME Digital Solutions"
          subtitle="Focused on practical, reliable web solutions for schools and learning institutions."
        />

        {/* Main story */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Who we are</h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              IME Digital Solutions is a small, education-focused digital services provider working
              with secondary schools and learning institutions to improve their online presence.
              Our work centres on building clean, fast, and easy-to-manage school websites that
              support communication with parents, students, staff, and stakeholders.
            </p>

            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              We currently work with multiple schools at different stages — from early reference
              builds to live deployments — and continue to onboard new institutions through
              phased rollouts. This approach allows schools to go online quickly while improving
              and expanding their websites over time.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Why schools choose our approach</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>We understand how schools operate and make decisions.</li>
              <li>We prioritise clarity, speed, and reliability over unnecessary features.</li>
              <li>We design with mobile users in mind, especially parents.</li>
              <li>We allow schools to start small and expand when ready.</li>
              <li>We provide ongoing support after launch, not just delivery.</li>
            </ul>
          </Card>
        </div>

        {/* How we work */}
        <div className="mt-12">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">How we work with schools</h3>

            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-medium">1. Initial engagement</p>
                <p className="mt-1 text-sm text-gray-600">
                  We begin with a short discussion to understand the school’s needs, existing
                  materials, and expectations. This often includes reviewing current websites
                  or communication challenges.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium">2. Phased delivery</p>
                <p className="mt-1 text-sm text-gray-600">
                  Schools typically start with a core website (Phase 1), which is delivered
                  quickly and can be shared publicly. Additional features and content are
                  added in later phases.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium">3. Review and support</p>
                <p className="mt-1 text-sm text-gray-600">
                  After launch, we work closely with the school to refine content, make updates,
                  and provide technical support as needs evolve.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Credibility section */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Our experience so far</h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Our portfolio includes reference website builds and early live deployments that
              reflect real school requirements and operating conditions. Some projects move
              faster than others due to school calendars, approvals, and internal processes,
              which is a normal part of working within education environments.
            </p>

            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              This steady, structured pace ensures that each deployment is stable, accurate,
              and aligned with the school’s communication goals.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Our focus going forward</h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              IME Digital Solutions continues to focus on expanding partnerships with schools,
              improving existing deployments, and offering long-term support rather than
              one-off website builds.
            </p>

            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Our aim is to become a reliable digital partner for schools seeking a practical,
              affordable, and sustainable online presence.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border bg-white p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Let’s discuss your school’s website needs
              </h2>
              <p className="mt-2 text-gray-600">
                Whether you’re starting from scratch or improving an existing site, we can
                recommend a clear and practical path forward.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
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
          </div>
        </div>
      </Container>
    </div>
  );
}
