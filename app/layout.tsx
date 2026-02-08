
import "./globals.css";
import SiteHeader from "@/components/siteheader";
import SiteFooter from "@/components/sitefooter";
import Script from "next/script";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export const metadata = {
  title: "IME Digital Solutions",
  description: "Practical web solutions for education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}

        <SiteHeader />
<main>{children}</main>
<FloatingWhatsApp />
<SiteFooter />

      </body>
    </html>
  );
}
