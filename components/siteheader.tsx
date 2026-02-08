"use client";

import Link from "next/link";
import { useState } from "react";
import { ime } from "@/content/ime";
import { Container, Button } from "@/components/ui";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white md:bg-white/80 md:backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="h-9 w-9 rounded-xl bg-gray-900" />
          <div className="leading-tight">
            <div className="text-sm font-bold text-gray-900">
              {ime.brand.name}
            </div>
            <div className="text-xs text-gray-700">{ime.brand.tagline}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {ime.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              {n.label}
            </Link>
          ))}

          <Button
            asChild
            className="bg-gray-900 text-white hover:bg-gray-800"
          >
            <Link href="/contact">Request a demo</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="rounded-xl border bg-white px-3 py-2 text-sm text-gray-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </Container>

      {/* Mobile nav */}
      {open ? (
        <div className="border-t bg-white shadow-md md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-2">
              {ime.nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-xl px-3 py-2 text-sm text-gray-900 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ))}

              <Button
                asChild
                className="mt-2 bg-gray-900 text-white hover:bg-gray-800"
              >
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Request a demo
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
