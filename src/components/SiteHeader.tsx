import Link from "next/link";

const NAV = [
  { href: "/#apartments", label: "Apartments" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/#location", label: "Location" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[color:var(--background)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold tracking-tight text-white">
            VV
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-tight">
              VibeVaults Residences
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-stone-500">
              Seafront apartments
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-stone-600 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/apartments?type=deluxe"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Check availability
        </Link>
      </div>
    </header>
  );
}
