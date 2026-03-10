import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryPageLayout, type ProductReview } from "@/components/category-page-layout"

const products: ProductReview[] = [
  {
    id: 1,
    slug: "braun-silk-epil-9",
    name: "Braun Silk-epil 9",
    brand: "Braun",
    price: "$119",
    rating: 4.7,
    reviewCount: 5832,
    image: "/images/face-body-hero.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["80 tweezers", "Wet & dry use", "Gentle on skin"],
    cons: ["Painful first use", "Charging time"],
    verdict: "The gold standard in epilators. Long-lasting smoothness that waxing can't match.",
    amazonUrl: "https://www.amazon.com/s?k=braun+silk+epil+9",
  },
  {
    id: 2,
    slug: "foreo-luna-4",
    name: "FOREO LUNA 4",
    brand: "FOREO",
    price: "$219",
    rating: 4.8,
    reviewCount: 2103,
    image: "/images/trimmer.jpg",
    tag: "Best Cleanser",
    tagColor: "#D4AF37",
    pros: ["App-controlled", "Hygienic silicone", "300 uses per charge"],
    cons: ["High price", "App required"],
    verdict: "The smartest facial cleanser on the market. Your skin will thank you every morning.",
    amazonUrl: "https://www.amazon.com/s?k=foreo+luna+4",
  },
  {
    id: 3,
    slug: "panasonic-es-ed90",
    name: "Panasonic ES-ED90",
    brand: "Panasonic",
    price: "$79",
    rating: 4.4,
    reviewCount: 3421,
    image: "/images/featured.jpg",
    tag: "Budget Pick",
    tagColor: "#059669",
    pros: ["6-in-1 device", "Wet & dry", "Affordable"],
    cons: ["Loud motor", "Basic attachments"],
    verdict: "Outstanding value. Six tools in one compact device for full body grooming.",
    amazonUrl: "https://www.amazon.com/s?k=panasonic+es-ed90",
  },
  {
    id: 4,
    slug: "nuface-trinity-plus",
    name: "NuFACE Trinity+",
    brand: "NuFACE",
    price: "$339",
    rating: 4.5,
    reviewCount: 987,
    image: "/images/face-body-hero.jpg",
    tag: "Anti-Aging",
    tagColor: "#9D50BB",
    pros: ["Microcurrent lifting", "FDA cleared", "Visible results in 5 min"],
    cons: ["Expensive", "Requires gel"],
    verdict: "The closest thing to a non-surgical facelift. Consistent use delivers real results.",
    amazonUrl: "https://www.amazon.com/s?k=nuface+trinity",
  },
  {
    id: 5,
    slug: "conair-facial-steamer",
    name: "Conair Facial Steamer",
    brand: "Conair",
    price: "$29",
    rating: 4.2,
    reviewCount: 18920,
    image: "/images/travel-kit.jpg",
    tag: "Space Saver",
    tagColor: "#0891b2",
    pros: ["Compact size", "Instant steam", "Affordable"],
    cons: ["Small tank", "Plastic build"],
    verdict: "A budget-friendly spa experience. Fits on any bathroom shelf without complaint.",
    amazonUrl: "https://www.amazon.com/s?k=conair+facial+steamer",
  },
  {
    id: 6,
    slug: "philips-lumea-ipl-9000",
    name: "Philips Lumea IPL 9000",
    brand: "Philips",
    price: "$469",
    rating: 4.6,
    reviewCount: 1204,
    image: "/images/face-body-hero.jpg",
    tag: "Hair Removal",
    tagColor: "#b45309",
    pros: ["Permanent reduction", "SenseIQ technology", "Cordless"],
    cons: ["Long treatment time", "Premium cost"],
    verdict: "Clinic-quality IPL at home. The investment pays off in months of smooth skin.",
    amazonUrl: "https://www.amazon.com/s?k=philips+lumea+ipl+9000",
  },
]

export default function FaceBodyPage() {
  return (
    <>
      <Navbar />
      <CategoryPageLayout
        title="Face & Body"
        subtitle="Epilators, Cleansers & Skin Devices"
        description="From facial cleansing brushes to epilators and IPL devices — we review the tools that actually work, so your skincare routine gets a serious upgrade."
        heroImage="/images/face-body-hero.jpg"
        accentColor="#9D50BB"
        lightBg="linear-gradient(135deg, #faf5ff 0%, #E0FFF7 100%)"
        products={products}
        basePath="/face-body"
      />
      <Footer />
    </>
  )
}
