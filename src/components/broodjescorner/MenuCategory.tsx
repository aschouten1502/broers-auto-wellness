'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { MenuItem } from './MenuItem'
import type { MenuCategory as MenuCategoryType } from '@/lib/types'

interface MenuCategoryProps {
  category: MenuCategoryType
  index: number
}

export function MenuCategory({ category, index }: MenuCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-4">
          <h3 className="text-2xl font-heading font-bold text-white">
            {category.title}
          </h3>
          {category.subtitle && (
            <p className="text-primary-50 text-sm mt-1">{category.subtitle}</p>
          )}
        </div>
        <div className="p-6">
          <div className="space-y-0">
            {category.items.map((item, idx) => (
              <MenuItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
