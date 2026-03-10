import Link from "next/link"
import { Zap, Instagram, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  Legal: ["Privacy Policy", "Terms of Use", "Contact Us"],
}

export function Footer() {
  return (
    <footer className="relative bg-[#1a1a2e]/95 text-white overflow-hidden">
      {/* Glassmorphism top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#9D50BB]/40" />
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#9D50BB]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#9D50BB] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                SpaceSavers<span className="text-[#9D50BB]">Hub</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-5">
              We obsess over the millimeters so you don&apos;t have to. Our reviews are independent, honest, and tech-focused.
            </p>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs mb-5">
              <strong className="text-white/50">Amazon Affiliate Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#9D50BB]/40 flex items-center justify-center transition-colors"
                  aria-label={`Social link ${i}`}
                >
                  <Icon className="w-3.5 h-3.5 text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/60 hover:text-[#9D50BB] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-white text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              Get our weekly picks in your inbox
            </h4>
            <p className="text-xs text-white/40">No spam. Just honest reviews of the best space-saving appliances.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-56 bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#9D50BB] transition-colors"
            />
            <button className="bg-[#9D50BB] hover:bg-[#b97ad4] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © 2026 Space Savers Hub. All rights reserved.
          </p>
          <p className="text-xs text-white/20 text-center">
            SpaceSaversHub.com — Smart Tools. Better Routine. More Space.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms</Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
