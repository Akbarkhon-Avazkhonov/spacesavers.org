import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryPageLayout, type ProductReview } from "@/components/category-page-layout"

const products: ProductReview[] = [
  {
    id: 1,
    slug: "philips-oneblade-mens-grooming",
    name: "Philips Norelco OneBlade Face & Body",
    brand: "Philips",
    price: "$59",
    rating: 4.7,
    reviewCount: 5400,
    image: "https://m.media-amazon.com/images/I/71ByHqCTcAL._SL1500_.jpg",
    tag: "Editor's Pick",
    tagColor: "#9D50BB",
    pros: ["Trim, edge and shave", "Safe on body areas"],
    cons: ["Blades need replacing", "Not ideal for ultra-thick beards"],
    verdict: "A single OneBlade handle that covers beard, body and detail work without clutter.",
    amazonUrl: "https://www.amazon.com/Philips-Norelco-Frustration-QP2724-90/dp/B0BZQTSBWZ",
  },
  {
    id: 2,
    slug: "manscaped-lawn-mower-ultra",
    name: "MANSCAPED Lawn Mower Ultra",
    brand: "MANSCAPED",
    price: "$89",
    rating: 4.6,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/71MpsjEz9EL._AC_SL1500_.jpg",
    tag: "Body Groomer",
    tagColor: "#D4AF37",
    pros: ["SkinSafe blades", "Designed for below-the-waist"],
    cons: ["Charging base takes some space", "Blades are proprietary"],
    verdict: "A purpose-built groin trimmer that makes full body grooming safer and simpler.",
    amazonUrl: "https://www.amazon.com/MANSCAPED%C2%AE-Mower%C2%AE-Ultra-Groin-Trimmer/dp/B0CDNQ62ML",
  },
  {
    id: 3,
    slug: "braun-series-9-pro-senso",
    name: "Braun Series 9 Pro+ SensoAdapt",
    brand: "Braun",
    price: "$299",
    rating: 4.8,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/81dlyMLoIhL._AC_SL1500_.jpg",
    tag: "Premium Shaver",
    tagColor: "#059669",
    pros: ["Adapts to beard density", "Automatic SmartCare station"],
    cons: ["Refill cartridges add cost", "Bulky charging base"],
    verdict: "A top-tier foil shaver for men who want fast, irritation-free shaves in less passes.",
    amazonUrl: "https://www.amazon.com/Braun-Electric-SensoAdapt-SmartCare-9660CCPS/dp/B0FGLF3SDT",
  },
  {
    id: 4,
    slug: "braun-series-9-powercase",
    name: "Braun Series 9 PowerCase",
    brand: "Braun",
    price: "$79",
    rating: 4.5,
    reviewCount: 900,
    image: "https://m.media-amazon.com/images/I/81GjaqGAWML._SL1500_.jpg",
    tag: "Travel Add-On",
    tagColor: "#9D50BB",
    pros: ["Portable charging case", "Protects shaver in luggage"],
    cons: ["Only for specific models", "Adds a bit of bulk"],
    verdict: "A clever travel case that keeps your Braun shaver powered and protected on the go.",
    amazonUrl: "https://www.amazon.com/Braun-Powercase-Electric-Compatible-Portable/dp/B0CFCF4DNR",
  },
  {
    id: 5,
    slug: "wahl-groomsman-kit",
    name: "Wahl Groomsman Beard & Trimmer Kit",
    brand: "Wahl",
    price: "$39",
    rating: 4.4,
    reviewCount: 15000,
    image: "https://m.media-amazon.com/images/I/81m6ROvq7CL._SL1500_.jpg",
    tag: "Best Value",
    tagColor: "#0891b2",
    pros: ["Multiple guide combs", "Good for beard and detail"],
    cons: ["Charging stand is basic", "Plastic guards feel light"],
    verdict: "An affordable all-in-one beard kit that keeps edges sharp without needing multiple devices.",
    amazonUrl: "https://www.amazon.com/Wahl-Groomsman-Rinseable-Interchangeable-Detailing/dp/B003TW70E0",
  },
  {
    id: 6,
    slug: "ufree-professional-hair-clipper",
    name: "Ufree Professional Hair Clipper",
    brand: "Ufree",
    price: "$59",
    rating: 4.5,
    reviewCount: 2700,
    image: "https://m.media-amazon.com/images/I/71ZNqjHppNL._AC_SL1500_.jpg",
    tag: "Barber Style",
    tagColor: "#b45309",
    pros: ["Full-size clipper", "Cordless and rechargeable"],
    cons: ["A bit noisy", "Includes many guards to store"],
    verdict: "A powerful cordless clipper that lets you do barbershop-level cuts at home.",
    amazonUrl: "https://www.amazon.com/Ufree-Electric-Professional-Rechargeable-Waterproof/dp/B0FCYBJK6T",
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
        basePath="/mens-grooming"
      />
      <Footer />
    </>
  )
}
