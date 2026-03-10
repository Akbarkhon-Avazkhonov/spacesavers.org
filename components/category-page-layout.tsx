import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, CheckCircle, XCircle } from "lucide-react"

export interface ProductReview {
  id: number
  slug: string
  name: string
  brand: string
  price: string
  rating: number
  reviewCount: number
  image: string
  tag: string
  tagColor: string
  pros: string[]
  cons: string[]
  verdict: string
  amazonUrl: string
}

interface CategoryPageLayoutProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  accentColor: string
  lightBg: string
  products: ProductReview[]
  basePath: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className="w-4 h-4"
          fill={star <= Math.round(rating) ? "#D4AF37" : "none"}
          stroke={star <= Math.round(rating) ? "#D4AF37" : "#d1d5db"}
        />
      ))}
      <span className="ml-1 text-sm text-[#6b7280] font-medium">{rating.toFixed(1)}</span>
    </div>
  )
}

export function CategoryPageLayout({
  title,
  subtitle,
  description,
  heroImage,
  accentColor,
  lightBg,
  products,
  basePath,
}: CategoryPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F5FEFA] font-sans">
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{ background: lightBg }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#9D50BB] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: accentColor }}
            >
              {subtitle}
            </p>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-[#333333] text-balance leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h1>
            <p className="text-[#6b7280] text-lg leading-relaxed max-w-xl">{description}</p>
          </div>
          <div className="flex-1 relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2
          className="text-2xl font-bold text-[#333333] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our {title} Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#d4f0e8] flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-52 w-full bg-[#F5FEFA]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: product.tagColor, color: "#fff" }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <p className="text-xs text-[#9D50BB] font-semibold uppercase tracking-wider">{product.brand}</p>
                  <h3
                    className="text-lg font-bold text-[#333333] mt-0.5 leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5">
                    <StarRating rating={product.rating} />
                    <span className="text-xs text-[#6b7280]">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex flex-col gap-1">
                    {product.pros.map((pro) => (
                      <span key={pro} className="flex items-start gap-1 text-[#059669]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        {pro}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1">
                    {product.cons.map((con) => (
                      <span key={con} className="flex items-start gap-1 text-[#dc2626]">
                        <XCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        {con}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verdict */}
                <p className="text-[#6b7280] text-sm italic leading-relaxed border-l-2 border-[#9D50BB]/30 pl-3">
                  {product.verdict}
                </p>

                {/* CTA */}
                <div className="mt-auto flex gap-2">
                  <Link
                    href={`${basePath}/${product.slug}`}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#9D50BB] hover:bg-[#8a3fa8] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                  >
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <p className="text-xs text-[#9ca3af] text-center leading-relaxed">
          As an Amazon Associate, SpaceSaversHub earns from qualifying purchases. All reviews are independent and unsponsored.
        </p>
      </section>
    </main>
  )
}
