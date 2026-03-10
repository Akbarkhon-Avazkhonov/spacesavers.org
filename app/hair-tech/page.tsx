import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryPageLayout, type ProductReview } from "@/components/category-page-layout"

const products: ProductReview[] = [
  {
    id: 1,
    slug: "dyson-supersonic",
    name: "Dyson Supersonic",
    brand: "Dyson",
    price: "$429",
    rating: 4.8,
    reviewCount: 3241,
    image: "/images/dyson.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["Ultra-fast drying", "Intelligent heat control", "Magnetic attachments"],
    cons: ["Premium price", "Heavy handle"],
    verdict: "The benchmark for professional hair dryers. Worth every penny for daily use.",
    amazonUrl: "https://www.amazon.com/s?k=dyson+supersonic",
  },
  {
    id: 2,
    slug: "shark-flexstyle",
    name: "Shark FlexStyle",
    brand: "Shark",
    price: "$229",
    rating: 4.6,
    reviewCount: 1872,
    image: "/images/shark.jpg",
    tag: "Best Value",
    tagColor: "#D4AF37",
    pros: ["Multi-styler in one", "Foldable design", "Great for curls"],
    cons: ["Learning curve", "Cord a bit short"],
    verdict: "A genuine Dyson Airwrap rival at half the price. Impressive versatility.",
    amazonUrl: "https://www.amazon.com/s?k=shark+flexstyle",
  },
  {
    id: 3,
    slug: "revlon-one-step",
    name: "Revlon One-Step",
    brand: "Revlon",
    price: "$39",
    rating: 4.5,
    reviewCount: 89203,
    image: "/images/hair-dryer.jpg",
    tag: "Budget King",
    tagColor: "#059669",
    pros: ["All-in-one brush", "Fast results", "Affordable"],
    cons: ["Not for thick hair", "Gets hot quickly"],
    verdict: "Millions of fans for a reason. The best entry-level styling tool on the market.",
    amazonUrl: "https://www.amazon.com/s?k=revlon+one+step",
  },
  {
    id: 4,
    slug: "ghd-helios",
    name: "ghd Helios",
    brand: "ghd",
    price: "$279",
    rating: 4.7,
    reviewCount: 654,
    image: "/images/featured.jpg",
    tag: "Salon Grade",
    tagColor: "#9D50BB",
    pros: ["Ionic technology", "Quiet motor", "Even airflow"],
    cons: ["No cold shot button", "Pricey"],
    verdict: "Beloved by salon professionals. Silky smooth finish every time.",
    amazonUrl: "https://www.amazon.com/s?k=ghd+helios+hair+dryer",
  },
  {
    id: 5,
    slug: "remington-damage-protection",
    name: "Remington Damage Protection",
    brand: "Remington",
    price: "$24",
    rating: 4.3,
    reviewCount: 12740,
    image: "/images/hair-tech-hero.jpg",
    tag: "Space Saver",
    tagColor: "#0891b2",
    pros: ["Compact size", "Lightweight", "Foldable handle"],
    cons: ["Less power", "Basic attachments"],
    verdict: "Ideal for travel or small bathroom shelves. Does the job without the bulk.",
    amazonUrl: "https://www.amazon.com/s?k=remington+compact+hair+dryer",
  },
  {
    id: 6,
    slug: "t3-cura-luxe",
    name: "T3 Cura Luxe",
    brand: "T3",
    price: "$350",
    rating: 4.6,
    reviewCount: 431,
    image: "/images/hair-dryer.jpg",
    tag: "Luxury",
    tagColor: "#b45309",
    pros: ["Digital controls", "Multiple heat zones", "Ergonomic design"],
    cons: ["Very expensive", "Large footprint"],
    verdict: "A luxurious dryer for those who want salon results at home without compromise.",
    amazonUrl: "https://www.amazon.com/s?k=t3+cura+luxe",
  },
]

export default function HairTechPage() {
  return (
    <>
      <Navbar />
      <CategoryPageLayout
        title="Hair Tech"
        subtitle="Dryers, Stylers & Straighteners"
        description="Honest, independent reviews of the best hair dryers, stylers and straighteners. We test every watt, heat setting and attachment so you can buy with confidence."
        heroImage="/images/hair-tech-hero.jpg"
        accentColor="#9D50BB"
        lightBg="linear-gradient(135deg, #f3e8ff 0%, #E0FFF7 100%)"
        products={products}
        basePath="/hair-tech"
      />
      <Footer />
    </>
  )
}
