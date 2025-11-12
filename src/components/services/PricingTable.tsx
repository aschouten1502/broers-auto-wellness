'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Card } from '@/components/ui/Card'

interface Program {
  id: string
  name: string
  price: string
  features: Array<{
    name: string
    included: boolean
  }>
  highlighted?: boolean
}

const programs: Program[] = [
  {
    id: 'program-1',
    name: 'Programma 1',
    price: '€18,50',
    features: [
      { name: 'Voorbehandeling', included: true },
      { name: 'Velgen-behandeling', included: true },
      { name: 'Actief schuim', included: true },
      { name: 'Bodemwas', included: true },
      { name: 'Hot wax', included: true },
      { name: 'Hard wax / polish poetsen', included: true },
      { name: 'Drogen', included: true },
    ],
  },
  {
    id: 'program-2',
    name: 'Programma 2',
    price: '€16,50',
    features: [
      { name: 'Voorbehandeling', included: true },
      { name: 'Velgen-behandeling', included: true },
      { name: 'Actief schuim', included: true },
      { name: 'Bodemwas', included: true },
      { name: 'Hot wax', included: true },
      { name: 'Hard wax / polish poetsen', included: false },
      { name: 'Drogen', included: true },
    ],
  },
  {
    id: 'program-3',
    name: 'Programma 3',
    price: '€13,50',
    features: [
      { name: 'Voorbehandeling', included: true },
      { name: 'Velgen-behandeling', included: true },
      { name: 'Actief schuim', included: true },
      { name: 'Bodemwas', included: false },
      { name: 'Hot wax', included: true },
      { name: 'Hard wax / polish poetsen', included: false },
      { name: 'Drogen', included: true },
    ],
  },
  {
    id: 'program-bus',
    name: 'Bus',
    price: '€17,50',
    features: [
      { name: 'Voorbehandeling', included: true },
      { name: 'Velgen-behandeling', included: true },
      { name: 'Actief schuim', included: true },
      { name: 'Bodemwas', included: true },
      { name: 'Hot wax', included: true },
      { name: 'Hard wax / polish poetsen', included: false },
      { name: 'Drogen', included: true },
    ],
  },
  {
    id: 'program-5',
    name: 'Programma 5',
    price: '€10,50',
    features: [
      { name: 'Voorbehandeling', included: false },
      { name: 'Velgen-behandeling', included: false },
      { name: 'Actief schuim', included: true },
      { name: 'Bodemwas', included: false },
      { name: 'Hot wax', included: false },
      { name: 'Hard wax / polish poetsen', included: false },
      { name: 'Drogen', included: false },
    ],
  },
]

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program, index) => (
        <motion.div
          key={program.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full"
        >
          <Card className="h-full group hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-primary-400 transition-all duration-300">
            <div className="p-6 group-hover:bg-primary-50/50 transition-colors duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-2">
                  {program.name}
                </h3>
                <div className="text-3xl font-bold text-secondary-600">
                  {program.price}
                </div>
              </div>
              <ul className="space-y-3">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    {feature.included ? (
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    ) : (
                      <X className="text-neutral-400 flex-shrink-0 mt-0.5" size={18} />
                    )}
                    <span className={feature.included ? 'text-neutral-900' : 'text-neutral-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
