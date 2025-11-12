import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { companyInfo } from '@/data/company-info'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p>{companyInfo.address.street}</p>
                  <p>{companyInfo.address.postal} {companyInfo.address.city}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">
              Openingstijden
            </h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Maandag - Vrijdag</p>
                  <p>{companyInfo.openingHours.shop.weekdays.open} - {companyInfo.openingHours.shop.weekdays.close}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Zaterdag</p>
                  <p>{companyInfo.openingHours.shop.saturday.open} - {companyInfo.openingHours.shop.saturday.close}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Zondag</p>
                  <p>{companyInfo.openingHours.shop.sunday}</p>
                </div>
              </div>
              <p className="text-sm text-neutral-400 mt-3">
                Wasboxen: {companyInfo.openingHours.wasboxen}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">
              Navigatie
            </h3>
            <nav className="space-y-2">
              <Link href="/" className="block hover:text-primary-400 transition-colors">
                Home
              </Link>
              <Link href="/car-cleaning" className="block hover:text-primary-400 transition-colors">
                Car Cleaning
              </Link>
              <Link href="/broodjescorner" className="block hover:text-primary-400 transition-colors">
                Broodjescorner
              </Link>
              <Link href="/carwash" className="block hover:text-primary-400 transition-colors">
                Carwash
              </Link>
              <Link href="/contact" className="block hover:text-primary-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">
              Volg Ons
            </h3>
            <div className="flex space-x-4">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Broers Auto Wellness. Alle rechten voorbehouden.</p>
          <p className="text-neutral-500 text-xs mt-2">v1.1.0</p>
        </div>
      </Container>
    </footer>
  )
}
