'use client'

import { WifiOff, Phone, MapPin, RefreshCw } from 'lucide-react'
import { companyInfo } from '@/data/company-info'


export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-4">
            <WifiOff className="text-neutral-400" size={48} />
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-2">
            Geen Internetverbinding
          </h1>
          <p className="text-lg text-neutral-600">
            U bent momenteel offline. Controleer uw internetverbinding en probeer het opnieuw.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6 text-center">
            Broers Auto Wellness
          </h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-xl">
              <Phone className="text-secondary-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Telefoon</h3>
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  className="text-secondary-600 font-bold hover:text-secondary-700"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-xl">
              <MapPin className="text-primary-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Adres</h3>
                <p className="text-neutral-700">
                  {companyInfo.address.street}<br />
                  {companyInfo.address.postal} {companyInfo.address.city}
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <h3 className="font-heading font-semibold text-neutral-900 mb-4 text-center">
              Openingstijden Shop
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-right">
                <p className="font-medium text-neutral-700">Maandag - Vrijdag:</p>
              </div>
              <div>
                <p className="text-neutral-600">
                  {companyInfo.openingHours.shop.weekdays.open} - {companyInfo.openingHours.shop.weekdays.close}
                </p>
              </div>

              <div className="text-right">
                <p className="font-medium text-neutral-700">Zaterdag:</p>
              </div>
              <div>
                <p className="text-neutral-600">
                  {companyInfo.openingHours.shop.saturday.open} - {companyInfo.openingHours.shop.saturday.close}
                </p>
              </div>

              <div className="text-right">
                <p className="font-medium text-neutral-700">Zondag:</p>
              </div>
              <div>
                <p className="text-neutral-600">{companyInfo.openingHours.shop.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Retry Button */}
        <div className="text-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-8 py-4 bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <RefreshCw className="mr-2" size={20} />
            Opnieuw Proberen
          </button>
        </div>

        {/* Cached Pages Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            Sommige eerder bezochte pagina&apos;s zijn mogelijk beschikbaar in de cache
          </p>
        </div>
      </div>
    </div>
  )
}
