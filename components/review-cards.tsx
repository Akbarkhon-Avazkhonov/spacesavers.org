"use client"

import Image from "next/image"
import { Star, ShoppingCart, BookOpen, Briefcase, Maximize2, Plug } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Dyson Supersonic",
    category: "Hair Dryers",
    rating: 4.8,
    price: "$429",
    spaceSaverTag: "Wall-mountable",
    spaceIcon: Plug,
    image: "/images/featured.jpg",
    pros: ["Intelligent heat control", "Magnetic attachments", "Super fast dry time"],
    cons: ["Premium price tag", "Loud motor at max speed"],
    verdict: "Best for thick, coarse hair that needs serious power and control.",
    badge: "Editor's Choice",
    badgeColor: "bg-[#D4AF37] text-white",
    amazonUrl: "#",
  },
  {
    id: 2,
    name: "Shark FlexStyle",
    category: "Stylers",
    rating: 4.5,
    price: "$229",
    spaceSaverTag: "Fits in a handbag",
    spaceIcon: Briefcase,
    image: "/images/shark.jpg",
    pros: ["5-in-1 versatility", "Foldable design", "Great for curls"],
    cons: ["Learning curve for styling", "Gets hot at handle"],
    verdict: "Best for travelers and curly-haired users who want one device.",
    badge: "Best Value",
    badgeColor: "bg-[#9D50BB] text-white",
    amazonUrl: "#",
  },
  {
    id: 3,
    name: "Panasonic EH-NA65",
    category: "Hair Dryers",
    rating: 4.3,
    price: "$89",
    spaceSaverTag: "Compact & foldable",
    spaceIcon: Maximize2,
    image: "/images/hair-dryer.jpg",
    pros: ["Nanoe technology", "Lightweight", "Budget-friendly"],
    cons: ["Less powerful than premium", "Basic attachments only"],
    verdict: "Best for fine hair or budget-conscious buyers who want smart tech.",
    badge: "Budget Pick",
    badgeColor: "bg-emerald-500 text-white",
    amazonUrl: "#",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.floor(rating) ? "fill-[#D4AF37] text-[#D4AF37]" : "text-[#D4AF37]/30"}`}
        />
      ))}
      <span className="text-xs text-[#333333]/60 ml-1 font-medium">{rating}</span>
    </div>
  )
}

export function ReviewCards() {
  return (
    <section id="reviews" className="bg-[#F5FEFA] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#D4AF37]/15 text-[#b8931f] text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Latest Reviews
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#333333] text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Top Picks This Month
          </h2>
          <p className="text-[#333333]/55 mt-3 max-w-md mx-auto leading-relaxed">
            Each product is tested for weeks before we publish. No sponsored opinions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => {
            const SpaceIcon = review.spaceIcon
            return (
              <div
                key={review.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#d4f0e8] flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 bg-[#E0FFF7] overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Badge */}
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full shadow-md ${review.badgeColor}`}>
                    {review.badge}
                  </span>
                  {/* Space Tag */}
                  <span className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#333333] text-xs font-medium px-2.5 py-1 rounded-full shadow-sm border border-[#d4f0e8]">
                    <SpaceIcon className="w-3 h-3 text-[#9D50BB]" />
                    {review.spaceSaverTag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2">
                    <p className="text-xs text-[#9D50BB] font-semibold uppercase tracking-wide">{review.category}</p>
                    <h3 className="text-lg font-bold text-[#333333] leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      {review.name}
                    </h3>
                  </div>

                  <StarRating rating={review.rating} />

                  {/* Pros & Cons */}
                  <div className="mt-4 space-y-2">
                    {review.pros.slice(0, 2).map((pro) => (
                      <div key={pro} className="flex items-start gap-2 text-xs text-[#333333]/70 leading-relaxed">
                        <span className="mt-0.5 w-3 h-3 rounded-full bg-emerald-400/20 flex-shrink-0 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block" />
                        </span>
                        {pro}
                      </div>
                    ))}
                    {review.cons.slice(0, 1).map((con) => (
                      <div key={con} className="flex items-start gap-2 text-xs text-[#333333]/70 leading-relaxed">
                        <span className="mt-0.5 w-3 h-3 rounded-full bg-rose-400/20 flex-shrink-0 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 block" />
                        </span>
                        {con}
                      </div>
                    ))}
                  </div>

                  {/* Verdict */}
                  <p className="text-xs text-[#333333]/60 mt-3 leading-relaxed italic border-l-2 border-[#9D50BB]/30 pl-2 flex-1">
                    {review.verdict}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={review.amazonUrl}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#D4AF37] hover:bg-[#b8931f] text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Buy on Amazon
                    </a>
                    <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#9D50BB]/10 hover:bg-[#9D50BB]/20 text-[#9D50BB] text-xs font-bold py-2.5 rounded-xl transition-colors">
                      <BookOpen className="w-3.5 h-3.5" />
                      Read Truth
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
