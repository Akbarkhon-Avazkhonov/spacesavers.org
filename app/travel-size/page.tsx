import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryPageLayout, type ProductReview } from "@/components/category-page-layout"

const products: ProductReview[] = [
  {
    id: 1,
    name: "Conair 1875W Folding",
    brand: "Conair",
    price: "$24",
    rating: 4.5,
    reviewCount: 41200,
    image: "/images/travel-kit.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["Dual voltage", "Foldable handle", "Lightweight 320g"],
    cons: ["Less powerful than full-size", "Short cord"],
    verdict: "The travel dryer that lives in your bag permanently. Reliable and fits everywhere.",
    amazonUrl: "https://www.amazon.com/s?k=conair+folding+travel+dryer",
  },
  {
    id: 2,
    name: "ghd Unplugged Styler",
    brand: "ghd",
    price: "$299",
    rating: 4.7,
    reviewCount: 1203,
    image: "/images/hair-dryer.jpg",
    tag: "Premium",
    tagColor: "#D4AF37",
    pros: ["Fully cordless", "30 min battery", "Salon-quality plates"],
    cons: ["Expensive", "Charging time"],
    verdict: "The world's first cordless styler that performs like a corded one. Freedom redefined.",
    amazonUrl: "https://www.amazon.com/s?k=ghd+unplugged+styler",
  },
  {
    id: 3,
    name: "Remington T|Studio Silk",
    brand: "Remington",
    price: "$49",
    rating: 4.4,
    reviewCount: 7820,
    image: "/images/travel-size-hero.jpg",
    tag: "Best Value",
    tagColor: "#059669",
    pros: ["Dual voltage", "Floating plates", "Slim profile"],
    cons: ["Heats slowly", "Basic build quality"],
    verdict: "Great flat iron for the price. Slim, dual-voltage, and genuinely luggage-friendly.",
    amazonUrl: "https://www.amazon.com/s?k=remington+silk+travel+straightener",
  },
  {
    id: 4,
    name: "Dyson Corrale",
    brand: "Dyson",
    price: "$499",
    rating: 4.6,
    reviewCount: 892,
    image: "/images/featured.jpg",
    tag: "Cordless Luxury",
    tagColor: "#9D50BB",
    pros: ["Flexing plates", "Cordless mode", "Manganese copper plates"],
    cons: ["Very expensive", "Short cordless time"],
    verdict: "Dyson's take on the perfect travel styler. Flex plates are genuinely revolutionary.",
    amazonUrl: "https://www.amazon.com/s?k=dyson+corrale",
  },
  {
    id: 5,
    name: "Philips Travel Shaver BRL136",
    brand: "Philips",
    price: "$39",
    rating: 4.3,
    reviewCount: 5411,
    image: "/images/trimmer.jpg",
    tag: "Space Saver",
    tagColor: "#0891b2",
    pros: ["SenseIQ", "Dual voltage", "Pouch included"],
    cons: ["Only 3 attachments", "Short battery"],
    verdict: "Handles all grooming needs in one pocket-sized device. No bathroom space wasted.",
    amazonUrl: "https://www.amazon.com/s?k=philips+travel+shaver",
  },
  {
    id: 6,
    name: "TYMO Ring Cordless",
    brand: "TYMO",
    price: "$59",
    rating: 4.4,
    reviewCount: 3109,
    image: "/images/travel-size-hero.jpg",
    tag: "Cordless",
    tagColor: "#b45309",
    pros: ["USB-C charging", "Ceramic plates", "Auto shutoff"],
    cons: ["Smaller plates", "Battery indicator"],
    verdict: "A surprisingly capable cordless straightener for touch-ups on the go.",
    amazonUrl: "https://www.amazon.com/s?k=tymo+ring+cordless+straightener",
  },
]

export default function TravelSizePage() {
  return (
    <>
      <Navbar />
      <CategoryPageLayout
        title="Travel Size"
        subtitle="Compact & Foldable Appliances"
        description="We hunt down the best travel-ready beauty tools — dual-voltage dryers, cordless stylers and pocket groomers that deliver full performance without the luggage drama."
        heroImage="/images/travel-size-hero.jpg"
        accentColor="#0891b2"
        lightBg="linear-gradient(135deg, #e0f2fe 0%, #E0FFF7 100%)"
        products={products}
      />
      <Footer />
    </>
  )
}
