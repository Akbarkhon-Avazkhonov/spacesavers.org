"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Zap, ShoppingCart } from "lucide-react"

const specRows = [
  { label: "Motor Power", a: "1600W Digital", b: "1000W AC Motor" },
  { label: "Weight", a: "1.9 lbs", b: "1.4 lbs" },
  { label: "Drying Speed", a: "Ultra-fast (6 min)", b: "Fast (9 min)" },
  { label: "Attachments", a: "5 magnetic", b: "3 standard" },
  { label: "Price", a: "$429", b: "$229" },
  { label: "Noise Level", a: "High (82dB)", b: "Moderate (76dB)" },
  { label: "Travel-Friendly", a: "No (heavy)", b: "Yes (foldable)" },
]

const dealbreakers = [
  {
    product: "Dyson Supersonic",
    condition: "you have thick or coarse hair",
    color: "bg-[#dde8f5] border-[#a8c0e8]",
    textColor: "text-[#2c4a7a]",
    icon: "💨",
  },
  {
    product: "Shark FlexStyle",
    condition: "you travel every week",
    color: "bg-[#fdf0e0] border-[#f0c080]",
    textColor: "text-[#7a4a10]",
    icon: "✈️",
  },
]

export function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = Math.max(10, Math.min(90, ((clientX - rect.left) / rect.width) * 100))
    setSliderPos(pos)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    updateSlider(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX)
  }

  return (
    <section ref={sectionRef} id="compare" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#9D50BB]/10 text-[#9D50BB] text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Head to Head
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#333333] text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Dyson Supersonic{" "}
            <span className="text-[#9D50BB]">vs</span>{" "}
            Shark FlexStyle
          </h2>
          <p className="text-[#333333]/55 mt-3 max-w-md mx-auto leading-relaxed">
            Drag the slider to compare both products side by side.
          </p>
        </div>

        {/* Comparison Slider */}
        <div
          ref={containerRef}
          className={`relative w-full h-72 md:h-96 rounded-2xl overflow-hidden cursor-col-resize shadow-lg select-none border border-[#d4f0e8] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          onMouseMove={handleMouseMove}
          onMouseDown={() => { isDragging.current = true }}
          onMouseUp={() => { isDragging.current = false }}
          onMouseLeave={() => { isDragging.current = false }}
          onTouchMove={handleTouchMove}
          onTouchStart={() => { isDragging.current = true }}
          onTouchEnd={() => { isDragging.current = false }}
        >
          {/* Product A — Cool tones */}
          <div className="absolute inset-0 bg-[#dde8f5] flex flex-col items-center justify-center">
            <div className="text-center px-8">
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-4">
                <Image src="/images/dyson.jpg" alt="Dyson Supersonic" fill className="object-contain" sizes="200px" />
              </div>
              <h3 className="text-lg md:text-2xl font-extrabold text-[#2c4a7a]" style={{ fontFamily: "var(--font-heading)" }}>
                Dyson Supersonic
              </h3>
            </div>
          </div>

          {/* Product B — Warm tones (clipped) */}
          <div
            className="absolute inset-0 bg-[#fdf0e0] flex flex-col items-center justify-center"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <div className="text-center px-8">
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-4">
                <Image src="/images/shark.jpg" alt="Shark FlexStyle" fill className="object-contain" sizes="200px" />
              </div>
              <h3 className="text-lg md:text-2xl font-extrabold text-[#7a4a10]" style={{ fontFamily: "var(--font-heading)" }}>
                Shark FlexStyle
              </h3>
              <p className="text-[#7a4a10]/60 text-sm mt-1">$229</p>
            </div>
          </div>

          {/* Divider handle */}
          <div
            className="absolute top-0 bottom-0 flex flex-col items-center justify-center z-10"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-0.5 h-full bg-white/60" />
            <div className="absolute w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#9D50BB]">
              <ChevronLeft className="w-3 h-3 text-[#9D50BB]" />
              <ChevronRight className="w-3 h-3 text-[#9D50BB]" />
            </div>
            {/* VS label */}
            <div
              className={`absolute top-4 w-8 h-8 rounded-full bg-[#9D50BB] flex items-center justify-center transition-all duration-300 ${inView ? "shadow-[0_0_20px_rgba(157,80,187,0.6)]" : ""}`}
            >
              <span className="text-white text-[10px] font-extrabold">VS</span>
            </div>
          </div>
        </div>

        {/* Spec Table */}
        <div className="mt-8 rounded-2xl border border-[#d4f0e8] overflow-hidden">
          <div className="grid grid-cols-3 bg-[#F5FEFA] border-b border-[#d4f0e8]">
            <div className="p-3 text-xs font-bold text-[#9D50BB] text-center uppercase tracking-wide">Dyson</div>
            <div className="p-3 text-xs font-bold text-[#333333]/50 text-center uppercase tracking-wide border-x border-[#d4f0e8]">Spec</div>
            <div className="p-3 text-xs font-bold text-[#D4AF37] text-center uppercase tracking-wide">Shark</div>
          </div>
          {specRows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-[#F5FEFA]"} border-b border-[#d4f0e8] last:border-0`}
            >
              <div className="p-3 text-xs text-[#2c4a7a] font-medium text-center leading-relaxed">{row.a}</div>
              <div className="p-3 text-xs text-[#333333]/50 font-semibold text-center border-x border-[#d4f0e8]">{row.label}</div>
              <div className="p-3 text-xs text-[#7a4a10] font-medium text-center leading-relaxed">{row.b}</div>
            </div>
          ))}
        </div>

        {/* Dealbreaker Box */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-bold text-[#333333]" style={{ fontFamily: "var(--font-heading)" }}>
              The Dealbreaker
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dealbreakers.map((item) => (
              <div
                key={item.product}
                className={`rounded-xl border-2 p-4 flex items-center gap-3 ${item.color}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <p className={`text-sm font-medium ${item.textColor} leading-relaxed`}>
                  Buy <strong>{item.product}</strong> if {item.condition}.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky hint */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b8931f] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors shadow-md"
          >
            <ShoppingCart className="w-4 h-4" />
            Check Prices on Amazon
          </a>
          <p className="text-xs text-[#333333]/40 mt-3">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </section>
  )
}
