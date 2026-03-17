import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, CheckCircle, XCircle, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const products = [
  {
    slug: "philips-oneblade-mens-grooming",
    name: "Philips Norelco OneBlade Face & Body",
    brand: "Philips",
    price: "$59",
    rating: 4.7,
    reviewCount: 5400,
    image: "https://m.media-amazon.com/images/I/71ByHqCTcAL._SL1500_.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["Trim, edge and shave", "Safe on body areas"],
    cons: ["Blades need replacing", "Not ideal for ultra-thick beards"],
    verdict: "A single OneBlade handle that covers beard, body and detail work without clutter.",
    amazonUrl: "https://www.amazon.com/Philips-Norelco-Frustration-QP2724-90/dp/B0BZQTSBWZ",
    description:
      "The Philips Norelco OneBlade Face & Body trims, edges, and shaves any length of hair on face and body. The dual-sided blade is gentle enough for sensitive areas while the interchangeable combs let you set your length. One compact handle replaces multiple devices.",
    specs: [
      { label: "Use", value: "Face & body" },
      { label: "Combs", value: "Multiple length options" },
      { label: "Wet & Dry", value: "Yes" },
      { label: "Blade Life", value: "Replace periodically" },
      { label: "Battery", value: "Rechargeable" },
      { label: "Weight", value: "Lightweight" },
    ],
  },
  {
    slug: "manscaped-lawn-mower-ultra",
    name: "MANSCAPED Lawn Mower Ultra",
    brand: "MANSCAPED",
    price: "$89",
    rating: 4.6,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/71MpsjEz9EL._AC_SL1500_.jpg",
    tag: "Body Groomer",
    tagColor: "#D4AF37",
    pros: ["SkinSafe blades", "Designed for below-the-waist"],
    cons: ["Charging base takes some space", "Blades are proprietary"],
    verdict: "A purpose-built groin trimmer that makes full body grooming safer and simpler.",
    amazonUrl: "https://www.amazon.com/MANSCAPED%C2%AE-Mower%C2%AE-Ultra-Groin-Trimmer/dp/B0CDNQ62ML",
    description:
      "The MANSCAPED Lawn Mower Ultra is built for safe, comfortable body grooming with SkinSafe technology. The ceramic blade and ergonomic design reduce nicks and irritation. It stays compact on the shelf and is easy to travel with.",
    specs: [
      { label: "Blade", value: "SkinSafe ceramic" },
      { label: "Use", value: "Body grooming" },
      { label: "Charging", value: "Base or USB" },
      { label: "Waterproof", value: "Yes" },
      { label: "Battery Life", value: "Up to 90 min" },
      { label: "Weight", value: "Compact" },
    ],
  },
  {
    slug: "braun-series-9-pro-senso",
    name: "Braun Series 9 Pro+ SensoAdapt",
    brand: "Braun",
    price: "$299",
    rating: 4.8,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/81dlyMLoIhL._AC_SL1500_.jpg",
    tag: "Premium Shaver",
    tagColor: "#059669",
    pros: ["Adapts to beard density", "Automatic SmartCare station"],
    cons: ["Refill cartridges add cost", "Bulky charging base"],
    verdict: "A top-tier foil shaver for men who want fast, irritation-free shaves in less passes.",
    amazonUrl: "https://www.amazon.com/Braun-Electric-SensoAdapt-SmartCare-9660CCPS/dp/B0FGLF3SDT",
    description:
      "The Braun Series 9 Pro+ SensoAdapt uses intelligent sensors to adapt to your beard density 40,000 times per second. Five synchronized shaving elements follow every contour for a close, comfortable shave. The SmartCare station cleans, lubricates, and charges automatically.",
    specs: [
      { label: "Motor Type", value: "Linear motor" },
      { label: "Shaving Elements", value: "5 sync elements" },
      { label: "SensoAdapt", value: "Yes" },
      { label: "Battery Life", value: "50 min" },
      { label: "SmartCare Station", value: "Included" },
      { label: "Wet & Dry", value: "Yes" },
    ],
  },
  {
    slug: "braun-series-9-powercase",
    name: "Braun Series 9 PowerCase",
    brand: "Braun",
    price: "$79",
    rating: 4.5,
    reviewCount: 900,
    image: "https://m.media-amazon.com/images/I/81GjaqGAWML._SL1500_.jpg",
    tag: "Travel Add-On",
    tagColor: "#9D50BB",
    pros: ["Portable charging case", "Protects shaver in luggage"],
    cons: ["Only for specific models", "Adds a bit of bulk"],
    verdict: "A clever travel case that keeps your Braun shaver powered and protected on the go.",
    amazonUrl: "https://www.amazon.com/Braun-Powercase-Electric-Compatible-Portable/dp/B0CFCF4DNR",
    description:
      "The Braun PowerCase is a portable charging case designed for compatible Braun Series 9 shavers. It charges your shaver on the go and protects it in luggage, so you can keep your routine consistent when traveling without extra cords.",
    specs: [
      { label: "Compatibility", value: "Braun Series 9" },
      { label: "Function", value: "Charging + storage" },
      { label: "Portability", value: "Travel-friendly" },
      { label: "Protection", value: "Hard case" },
      { label: "Charging", value: "USB or outlet" },
      { label: "Weight", value: "Compact" },
    ],
  },
  {
    slug: "wahl-groomsman-kit",
    name: "Wahl Groomsman Beard & Trimmer Kit",
    brand: "Wahl",
    price: "$39",
    rating: 4.4,
    reviewCount: 15000,
    image: "https://m.media-amazon.com/images/I/81m6ROvq7CL._SL1500_.jpg",
    tag: "Best Value",
    tagColor: "#0891b2",
    pros: ["Multiple guide combs", "Good for beard and detail"],
    cons: ["Charging stand is basic", "Plastic guards feel light"],
    verdict: "An affordable all-in-one beard kit that keeps edges sharp without needing multiple devices.",
    amazonUrl: "https://www.amazon.com/Wahl-Groomsman-Rinseable-Interchangeable-Detailing/dp/B003TW70E0",
    description:
      "The Wahl Groomsman kit is a cordless beard and detail trimmer with multiple interchangeable combs. It’s rinseable, easy to store, and handles everything from stubble to longer beards. A solid value for a single, compact tool.",
    specs: [
      { label: "Type", value: "Beard & detail trimmer" },
      { label: "Combs", value: "Multiple included" },
      { label: "Cordless", value: "Yes" },
      { label: "Rinseable", value: "Yes" },
      { label: "Battery", value: "Rechargeable" },
      { label: "Weight", value: "Light" },
    ],
  },
  {
    slug: "ufree-professional-hair-clipper",
    name: "Ufree Professional Hair Clipper",
    brand: "Ufree",
    price: "$59",
    rating: 4.5,
    reviewCount: 2700,
    image: "https://m.media-amazon.com/images/I/71ZNqjHppNL._AC_SL1500_.jpg",
    tag: "Barber Style",
    tagColor: "#b45309",
    pros: ["Full-size clipper", "Cordless and rechargeable"],
    cons: ["A bit noisy", "Includes many guards to store"],
    verdict: "A powerful cordless clipper that lets you do barbershop-level cuts at home.",
    amazonUrl: "https://www.amazon.com/Ufree-Electric-Professional-Rechargeable-Waterproof/dp/B0FCYBJK6T",
    description:
      "The Ufree Professional Hair Clipper is a full-size, cordless clipper with multiple guard combs for all-over cuts and fades. It’s powerful enough for thick hair, rechargeable, and often waterproof for easy cleaning. One clipper replaces a trip to the barber for basic cuts.",
    specs: [
      { label: "Type", value: "Hair clipper" },
      { label: "Power", value: "Cordless" },
      { label: "Guards", value: "Multiple included" },
      { label: "Waterproof", value: "Yes" },
      { label: "Battery", value: "Rechargeable" },
      { label: "Use", value: "Home barbering" },
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
