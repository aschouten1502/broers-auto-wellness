'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Droplets, Coffee, Clock, ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={32} />,
  Droplets: <Droplets size={32} />,
  Coffee: <Coffee size={32} />,
  Clock: <Clock size={32} />,
}

export function ServicesOverview() {
  return (
    <Section background="gray" id="diensten">
      <div className="text-center mb-12">
        <motion.span
          className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-2 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Onze Diensten
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Wat kunnen wij voor u betekenen?
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Van professionele autoreiniging tot verse broodjes - wij bieden alles onder één dak
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full group cursor-pointer" hover>
              <a href={service.href} className="block p-6">
                <div className="mb-4 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  {service.description}
                </p>
                <div className="flex items-center text-secondary-600 font-medium text-sm group-hover:text-secondary-700">
                  Meer info
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Button href="/contact" variant="secondary" size="lg">
          Neem Contact Op
        </Button>
      </motion.div>
    </Section>
  )
}
