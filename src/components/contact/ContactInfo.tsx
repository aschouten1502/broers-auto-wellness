'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { companyInfo } from '@/data/company-info'

export function ContactInfo() {
  const contactItems = [
    {
      icon: <MapPin size={24} />,
      label: 'Adres',
      value: `${companyInfo.address.street}, ${companyInfo.address.postal} ${companyInfo.address.city}`,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address.street + ' ' + companyInfo.address.city)}`,
    },
    {
      icon: <Phone size={24} />,
      label: 'Telefoon',
      value: companyInfo.contact.phone,
      href: `tel:${companyInfo.contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Mail size={24} />,
      label: 'E-mail',
      value: companyInfo.contact.email,
      href: `mailto:${companyInfo.contact.email}`,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <div className="p-8">
          <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
            Contactgegevens
          </h3>
          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary-500 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-500 mb-1">
                    {item.label}
                  </div>
                  <div className="text-neutral-900 font-medium group-hover:text-primary-600 transition-colors">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Media */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-4">Volg ons op social media</h4>
            <div className="flex space-x-4">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center hover:bg-secondary-200 transition-colors text-secondary-700"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors text-primary-700"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
