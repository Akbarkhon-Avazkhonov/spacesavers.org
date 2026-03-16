import type { Metadata } from 'next'
import { Outfit, Montserrat_Alternates } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'SpaceSavers.org — Smart Tools. Better Routine. More Space.',
  description: 'Independent, honest reviews of hair dryers, stylers, trimmers, and travel-size beauty appliances. We obsess over the millimeters so you don\'t have to.',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
