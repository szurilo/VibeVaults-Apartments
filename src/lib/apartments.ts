export type ApartmentKey = "studio" | "deluxe" | "penthouse" | "family";

export type Apartment = {
  key: ApartmentKey;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  size: string;
  guests: string;
  bedrooms: string;
  view: string;
  accent: string;
  gradient: string;
  amenities: string[];
  highlights: { label: string; value: string }[];
};

export const APARTMENTS: Record<ApartmentKey, Apartment> = {
  studio: {
    key: "studio",
    name: "Harbour Studio",
    tagline: "Compact comfort, one minute from the promenade",
    description:
      "A bright, efficient studio for solo travellers and couples who plan to spend their days outside.",
    longDescription:
      "The Harbour Studio is our most popular short-stay apartment. An open-plan living and sleeping area opens onto a French balcony overlooking the old fishing harbour, with a compact kitchenette tucked behind an oak partition. Mornings start with espresso on the balcony; the bakery on the corner opens at six.",
    price: 89,
    size: "34 m²",
    guests: "2 guests",
    bedrooms: "Studio layout",
    view: "Harbour side",
    accent: "#0f766e",
    gradient: "from-teal-700 via-teal-600 to-emerald-500",
    amenities: [
      "Queen bed with linen bedding",
      "Kitchenette with induction hob",
      "Rainfall shower",
      "Fibre Wi-Fi, 300 Mbit",
      "Air conditioning",
      "Weekly housekeeping",
    ],
    highlights: [
      { label: "Minimum stay", value: "2 nights" },
      { label: "Check-in", value: "From 15:00" },
      { label: "Floor", value: "2nd, with lift" },
    ],
  },
  deluxe: {
    key: "deluxe",
    name: "Deluxe Sea View",
    tagline: "A full apartment with the bay in every window",
    description:
      "One bedroom, a proper living room and an eight metre terrace facing due west for the sunset.",
    longDescription:
      "Our Deluxe Sea View apartments occupy the front corners of the building, which means glass on two sides and a terrace wide enough for a real dining table. The bedroom is separated from the living area by a solid door, so late arrivals never wake anyone. Guests staying five nights or more get a complimentary harbour cruise for two.",
    price: 149,
    size: "62 m²",
    guests: "3 guests",
    bedrooms: "1 bedroom + sofa bed",
    view: "Panoramic sea view",
    accent: "#1d4ed8",
    gradient: "from-blue-800 via-blue-600 to-sky-500",
    amenities: [
      "King bed and convertible sofa",
      "Full kitchen with dishwasher",
      "8 m terrace with lounge seating",
      "Nespresso machine",
      "Smart TV with streaming",
      "Washer / dryer in unit",
    ],
    highlights: [
      { label: "Minimum stay", value: "3 nights" },
      { label: "Check-in", value: "From 15:00" },
      { label: "Floor", value: "3rd to 5th" },
    ],
  },
  penthouse: {
    key: "penthouse",
    name: "Rooftop Penthouse",
    tagline: "The top floor, the private pool, the whole horizon",
    description:
      "Two bedrooms, a wraparound roof terrace and a plunge pool that stays warm until October.",
    longDescription:
      "There is one penthouse in the building and it takes the entire sixth floor. Floor-to-ceiling glass runs the length of the living space and slides fully open onto a wraparound terrace with a heated plunge pool, an outdoor kitchen and a shaded daybed. A dedicated concierge line is included with every penthouse booking, along with airport transfer in both directions.",
    price: 340,
    size: "128 m²",
    guests: "5 guests",
    bedrooms: "2 bedrooms, 2 bathrooms",
    view: "360° rooftop",
    accent: "#b45309",
    gradient: "from-amber-700 via-amber-500 to-orange-400",
    amenities: [
      "Heated plunge pool",
      "Wraparound roof terrace",
      "Outdoor kitchen and grill",
      "Private concierge line",
      "Airport transfers included",
      "Daily housekeeping",
    ],
    highlights: [
      { label: "Minimum stay", value: "4 nights" },
      { label: "Check-in", value: "Flexible" },
      { label: "Floor", value: "6th, private lift access" },
    ],
  },
  family: {
    key: "family",
    name: "Garden Family Suite",
    tagline: "Ground floor, fenced garden, no stairs to carry anything up",
    description:
      "Two bedrooms opening onto a private lawn, five steps from the shallow end of the pool.",
    longDescription:
      "The Garden Family Suites sit at the quiet back of the property with direct access to a private lawn and the shared garden beyond. Both bedrooms have blackout blinds, the bathroom has a full bath rather than a shower, and the kitchen comes stocked with the things families forget: a high chair, a stair gate, a bottle steriliser and a stack of board games.",
    price: 175,
    size: "84 m²",
    guests: "4 guests + infant",
    bedrooms: "2 bedrooms, 1 bathroom",
    view: "Garden and pool",
    accent: "#7c3aed",
    gradient: "from-violet-700 via-purple-600 to-fuchsia-500",
    amenities: [
      "Private fenced lawn",
      "Cot, high chair and stair gate",
      "Full bath with hand shower",
      "Blackout blinds in both bedrooms",
      "Board games and children's books",
      "Direct pool access",
    ],
    highlights: [
      { label: "Minimum stay", value: "3 nights" },
      { label: "Check-in", value: "From 14:00" },
      { label: "Floor", value: "Ground, step-free" },
    ],
  },
};

export const APARTMENT_KEYS = Object.keys(APARTMENTS) as ApartmentKey[];

export function isApartmentKey(value: unknown): value is ApartmentKey {
  return typeof value === "string" && value in APARTMENTS;
}

export function getApartment(value: string | string[] | undefined) {
  const key = Array.isArray(value) ? value[0] : value;
  return isApartmentKey(key) ? APARTMENTS[key] : null;
}
