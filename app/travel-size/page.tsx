import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryPageLayout, type ProductReview } from "@/components/category-page-layout"

const products: ProductReview[] = [
  {
    id: 1,
    slug: "conair-vagabond-compact",
    name: "Conair Vagabond Compact Dryer",
    brand: "Conair",
    price: "$24",
    rating: 4.5,
    reviewCount: 41000,
    image: "https://m.media-amazon.com/images/I/71cn38kl0gL._SL1500_.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["Foldable handle", "Dual voltage"],
    cons: ["Less power than full-size dryers", "Shorter cord"],
    verdict: "A tiny foldable dryer that actually dries hair well and disappears into any suitcase.",
    amazonUrl: "https://www.amazon.com/Conair-Vagabond-Compact-Folding-Handle/dp/B000094ZDX",
  },
  {
    id: 2,
    slug: "mini-3-speed-straightener-dryer",
    name: "Mini 3-Speed Hair Dryer & Straightener",
    brand: "Generic",
    price: "$39",
    rating: 4.3,
    reviewCount: 1400,
    image: "https://m.media-amazon.com/images/I/81qMMw4dpWL._AC_SL1500_.jpg",
    tag: "Multi-Use",
    tagColor: "#D4AF37",
    pros: ["Compact and lightweight", "Multiple temperature modes"],
    cons: ["Best for short to medium hair", "Smaller airflow"],
    verdict: "A small travel dryer with adjustable settings that keeps your routine simple on the road.",
    amazonUrl: "https://www.amazon.com/Straightener-3-Speed-Temperature-Control-Portable/dp/B0GHQQG9SZ",
  },
  {
    id: 3,
    slug: "philips-oneblade-connectivity-travel",
    name: "Philips OneBlade Connectivity Kit",
    brand: "Philips",
    price: "$79",
    rating: 4.7,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/71RJHZ-S8vL._SL1500_.jpg",
    tag: "Carry-On Ready",
    tagColor: "#059669",
    pros: ["Face and body grooming", "Slim handle and charger"],
    cons: ["Blades must be packed separately", "Needs charging cable"],
    verdict: "A single shaver that easily slips into a dopp kit and replaces multiple razors.",
    amazonUrl: "https://www.amazon.com/Philips-Connectivity-Adjustable-QP4631-90/dp/B0CQPHFGL7",
  },
  {
    id: 4,
    slug: "finishing-touch-flawless-mini",
    name: "Finishing Touch Flawless Mini Facial Hair Remover",
    brand: "Finishing Touch",
    price: "$24",
    rating: 4.5,
    reviewCount: 38000,
    image: "https://m.media-amazon.com/images/I/71oNYPZy1YL._SL1500_.jpg",
    tag: "Pocket Size",
    tagColor: "#9D50BB",
    pros: ["Lipstick-size device", "Discrete and quiet"],
    cons: ["Battery powered, not USB", "Best for fine hair only"],
    verdict: "A lipstick-sized facial hair remover that lives in any bag without taking real space.",
    amazonUrl: "https://www.amazon.com/Finishing-Flawless-Rechargeable-Portable-Protective/dp/B08VNQYK2D",
  },
  {
    id: 5,
    slug: "coslus-mini-water-flosser",
    name: "COSLUS Mini Water Flosser",
    brand: "COSLUS",
    price: "$39",
    rating: 4.4,
    reviewCount: 2600,
    image: "https://m.media-amazon.com/images/I/71mvDSOAdlL._SL1500_.jpg",
    tag: "Dental Care",
    tagColor: "#0891b2",
    pros: ["Collapsible tank", "USB-C charging"],
    cons: ["Small reservoir", "Must be emptied after use"],
    verdict: "A genuinely travel-sized water flosser that folds down to fit even tiny toiletry bags.",
    amazonUrl: "https://www.amazon.com/COSLUS-Mini-Water-Flosser-Travel/dp/B0DJ1F64WN",
  },
  {
    id: 6,
    slug: "remington-tlg-precision-grooming-kit",
    name: "Remington TLG Precision Grooming Kit",
    brand: "Remington",
    price: "$29",
    rating: 4.3,
    reviewCount: 5200,
    image: "https://m.media-amazon.com/images/I/811Eg+2V5kL._SL1500_.jpg",
    tag: "Men's Travel",
    tagColor: "#b45309",
    pros: ["Multiple attachments", "Runs on batteries"],
    cons: ["No built-in battery", "Power varies with AAA cells"],
    verdict: "A small grooming kit for nose, brows and detail work that fits in any corner pocket.",
    amazonUrl: "https://www.amazon.com/Remington-TLG-100ACDN-Precision-Grooming-Travel/dp/B00006IV4B",
  },
  {
    id: 7,
    slug: "bagsmart-toiletry-bag",
    name: "BAGSMART Toiletry Travel Bag",
    brand: "BAGSMART",
    price: "$29",
    rating: 4.7,
    reviewCount: 17000,
    image: "https://m.media-amazon.com/images/I/716a+hkQcrL._AC_SL1500_.jpg",
    tag: "Organizer",
    tagColor: "#D4AF37",
    pros: ["Hangs on hooks", "Multiple compartments"],
    cons: ["Bulky if overpacked", "Not ultra-rigid"],
    verdict: "A water-resistant hanging toiletry bag that keeps all your compact tools neatly organized.",
    amazonUrl: "https://www.amazon.com/Toiletry-BAGSMART-Water-resistant-Organizer-Accessories/dp/B08KD2BH4R",
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
        basePath="/travel-size"
      />
      <Footer />
    </>
  )
}
