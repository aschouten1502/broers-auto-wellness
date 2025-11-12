import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { InstallPrompt } from '@/components/pwa/InstallPrompt'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Broers Auto Wellness - Autowasserette & Schoonmaak Specialist Uithoorn',
  description: 'Dé schoonmaak specialist voor uw auto met 30 jaar ervaring! Professionele interieur en exterieur reiniging, carwash en verse broodjes in Uithoorn.',
  keywords: ['autowas', 'car cleaning', 'interieur reiniging', 'exterieur reiniging', 'wasstraat', 'Uithoorn', 'Broers Auto Wellness', 'broodjescorner'],
  authors: [{ name: 'Broers Auto Wellness' }],
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8b84e' },
    { media: '(prefers-color-scheme: dark)', color: '#2c5f8d' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Broers',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'Broers Auto Wellness - Autowasserette & Schoonmaak Specialist',
    description: 'Professionele auto reiniging en wasstraat in Uithoorn. 30 jaar ervaring!',
    url: 'https://www.broersautowellness.nl',
    siteName: 'Broers Auto Wellness',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body>
        {children}
        <InstallPrompt />
      </body>
    </html>
  )
}
