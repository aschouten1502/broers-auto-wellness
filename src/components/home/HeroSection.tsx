'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/extraafbeelding7.png"
          alt="Broers Auto Wellness - Premium car care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 mb-8 text-sm font-bold text-white bg-primary-500 rounded-full shadow-2xl border border-white/20">
              Sinds 1995
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Welkom bij <span className="text-primary-400">Broers</span>{' '}
            <span className="text-secondary-400">Auto Wellness</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl text-white/95 mb-8 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dé schoonmaak specialist voor uw auto met{' '}
            <span className="font-bold text-primary-300">30 jaar ervaring!</span>
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Specialist in het compleet reconditioneren en showroom klaarmaken van nieuwe en gebruikte auto&apos;s in Uithoorn en omstreken.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button href="#diensten" size="lg" variant="primary">
              Onze Diensten
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              Contact Opnemen
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="group p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="text-5xl font-bold text-primary-300 mb-2 group-hover:scale-110 transition-transform">30+</div>
              <div className="text-lg font-semibold text-white">Jaar Ervaring</div>
              <div className="text-sm text-white/80 mt-1">Specialist sinds 1995</div>
            </div>
            <div className="group p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="text-5xl font-bold text-secondary-300 mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-lg font-semibold text-white">Tankstation</div>
              <div className="text-sm text-white/80 mt-1">Altijd geopend</div>
            </div>
            <div className="group p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="text-5xl font-bold text-primary-300 mb-2 group-hover:scale-110 transition-transform">🏆</div>
              <div className="text-lg font-semibold text-white">Beste Wasstraat</div>
              <div className="text-sm text-white/80 mt-1">Van Uithoorn</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  )
}
