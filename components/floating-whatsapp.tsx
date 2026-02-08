"use client";

import Link from "next/link";
import { ime } from "@/content/ime";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        href={ime.contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 active:scale-95"
      >
        {/* WhatsApp icon (SVG) */}
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.41c-.27-.13-1.57-.77-1.81-.86-.24-.09-.41-.13-.59.13-.18.27-.68.86-.84 1.04-.15.18-.31.2-.58.07-.27-.13-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.47-1.83-.15-.27-.02-.41.11-.54.12-.12.27-.31.41-.46.13-.15.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.59-1.42-.81-1.95-.21-.5-.43-.43-.59-.44h-.5c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.13.18 1.89 2.88 4.58 4.04.64.27 1.13.43 1.52.55.64.2 1.22.17 1.68.1.51-.08 1.57-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.07-.11-.24-.18-.51-.31z" />
          <path d="M26.67 5.33A13.24 13.24 0 0 0 16.01 1C8.73 1 2.8 6.93 2.8 14.21c0 2.33.61 4.61 1.77 6.62L2.67 31l10.39-1.86a13.2 13.2 0 0 0 6.95 1.96h.01c7.28 0 13.21-5.93 13.21-13.21 0-3.53-1.38-6.85-3.56-9.06zM20.01 28.9h-.01a11 11 0 0 1-5.61-1.54l-.4-.24-6.17 1.11 1.14-6.02-.26-.41a10.98 10.98 0 0 1-1.69-5.88C7.01 8.1 11.9 3.2 17.92 3.2c2.94 0 5.7 1.15 7.78 3.22a10.93 10.93 0 0 1 3.22 7.78c0 6.02-4.9 10.7-8.91 10.7z" />
        </svg>

        {/* Tooltip on desktop */}
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-xl bg-gray-900 px-3 py-2 text-xs text-white shadow-md opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>
      </Link>
    </div>
  );
}
