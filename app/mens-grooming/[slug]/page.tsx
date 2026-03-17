import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, CheckCircle, XCircle, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const products = [
  {
    slug: "braun-series-9-pro",
    name: "Braun Series 9 Pro+",
    brand: "Braun",
    price: "$279",
    rating: 4.8,
    reviewCount: 4120,
    image: "/images/mens-grooming-hero.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["5 sync elements", "AutoSense technology", "Clean & Charge station"],
    cons: ["Expensive refills", "Heavy unit"],
    verdict: "The most advanced electric shaver on the market. Effortless, close, and gentle.",
    amazonUrl: "https://www.amazon.com/s?k=braun+series+9+pro",
    description:
      "The Braun Series 9 Pro+ represents the pinnacle of electric shaving technology. Its five synchronized shaving elements adapt to every facial contour while AutoSense technology reads and adapts to beard density 40,000 times per second. The result is a shave so close and comfortable you'll forget you ever used a manual razor.",
    specs: [
      { label: "Motor Type", value: "Linear motor" },
      { label: "Shaving Elements", value: "5 sync elements" },
      { label: "Battery Life", value: "60 min" },
      { label: "Charging Time", value: "1 hour" },
      { label: "Wet & Dry", value: "Yes" },
      { label: "Cleaning Station", value: "Included" },
    ],
  },
  {
    slug: "philips-norelco-oneblade",
    name: "Philips Norelco OneBlade",
    brand: "Philips",
    price: "$49",
    rating: 4.5,
    reviewCount: 32800,
    image: "/images/trimmer.jpg",
    tag: "Best Value",
    tagColor: "#D4AF37",
    pros: ["Trim, edge & shave", "Wet & dry", "Affordable blades"],
    cons: ["Not for thick beards", "Buzzy vibration"],
    verdict: "A cult classic. Handles any beard length with surprising finesse at a bargain price.",
    amazonUrl: "https://www.amazon.com/s?k=philips+norelco+oneblade",
    description:
      "The OneBlade is a genuinely unique product — it trims, edges, and shaves any length of hair without skin damage. The dual-sided blade moves 200 times per second and is gentle enough for sensitive areas. For men who don't want a full shave but need precision styling, nothing else comes close at this price.",
    specs: [
      { label: "Blade Speed", value: "200x/sec" },
      { label: "Combs Included", value: "3 (1mm, 3mm, 5mm)" },
      { label: "Battery Life", value: "45 min" },
      { label: "Wet & Dry", value: "Yes" },
      { label: "Replacement Blade", value: "Every 4 months" },
      { label: "Weight", value: "145g" },
    ],
  },
  {
    slug: "wahl-professional-5-star",
    name: "Wahl Professional 5-Star",
    brand: "Wahl",
    price: "$99",
    rating: 4.7,
    reviewCount: 8910,
    image: "/images/mens-grooming-hero.jpg",
    tag: "Barber Grade",
    tagColor: "#059669",
    pros: ["Cordless + corded", "Zero-overlap blades", "Long battery"],
    cons: ["Loud", "Oil required"],
    verdict: "What barbers actually use. Hospital-grade blades and unbeatable precision.",
    amazonUrl: "https://www.amazon.com/s?k=wahl+5+star+trimmer",
    description:
      "The Wahl 5-Star series is what professional barbers reach for every day. Zero-overlap blades deliver an incredibly close cut without skin irritation, and the electromagnetic motor runs cooler than rotary alternatives. This is a workhorse that will outlast anything in its price bracket.",
    specs: [
      { label: "Motor Type", value: "Electromagnetic" },
      { label: "Blade Material", value: "Carbon steel" },
      { label: "Battery Life", value: "90 min" },
      { label: "Corded Mode", value: "Yes" },
      { label: "Weight", value: "312g" },
      { label: "Noise Level", value: "High" },
    ],
  },
  {
    slug: "panasonic-arc5",
    name: "Panasonic Arc5",
    brand: "Panasonic",
    price: "$199",
    rating: 4.6,
    reviewCount: 2345,
    image: "/images/featured.jpg",
    tag: "Multi-Flex",
    tagColor: "#9D50BB",
    pros: ["5-blade system", "Pivoting head", "Wet & dry"],
    cons: ["Bulky design", "Pricey cleaning system"],
    verdict: "A powerhouse shaver that follows every facial contour with intelligent precision.",
    amazonUrl: "https://www.amazon.com/s?k=panasonic+arc5",
    description:
      "The Arc5 features five ultra-thin arc blades that work in concert to capture and cut even the flattest, most stubborn hairs. The 14,000 RPM linear motor drives blades across your face with minimal friction, and the 3D pivoting head ensures every blade stays in contact with your skin regardless of contour.",
    specs: [
      { label: "Blades", value: "5-blade arc system" },
      { label: "Motor Speed", value: "14,000 RPM" },
      { label: "Battery Life", value: "45 min" },
      { label: "Pivot Range", value: "3D multi-flex" },
      { label: "Wet & Dry", value: "Yes" },
      { label: "Charging", value: "Rapid 5-min charge" },
    ],
  },
  {
    slug: "manscaped-lawn-mower-5",
    name: "Manscaped Lawn Mower 5.0",
    brand: "Manscaped",
    price: "$89",
    rating: 4.4,
    reviewCount: 6201,
    image: "/images/trimmer.jpg",
    tag: "Space Saver",
    tagColor: "#0891b2",
    pros: ["SkinSafe technology", "Wireless charging", "Compact travel size"],
    cons: ["Loud motor", "Blades dull fast"],
    verdict: "Built for the modern man. Safe, quiet, and travel-friendly body grooming done right.",
    amazonUrl: "https://www.amazon.com/s?k=manscaped+lawn+mower+5",
    description:
      "The Lawn Mower 5.0 takes body grooming seriously with SkinSafe technology that reduces nicks and cuts by up to 90%. The ceramic blade travels at 7,000 RPM and the wireless charging case doubles as a travel pouch. For compact bathroom routines, this is the most thoughtfully designed body trimmer available.",
    specs: [
      { label: "Blade Material", value: "Ceramic" },
      { label: "Motor Speed", value: "7,000 RPM" },
      { label: "Battery Life", value: "90 min" },
      { label: "Charging", value: "Wireless Qi" },
      { label: "Waterproof", value: "IPX7" },
      { label: "Weight", value: "180g" },
    ],
  },
  {
    slug: "gillette-heated-razor",
    name: "Gillette Heated Razor",
    brand: "Gillette",
    price: "$149",
    rating: 4.3,
    reviewCount: 1102,
    image: "/images/mens-grooming-hero.jpg",
    tag: "Luxury Shave",
    tagColor: "#b45309",
    pros: ["Instant heat bar", "Lathered blade feel", "Rechargeable"],
    cons: ["Blade cost", "Warm-up needed"],
    verdict: "The closest you'll get to a hot-towel barber shave at home. A true luxury experience.",
    amazonUrl: "https://www.amazon.com/s?k=gillette+heated+razor",
    description:
      "The GilletteLabs Heated Razor replicates the warm, smooth glide of a professional hot-towel shave using a micro-regulated heating bar that reaches 43°C in under a second. Paired with a Fusion5 cartridge, the warmth opens pores and softens hairs for an exceptionally comfortable, incredibly close result.",
    specs: [
      { label: "Heat Temperature", value: "43°C" },
      { label: "Warm-up Time", value: "< 1 second" },
      { label: "Heat Settings", value: "3 levels" },
      { label: "Battery", value: "Rechargeable via USB" },
      { label: "Cartridge Type", value: "Fusion5 compatible" },
      { label: "Weight", value: "135g" },
    ],
  },
]

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function MensGroomingReviewPage({
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
            href="/mens-grooming"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--lavender)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Men&apos;s Grooming
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
