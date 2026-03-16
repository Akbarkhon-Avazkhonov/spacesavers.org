import { Wind, Scissors, Luggage, User2, ArrowRight } from "lucide-react"

const categories = [
  {
    icon: Wind,
    title: "Hair Tech",
    description: "Hair dryers, curlers, straighteners — we test every motor and temperature setting.",
    count: "11 reviews",
    color: "bg-[#9D50BB]/10 text-[#9D50BB]",
    border: "border-[#9D50BB]/20",
    href: "hair-tech",
  },
  {
    icon: User2,
    title: "Face & Body",
    description: "Epilators, facial cleansing devices, and body care tools for your routine.",
    count: "6 reviews",
    color: "bg-[#D4AF37]/10 text-[#D4AF37]",
    border: "border-[#D4AF37]/20",
    href: "face-body",
  },
  {
    icon: Scissors,
    title: "Men's Grooming",
    description: "Trimmers, shavers, nose hair devices — precision tools for any style.",
    count: "6 reviews",
    color: "bg-emerald-500/10 text-emerald-600",
    border: "border-emerald-200",
    href: "mens-grooming",
  },
  {
    icon: Luggage,
    title: "Travel Size",
    description: "Foldable and compact appliances under 100g that fit in a handbag.",
    count: "7 reviews",
    color: "bg-sky-500/10 text-sky-600",
    border: "border-sky-200",
    href: "travel-size",
  },
]

export function CategoriesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Browse by Category
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#333333] text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find Your Perfect Appliance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.title}
                href={cat.href}
                className={`group bg-white border-2 ${cat.border} rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#333333] text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#333333]/55 leading-relaxed">{cat.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className={`text-xs font-semibold ${cat.color} bg-transparent`}>{cat.count}</span>
                  <ArrowRight className={`w-4 h-4 ${cat.color} group-hover:translate-x-1 transition-transform`} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
