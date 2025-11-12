'use client'

import React, { useEffect, useState } from 'react'
import { X, Download } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return
    }

    // Check if dismissed recently (within 7 days)
    const dismissedAt = localStorage.getItem('pwa-install-dismissed')
    if (dismissedAt) {
      const daysSinceDismissed = (Date.now() - parseInt(dismissedAt)) / (1000 * 60 * 60 * 24)
      if (daysSinceDismissed < 7) {
        return
      }
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)

      // Show prompt after 30 seconds
      setTimeout(() => {
        setShowPrompt(true)
      }, 30000)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => {
    localStorage.setItem('pwa-install-dismissed', Date.now().toString())
    setShowPrompt(false)
  }

  if (!showPrompt || !deferredPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary-400 overflow-hidden">
        <div className="relative p-6">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
            aria-label="Sluiten"
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Download className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-neutral-900 text-lg">
                  Installeer Broers Auto Wellness
                </h3>
                <p className="text-sm text-neutral-600">
                  Voor snelle toegang
                </p>
              </div>
            </div>

            <p className="text-neutral-700 mb-4 text-sm">
              Installeer onze app voor een beter en sneller ervaring, offline toegang en snelle toegang vanaf uw beginscherm.
            </p>

            {/* Benefits */}
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center text-neutral-700">
                <span className="mr-2">✓</span>
                Sneller laden
              </li>
              <li className="flex items-center text-neutral-700">
                <span className="mr-2">✓</span>
                Offline beschikbaar
              </li>
              <li className="flex items-center text-neutral-700">
                <span className="mr-2">✓</span>
                Direct vanaf uw beginscherm
              </li>
            </ul>

            {/* Actions */}
            <div className="flex space-x-3">
              <button
                onClick={handleInstall}
                className="flex-1 px-6 py-3 bg-primary-400 text-neutral-900 font-semibold rounded-lg hover:bg-primary-500 transition-colors shadow-md hover:shadow-lg"
              >
                Installeren
              </button>
              <button
                onClick={handleDismiss}
                className="px-6 py-3 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:border-neutral-400 transition-colors"
              >
                Later
              </button>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 bg-gradient-to-r from-primary-400 to-secondary-500"></div>
      </div>
    </div>
  )
}
