import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us — SpaceSaversHub",
  description: "Get in touch with the SpaceSaversHub team.",
}

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p className="text-[#6b7280] mb-10 leading-relaxed">
            Have a question, review suggestion, or partnership inquiry? We&apos;d love to hear from you.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: Mail,
                title: "Email Us",
                text: "hello@spacesavershub.com",
              },
              {
                icon: MessageSquare,
                title: "Product Suggestions",
                text: "Tell us what to review next",
              },
              {
                icon: Clock,
                title: "Response Time",
                text: "We reply within 2–3 business days",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white border border-[#d4f0e8] rounded-2xl p-5 flex flex-col items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#9D50BB]/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#9D50BB]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#333333] uppercase tracking-wide mb-0.5">
                    {title}
                  </p>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="bg-white border border-[#d4f0e8] rounded-2xl p-8">
            <h2
              className="text-xl font-bold text-[#333333] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Send a Message
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-[#333333]">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="border border-[#d4f0e8] rounded-xl px-4 py-2.5 text-sm text-[#333333] placeholder-[#aaa] focus:outline-none focus:border-[#9D50BB] transition-colors bg-[#F5FEFA]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[#333333]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="border border-[#d4f0e8] rounded-xl px-4 py-2.5 text-sm text-[#333333] placeholder-[#aaa] focus:outline-none focus:border-[#9D50BB] transition-colors bg-[#F5FEFA]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-semibold text-[#333333]">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Review request, partnership, feedback..."
                  className="border border-[#d4f0e8] rounded-xl px-4 py-2.5 text-sm text-[#333333] placeholder-[#aaa] focus:outline-none focus:border-[#9D50BB] transition-colors bg-[#F5FEFA]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-[#333333]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className="border border-[#d4f0e8] rounded-xl px-4 py-2.5 text-sm text-[#333333] placeholder-[#aaa] focus:outline-none focus:border-[#9D50BB] transition-colors bg-[#F5FEFA] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#9D50BB] hover:bg-[#8a3fa8] text-white font-semibold text-sm px-8 py-3 rounded-xl transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
