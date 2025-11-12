'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, MapPin } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { companyInfo } from '@/data/company-info'

export function CTASection() {
  return (
    <Section background="primary" className="!py-16">
      <div className="text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Klaar om uw auto nieuw leven in te blazen?
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Neem vandaag nog contact met ons op of kom langs tijdens onze openingstijden
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
            variant="secondary"
            size="lg"
          >
            <Phone className="mr-2" size={20} />
            {companyInfo.contact.phone}
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            <MapPin className="mr-2" size={20} />
            Bekijk Locatie
          </Button>
        </motion.div>

        {/* Opening Hours Highlight */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Clock className="text-secondary-600 mr-2" size={24} />
            <h3 className="text-xl font-heading font-semibold text-neutral-900">
              Openingstijden
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-semibold text-neutral-700 mb-2">Maandag - Vrijdag</div>
              <div className="text-2xl font-bold text-secondary-600">
                {companyInfo.openingHours.shop.weekdays.open} - {companyInfo.openingHours.shop.weekdays.close}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-700 mb-2">Zaterdag</div>
              <div className="text-2xl font-bold text-secondary-600">
                {companyInfo.openingHours.shop.saturday.open} - {companyInfo.openingHours.shop.saturday.close}
              </div>
            </div>
          </div>
          <div className="mt-4 text-neutral-600">
            Zondag: <span className="font-semibold">{companyInfo.openingHours.shop.sunday}</span>
          </div>
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <div className="text-sm text-neutral-700">
              <span className="font-semibold">Wasboxen:</span> {companyInfo.openingHours.wasboxen}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
