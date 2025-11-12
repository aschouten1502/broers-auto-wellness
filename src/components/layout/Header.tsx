'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { Navigation } from './Navigation'
import { MobileMenu } from './MobileMenu'
import { Container } from '@/components/ui/Container'
import { companyInfo } from '@/data/company-info'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-32 h-22 md:w-40 md:h-28">
              <Image
                src="/images/logos/logo.png"
                alt="Broers Auto Wellness"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-neutral-900 hidden sm:inline">
              Broers Auto Wellness
            </span>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Phone Number */}
          <a
            href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
            className="hidden lg:flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 transition-colors"
          >
            <Phone size={20} />
            <span className="font-medium">{companyInfo.contact.phone}</span>
          </a>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}
