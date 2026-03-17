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
    slug: "wavytalk-thermal-brush",
    name: "Wavytalk Thermal Brush",
    brand: "Wavytalk",
    price: "$59",
    rating: 4.7,
    reviewCount: 1200,
    image: "https://m.media-amazon.com/images/I/71awNkSgPfL._AC_SL1500_.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["2-in-1 straightening brush", "Even ceramic heat", "Great for frizz control"],
    cons: ["Brush head is wide", "No travel pouch included"],
    verdict: "A compact hot brush that replaces your straightener and paddle brush in one tool.",
    amazonUrl: "https://www.amazon.com/Wavytalk-Thermal-Negative-Ceramic-Tourmaline/dp/B0CQSNXLJR",
  },
  {
    id: 2,
    slug: "confu-professional-hairdryer",
    name: "CONFU Professional Hairdryer",
    brand: "CONFU",
    price: "$69",
    rating: 4.6,
    reviewCount: 980,
    image: "https://m.media-amazon.com/images/I/61TqpGfDtkL._AC_SL1500_.jpg",
    tag: "Best Value",
    tagColor: "#D4AF37",
    pros: ["Comes with diffuser", "Lightweight body", "Good for curls and waves"],
    cons: ["Cord could be longer", "Buttons are small"],
    verdict: "A powerful yet compact dryer with diffuser that earns its permanent spot on the shelf.",
    amazonUrl: "https://www.amazon.com/CONFU-Diffuser-Professional-Hairdryer-Lightweight/dp/B0F7H4TS4P",
  },
  {
    id: 3,
    slug: "paddle-detangling-brush",
    name: "Paddle Detangling Brush",
    brand: "Crave Naturals",
    price: "$15",
    rating: 4.5,
    reviewCount: 15000,
    image: "https://m.media-amazon.com/images/I/61STHYvtwwL._SL1500_.jpg",
    tag: "Tangle Tamer",
    tagColor: "#059669",
    pros: ["Gentle detangling", "Works on wet and dry hair"],
    cons: ["Large head for short hair", "Handle is basic plastic"],
    verdict: "A simple paddle brush that glides through knots without taking up drawer space.",
    amazonUrl: "https://www.amazon.com/Paddle-Detangling-Tangle-Hairbrush-Natural/dp/B07PPDFMJ5",
  },
  {
    id: 4,
    slug: "slopehill-professional-dryer",
    name: "Slopehill Professional Dryer",
    brand: "Slopehill",
    price: "$79",
    rating: 4.6,
    reviewCount: 4300,
    image: "https://m.media-amazon.com/images/I/71lc-NuJhaL._AC_SL1500_.jpg",
    tag: "Curls & Coils",
    tagColor: "#9D50BB",
    pros: ["High-speed motor", "Diffuser included", "Low noise"],
    cons: ["No folding handle", "Only two color options"],
    verdict: "A salon-style dryer with diffuser that actually fits on smaller bathroom shelves.",
    amazonUrl: "https://www.amazon.com/slopehill-Professional-Powerful-Heating-Diffuser/dp/B086SR1KML",
  },
  {
    id: 5,
    slug: "wavytalk-professional-lightweight",
    name: "Wavytalk Lightweight Dryer",
    brand: "Wavytalk",
    price: "$49",
    rating: 4.5,
    reviewCount: 2600,
    image: "https://m.media-amazon.com/images/I/71jd6Vb79IL._AC_SL1500_.jpg",
    tag: "Space Saver",
    tagColor: "#0891b2",
    pros: ["Compact design", "Nozzle concentrator", "Quick drying"],
    cons: ["Buttons on handle are close", "Cord is mid-length"],
    verdict: "A no-fuss lightweight dryer that delivers salon results without hogging space.",
    amazonUrl: "https://www.amazon.com/Wavytalk-Concentractor-Smoothing-Professional-Lightweight/dp/B09CP8SSGP",
  },
  {
    id: 6,
    slug: "dyson-supersonic-nickel-copper",
    name: "Dyson Supersonic (Nickel/Copper)",
    brand: "Dyson",
    price: "$429",
    rating: 4.8,
    reviewCount: 8000,
    image: "https://m.media-amazon.com/images/I/6106hSESJEL._SL1500_.jpg",
    tag: "Luxury Icon",
    tagColor: "#b45309",
    pros: ["Fast drying", "Intelligent heat control", "Premium attachments included"],
    cons: ["High price", "Cord is thick"],
    verdict: "The iconic compact dryer that redefined premium hair tools and still saves countertop space.",
    amazonUrl: "https://www.amazon.com/Dyson-Supersonic-Nickel-Copper-Presentation/dp/B0B4T6RTZ2",
  },
  {
    id: 7,
    slug: "dyson-supersonic-ceramic-pink",
    name: "Dyson Supersonic (Ceramic Pink/Rose Gold)",
    brand: "Dyson",
    price: "$429",
    rating: 4.8,
    reviewCount: 5200,
    image: "https://m.media-amazon.com/images/I/61vsCDdX82L._SL1500_.jpg",
    tag: "Collector Edition",
    tagColor: "#9D50BB",
    pros: ["Limited colorway", "Same powerful motor", "Great gift presentation case"],
    cons: ["Pricey special edition", "Accessories easy to misplace"],
    verdict: "All the performance of the classic Supersonic in a space-saving body with a statement finish.",
    amazonUrl: "https://www.amazon.com/Dyson-Supersonic-Hair-Dryer-Ceramic/dp/B0DMXBBK36",
  },
  {
    id: 8,
    slug: "dyson-airstrait-straightener",
    name: "Dyson Airstrait Straightener",
    brand: "Dyson",
    price: "$499",
    rating: 4.6,
    reviewCount: 2100,
    image: "https://m.media-amazon.com/images/I/71xvD0T4zDL._SL1500_.jpg",
    tag: "Wet-to-Dry",
    tagColor: "#D4AF37",
    pros: ["Straightens from wet hair", "No hot plates", "Saves time and tools"],
    cons: ["Premium price", "Slightly bulky body"],
    verdict: "Replaces both dryer and straightener with a single, clever wet-to-dry device.",
    amazonUrl: "https://www.amazon.com/Dyson-AirstraitTM-Straightener-straightener-damage/dp/B0F96Q7BP3",
  },
  {
    id: 9,
    slug: "highspeed-diffuser-dryer",
    name: "High-Speed Diffuser Dryer",
    brand: "Slopehill",
    price: "$89",
    rating: 4.6,
    reviewCount: 1700,
    image: "https://m.media-amazon.com/images/I/61xAuPu6yPL._AC_SL1500_.jpg",
    tag: "Curl Friendly",
    tagColor: "#059669",
    pros: ["High-speed airflow", "Defined curls with diffuser"],
    cons: ["No folding handle", "Controls on back take adjustment"],
    verdict: "A compact high-speed dryer that keeps curls bouncy while staying shelf-friendly.",
    amazonUrl: "https://www.amazon.com/Voltage-Diffuser-Professional-HighSpeed-Lightweight/dp/B0F8QJRX4F",
  },
  {
    id: 10,
    slug: "dyson-multi-styler",
    name: "Dyson Multi-Styler Complete",
    brand: "Dyson",
    price: "$599",
    rating: 4.7,
    reviewCount: 3100,
    image: "https://m.media-amazon.com/images/I/61gAd4PtRBL._SL1500_.jpg",
    tag: "All-in-One",
    tagColor: "#9D50BB",
    pros: ["Multiple attachments", "Intelligent airflow", "Replaces several bulky tools"],
    cons: ["Very expensive", "Takes time to learn attachments"],
    verdict: "One compact multi-styler that replaces a whole drawer of curling irons and brushes.",
    amazonUrl: "https://www.amazon.com/Dyson-Multi-Styler-Bluetooth-Versatility-Intelligent/dp/B0F96LDS27",
  },
  {
    id: 11,
    slug: "handor-2-in-1-straightener",
    name: "Handor 2-in-1 Straightener",
    brand: "Handor",
    price: "$39",
    rating: 4.4,
    reviewCount: 650,
    image: "https://m.media-amazon.com/images/I/71agwYnh5gL._AC_SL1500_.jpg",
    tag: "Budget Pick",
    tagColor: "#059669",
    pros: ["Digital display", "Multiple heat settings", "Slim and travel-friendly"],
    cons: ["No auto shut-off timer listed", "Cord is average length"],
    verdict: "An affordable straightener with digital controls that tucks easily into a small drawer.",
    amazonUrl: "https://www.amazon.com/Handor-Straightener-Settings-Display-250%C2%B0F-410%C2%B0F/dp/B0GFH363GD",
  },
  {
    id: 12,
    slug: "dyson-supersonic",
    name: "Dyson Supersonic Hair Dryer",
    brand: "Dyson",
    price: "$429",
    rating: 4.8,
    reviewCount: 10000,
    image: "https://m.media-amazon.com/images/I/71MJizsBJjL._SL1500_.jpg",
    tag: "Editor's Choice",
    tagColor: "#D4AF37",
    pros: ["Intelligent heat control to protect shine", "5 magnetic styling attachments included", "Very fast drying, even on thick hair"],
    cons: ["Premium price tag", "Cord is fixed and quite thick"],
    verdict: "The benchmark premium dryer if you want maximum hair protection and salon‑level results at home.",
    amazonUrl: "https://www.amazon.com/Dyson-Supersonic-Intelligent-attachments-Concentrator/dp/B0F96N2BP8",
  },
  {
    id: 13,
    slug: "shark-flexstyle",
    name: "Shark HD430 FlexStyle Multi‑Styler",
    brand: "Shark",
    price: "$299",
    rating: 4.6,
    reviewCount: 7500,
    image: "https://m.media-amazon.com/images/I/514MxxxPjcL.jpg",
    tag: "Best Value",
    tagColor: "#9D50BB",
    pros: ["5‑in‑1 styler and dryer in one device", "Auto‑wrap curlers for easy bouncy curls", "Strong option versus Dyson Airwrap at a lower price"],
    cons: ["Slight learning curve for all attachments", "Can feel a bit heavy during long styling sessions"],
    verdict: "A flexible multi‑styler that covers most everyday looks without taking over your bathroom cabinet.",
    amazonUrl: "https://www.amazon.com/Shark-HD430-Multi-Styler-Concentrator-Attachment/dp/B0B89P16MC",
  },
  {
    id: 14,
    slug: "panasonic-quickdry-oscillating",
    name: "Panasonic QuickDry Oscillating Hair Dryer",
    brand: "Panasonic",
    price: "$79",
    rating: 4.4,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/61szvtEIU+L._SL1500_.jpg",
    tag: "Daily Dryer",
    tagColor: "#059669",
    pros: ["QuickDry oscillating nozzle for more even airflow", "Comfortable for everyday use", "Multiple heat and speed settings"],
    cons: ["Not as powerful as flagship dryers", "Attachments are more basic than premium models"],
    verdict: "A practical daily dryer that spreads airflow evenly and keeps your routine simple and compact.",
    amazonUrl: "https://www.amazon.com/Panasonic-Oscillating-QuickDry-Concentrator-Attachments/dp/B08RK2LHR6",
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
                  href={product.amazonUrl + "?tag=spacesavers-20"}
        
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
