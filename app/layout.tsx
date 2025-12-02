import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Assemblies of God Church – Citadel of Transformation',
  description: 'A modern, spirit-filled church website showcasing ministries, messages, leaders, events, online giving, and information for members and first-time visitors.',
  generator: 'AGC222',
  icons: {
    icon: [
      {
        url: '/ag-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ag-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ag-logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/ag-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased scroll-smooth">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
