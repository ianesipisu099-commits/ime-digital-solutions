export const ime = {
  brand: {
    name: "IME Digital Solutions",
    tagline: "Practical web solutions for education",
  },

  contact: {
    phoneDisplay: "+254 716 027 718",
    phoneHref: "+254716027718",
    email: "ianesipisu099@gmail.com",
    whatsappHref: "https://wa.me/254716027718",
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Our Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  services: [
    {
      title: "Phase 1: Starter Website (LV1)",
      desc: "A clean, credible website foundation with essential pages and school branding.",
      bullets: [
        "Core pages (Home, About, Academics, Admissions, Contact)",
        "Mobile-first design",
        "Branding (logo, colors, contacts)",
        "Basic performance + SEO setup",
      ],
    },
    {
      title: "Phase 2: Full Website + Domain Setup",
      desc: "Full content, media, SEO basics, and proper domain connection (including .ac.ke where applicable).",
      bullets: [
        "Expanded pages + content polishing",
        "Gallery and announcements (optional)",
        "Domain connection + SSL (HTTPS)",
        "Analytics (optional)",
      ],
    },
    {
      title: "Phase 3: Maintenance & Updates",
      desc: "Monthly updates, performance checks, and local support so the website stays current.",
      bullets: [
        "Content updates (news, staff, fee structures, term dates)",
        "Performance checks + fixes",
        "Uptime monitoring",
        "Support add-ons (optional)",
      ],
    },
  ],

  // Ordered as requested: strongest reference first, then neutral, then live.
  work: [
    {
      title: "Reference Website (Demo Build)",
      note: "Our strongest reference build to demonstrate layout quality, performance, and overall polish.",
      href: "https://st-marks-demo.vercel.app/",
      kind: "reference" as const,
    },
    {
      title: "Reference Website (Demo Build)",
      note: "A neutral reference build showing a clean baseline design and structure.",
      href: "https://neutral-demo.vercel.app/",
      kind: "reference" as const,
    },
    {
      title: "Early Deployment (Live)",
      note: "A live school deployment currently online.",
      href: "https://ematetie-senior-school.vercel.app/",
      kind: "live" as const,
    },
  ],
};
