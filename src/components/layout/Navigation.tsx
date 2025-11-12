'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Car Cleaning', href: '/car-cleaning' },
  { label: 'Broodjescorner', href: '/broodjescorner' },
  { label: 'Carwash', href: '/carwash' },
  { label: 'Contact', href: '/contact' },
]

interface NavigationProps {
  mobile?: boolean
  onItemClick?: () => void
}

export function Navigation({ mobile = false, onItemClick }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn(
      mobile ? 'flex flex-col space-y-4' : 'hidden md:flex md:space-x-8'
    )}>
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              'font-medium transition-colors duration-200',
              mobile ? 'text-lg py-2' : 'text-base',
              isActive
                ? 'text-primary-600'
                : 'text-neutral-700 hover:text-primary-500'
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
