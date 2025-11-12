import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ServiceCard } from '@/components/services/ServiceCard'
import { Phone } from 'lucide-react'
import { companyInfo } from '@/data/company-info'

export const metadata: Metadata = {
  title: 'Car Cleaning - Professionele Auto Reiniging | Broers Auto Wellness',
  description: 'Professionele interieur en exterieur autoreiniging in Uithoorn. Dashboard polijsten, bekleding reinigen, waxen en meer. 20 jaar ervaring!',
  keywords: ['car cleaning', 'interieur reiniging', 'exterieur reiniging', 'auto polijsten', 'auto waxen', 'Uithoorn'],
}

const interieurDiensten = [
  'Dashboard polijsten en herstellen van de glans',
  'Stoelen en bekleding reinigen',
  'Kunststof interieur behandelen met UV-beschermende dressing',
  'Tapijt stofzuigen en matten reinigen',
  'Kofferbak reinigen',
  'Ramen wassen',
  'Leren stoelen voeden en behandelen',
]

const exterieurDiensten = [
  'Grondige handwas van uw auto',
  'Auto in de wax zetten voor bescherming',
  'Excentrisch polijstmachine werk',
  'Verwijderen van krassen',
  'Herstel van de kleur',
  'Optimale glans bereiken',
  'Velgen reinigen en behandelen',
]

export default function CarCleaningPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/extraafbeelding4.png"
              alt="Professionele auto reiniging"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/85 via-neutral-900/70 to-neutral-900/75"></div>
          </div>

          {/* Content */}
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-5 py-2 mb-6 text-sm font-bold text-white bg-secondary-600 rounded-full shadow-lg">
                Car Cleaning
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Professionele Auto Reiniging
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                Wij geloven dat een gewone schoonmaak geen échte interieur opknapbeurt is. Daarom bieden wij uitgebreide reiniging die uw auto weer als nieuw laat stralen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  variant="primary"
                  size="lg"
                >
                  <Phone className="mr-2" size={20} />
                  Bel voor een Afspraak
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Opnemen
                </Button>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 mt-10 justify-center">
                <div className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium">
                  ✨ Showroom Klaar
                </div>
                <div className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium">
                  🏆 20+ Jaar Ervaring
                </div>
                <div className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium">
                  🔧 Professionele Apparatuur
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <Section background="white">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/extraafbeelding1.png"
                alt="Professionele interieur autoreiniging"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                Showroom Klaar
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Sinds 1995 maken wij uw auto showroom klaar. Met excentrisch polijstmachine werk verwijderen wij krassen, herstellen we de kleur en bereiken optimale glans.
              </p>
              <ul className="space-y-3 text-neutral-700">
                <li>✓ 20+ jaar ervaring</li>
                <li>✓ Professionele apparatuur</li>
                <li>✓ Hoogwaardige producten</li>
                <li>✓ Voor particulier én zakelijk</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Services Grid */}
        <Section background="gray">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              title="Interieur Reiniging"
              features={interieurDiensten}
              index={0}
            />
            <ServiceCard
              title="Exterieur Reiniging"
              features={exterieurDiensten}
              index={1}
            />
          </div>
        </Section>

        {/* Process Section */}
        <Section background="primary">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
              Onze Aanpak
            </h2>
            <div className="grid md:grid-cols-3 gap-10 mt-12">
              <div>
                <div className="w-16 h-16 bg-secondary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Inspectie</h3>
                <p className="text-neutral-700">
                  We inspecteren uw auto grondig om de juiste behandeling te bepalen
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Reiniging</h3>
                <p className="text-neutral-700">
                  Professionele reiniging met hoogwaardige producten en apparatuur
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Afwerking</h3>
                <p className="text-neutral-700">
                  Details worden gecontroleerd en uw auto wordt showroom klaar gemaakt
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
              Klaar om uw auto te laten stralen?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Neem vandaag nog contact op voor een vrijblijvende afspraak
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                variant="secondary"
                size="lg"
              >
                <Phone className="mr-2" size={20} />
                {companyInfo.contact.phone}
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Bezoek Ons
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
