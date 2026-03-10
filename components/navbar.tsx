"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"

const navLinks = [
  { label: "Hair Tech", href: "#hair-tech" },
  { label: "Face & Body", href: "#face-body" },
  { label: "Men's Grooming", href: "#mens" },
  { label: "Travel Size", href: "#travel" },
  { label: "The Efficiency Blog", href: "#blog" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#d4f0e8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#9D50BB] flex items-center justify-center shadow-md group-hover:bg-[#b97ad4] transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span
              className="font-heading font-bold text-lg text-[#333333] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SpaceSavers<span className="text-[#9D50BB]">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#333333]/70 hover:text-[#9D50BB] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#reviews"
            className="hidden md:inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b8931f] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-md"
          >
            Top Picks
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#333333] hover:bg-[#E0FFF7] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#d4f0e8] px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-[#333333]/70 hover:text-[#9D50BB] py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#reviews"
            className="inline-flex items-center justify-center bg-[#D4AF37] text-white text-sm font-semibold px-4 py-2 rounded-full mt-2 transition-colors"
          >
            Top Picks
          </a>
        </div>
      )}
    </header>
  )
}
