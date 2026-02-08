import Link from "next/link";
import { ime } from "@/content/ime";
import { Container } from "@/components/ui";

export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#0b2a4a] text-gray-200">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-sm font-semibold text-white">
              {ime.brand.name}
            </div>
            <p className="mt-2 text-sm text-gray-300">
              {ime.brand.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-white">Links</div>
            <ul className="mt-3 space-y-2 text-sm">
              {ime.nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-gray-300 hover:text-white hover:underline"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-gray-300">
              <p>
                Phone:{" "}
                <Link
                  href={`tel:${ime.contact.phoneHref}`}
                  className="hover:text-white hover:underline"
                >
                  {ime.contact.phoneDisplay}
                </Link>
              </p>
              <p>
                Email:{" "}
                <Link
                  href={`mailto:${ime.contact.email}`}
                  className="hover:text-white hover:underline"
                >
                  {ime.contact.email}
                </Link>
              </p>
              <p>
                WhatsApp:{" "}
                <Link
                  href={ime.contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Message us
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {ime.brand.name}. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <span className="font-medium text-gray-300">
              IME Digital Solutions
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
