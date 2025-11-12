'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card } from '@/components/ui/Card'

interface ServiceCardProps {
  title: string
  features: string[]
  index?: number
}

export function ServiceCard({ title, features, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <div className="p-6">
          <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-6">
            {title}
          </h3>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <Check className="text-primary-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  )
}
