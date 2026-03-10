import { Navbar } from "@/components/navbar"
import { HeroBento } from "@/components/hero-bento"
import { CategoriesSection } from "@/components/categories-section"
import { ReviewCards } from "@/components/review-cards"
import { ComparisonSection } from "@/components/comparison-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { StickyPriceBar } from "@/components/sticky-price-bar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5FEFA]">
      <Navbar />
      <HeroBento />
      <CategoriesSection />
      <ReviewCards />
      <ComparisonSection />
      <Footer />
      <CookieBanner />
      <StickyPriceBar />
    </main>
  )
}
