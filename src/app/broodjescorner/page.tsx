import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { MenuCategory } from '@/components/broodjescorner/MenuCategory'
import { Phone, Clock } from 'lucide-react'
import { companyInfo } from '@/data/company-info'
import { menuData } from '@/data/menu'

export const metadata: Metadata = {
  title: 'Broodjescorner - Verse Broodjes & Koffie | Broers Auto Wellness',
  description: '6 dagen per week verse broodjes van bakkerij Westerbos en vlees van slagerij Woorts. Ontbijt, lunch en koffie in Uithoorn.',
  keywords: ['broodjescorner', 'verse broodjes', 'lunch', 'koffie', 'ontbijt', 'Uithoorn', 'bakkerij'],
}

export default function BroodjescornerPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-white">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-primary-300 rounded-full blur-2xl opacity-25"></div>
          </div>

          {/* Content */}
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Broers Coffee & Bakery Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-300 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative w-48 h-48 md:w-56 md:h-56 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/broers-coffee-logo.png"
                      alt="Broers Coffee & Bakery"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
                Verse Broodjes & Koffie
              </h1>

              <p className="text-xl md:text-2xl text-neutral-700 mb-10 font-medium">
                6 dagen per week geopend voor ontbijt, lunch en koffie
              </p>

              {/* Opening Hours Card with Glassmorphism */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto shadow-xl border border-primary-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-secondary-100 rounded-full mr-3">
                    <Clock className="text-secondary-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-neutral-900">Openingstijden Shop</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-5 border border-primary-200">
                    <p className="font-semibold text-neutral-700 mb-2 text-sm uppercase tracking-wide">Maandag - Vrijdag</p>
                    <p className="text-3xl font-bold text-secondary-600">
                      {companyInfo.openingHours.shop.weekdays.open} - {companyInfo.openingHours.shop.weekdays.close}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-5 border border-secondary-200">
                    <p className="font-semibold text-neutral-700 mb-2 text-sm uppercase tracking-wide">Zaterdag</p>
                    <p className="text-3xl font-bold text-secondary-600">
                      {companyInfo.openingHours.shop.saturday.open} - {companyInfo.openingHours.shop.saturday.close}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-lg text-neutral-700">
                    Zondag: <span className="font-bold text-xl text-primary-600">{companyInfo.openingHours.shop.sunday}</span>
                  </p>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <div className="px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200 text-neutral-700 text-sm font-medium shadow-sm">
                  🥖 Dagelijks Vers
                </div>
                <div className="px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200 text-neutral-700 text-sm font-medium shadow-sm">
                  ☕ Premium Koffie
                </div>
                <div className="px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200 text-neutral-700 text-sm font-medium shadow-sm">
                  🚗 Bezorgen vanaf €8
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <Section background="white">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
              Dagelijks Verse Producten
            </h2>
            <p className="text-lg text-neutral-600 mb-4">
              Wij werken samen met de beste lokale leveranciers om u elke dag verse producten te kunnen bieden:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                  Bakkerij Westerbos
                </h3>
                <p className="text-neutral-700 text-sm">Dagelijks vers brood en broodjes</p>
              </div>
              <div className="bg-secondary-50 rounded-xl p-4">
                <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                  Slagerij Woorts
                </h3>
                <p className="text-neutral-700 text-sm">Filet American & worst</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                  Slagerij Heemskerk
                </h3>
                <p className="text-neutral-700 text-sm">Ambachtelijke gehaktballen</p>
              </div>
              <div className="bg-secondary-50 rounded-xl p-4">
                <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                  Slagerij Kaddour & Adina
                </h3>
                <p className="text-neutral-700 text-sm">Grillworst & warme kip</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                variant="secondary"
                size="lg"
              >
                <Phone className="mr-2" size={20} />
                Telefonisch Bestellen
              </Button>
              <Button
                href="/Broersmenukaart_2024.pdf"
                variant="outline"
                size="lg"
                target="_blank"
              >
                📄 Download Menukaart (PDF)
              </Button>
            </div>

            {/* Bezorgservice Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-card text-center">
                <div className="text-3xl mb-2">🏪</div>
                <h3 className="font-heading font-semibold text-lg mb-2">Afhalen / Hier eten</h3>
                <p className="text-neutral-600">Kom gezellig langs!</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-card text-center">
                <div className="text-3xl mb-2">🚗</div>
                <h3 className="font-heading font-semibold text-lg mb-2">Bezorgen</h3>
                <p className="text-neutral-600">Vanaf <span className="font-bold text-primary-600">€8,-</span></p>
              </div>
            </div>
          </div>
        </Section>

        {/* Menu */}
        <Section background="gray">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Onze Menukaart
              </h2>
              <p className="text-lg text-neutral-600">
                Bekijk ons volledige aanbod van broodjes, uitsmijters, tosti&apos;s, koffie en meer
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {menuData.map((category, index) => (
                <MenuCategory key={category.id} category={category} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
              Kom Langs of Bestel Vooruit
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Loop binnen voor een vers broodje of bel ons om uw bestelling klaar te laten maken
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                variant="primary"
                size="lg"
              >
                <Phone className="mr-2" size={20} />
                Bellen voor Bestelling
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Bekijk Locatie
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
