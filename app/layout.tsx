import './global.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Conner Chu',
    template: '%s | Conner Chu',
  },
  description:
    "Conner Chu's personal website!",
  openGraph: {
    title: 'Conner Chu',
    description:
      "Conner Chu's personal website!",
    url: baseUrl,
    siteName: 'Conner Chu',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cx('text-white bg-[#141C1E]', lato.className, lato.variable)}>
      <body className="antialiased max-w-xl mx-4 mt-6 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-4 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
