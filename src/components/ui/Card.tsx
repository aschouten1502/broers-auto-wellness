'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  animate?: boolean
}

export function Card({ children, className, hover = true, animate = true }: CardProps) {
  const Component = animate ? motion.div : 'div'

  return (
    <Component
      className={cn(
        'bg-white rounded-xl shadow-card overflow-hidden',
        hover && 'hover:shadow-card-hover transition-shadow duration-300',
        className
      )}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      })}
    >
      {children}
    </Component>
  )
}
