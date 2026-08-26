import type { Metadata } from "next";
import Link from "next/link";
import {
  APARTMENTS,
  APARTMENT_KEYS,
  getApartment,
} from "@/lib/apartments";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const apartment = getApartment((await searchParams).type);
  return {
    title: apartment ? apartment.name : "Apartments",
    description: apartment ? apartment.tagline : "Browse all apartment types.",
  };
}

export default async function ApartmentsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.type) ? params.type[0] : params.type;
  const apartment = getApartment(params.type);

  return (
    <>
      {apartment ? (
        <ApartmentDetail apartment={apartment} />
      ) : raw ? (
        <UnknownType value={raw} />
      ) : (
        <NoTypeSelected />
      )}
      <QueryInspector params={params} />
    </>
  );
}

/* ---------- when ?type= matches a known apartment ---------- */

function ApartmentDetail({
  apartment,
}: {
  apartment: (typeof APARTMENTS)[keyof typeof APARTMENTS];
}) {
  return (
    <>
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${apartment.gradient}`}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, rgba(255,255,255,0.4), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <nav className="text-xs text-white/75">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link href="/apartments" className="hover:text-white">
              Apartments
            </Link>
            <span className="px-2">/</span>
            <span className="text-white">{apartment.name}</span>
          </nav>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {apartment.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            {apartment.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-4 border-t border-white/25 pt-6 text-white">
            <div>
              <p className="text-3xl font-semibold">€{apartment.price}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-white/70">
                per night
              </p>
            </div>
            {[
              { label: "Size", value: apartment.size },
              { label: "Sleeps", value: apartment.guests },
              { label: "Layout", value: apartment.bedrooms },
              { label: "Outlook", value: apartment.view },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-base font-medium">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            About this apartment
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            {apartment.longDescription}
          </p>

          <h3 className="mt-12 text-lg font-semibold tracking-tight">
            What is included
          </h3>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {apartment.amenities.map((amenity) => (
              <li
                key={amenity}
                className="flex items-start gap-3 text-sm text-stone-700"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: apartment.accent }}
                />
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-7">
          <p className="text-sm text-stone-500">Booking details</p>
          <dl className="mt-5 space-y-4">
            {apartment.highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 border-b border-stone-100 pb-3"
              >
                <dt className="text-sm text-stone-500">{item.label}</dt>
                <dd className="text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/#contact"
            className="mt-7 block rounded-full px-6 py-3 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: apartment.accent }}
          >
            Enquire about dates
          </Link>
          <p className="mt-3 text-center text-xs text-stone-500">
            Held for 48 hours, no card needed
          </p>
        </aside>
      </section>

      <OtherApartments currentKey={apartment.key} />
    </>
  );
}

/* ---------- when ?type= is missing ---------- */

function NoTypeSelected() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
        Apartments
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        Choose an apartment
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
        No apartment selected. Add a <code className="rounded bg-stone-100 px-1.5 py-0.5 text-base">?type=</code>{" "}
        parameter to the address, or pick one below.
      </p>
      <ApartmentLinkGrid />
    </section>
  );
}

/* ---------- when ?type= is present but unrecognised ---------- */

function UnknownType({ value }: { value: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-7">
        <p className="text-sm font-semibold text-amber-900">
          Unknown apartment type
        </p>
        <p className="mt-2 text-sm text-amber-800">
          We have nothing matching{" "}
          <code className="rounded bg-amber-100 px-1.5 py-0.5">
            type={value}
          </code>
          . Valid values are {APARTMENT_KEYS.join(", ")}.
        </p>
      </div>
      <h1 className="mt-12 text-4xl font-semibold tracking-tight">
        Our apartments
      </h1>
      <ApartmentLinkGrid />
    </section>
  );
}

/* ---------- shared pieces ---------- */

function ApartmentLinkGrid() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {APARTMENT_KEYS.map((key) => {
        const apartment = APARTMENTS[key];
        return (
          <Link
            key={key}
            href={`/apartments?type=${key}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-lg"
          >
            <div className={`h-32 bg-gradient-to-br ${apartment.gradient}`} />
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-semibold tracking-tight">
                  {apartment.name}
                </h2>
                <span className="text-sm text-stone-500">
                  from €{apartment.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {apartment.description}
              </p>
              <p className="mt-4 font-mono text-xs text-stone-400">
                ?type={apartment.key}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function OtherApartments({ currentKey }: { currentKey: string }) {
  const others = APARTMENT_KEYS.filter((key) => key !== currentKey);
  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Other apartments
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((key) => {
            const apartment = APARTMENTS[key];
            return (
              <Link
                key={key}
                href={`/apartments?type=${key}`}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-md"
              >
                <div
                  className={`h-24 bg-gradient-to-br ${apartment.gradient}`}
                />
                <div className="p-5">
                  <h3 className="text-base font-semibold tracking-tight">
                    {apartment.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">
                    {apartment.size} · from €{apartment.price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- testing aid: shows exactly what arrived in the query string ---------- */

function QueryInspector({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) {
  const entries = Object.entries(params);
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <details className="rounded-xl border border-dashed border-stone-300 bg-white/60 p-5">
        <summary className="cursor-pointer text-sm font-medium text-stone-600">
          Query string inspector ({entries.length}{" "}
          {entries.length === 1 ? "parameter" : "parameters"})
        </summary>
        {entries.length === 0 ? (
          <p className="mt-4 font-mono text-xs text-stone-500">
            No query parameters received.
          </p>
        ) : (
          <table className="mt-4 w-full text-left font-mono text-xs">
            <thead className="text-stone-500">
              <tr>
                <th className="pb-2 pr-6 font-normal">key</th>
                <th className="pb-2 font-normal">value</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              {entries.map(([key, value]) => (
                <tr key={key} className="border-t border-stone-200">
                  <td className="py-2 pr-6">{key}</td>
                  <td className="py-2 break-all">
                    {Array.isArray(value) ? value.join(", ") : String(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </details>
    </section>
  );
}
