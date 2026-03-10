"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, ChevronUp } from "lucide-react"

export function StickyPriceBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-40 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#333333]/95 backdrop-blur-md rounded-full shadow-2xl px-4 py-2.5 flex items-center gap-3 border border-white/10">
        <div className="hidden md:flex flex-col">
          <span className="text-white text-xs font-bold leading-tight">Dyson Supersonic</span>
        </div>
        <a
          href="#"
          className="flex items-center gap-1.5 bg-[#D4AF37] hover:bg-[#b8931f] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors whitespace-nowrap"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Check Price
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
