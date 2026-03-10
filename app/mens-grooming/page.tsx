import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryPageLayout, type ProductReview } from "@/components/category-page-layout"

const products: ProductReview[] = [
  {
    id: 1,
    name: "Braun Series 9 Pro+",
    brand: "Braun",
    price: "$279",
    rating: 4.8,
    reviewCount: 4120,
    image: "/images/mens-grooming-hero.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["5 sync elements", "AutoSense technology", "Clean & Charge station"],
    cons: ["Expensive refills", "Heavy unit"],
    verdict: "The most advanced electric shaver on the market. Effortless, close, and gentle.",
    amazonUrl: "https://www.amazon.com/s?k=braun+series+9+pro",
  },
  {
    id: 2,
    name: "Philips Norelco OneBlade",
    brand: "Philips",
    price: "$49",
    rating: 4.5,
    reviewCount: 32800,
    image: "/images/trimmer.jpg",
    tag: "Best Value",
    tagColor: "#D4AF37",
    pros: ["Trim, edge & shave", "Wet & dry", "Affordable blades"],
    cons: ["Not for thick beards", "Buzzy vibration"],
    verdict: "A cult classic. Handles any beard length with surprising finesse at a bargain price.",
    amazonUrl: "https://www.amazon.com/s?k=philips+norelco+oneblade",
  },
  {
    id: 3,
    name: "Wahl Professional 5-Star",
    brand: "Wahl",
    price: "$99",
    rating: 4.7,
    reviewCount: 8910,
    image: "/images/mens-grooming-hero.jpg",
    tag: "Barber Grade",
    tagColor: "#059669",
    pros: ["Cordless + corded", "Zero-overlap blades", "Long battery"],
    cons: ["Loud", "Oil required"],
    verdict: "What barbers actually use. Hospital-grade blades and unbeatable precision.",
    amazonUrl: "https://www.amazon.com/s?k=wahl+5+star+trimmer",
  },
  {
    id: 4,
    name: "Panasonic Arc5",
    brand: "Panasonic",
    price: "$199",
    rating: 4.6,
    reviewCount: 2345,
    image: "/images/featured.jpg",
    tag: "Multi-Flex",
    tagColor: "#9D50BB",
    pros: ["5-blade system", "Pivoting head", "Wet & dry"],
    cons: ["Bulky design", "Pricey cleaning system"],
    verdict: "A powerhouse shaver that follows every facial contour with intelligent precision.",
    amazonUrl: "https://www.amazon.com/s?k=panasonic+arc5",
  },
  {
    id: 5,
    name: "Manscaped Lawn Mower 5.0",
    brand: "Manscaped",
    price: "$89",
    rating: 4.4,
    reviewCount: 6201,
    image: "/images/trimmer.jpg",
    tag: "Space Saver",
    tagColor: "#0891b2",
    pros: ["SkinSafe technology", "Wireless charging", "Compact travel size"],
    cons: ["Loud motor", "Blades dull fast"],
    verdict: "Built for the modern man. Safe, quiet, and travel-friendly body grooming done right.",
    amazonUrl: "https://www.amazon.com/s?k=manscaped+lawn+mower+5",
  },
  {
    id: 6,
    name: "Gillette Heated Razor",
    brand: "Gillette",
    price: "$149",
    rating: 4.3,
    reviewCount: 1102,
    image: "/images/mens-grooming-hero.jpg",
    tag: "Luxury Shave",
    tagColor: "#b45309",
    pros: ["Instant heat bar", "Lathered blade feel", "Rechargeable"],
    cons: ["Blade cost", "Warm-up needed"],
    verdict: "The closest you'll get to a hot-towel barber shave at home. A true luxury experience.",
    amazonUrl: "https://www.amazon.com/s?k=gillette+heated+razor",
  },
]

export default function MensGroomingPage() {
  return (
    <>
      <Navbar />
      <CategoryPageLayout
        title="Men's Grooming"
        subtitle="Shavers, Trimmers & More"
        description="Sharp looks, compact tools. We review the best electric shavers, beard trimmers and body groomers so you can upgrade your routine without cluttering the bathroom."
        heroImage="/images/mens-grooming-hero.jpg"
        accentColor="#D4AF37"
        lightBg="linear-gradient(135deg, #1c1c1e 0%, #2d2d2d 100%)"
        products={products}
      />
      <Footer />
    </>
  )
}
