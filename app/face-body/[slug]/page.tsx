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
    slug: "braun-silk-epil-9",
    name: "Braun Silk-epil 9",
    brand: "Braun",
    price: "$119",
    rating: 4.7,
    reviewCount: 5832,
    image: "/images/face-body-hero.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["80 tweezers for efficient epilation", "Wet & dry use in the shower", "Gentle on sensitive skin"],
    cons: ["Painful first use for beginners", "Long charging time"],
    verdict: "The gold standard in epilators. Long-lasting smoothness that waxing simply cannot match.",
    amazonUrl: "https://www.amazon.com/s?k=braun+silk+epil+9",
  },
  {
    id: 2,
    slug: "foreo-luna-4",
    name: "FOREO LUNA 4",
    brand: "FOREO",
    price: "$219",
    rating: 4.8,
    reviewCount: 2103,
    image: "/images/trimmer.jpg",
    tag: "Best Cleanser",
    tagColor: "#D4AF37",
    pros: ["App-controlled intensity settings", "Hygienic silicone bristles", "300 uses per single charge"],
    cons: ["High price point", "App required for full features"],
    verdict: "The smartest facial cleanser on the market. Your skin will thank you every single morning.",
    amazonUrl: "https://www.amazon.com/s?k=foreo+luna+4",
  },
  {
    id: 3,
    slug: "panasonic-es-ed90",
    name: "Panasonic ES-ED90",
    brand: "Panasonic",
    price: "$79",
    rating: 4.4,
    reviewCount: 3421,
    image: "/images/featured.jpg",
    tag: "Budget Pick",
    tagColor: "#059669",
    pros: ["6-in-1 grooming device", "Wet & dry use", "Excellent value for money"],
    cons: ["Motor can be loud", "Basic attachment quality"],
    verdict: "Outstanding value. Six tools in one compact device for a complete full body grooming routine.",
    amazonUrl: "https://www.amazon.com/s?k=panasonic+es-ed90",
  },
  {
    id: 4,
    slug: "nuface-trinity-plus",
    name: "NuFACE Trinity+",
    brand: "NuFACE",
    price: "$339",
    rating: 4.5,
    reviewCount: 987,
    image: "/images/face-body-hero.jpg",
    tag: "Anti-Aging",
    tagColor: "#9D50BB",
    pros: ["Microcurrent lifting technology", "FDA cleared device", "Visible results in under 5 minutes"],
    cons: ["Expensive upfront cost", "Requires activating gel"],
    verdict: "The closest thing to a non-surgical facelift. Consistent use delivers genuinely visible results.",
    amazonUrl: "https://www.amazon.com/s?k=nuface+trinity",
  },
  {
    id: 5,
    slug: "conair-facial-steamer",
    name: "Conair Facial Steamer",
    brand: "Conair",
    price: "$29",
    rating: 4.2,
    reviewCount: 18920,
    image: "/images/travel-kit.jpg",
    tag: "Space Saver",
    tagColor: "#0891b2",
    pros: ["Compact shelf-friendly size", "Instant steam in seconds", "Very affordable entry price"],
    cons: ["Small water tank", "Lightweight plastic build"],
    verdict: "A budget-friendly spa experience at home. Fits on any bathroom shelf without taking up space.",
    amazonUrl: "https://www.amazon.com/s?k=conair+facial+steamer",
  },
  {
    id: 6,
    slug: "philips-lumea-ipl-9000",
    name: "Philips Lumea IPL 9000",
    brand: "Philips",
    price: "$469",
    rating: 4.6,
    reviewCount: 1204,
    image: "/images/face-body-hero.jpg",
    tag: "Hair Removal",
    tagColor: "#b45309",
    pros: ["Permanent hair reduction at home", "SenseIQ skin-reading technology", "Fully cordless design"],
    cons: ["Long initial treatment schedule", "Premium price investment"],
    verdict: "Clinic-quality IPL in your bathroom. The investment pays for itself within months of smooth skin.",
    amazonUrl: "https://www.amazon.com/s?k=philips+lumea+ipl+9000",
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

export default async function FaceBodyReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F5FEFA] font-sans">
        {/* Hero */}
        <section
          className="pt-28 pb-12 px-4"
          style={{ background: "linear-gradient(135deg, #faf5ff 0%, #E0FFF7 100%)" }}
        >
          <div className="max-w-5xl mx-auto">
            <Link
              href="/face-body"
              className="inline-flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#9D50BB] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Face & Body
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
              <h3 className="font-semibold text-[#059669] text-sm uppercase tracking-wider mb-1">
                What we loved
              </h3>
              {product.pros.map((pro) => (
                <span key={pro} className="flex items-start gap-2 text-[#333333]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  {pro}
                </span>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-[#d4f0e8] p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-[#dc2626] text-sm uppercase tracking-wider mb-1">
                Watch out for
              </h3>
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
