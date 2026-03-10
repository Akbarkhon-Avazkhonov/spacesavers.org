"use client"

import Image from "next/image"
import { Wind, Scissors, Luggage, Star, ArrowRight } from "lucide-react"

const bentoItems = [
  {
    id: 1,
    category: "Hair Tech",
    title: "The Perfect Blowout",
    subtitle: "Hair Dryers & Stylers",
    description: "From Dyson to Shark — we test every motor so your hair gets the best.",
    image: "/images/hair-dryer.jpg",
    icon: Wind,
    colSpan: "md:col-span-1 md:row-span-2",
    bgClass: "bg-[#9D50BB]",
    textClass: "text-white",
    badgeClass: "bg-white/20 text-white",
    href: "#hair-tech",
  },
  {
    id: 2,
    category: "Face & Body",
    title: "Precision Grooming",
    subtitle: "Trimmers & Epilators",
    description: "Sharp results, compact size.",
    image: "/images/trimmer.jpg",
    icon: Scissors,
    colSpan: "md:col-span-1 md:row-span-1",
    bgClass: "bg-[#E0FFF7]",
    textClass: "text-[#333333]",
    badgeClass: "bg-[#9D50BB]/10 text-[#9D50BB]",
    href: "#face-body",
  },
  {
    id: 3,
    category: "Travel Size",
    title: "Travel-Ready Tech",
    subtitle: "Small & Foldable Appliances",
    description: "Fits in a handbag. Performs like a pro kit.",
    image: "/images/travel-kit.jpg",
    icon: Luggage,
    colSpan: "md:col-span-2 md:row-span-1",
    bgClass: "bg-[#333333]",
    textClass: "text-white",
    badgeClass: "bg-white/10 text-white",
    href: "#travel",
  },
  {
    id: 4,
    category: "Space Saver of the Month",
    title: "Dyson Airwrap",
    subtitle: "Featured Review",
    description: "Our top pick this month.",
    image: "/images/featured.jpg",
    icon: Star,
    colSpan: "md:col-span-1 md:row-span-1",
    bgClass: "bg-[#D4AF37]",
    textClass: "text-white",
    badgeClass: "bg-white/20 text-white",
    href: "#reviews",
  },
]

export function HeroBento() {
  return (
    <section className="relative min-h-screen bg-[#F5FEFA] flex flex-col justify-center pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-24 w-72 h-72 rounded-full bg-[#9D50BB]/5 blur-3xl" />
        <div className="absolute bottom-20 -right-24 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Headline */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#9D50BB]/10 text-[#9D50BB] text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Independent Reviews
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold text-[#333333] leading-tight text-balance mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Smart Tools.{" "}
            <span className="text-[#9D50BB]">Better Routine.</span>
            <br />
            More Space.
          </h1>
          <p className="text-[#333333]/60 text-lg max-w-xl mx-auto text-pretty leading-relaxed">
            We obsess over the millimeters so you don&apos;t have to. Honest, tech-focused reviews of personal care appliances.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[560px]">
          {bentoItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.id}
                href={item.href}
                className={`${item.colSpan} ${item.bgClass} rounded-2xl overflow-hidden group cursor-pointer relative flex flex-col justify-between p-6 min-h-[200px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Image background */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className={`relative z-10 flex flex-col h-full ${item.id === 3 ? "justify-end gap-6" : "justify-between"}`}>
                  <div className="flex items-start justify-between">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item.badgeClass}`}>
                      {item.category}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.bgClass === "bg-[#E0FFF7]" ? "bg-[#9D50BB]/10" : "bg-white/15"}`}>
                      <Icon className={`w-4 h-4 ${item.textClass}`} />
                    </div>
                  </div>

                  <div>
                    <h2 className={`font-extrabold text-xl md:text-2xl ${item.textClass} mb-1 leading-tight`} style={{ fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h2>
                    <p className={`text-sm ${item.textClass}/70 mb-3 leading-relaxed`}>{item.description}</p>
                    <div className={`flex items-center gap-1 text-xs font-semibold ${item.textClass}/80 group-hover:gap-2 transition-all`}>
                      Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto">
          {[
            { value: "200+", label: "Products Tested" },
            { value: "5★", label: "Avg Rating Accuracy" },
            { value: "100%", label: "Independent" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-[#9D50BB]" style={{ fontFamily: "var(--font-heading)" }}>
                {stat.value}
              </div>
              <div className="text-xs text-[#333333]/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
