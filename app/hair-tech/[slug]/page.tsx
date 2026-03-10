import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Star, CheckCircle, XCircle, ExternalLink, ShieldCheck } from "lucide-react"
import type { ProductReview } from "@/components/category-page-layout"

const products: ProductReview[] = [
  {
    id: 1,
    slug: "dyson-supersonic",
    name: "Dyson Supersonic",
    brand: "Dyson",
    price: "$429",
    rating: 4.8,
    reviewCount: 3241,
    image: "/images/dyson.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["Ultra-fast drying", "Intelligent heat control", "Magnetic attachments"],
    cons: ["Premium price", "Heavy handle"],
    verdict: "The benchmark for professional hair dryers. Worth every penny for daily use.",
    amazonUrl: "https://www.amazon.com/s?k=dyson+supersonic",
  },
  {
    id: 2,
    slug: "shark-flexstyle",
    name: "Shark FlexStyle",
    brand: "Shark",
    price: "$229",
    rating: 4.6,
    reviewCount: 1872,
    image: "/images/shark.jpg",
    tag: "Best Value",
    tagColor: "#D4AF37",
    pros: ["Multi-styler in one", "Foldable design", "Great for curls"],
    cons: ["Learning curve", "Cord a bit short"],
    verdict: "A genuine Dyson Airwrap rival at half the price. Impressive versatility.",
    amazonUrl: "https://www.amazon.com/s?k=shark+flexstyle",
  },
  {
    id: 3,
    slug: "revlon-one-step",
    name: "Revlon One-Step",
    brand: "Revlon",
    price: "$39",
    rating: 4.5,
    reviewCount: 89203,
    image: "/images/hair-dryer.jpg",
    tag: "Budget King",
    tagColor: "#059669",
    pros: ["All-in-one brush", "Fast results", "Affordable"],
    cons: ["Not for thick hair", "Gets hot quickly"],
    verdict: "Millions of fans for a reason. The best entry-level styling tool on the market.",
    amazonUrl: "https://www.amazon.com/s?k=revlon+one+step",
  },
  {
    id: 4,
    slug: "ghd-helios",
    name: "ghd Helios",
    brand: "ghd",
    price: "$279",
    rating: 4.7,
    reviewCount: 654,
    image: "/images/featured.jpg",
    tag: "Salon Grade",
    tagColor: "#9D50BB",
    pros: ["Ionic technology", "Quiet motor", "Even airflow"],
    cons: ["No cold shot button", "Pricey"],
    verdict: "Beloved by salon professionals. Silky smooth finish every time.",
    amazonUrl: "https://www.amazon.com/s?k=ghd+helios+hair+dryer",
  },
  {
    id: 5,
    slug: "remington-damage-protection",
    name: "Remington Damage Protection",
    brand: "Remington",
    price: "$24",
    rating: 4.3,
    reviewCount: 12740,
    image: "/images/hair-tech-hero.jpg",
    tag: "Space Saver",
    tagColor: "#0891b2",
    pros: ["Compact size", "Lightweight", "Foldable handle"],
    cons: ["Less power", "Basic attachments"],
    verdict: "Ideal for travel or small bathroom shelves. Does the job without the bulk.",
    amazonUrl: "https://www.amazon.com/s?k=remington+compact+hair+dryer",
  },
  {
    id: 6,
    slug: "t3-cura-luxe",
    name: "T3 Cura Luxe",
    brand: "T3",
    price: "$350",
    rating: 4.6,
    reviewCount: 431,
    image: "/images/hair-dryer.jpg",
    tag: "Luxury",
    tagColor: "#b45309",
    pros: ["Digital controls", "Multiple heat zones", "Ergonomic design"],
    cons: ["Very expensive", "Large footprint"],
    verdict: "A luxurious dryer for those who want salon results at home without compromise.",
    amazonUrl: "https://www.amazon.com/s?k=t3+cura+luxe",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className="w-5 h-5"
          fill={star <= Math.round(rating) ? "#D4AF37" : "none"}
          stroke={star <= Math.round(rating) ? "#D4AF37" : "#d1d5db"}
        />
      ))}
      <span className="ml-1.5 text-base text-[#6b7280] font-semibold">{rating.toFixed(1)}</span>
    </div>
  )
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} Review — SpaceSaversHub`,
    description: product.verdict,
  }
}

export default async function HairTechReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F5FEFA] font-sans">
        {/* Hero */}
        <section className="pt-28 pb-12 px-4" style={{ background: "linear-gradient(135deg, #f3e8ff 0%, #E0FFF7 100%)" }}>
          <div className="max-w-5xl mx-auto">
            <Link
              href="/hair-tech"
              className="inline-flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#9D50BB] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Hair Tech
            </Link>

            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Image */}
              <div className="relative w-full md:w-80 h-72 rounded-2xl overflow-hidden shadow-xl shrink-0 bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ background: product.tagColor }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4 flex-1">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#9D50BB]">
                  {product.brand}
                </p>
                <h1
                  className="text-3xl md:text-4xl font-extrabold text-[#333333] leading-tight text-balance"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {product.name}
                </h1>
                <StarRating rating={product.rating} />
                <p className="text-sm text-[#6b7280]">
                  Based on {product.reviewCount.toLocaleString()} verified reviews
                </p>
                <p className="text-[#6b7280] text-base leading-relaxed italic border-l-4 border-[#9D50BB]/40 pl-4">
                  {product.verdict}
                </p>
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b8931f] text-white font-semibold px-6 py-3 rounded-xl transition-colors w-fit mt-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2
            className="text-2xl font-bold text-[#333333] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pros & Cons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#d4f0e8] p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-[#059669] text-sm uppercase tracking-wider mb-1">What we loved</h3>
              {product.pros.map((pro) => (
                <span key={pro} className="flex items-start gap-2 text-[#333333]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  {pro}
                </span>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-[#d4f0e8] p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-[#dc2626] text-sm uppercase tracking-wider mb-1">Watch out for</h3>
              {product.cons.map((con) => (
                <span key={con} className="flex items-start gap-2 text-[#333333]">
                  <XCircle className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  {con}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <div className="bg-[#9D50BB]/5 border border-[#9D50BB]/20 rounded-2xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#9D50BB]" />
              <h2
                className="text-xl font-bold text-[#333333]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Verdict
              </h2>
            </div>
            <p className="text-[#333333] text-base leading-relaxed">{product.verdict}</p>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-[#9D50BB] hover:bg-[#8a3fa8] text-white font-semibold px-6 py-3 rounded-xl transition-colors w-fit"
            >
              <ExternalLink className="w-4 h-4" />
              Check Price on Amazon
            </a>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <p className="text-xs text-[#9ca3af] text-center leading-relaxed">
            As an Amazon Associate, SpaceSaversHub earns from qualifying purchases. All reviews are independent and unsponsored.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
