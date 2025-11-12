'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Clock, Fuel, Coffee, Sparkles } from 'lucide-react'

export function TankenSection() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Geopend',
      description: 'Ons tankstation is altijd open, dag en nacht'
    },
    {
      icon: Fuel,
      title: 'Hoge Kortingen',
      description: 'Profiteer van scherpe prijzen bij het tanken'
    },
    {
      icon: Coffee,
      title: 'Lunchroom',
      description: 'Verse broodjes en luxe koffie terwijl u tankt'
    },
    {
      icon: Sparkles,
      title: 'Wasstraat & Shop',
      description: 'Alles onder één dak voor uw auto'
    }
  ]

  return (
    <Section background="primary">
      <div className="text-center mb-12">
        <motion.span
          className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tankstation
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          24/7 Tankstation in Uithoorn
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bij Broers Auto Wellness profiteert u van hoge kortingen bij het tanken. Bent u klaar met tanken en wilt u zelf ook even bijtanken? U kunt in onze lunchroom terecht voor een heerlijk vers broodje of een luxe lekkere koffie.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-secondary-600" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-neutral-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Banner */}
      <motion.div
        className="mt-12 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-2xl p-8 md:p-12 text-center shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Alles Onder Één Dak
          </h3>
          <p className="text-lg text-white/90 mb-6">
            Onze wasstraat en shop staan uiteraard ook voor u klaar. Tank, was en geniet van verse broodjes - alles op één locatie!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
              🚗 Tankstation
            </div>
            <div className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
              💧 Wasstraat
            </div>
            <div className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
              ☕ Lunchroom
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
