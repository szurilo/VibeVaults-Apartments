import Link from "next/link";
import { APARTMENTS, APARTMENT_KEYS } from "@/lib/apartments";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
              VV
            </span>
            <span className="text-base font-semibold tracking-tight">
              VibeVaults Residences
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            Twenty-two seafront apartments on the old harbour, managed by the
            same family since 1998.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Apartments
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-stone-600">
            {APARTMENT_KEYS.map((key) => (
              <li key={key}>
                <Link
                  href={`/apartments?type=${key}`}
                  className="transition-colors hover:text-brand"
                >
                  {APARTMENTS[key].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-stone-600">
            <li>Kikötő sétány 14</li>
            <li>8600 Balatonvidék</li>
            <li>+36 1 555 0142</li>
            <li>stay@vibevaults-residences.test</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Reception hours
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-stone-600">
            <li>Monday to Friday, 08:00 to 20:00</li>
            <li>Weekends, 09:00 to 18:00</li>
            <li>Late arrival by key box</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-200/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VibeVaults Residences. Demo site for testing purposes.</p>
          <p>Rates shown are sample data and are not bookable.</p>
        </div>
      </div>
    </footer>
  );
}
