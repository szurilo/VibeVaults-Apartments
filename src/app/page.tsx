import Link from "next/link";
import { APARTMENTS, APARTMENT_KEYS } from "@/lib/apartments";

const AMENITIES = [
  {
    title: "Heated outdoor pool",
    body: "Open from April to late October, with a shallow end and loungers under the pines.",
  },
  {
    title: "Private parking",
    body: "One covered space per apartment, plus two chargers for electric cars.",
  },
  {
    title: "Breakfast on the terrace",
    body: "Served 07:30 to 10:30. Local cheeses, fresh bread and eggs cooked to order.",
  },
  {
    title: "Bikes and paddleboards",
    body: "Free for guests. The lakeside cycle path starts at the front gate.",
  },
  {
    title: "Step-free access",
    body: "Lift to every floor, level entry from the car park, roll-in shower on request.",
  },
  {
    title: "Fibre internet",
    body: "300 Mbit in every apartment, with a desk and monitor available for longer stays.",
  },
];

const REVIEWS = [
  {
    quote:
      "We booked three nights and stayed six. The terrace faces the sunset and we never once wanted to eat anywhere else.",
    name: "Hanna & Márk",
    detail: "Deluxe Sea View, June",
  },
  {
    quote:
      "Travelling with a toddler is usually a negotiation. The garden suite had a stair gate already fitted and a cot made up when we arrived.",
    name: "The Novák family",
    detail: "Garden Family Suite, August",
  },
  {
    quote:
      "Quiet, spotless, and the woman at reception rebooked our ferry when the weather turned. Hard to fault.",
    name: "Peter L.",
    detail: "Harbour Studio, September",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-700">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.25), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">
            Balatonvidék, on the old harbour
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Twenty-two apartments, one very good view.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-teal-50/90">
            Studios for a weekend, sea view apartments for a fortnight, and a
            rooftop penthouse for the occasions that call for one. Family run
            since 1998.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#apartments"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-teal-900 transition-transform hover:-translate-y-0.5"
            >
              Browse apartments
            </Link>
            <Link
              href="/apartments?type=penthouse"
              className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              See the penthouse
            </Link>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-white/20 pt-8 sm:grid-cols-4">
            {[
              { value: "22", label: "Apartments" },
              { value: "9.4", label: "Guest rating" },
              { value: "1998", label: "Family run since" },
              { value: "80 m", label: "To the water" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold text-white">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-teal-200">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="apartments" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Our apartments
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Four layouts, all with a kitchen and a balcony
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Every apartment is serviced weekly, has its own entrance and comes
            with parking. Pick the one that fits and we will hold it for
            forty-eight hours without a card.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {APARTMENT_KEYS.map((key) => {
            const apartment = APARTMENTS[key];
            return (
              <Link
                key={key}
                href={`/apartments?type=${key}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div
                  className={`relative h-44 bg-gradient-to-br ${apartment.gradient}`}
                >
                  <span className="absolute bottom-4 left-5 rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {apartment.view}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {apartment.name}
                    </h3>
                    <p className="whitespace-nowrap text-sm text-stone-500">
                      from{" "}
                      <span className="font-semibold text-stone-900">
                        €{apartment.price}
                      </span>
                    </p>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                    {apartment.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[apartment.size, apartment.guests, apartment.bedrooms].map(
                      (chip) => (
                        <span
                          key={chip}
                          className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600"
                        >
                          {chip}
                        </span>
                      ),
                    )}
                  </div>
                  <span className="mt-6 text-sm font-medium text-brand group-hover:underline">
                    View details →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="amenities" className="bg-sand py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Amenities
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Included with every stay
            </h2>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((item) => (
              <div key={item.title} className="border-t border-stone-300 pt-5">
                <h3 className="text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          Guest reviews
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          9.4 out of 10, across 486 stays
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-7"
            >
              <div className="text-amber-500" aria-label="Five out of five">
                ★★★★★
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-700">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{review.name}</span>
                <span className="mt-0.5 block text-xs text-stone-500">
                  {review.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="location" className="bg-stone-900 py-24 text-stone-100">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
              Getting here
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Eighty metres from the water, ten minutes from the station
            </h2>
            <p className="mt-5 leading-relaxed text-stone-300">
              The building sits at the quiet end of the harbour promenade. Turn
              left for the beach and the ferry pier, right for the market square
              and the wine cellars on the hill.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-stone-300">
              <li>Railway station, 800 m on foot</li>
              <li>Ferry pier, 4 minutes along the promenade</li>
              <li>Budapest airport, 1 hour 40 by car</li>
              <li>Nearest supermarket, 200 m</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-teal-800 via-stone-800 to-stone-900">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-400 text-stone-900">
                ▲
              </span>
              <p className="mt-3 text-sm font-medium">Kikötő sétány 14</p>
              <p className="text-xs text-stone-400">8600 Balatonvidék</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-stone-200 bg-white p-10 sm:p-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Ask about dates
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600">
                Reception answers within a few hours during opening times.
                Nothing on this form is sent anywhere, this is a demo site.
              </p>
              <div className="mt-8 space-y-2 text-sm text-stone-600">
                <p>+36 1 555 0142</p>
                <p>stay@vibevaults-residences.test</p>
              </div>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none focus:border-brand"
                  placeholder="Name"
                  name="name"
                />
                <input
                  className="rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none focus:border-brand"
                  placeholder="Email"
                  name="email"
                  type="email"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-600 outline-none focus:border-brand"
                  type="date"
                  name="arrival"
                  aria-label="Arrival"
                />
                <input
                  className="rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-600 outline-none focus:border-brand"
                  type="date"
                  name="departure"
                  aria-label="Departure"
                />
              </div>
              <textarea
                className="min-h-28 rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none focus:border-brand"
                placeholder="Anything we should know?"
                name="message"
              />
              <button
                type="button"
                className="justify-self-start rounded-full bg-brand px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
