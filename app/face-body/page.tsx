import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryPageLayout, type ProductReview } from "@/components/category-page-layout"

const products: ProductReview[] = [
  {
    id: 1,
    slug: "philips-oneblade-connectivity",
    name: "Philips OneBlade Connectivity Kit",
    brand: "Philips",
    price: "$79",
    rating: 4.7,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/71RJHZ-S8vL._SL1500_.jpg",
    tag: "Face & Body",
    tagColor: "#9D50BB",
    pros: ["Multiple attachments", "Works on face and body"],
    cons: ["Requires regular blade replacement", "Charging base is tall"],
    verdict: "A flexible OneBlade kit that handles facial hair and body grooming with one compact system.",
    amazonUrl: "https://www.amazon.com/Philips-Connectivity-Adjustable-QP4631-90/dp/B0CQPHFGL7",
  },
  {
    id: 2,
    slug: "philips-oneblade-refill-pack",
    name: "Philips Norelco OneBlade Refill Pack",
    brand: "Philips",
    price: "$39",
    rating: 4.6,
    reviewCount: 8600,
    image: "https://m.media-amazon.com/images/I/71oplM1pAML._SL1500_.jpg",
    tag: "Essentials",
    tagColor: "#D4AF37",
    pros: ["Long-lasting blades", "Good value per blade"],
    cons: ["Works only with OneBlade handles", "Small pieces to store"],
    verdict: "Refill blades that keep your OneBlade performing like new without taking extra space.",
    amazonUrl: "https://www.amazon.com/Philips-Norelco-OneBlade-QP1924-70/dp/B0CLWH333W",
  },
  {
    id: 3,
    slug: "philips-oneblade-core-kit",
    name: "Philips OneBlade Core Kit",
    brand: "Philips",
    price: "$59",
    rating: 4.7,
    reviewCount: 5400,
    image: "https://m.media-amazon.com/images/I/71MXrrn8UZL._AC_SL1500_.jpg",
    tag: "All-in-One",
    tagColor: "#059669",
    pros: ["Trim, edge and shave", "Compact handle and charger"],
    cons: ["Not ideal for very thick beards", "Just one main blade in box"],
    verdict: "A slim all-in-one shaver that replaces bulky razors and trimmers in your cabinet.",
    amazonUrl: "https://www.amazon.com/dp/B0CLX1573H",
  },
  {
    id: 4,
    slug: "electric-facial-massager",
    name: "Electric Facial Massager",
    brand: "Generic",
    price: "$49",
    rating: 4.4,
    reviewCount: 2200,
    image: "https://m.media-amazon.com/images/I/61wwm4qRZNS._AC_SL1500_.jpg",
    tag: "Anti-Aging",
    tagColor: "#9D50BB",
    pros: ["Helps serum absorption", "Targets fine lines"],
    cons: ["Requires consistent use", "Needs charging between sessions"],
    verdict: "A small multi-head facial massager that gives spa-style lifting without big devices.",
    amazonUrl: "https://www.amazon.com/Electric-Upgraded-Massager-Effective-Anti-Aging/dp/B093KB564N",
  },
  {
    id: 5,
    slug: "wavytalk-ipl-hair-removal",
    name: "Wavytalk IPL Hair Removal",
    brand: "Wavytalk",
    price: "$129",
    rating: 4.5,
    reviewCount: 1900,
    image: "https://m.media-amazon.com/images/I/61FJ1zneffL._SL1500_.jpg",
    tag: "Hair Removal",
    tagColor: "#b45309",
    pros: ["For legs, underarms and bikini", "Multiple intensity levels"],
    cons: ["Results take several weeks", "Needs eye protection and care"],
    verdict: "A compact IPL handset for long-term hair reduction that lives easily in a drawer.",
    amazonUrl: "https://www.amazon.com/Wavytalk-Hair-Removal-Device-Bikini/dp/B0FZV531TZ",
  },
  {
    id: 6,
    slug: "inteo-face-body-sculpting",
    name: "INTEO Face & Body Sculpting Machine",
    brand: "INTEO",
    price: "$159",
    rating: 4.3,
    reviewCount: 900,
    image: "https://m.media-amazon.com/images/I/71E18k2YWOL._AC_SL1500_.jpg",
    tag: "Body Toning",
    tagColor: "#0891b2",
    pros: ["Multiple treatment modes", "Targets face and body"],
    cons: ["Takes time per session", "Needs counter space when in use"],
    verdict: "A single sculpting device that replaces several niche gadgets for contouring and toning.",
    amazonUrl: "https://www.amazon.com/INTEO-Face-Body-Sculpting-Machine/dp/B0FR3Y5CX8",
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
