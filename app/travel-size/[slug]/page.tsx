import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, CheckCircle, XCircle, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const products = [
  {
    slug: "conair-vagabond-compact",
    name: "Conair Vagabond Compact Dryer",
    brand: "Conair",
    price: "$24",
    rating: 4.5,
    reviewCount: 41000,
    image: "https://m.media-amazon.com/images/I/71cn38kl0gL._SL1500_.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["Foldable handle", "Dual voltage"],
    cons: ["Less power than full-size dryers", "Shorter cord"],
    verdict: "A tiny foldable dryer that actually dries hair well and disappears into any suitcase.",
    amazonUrl: "https://www.amazon.com/Conair-Vagabond-Compact-Folding-Handle/dp/B000094ZDX",
    description:
      "The Conair Vagabond Compact Dryer folds flat for packing and supports dual voltage so it works worldwide. It's lightweight and reliable — the travel dryer that lives in your bag without taking real space.",
    specs: [
      { label: "Handle", value: "Foldable" },
      { label: "Voltage", value: "Dual voltage" },
      { label: "Use", value: "Travel" },
      { label: "Weight", value: "Compact" },
      { label: "Cord", value: "Included" },
      { label: "Heat", value: "Multiple settings" },
    ],
  },
  {
    slug: "mini-3-speed-straightener-dryer",
    name: "Mini 3-Speed Hair Dryer & Straightener",
    brand: "Generic",
    price: "$39",
    rating: 4.3,
    reviewCount: 1400,
    image: "https://m.media-amazon.com/images/I/81qMMw4dpWL._AC_SL1500_.jpg",
    tag: "Multi-Use",
    tagColor: "#D4AF37",
    pros: ["Compact and lightweight", "Multiple temperature modes"],
    cons: ["Best for short to medium hair", "Smaller airflow"],
    verdict: "A small travel dryer with adjustable settings that keeps your routine simple on the road.",
    amazonUrl: "https://www.amazon.com/Straightener-3-Speed-Temperature-Control-Portable/dp/B0GHQQG9SZ",
    description:
      "This mini 3-speed dryer and straightener combo is built for travel: compact, lightweight, and with multiple heat and speed settings. It's ideal for short to medium hair and keeps your kit minimal.",
    specs: [
      { label: "Functions", value: "Dryer + straightener" },
      { label: "Speed/Temp", value: "3 speeds, multiple temps" },
      { label: "Size", value: "Compact" },
      { label: "Use", value: "Travel" },
      { label: "Weight", value: "Lightweight" },
      { label: "Best For", value: "Short to medium hair" },
    ],
  },
  {
    slug: "philips-oneblade-connectivity-travel",
    name: "Philips OneBlade Connectivity Kit",
    brand: "Philips",
    price: "$79",
    rating: 4.7,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/71RJHZ-S8vL._SL1500_.jpg",
    tag: "Carry-On Ready",
    tagColor: "#059669",
    pros: ["Face and body grooming", "Slim handle and charger"],
    cons: ["Blades must be packed separately", "Needs charging cable"],
    verdict: "A single shaver that easily slips into a dopp kit and replaces multiple razors.",
    amazonUrl: "https://www.amazon.com/Philips-Connectivity-Adjustable-QP4631-90/dp/B0CQPHFGL7",
    description:
      "The Philips OneBlade Connectivity Kit is built for travel: one slim handle for face and body, with an adjustable comb and a compact charger. It fits in any dopp kit and replaces bulkier grooming gear.",
    specs: [
      { label: "Use", value: "Face & body" },
      { label: "Design", value: "Slim handle" },
      { label: "Charging", value: "Compact charger" },
      { label: "Blades", value: "Replaceable" },
      { label: "Travel", value: "Carry-on friendly" },
      { label: "Weight", value: "Light" },
    ],
  },
  {
    slug: "finishing-touch-flawless-mini",
    name: "Finishing Touch Flawless Mini Facial Hair Remover",
    brand: "Finishing Touch",
    price: "$24",
    rating: 4.5,
    reviewCount: 38000,
    image: "https://m.media-amazon.com/images/I/71oNYPZy1YL._SL1500_.jpg",
    tag: "Pocket Size",
    tagColor: "#9D50BB",
    pros: ["Lipstick-size device", "Discrete and quiet"],
    cons: ["Battery powered, not USB", "Best for fine hair only"],
    verdict: "A lipstick-sized facial hair remover that lives in any bag without taking real space.",
    amazonUrl: "https://www.amazon.com/Finishing-Flawless-Rechargeable-Portable-Protective/dp/B08VNQYK2D",
    description:
      "The Finishing Touch Flawless Mini is a lipstick-sized facial hair remover that's discrete, quiet, and rechargeable. It fits in the smallest pouch and is best for fine facial hair and touch-ups.",
    specs: [
      { label: "Size", value: "Lipstick / pocket" },
      { label: "Power", value: "Rechargeable battery" },
      { label: "Noise", value: "Quiet" },
      { label: "Best For", value: "Fine facial hair" },
      { label: "Travel", value: "Ultra compact" },
      { label: "Design", value: "Discrete" },
    ],
  },
  {
    slug: "coslus-mini-water-flosser",
    name: "COSLUS Mini Water Flosser",
    brand: "COSLUS",
    price: "$39",
    rating: 4.4,
    reviewCount: 2600,
    image: "https://m.media-amazon.com/images/I/71mvDSOAdlL._SL1500_.jpg",
    tag: "Dental Care",
    tagColor: "#0891b2",
    pros: ["Collapsible tank", "USB-C charging"],
    cons: ["Small reservoir", "Must be emptied after use"],
    verdict: "A genuinely travel-sized water flosser that folds down to fit even tiny toiletry bags.",
    amazonUrl: "https://www.amazon.com/COSLUS-Mini-Water-Flosser-Travel/dp/B0DJ1F64WN",
    description:
      "The COSLUS Mini Water Flosser has a collapsible tank and USB-C charging so it packs small. It's a real travel-sized water flosser that fits in tiny toiletry bags while still delivering effective cleaning.",
    specs: [
      { label: "Tank", value: "Collapsible" },
      { label: "Charging", value: "USB-C" },
      { label: "Size", value: "Travel" },
      { label: "Reservoir", value: "Small" },
      { label: "Use", value: "Travel dental" },
      { label: "Weight", value: "Light" },
    ],
  },
  {
    slug: "remington-tlg-precision-grooming-kit",
    name: "Remington TLG Precision Grooming Kit",
    brand: "Remington",
    price: "$29",
    rating: 4.3,
    reviewCount: 5200,
    image: "https://m.media-amazon.com/images/I/811Eg+2V5kL._SL1500_.jpg",
    tag: "Men's Travel",
    tagColor: "#b45309",
    pros: ["Multiple attachments", "Runs on batteries"],
    cons: ["No built-in battery", "Power varies with AAA cells"],
    verdict: "A small grooming kit for nose, brows and detail work that fits in any corner pocket.",
    amazonUrl: "https://www.amazon.com/Remington-TLG-100ACDN-Precision-Grooming-Travel/dp/B00006IV4B",
    description:
      "The Remington TLG Precision Grooming Kit includes multiple attachments for nose, brows, and detail work. It runs on batteries so you don't need an outlet, and the whole kit fits in a corner of your bag.",
    specs: [
      { label: "Attachments", value: "Multiple" },
      { label: "Power", value: "Batteries (AAA)" },
      { label: "Use", value: "Nose, brows, detail" },
      { label: "Size", value: "Pocket / small" },
      { label: "Travel", value: "No cord" },
      { label: "Weight", value: "Light" },
    ],
  },
  {
    slug: "bagsmart-toiletry-bag",
    name: "BAGSMART Toiletry Travel Bag",
    brand: "BAGSMART",
    price: "$29",
    rating: 4.7,
    reviewCount: 17000,
    image: "https://m.media-amazon.com/images/I/716a+hkQcrL._AC_SL1500_.jpg",
    tag: "Organizer",
    tagColor: "#D4AF37",
    pros: ["Hangs on hooks", "Multiple compartments"],
    cons: ["Bulky if overpacked", "Not ultra-rigid"],
    verdict: "A water-resistant hanging toiletry bag that keeps all your compact tools neatly organized.",
    amazonUrl: "https://www.amazon.com/Toiletry-BAGSMART-Water-resistant-Organizer-Accessories/dp/B08KD2BH4R",
    description:
      "The BAGSMART Toiletry Travel Bag is water-resistant and hangs on hooks for easy access. Multiple compartments keep compact dryers, groomers, and bottles organized so nothing gets lost in your luggage.",
    specs: [
      { label: "Style", value: "Hanging" },
      { label: "Compartments", value: "Multiple" },
      { label: "Material", value: "Water-resistant" },
      { label: "Use", value: "Toiletries & tools" },
      { label: "Travel", value: "Carry-on friendly" },
      { label: "Design", value: "Organizer" },
    ],
  },
]

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function TravelSizeReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(product.rating))

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] font-sans">
        {/* Back link */}
        <div className="max-w-5xl mx-auto px-4 pt-8">
          <Link
            href="/travel-size"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--lavender)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Travel Size
          </Link>
        </div>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 pt-6 pb-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[var(--muted)]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <span
                className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ backgroundColor: product.tagColor }}
              >
                {product.tag}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-widest mb-1">
                  {product.brand}
                </p>
                <h1
                  className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] text-balance leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {product.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {stars.map((filled, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={filled ? "#D4AF37" : "none"}
                      stroke={filled ? "#D4AF37" : "#d1d5db"}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[var(--foreground)]">{product.rating}</span>
                <span className="text-sm text-[var(--muted-foreground)]">
                  ({product.reviewCount.toLocaleString()} reviews)
                </span>
              </div>

              <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                {product.description}
              </p>

              <a
                href={product.amazonUrl + "?tag=spacesavers-20"}
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white font-bold py-3.5 px-8 rounded-2xl transition-colors w-fit"
              >
                <ExternalLink className="w-4 h-4" />
                Check on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <div className="bg-[var(--lavender)]/10 border border-[var(--lavender)]/20 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--lavender)] mb-2">
              Our Verdict
            </p>
            <p className="text-lg font-semibold text-[var(--foreground)] leading-relaxed">
              &ldquo;{product.verdict}&rdquo;
            </p>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
              <h2 className="font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> What we love
              </h2>
              <ul className="flex flex-col gap-2.5">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-emerald-800">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
              <h2 className="font-bold text-rose-700 mb-4 flex items-center gap-2">
                <XCircle className="w-4 h-4" /> Watch out for
              </h2>
              <ul className="flex flex-col gap-2.5">
                {product.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-rose-800">
                    <XCircle className="w-4 h-4 mt-0.5 shrink-0 text-rose-400" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <h2
            className="text-xl font-extrabold text-[var(--foreground)] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Specs at a Glance
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-3 flex flex-col gap-0.5"
              >
                <span className="text-xs text-[var(--muted-foreground)] font-medium">{spec.label}</span>
                <span className="text-sm font-bold text-[var(--foreground)]">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
