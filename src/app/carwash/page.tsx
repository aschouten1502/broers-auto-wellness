import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ServiceCard } from '@/components/services/ServiceCard'
import { PricingTable } from '@/components/services/PricingTable'
import { Droplets, Clock, Phone, Sparkles, Coffee } from 'lucide-react'
import { companyInfo } from '@/data/company-info'

export const metadata: Metadata = {
  title: 'Carwash & Wasstraat - Modern & Efficiënt | Broers Auto Wellness',
  description: 'De beste en meest moderne wasstraat van Uithoorn. Plus 24/7 wasboxen voor zelfwassen. Professionele autowas met moderne technieken.',
  keywords: ['carwash', 'wasstraat', 'wasbox', 'auto wassen', '24/7', 'Uithoorn', 'zelfwassen'],
}

const wasstraatFeatures = [
  'Moderne wasstraat met nieuwste technieken',
  'Grondige reiniging van uw auto',
  'Wax behandeling voor extra bescherming',
  'Polijstmachine werk beschikbaar',
  'Verwijderen van krassen',
  'Herstel van kleur en glans',
  'Beschermende coating',
]

const wasboxenFeatures = [
  '24 uur per dag, 7 dagen per week toegankelijk',
  'Moderne wasboxen met hoogwaardige apparatuur',
  'Zelf uw auto wassen wanneer het u uitkomt',
  'Betaling met pin of contant',
  'Verschillende wasprogramma\'s beschikbaar',
  'Stofzuiger voorzieningen',
]

export default function CarwashPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Animated Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/extraafbeelding6.png"
              alt="Moderne carwash"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/85 via-secondary-800/75 to-primary-900/70"></div>
            {/* Animated water drops effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-secondary-600/20"></div>
          </div>

          {/* Content */}
          <div className="container-custom relative z-10 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6 animate-bounce">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/30">
                  <Droplets size={56} className="text-white" />
                </div>
              </div>
              <span className="inline-block px-6 py-3 mb-6 text-sm font-bold text-white bg-secondary-500 rounded-full shadow-lg border border-white/20">
                Carwash
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Moderne Wasstraat & 24/7 Wasboxen
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto">
                De beste en meest moderne wasstraat van Uithoorn en omstreken
              </p>

              {/* Feature Badges with Glassmorphism */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="group px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 text-white font-semibold hover:bg-white/25 transition-all duration-300 flex items-center gap-2">
                  <Sparkles size={20} className="group-hover:scale-110 transition-transform" />
                  Moderne Technieken
                </div>
                <div className="group px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 text-white font-semibold hover:bg-white/25 transition-all duration-300 flex items-center gap-2">
                  <Clock size={20} className="group-hover:scale-110 transition-transform" />
                  24/7 Wasboxen
                </div>
                <div className="group px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 text-white font-semibold hover:bg-white/25 transition-all duration-300 flex items-center gap-2">
                  <Droplets size={20} className="group-hover:scale-110 transition-transform" />
                  Milieuvriendelijk
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Wasstraat Section */}
        <Section background="white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Onze Wasstraat
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                De auto wordt grondig gewassen en in de wax gezet. Met behulp van excentrisch polijstmachine werk verwijderen wij krassen, herstellen we de kleur en bereiken optimale glans.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/extraafbeelding2.png"
                  alt="Moderne carwash met actief schuim"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/extraafbeelding3.png"
                  alt="Hogedruk reiniging"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-12">
              <ServiceCard
                title="Wasstraat Diensten"
                features={wasstraatFeatures}
                index={0}
              />
            </div>

            {/* Opening Hours */}
            <div className="bg-primary-50 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-secondary-600 mr-2" size={28} />
                <h3 className="text-2xl font-heading font-semibold text-neutral-900">
                  Openingstijden Wasstraat
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div>
                  <p className="font-semibold text-neutral-700 mb-2">Maandag - Vrijdag</p>
                  <p className="text-3xl font-bold text-secondary-600">
                    {companyInfo.openingHours.carwash.weekdays.open} - {companyInfo.openingHours.carwash.weekdays.close}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-700 mb-2">Zaterdag</p>
                  <p className="text-3xl font-bold text-secondary-600">
                    {companyInfo.openingHours.carwash.saturday.open} - {companyInfo.openingHours.carwash.saturday.close}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-neutral-700">
                Zondag: <span className="font-semibold text-lg">{companyInfo.openingHours.carwash.sunday}</span>
              </p>
            </div>
          </div>
        </Section>

        {/* Pricing Section */}
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Programma&apos;s & Prijzen
              </h2>
              <p className="text-lg text-neutral-600">
                Kies het wasprogramma dat bij u past
              </p>
            </div>

            <PricingTable />

            {/* VIP Treatment */}
            <div className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="text-primary-600 mr-3" size={32} />
                <h3 className="text-3xl font-heading font-bold text-neutral-900">
                  Programma 6 - VIP Behandeling
                </h3>
              </div>
              <p className="text-center text-lg text-neutral-700 mb-8">
                Als extra op uw keuze krijgt u een complete verzorging
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Sparkles className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-900">Ramen binnen/buiten en dorpels afnemen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-900">Stofzuigen interieur en kofferbak</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-900">Dashboard reinigen en opfrissen</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Sparkles className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-900">Banden-zwart</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Coffee className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-900">Inclusief heerlijk kopje koffie naar keuze</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white rounded-xl shadow-lg px-8 py-4">
                  <div className="text-sm text-neutral-600 mb-1">Vanaf</div>
                  <div className="text-4xl font-bold text-secondary-600">€44,99</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Wasboxen Section */}
        <section className="section-padding bg-secondary-500" id="wasboxen">
          <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-primary-400 text-neutral-900 rounded-full font-bold text-lg mb-6">
                <Clock className="mr-2" size={24} />
                24/7 Beschikbaar
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Zelf Wassen in Onze Wasboxen
              </h2>
              <p className="text-lg text-secondary-50 max-w-2xl mx-auto">
                Heeft u liever zelf de controle? Gebruik onze moderne wasboxen die altijd toegankelijk zijn.
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-8">
                <ServiceCard
                  title="24/7 Wasboxen"
                  features={wasboxenFeatures}
                  index={0}
                />

                <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
                  <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                    Locatie Wasboxen
                  </h3>
                  <p className="text-neutral-700 mb-2">
                    {companyInfo.address.street}
                  </p>
                  <p className="text-neutral-700 mb-6">
                    {companyInfo.address.postal} {companyInfo.address.city}
                  </p>
                  <Button href="/contact" variant="secondary" size="lg">
                    Bekijk op Kaart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
              Vragen over Onze Wasstraat?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Neem contact met ons op voor meer informatie over onze diensten en mogelijkheden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                variant="primary"
                size="lg"
              >
                <Phone className="mr-2" size={20} />
                {companyInfo.contact.phone}
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Opnemen
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
