'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { CheckCircle, MapPin, Users, Building2 } from 'lucide-react'

export function AboutSection() {
  const highlights = [
    'Specialist in auto reconditioning sinds 1995',
    'Showroom klaarmaken van nieuwe en gebruikte auto\'s',
    'Voor particulier én zakelijk',
    'Werkgebied: van Abcoude tot Amsterdam',
    'Moderne wasstraat en 24/7 wasboxen',
    'Lunchroom met verse broodjes en koffie',
  ]

  const clients = [
    { icon: Building2, text: 'Autobedrijven & Dealers' },
    { icon: Users, text: 'Schadebedrijven' },
    { icon: MapPin, text: 'Jachthavens & Botenbedrijven' },
  ]

  return (
    <Section background="white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3 block">
            Over Ons
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
            Dé Specialist voor Uw Auto sinds 1995
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 mb-6 leading-relaxed">
            Broers Auto Wellness is gespecialiseerd in het compleet reconditioneren en showroom klaarmaken van nieuwe en gebruikte auto&apos;s, zowel voor de zakelijke als de particuliere cliënt.
          </p>
          <p className="text-base text-neutral-600 mb-6">
            Wij verrichten deze werkzaamheden al sinds <span className="font-semibold text-primary-600">1995 in Mijdrecht</span>. In deze tijd is ons werkgebied uitgegroeid van Abcoude tot Maarssen en Hoofddorp tot Amstelveen en Amsterdam-Zuidoost tot Mijdrecht.
          </p>
          <p className="text-base text-neutral-600 mb-8">
            Of het nu gaat om interieur reiniging, exterieur behandeling, of een combinatie van beide - wij zorgen ervoor dat uw auto er weer als nieuw uitziet. Daarnaast kunt u bij ons terecht voor verse broodjes, koffie en hebben we een modern 24/7 tankstation.
          </p>

          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CheckCircle className="text-primary-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-neutral-700">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
            <Image
              src="/images/extraafbeelding5.png"
              alt="Professionele auto reiniging"
              fill
              className="object-cover"
            />
          </div>

          {/* Client Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
              >
                <div className="p-2 bg-secondary-100 rounded-lg">
                  <client.icon className="text-secondary-600" size={20} />
                </div>
                <span className="text-sm font-medium text-neutral-700">{client.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Decorative Experience Badge */}
          <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary-500 to-primary-600 p-6 rounded-2xl shadow-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">30+</div>
              <div className="text-sm font-semibold text-white/90">Jaar Ervaring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
