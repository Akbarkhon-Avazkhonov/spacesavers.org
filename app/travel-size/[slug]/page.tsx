import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, CheckCircle, XCircle, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const products = [
  {
    slug: "conair-1875w-folding",
    name: "Conair 1875W Folding",
    brand: "Conair",
    price: "$24",
    rating: 4.5,
    reviewCount: 41200,
    image: "/images/travel-kit.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["Dual voltage", "Foldable handle", "Lightweight 320g"],
    cons: ["Less powerful than full-size", "Short cord"],
    verdict: "The travel dryer that lives in your bag permanently. Reliable and fits everywhere.",
    amazonUrl: "https://www.amazon.com/s?k=conair+folding+travel+dryer",
    description:
      "The Conair 1875W Folding Dryer is the undisputed king of travel dryers. Dual-voltage compatibility (100–240V) means it works everywhere from New York to Tokyo without an adapter. The folding handle collapses flat, and at 320g it barely registers in your luggage. For the price, nothing else comes close.",
    specs: [
      { label: "Wattage", value: "1875W" },
      { label: "Voltage", value: "100–240V dual" },
      { label: "Weight", value: "320g" },
      { label: "Heat Settings", value: "2 + cool shot" },
      { label: "Cord Length", value: "5ft" },
      { label: "Folding Handle", value: "Yes" },
    ],
  },
  {
    slug: "ghd-unplugged-styler",
    name: "ghd Unplugged Styler",
    brand: "ghd",
    price: "$299",
    rating: 4.7,
    reviewCount: 1203,
    image: "/images/hair-dryer.jpg",
    tag: "Premium",
    tagColor: "#D4AF37",
    pros: ["Fully cordless", "30 min battery", "Salon-quality plates"],
    cons: ["Expensive", "Charging time"],
    verdict: "The world's first cordless styler that performs like a corded one. Freedom redefined.",
    amazonUrl: "https://www.amazon.com/s?k=ghd+unplugged+styler",
    description:
      "The ghd Unplugged is a groundbreaking product — the first cordless hair straightener that genuinely matches the performance of a corded model. Ceramic floating plates reach 185°C and maintain consistent heat while you style. 30 minutes of cordless use is enough for most routines, and the magnetic charger is elegantly simple.",
    specs: [
      { label: "Plate Temp", value: "185°C" },
      { label: "Battery Life", value: "30 min" },
      { label: "Plate Type", value: "Ceramic floating" },
      { label: "Plate Width", value: "25mm" },
      { label: "Charging", value: "Magnetic USB-C" },
      { label: "Auto Off", value: "30 minutes" },
    ],
  },
  {
    slug: "remington-tstudio-silk",
    name: "Remington T|Studio Silk",
    brand: "Remington",
    price: "$49",
    rating: 4.4,
    reviewCount: 7820,
    image: "/images/travel-size-hero.jpg",
    tag: "Best Value",
    tagColor: "#059669",
    pros: ["Dual voltage", "Floating plates", "Slim profile"],
    cons: ["Heats slowly", "Basic build quality"],
    verdict: "Great flat iron for the price. Slim, dual-voltage, and genuinely luggage-friendly.",
    amazonUrl: "https://www.amazon.com/s?k=remington+silk+travel+straightener",
    description:
      "The Remington T|Studio Silk packs silk ceramic floating plates into a slender body that slides into any bag pocket. Dual voltage makes it airport-ready without an adapter, and the 30-second heat-up (while slower than premium models) is more than acceptable for the price. A genuine value pick for frequent travellers.",
    specs: [
      { label: "Max Temp", value: "230°C" },
      { label: "Voltage", value: "100–240V dual" },
      { label: "Plate Type", value: "Silk ceramic" },
      { label: "Plate Width", value: "1 inch" },
      { label: "Heat-up Time", value: "30 seconds" },
      { label: "Auto Off", value: "60 minutes" },
    ],
  },
  {
    slug: "dyson-corrale",
    name: "Dyson Corrale",
    brand: "Dyson",
    price: "$499",
    rating: 4.6,
    reviewCount: 892,
    image: "/images/featured.jpg",
    tag: "Cordless Luxury",
    tagColor: "#9D50BB",
    pros: ["Flexing plates", "Cordless mode", "Manganese copper plates"],
    cons: ["Very expensive", "Short cordless time"],
    verdict: "Dyson's take on the perfect travel styler. Flex plates are genuinely revolutionary.",
    amazonUrl: "https://www.amazon.com/s?k=dyson+corrale",
    description:
      "The Dyson Corrale is the most technologically advanced hair straightener ever made. Flexing manganese copper plates gather and shape hair to reduce frizz with up to 50% less heat damage than conventional stylers. The cordless mode — while short at around 30 minutes — is perfect for touch-ups anywhere. This is genuinely a different category of product.",
    specs: [
      { label: "Plate Material", value: "Manganese copper" },
      { label: "Cordless Time", value: "~30 min" },
      { label: "Max Temp", value: "230°C" },
      { label: "Heat Settings", value: "3 (165°, 185°, 210°)" },
      { label: "Charging", value: "Magnetic USB-C" },
      { label: "Auto Off", value: "30 minutes" },
    ],
  },
  {
    slug: "philips-travel-shaver-brl136",
    name: "Philips Travel Shaver BRL136",
    brand: "Philips",
    price: "$39",
    rating: 4.3,
    reviewCount: 5411,
    image: "/images/trimmer.jpg",
    tag: "Space Saver",
    tagColor: "#0891b2",
    pros: ["SenseIQ", "Dual voltage", "Pouch included"],
    cons: ["Only 3 attachments", "Short battery"],
    verdict: "Handles all grooming needs in one pocket-sized device. No bathroom space wasted.",
    amazonUrl: "https://www.amazon.com/s?k=philips+travel+shaver",
    description:
      "The Philips BRL136 packs SenseIQ intelligence — which reads your hair type and adapts power accordingly — into a body barely larger than a permanent marker. Dual voltage means no adapter headaches, and the included travel pouch keeps everything together. Three attachments cover face, body, and sensitive areas.",
    specs: [
      { label: "Technology", value: "SenseIQ adaptive" },
      { label: "Voltage", value: "100–240V dual" },
      { label: "Attachments", value: "3 included" },
      { label: "Battery Life", value: "40 min" },
      { label: "Waterproof", value: "IPX4" },
      { label: "Weight", value: "140g" },
    ],
  },
  {
    slug: "tymo-ring-cordless",
    name: "TYMO Ring Cordless",
    brand: "TYMO",
    price: "$59",
    rating: 4.4,
    reviewCount: 3109,
    image: "/images/travel-size-hero.jpg",
    tag: "Cordless",
    tagColor: "#b45309",
    pros: ["USB-C charging", "Ceramic plates", "Auto shutoff"],
    cons: ["Smaller plates", "Battery indicator"],
    verdict: "A surprisingly capable cordless straightener for touch-ups on the go.",
    amazonUrl: "https://www.amazon.com/s?k=tymo+ring+cordless+straightener",
    description:
      "The TYMO Ring Cordless punches well above its price with genuine ceramic plates, a USB-C charging port, and a 20-minute auto-shutoff for travel peace of mind. The slightly narrower plates are actually an advantage for precise styling. For daily touch-ups between wash days or weekend trips, it's a standout value.",
    specs: [
      { label: "Max Temp", value: "200°C" },
      { label: "Plate Type", value: "Ceramic coated" },
      { label: "Battery Life", value: "~25 min" },
      { label: "Charging", value: "USB-C" },
      { label: "Heat-up Time", value: "60 seconds" },
      { label: "Auto Off", value: "20 minutes" },
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
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
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
