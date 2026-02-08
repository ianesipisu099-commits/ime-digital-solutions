import Link from "next/link";
import { ime } from "@/content/ime";
import { Container, SectionTitle, Card, Button } from "@/components/ui";

export const metadata = {
  title: "Our Work | IME Digital Solutions",
  description: "Reference builds and early deployments by IME Digital Solutions.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

export default function WorkPage() {
  return (
    <div className="py-10">
      <Container>
        <SectionTitle
          title="Our Work"
          subtitle="Reference builds and early deployments to demonstrate design quality, performance, and usability."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ime.work.map((item) => {
            const isLive = item.kind === "live";

            return (
              <Card key={item.href} className="p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{item.note}</p>
                    </div>

                    {isLive ? <Badge>🟢 Live</Badge> : <Badge>Demo</Badge>}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button asChild>
                      <Link href={item.href} target="_blank" rel="noreferrer">
                        Open site
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
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6 text-sm text-gray-700">
          <p className="font-medium">Note</p>
          <p className="mt-2">
            These examples are provided as reference builds and early deployments. Each school website is
            customised to reflect the institution’s branding, content needs, and communication goals.
          </p>
        </div>
      </Container>
    </div>
  );
}
