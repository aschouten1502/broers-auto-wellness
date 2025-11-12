import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { OpeningHours } from '@/components/contact/OpeningHours'
import { companyInfo } from '@/data/company-info'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Neem Contact Op | Broers Auto Wellness',
  description: `Neem contact op met Broers Auto Wellness in Uithoorn. Bel ${companyInfo.contact.phone} of kom langs op ${companyInfo.address.street}. Openingstijden en routebeschrijving beschikbaar.`,
  keywords: ['contact', 'Uithoorn', 'openingstijden', 'adres', 'telefoonnummer', 'route'],
}

export default function ContactPage() {
  // Correct coordinates for Anthony Fokkerweg 26, 1422 AG Uithoorn: 52.238858, 4.833071
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.6789!2d4.830871!3d52.238858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e7d5c8f5e5e5%3A0x5e5e5e5e5e5e5e5e!2sAnthony%20Fokkerweg%2026%2C%201422%20AG%20Uithoorn!5e0!3m2!1snl!2snl!4v1234567890`

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          {/* Decorative Blurs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-secondary-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-25"></div>

          {/* Content */}
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-6 py-2 mb-6 text-sm font-bold text-secondary-700 bg-secondary-100 rounded-full shadow-sm border border-secondary-200">
                  Contact
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
                  Neem Contact Met Ons Op
                </h1>
                <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  Wij staan voor u klaar! Stel uw vraag via het contactformulier of kom langs tijdens onze openingstijden.
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-secondary-100 hover:border-secondary-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-secondary-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <Phone className="text-secondary-600" size={28} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">Bel Ons</h3>
                    <p className="text-secondary-600 font-bold">{companyInfo.contact.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary-100 hover:border-primary-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-primary-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <Mail className="text-primary-600" size={28} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">Email Ons</h3>
                    <p className="text-primary-600 font-bold text-sm break-all">{companyInfo.contact.email}</p>
                  </div>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address.street + ' ' + companyInfo.address.postal + ' ' + companyInfo.address.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-secondary-100 hover:border-secondary-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-secondary-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <MapPin className="text-secondary-600" size={28} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">Bezoek Ons</h3>
                    <p className="text-neutral-700 text-sm">
                      {companyInfo.address.street}<br />
                      {companyInfo.address.postal} {companyInfo.address.city}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <Section background="white">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info & Opening Hours */}
            <div className="space-y-8">
              <ContactInfo />
              <OpeningHours />
            </div>
          </div>
        </Section>

        {/* Map Section */}
        <Section background="gray">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-2 text-center">
              Waar Zitten Wij?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 text-center">
              {companyInfo.address.street}, {companyInfo.address.postal} {companyInfo.address.city}
            </p>

            <div className="relative w-full h-96 bg-neutral-200 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Broers Auto Wellness Locatie"
              />
            </div>

            <div className="mt-6 text-center">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address.street + ' ' + companyInfo.address.postal + ' ' + companyInfo.address.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
