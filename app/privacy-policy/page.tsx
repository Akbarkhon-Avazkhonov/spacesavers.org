import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy — SpaceSaversHub",
  description: "How SpaceSaversHub collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-[#6b7280] mb-10">Last updated: March 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-[#333333] font-sans">
            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>1. Information We Collect</h2>
              <p className="text-[#555] leading-relaxed">
                SpaceSaversHub.com collects information you voluntarily provide, such as your email address when you subscribe to our newsletter. We may also collect non-personal data automatically via cookies and analytics tools, including pages visited, time on site, and browser type.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>2. How We Use Your Information</h2>
              <p className="text-[#555] leading-relaxed">
                We use collected information to send our weekly newsletter, improve site content, and analyze traffic patterns. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>3. Cookies</h2>
              <p className="text-[#555] leading-relaxed">
                We use cookies to enhance your browsing experience and gather analytics data. You may disable cookies in your browser settings, though some features of the site may not function correctly as a result.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>4. Amazon Affiliate Links</h2>
              <p className="text-[#555] leading-relaxed">
                SpaceSaversHub.com participates in the Amazon Services LLC Associates Program. When you click an affiliate link and make a purchase, we may earn a small commission at no extra cost to you. Amazon may also place cookies on your device as part of this program.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>5. Third-Party Services</h2>
              <p className="text-[#555] leading-relaxed">
                We use third-party analytics tools such as Google Analytics to understand how visitors interact with our site. These services have their own privacy policies and may collect data independently.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>6. Data Security</h2>
              <p className="text-[#555] leading-relaxed">
                We take reasonable precautions to protect your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>7. Your Rights</h2>
              <p className="text-[#555] leading-relaxed">
                You may request access to, correction of, or deletion of your personal data at any time by contacting us via our Contact page. Newsletter subscribers may unsubscribe at any time using the link in any email we send.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: "var(--font-heading)" }}>8. Changes to This Policy</h2>
              <p className="text-[#555] leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the site constitutes acceptance of the revised policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
