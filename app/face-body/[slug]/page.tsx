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
    slug: "philips-oneblade-connectivity",
    name: "Philips OneBlade Connectivity Kit",
    brand: "Philips",
    price: "$79",
    rating: 4.7,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/71RJHZ-S8vL._SL1500_.jpg",
    tag: "Face & Body",
    tagColor: "#9D50BB",
    pros: ["Multiple attachments", "Works on face and body"],
    cons: ["Requires regular blade replacement", "Charging base is tall"],
    verdict: "A flexible OneBlade kit that handles facial hair and body grooming with one compact system.",
    amazonUrl: "https://www.amazon.com/Philips-Connectivity-Adjustable-QP4631-90/dp/B0CQPHFGL7",
  },
  {
    id: 2,
    slug: "philips-oneblade-refill-pack",
    name: "Philips Norelco OneBlade Refill Pack",
    brand: "Philips",
    price: "$39",
    rating: 4.6,
    reviewCount: 8600,
    image: "https://m.media-amazon.com/images/I/71oplM1pAML._SL1500_.jpg",
    tag: "Essentials",
    tagColor: "#D4AF37",
    pros: ["Long-lasting blades", "Good value per blade"],
    cons: ["Works only with OneBlade handles", "Small pieces to store"],
    verdict: "Refill blades that keep your OneBlade performing like new without taking extra space.",
    amazonUrl: "https://www.amazon.com/Philips-Norelco-OneBlade-QP1924-70/dp/B0CLWH333W",
  },
  {
    id: 3,
    slug: "philips-oneblade-core-kit",
    name: "Philips OneBlade Core Kit",
    brand: "Philips",
    price: "$59",
    rating: 4.7,
    reviewCount: 5400,
    image: "https://m.media-amazon.com/images/I/71MXrrn8UZL._AC_SL1500_.jpg",
    tag: "All-in-One",
    tagColor: "#059669",
    pros: ["Trim, edge and shave", "Compact handle and charger"],
    cons: ["Not ideal for very thick beards", "Just one main blade in box"],
    verdict: "A slim all-in-one shaver that replaces bulky razors and trimmers in your cabinet.",
    amazonUrl: "https://www.amazon.com/dp/B0CLX1573H",
  },
  {
    id: 4,
    slug: "electric-facial-massager",
    name: "Electric Facial Massager",
    brand: "Generic",
    price: "$49",
    rating: 4.4,
    reviewCount: 2200,
    image: "https://m.media-amazon.com/images/I/61wwm4qRZNS._AC_SL1500_.jpg",
    tag: "Anti-Aging",
    tagColor: "#9D50BB",
    pros: ["Helps serum absorption", "Targets fine lines"],
    cons: ["Requires consistent use", "Needs charging between sessions"],
    verdict: "A small multi-head facial massager that gives spa-style lifting without big devices.",
    amazonUrl: "https://www.amazon.com/Electric-Upgraded-Massager-Effective-Anti-Aging/dp/B093KB564N",
  },
  {
    id: 5,
    slug: "wavytalk-ipl-hair-removal",
    name: "Wavytalk IPL Hair Removal",
    brand: "Wavytalk",
    price: "$129",
    rating: 4.5,
    reviewCount: 1900,
    image: "https://m.media-amazon.com/images/I/61FJ1zneffL._SL1500_.jpg",
    tag: "Hair Removal",
    tagColor: "#b45309",
    pros: ["For legs, underarms and bikini", "Multiple intensity levels"],
    cons: ["Results take several weeks", "Needs eye protection and care"],
    verdict: "A compact IPL handset for long-term hair reduction that lives easily in a drawer.",
    amazonUrl: "https://www.amazon.com/Wavytalk-Hair-Removal-Device-Bikini/dp/B0FZV531TZ",
  },
  {
    id: 6,
    slug: "inteo-face-body-sculpting",
    name: "INTEO Face & Body Sculpting Machine",
    brand: "INTEO",
    price: "$159",
    rating: 4.3,
    reviewCount: 900,
    image: "https://m.media-amazon.com/images/I/71E18k2YWOL._AC_SL1500_.jpg",
    tag: "Body Toning",
    tagColor: "#0891b2",
    pros: ["Multiple treatment modes", "Targets face and body"],
    cons: ["Takes time per session", "Needs counter space when in use"],
    verdict: "A single sculpting device that replaces several niche gadgets for contouring and toning.",
    amazonUrl: "https://www.amazon.com/INTEO-Face-Body-Sculpting-Machine/dp/B0FR3Y5CX8",
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
              href={product.amazonUrl + "?tag=spacesavers-20"}
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
