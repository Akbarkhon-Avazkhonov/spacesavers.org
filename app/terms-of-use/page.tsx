import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Use — SpaceSaversHub",
  description: "The terms and conditions governing use of SpaceSaversHub.com.",
}

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5FEFA] min-h-screen pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#9D50BB] font-medium hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1
            className="text-4xl font-extrabold text-[#333333] mb-2 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Terms of Use
          </h1>
          <p className="text-sm text-[#6b7280] mb-10">Last updated: March 2026</p>

          <div className="space-y-8 text-[#333333] font-sans">
            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>1. Acceptance of Terms</h2>
              <p className="text-[#555] leading-relaxed">
                By accessing or using SpaceSaversHub.com, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>2. Informational Purpose Only</h2>
              <p className="text-[#555] leading-relaxed">
                All content on SpaceSaversHub.com is provided for informational and review purposes only. Product reviews reflect our independent opinions and are not a substitute for professional advice. Prices and availability may change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>3. Affiliate Disclosure</h2>
              <p className="text-[#555] leading-relaxed">
                SpaceSaversHub.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Clicking on affiliate links and making a purchase may result in a commission for us, at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>4. Intellectual Property</h2>
              <p className="text-[#555] leading-relaxed">
                All content on this site — including text, images, graphics, and logos — is the property of SpaceSaversHub.com unless otherwise stated. You may not reproduce, distribute, or commercially exploit any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>5. Limitation of Liability</h2>
              <p className="text-[#555] leading-relaxed">
                SpaceSaversHub.com is not liable for any direct, indirect, incidental, or consequential damages arising from the use of this site or the products reviewed on it. Use of the site and any purchases made through affiliate links are at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>6. External Links</h2>
              <p className="text-[#555] leading-relaxed">
                Our site contains links to third-party websites, including Amazon. We are not responsible for the content, privacy practices, or terms of those external sites. Visiting them is at your own discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>7. Changes to Terms</h2>
              <p className="text-[#555] leading-relaxed">
                We reserve the right to update these Terms of Use at any time. Continued use of the site following any changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>8. Governing Law</h2>
              <p className="text-[#555] leading-relaxed">
                These terms are governed by applicable law. Any disputes arising from use of the site shall be resolved in accordance with those laws.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
