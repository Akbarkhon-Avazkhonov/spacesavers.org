"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = sessionStorage.getItem("cookies-accepted")
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    sessionStorage.setItem("cookies-accepted", "true")
    setVisible(false)
  }

  const decline = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50 animate-in slide-in-from-bottom-4 duration-500"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="bg-white/90 backdrop-blur-xl border border-[#d4f0e8] rounded-2xl shadow-2xl p-5">
        <button
          onClick={decline}
          className="absolute top-3 right-3 text-[#333333]/40 hover:text-[#333333] transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl" role="img" aria-label="cookie">🍪</span>
          <div>
            <h4 className="text-sm font-bold text-[#333333] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              Cookie Notice
            </h4>
            <p className="text-xs text-[#333333]/60 leading-relaxed">
              We use cookies to make your space-saving journey smoother. Accept for a sweet experience.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-[#D4AF37] hover:bg-[#b8931f] text-white text-xs font-bold py-2 rounded-xl transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="flex-1 bg-[#333333]/8 hover:bg-[#333333]/12 text-[#333333]/70 text-xs font-medium py-2 rounded-xl transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
