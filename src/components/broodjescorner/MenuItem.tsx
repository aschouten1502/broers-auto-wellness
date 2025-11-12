'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { MenuItem as MenuItemType } from '@/lib/types'

interface MenuItemProps {
  item: MenuItemType
  index: number
}

export function MenuItem({ item, index }: MenuItemProps) {
  return (
    <motion.div
      className="flex justify-between items-start py-3 border-b border-neutral-200 last:border-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <div className="flex-1">
        <div className="font-medium text-neutral-900">{item.name}</div>
        {item.description && (
          <div className="text-sm text-neutral-600 mt-1">{item.description}</div>
        )}
        {item.options && item.options.length > 0 && (
          <div className="text-xs text-neutral-500 mt-1 italic">
            {item.options.join(', ')}
          </div>
        )}
      </div>
      <div className="font-semibold text-primary-600 ml-4 flex-shrink-0">
        €{item.price.toFixed(2)}
      </div>
    </motion.div>
  )
}
