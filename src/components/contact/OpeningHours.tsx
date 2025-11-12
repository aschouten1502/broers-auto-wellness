'use client'

import React from 'react'
import { Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { companyInfo } from '@/data/company-info'

export function OpeningHours() {
  return (
    <Card>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <Clock className="text-secondary-600 mr-2" size={24} />
          <h3 className="text-2xl font-heading font-bold text-neutral-900">
            Openingstijden
          </h3>
        </div>

        <div className="space-y-6">
          {/* Shop */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Broodjescorner & Shop</h4>
            <div className="space-y-2 text-neutral-700">
              <div className="flex justify-between">
                <span>Maandag - Vrijdag</span>
                <span className="font-semibold text-secondary-600">
                  {companyInfo.openingHours.shop.weekdays.open} - {companyInfo.openingHours.shop.weekdays.close}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Zaterdag</span>
                <span className="font-semibold text-secondary-600">
                  {companyInfo.openingHours.shop.saturday.open} - {companyInfo.openingHours.shop.saturday.close}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Zondag</span>
                <span className="font-semibold text-neutral-600">
                  {companyInfo.openingHours.shop.sunday}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h4 className="font-semibold text-neutral-900 mb-3">Carwash & Wasstraat</h4>
            <div className="space-y-2 text-neutral-700">
              <div className="flex justify-between">
                <span>Maandag - Vrijdag</span>
                <span className="font-semibold text-secondary-600">
                  {companyInfo.openingHours.carwash.weekdays.open} - {companyInfo.openingHours.carwash.weekdays.close}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Zaterdag</span>
                <span className="font-semibold text-secondary-600">
                  {companyInfo.openingHours.carwash.saturday.open} - {companyInfo.openingHours.carwash.saturday.close}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Zondag</span>
                <span className="font-semibold text-neutral-600">
                  {companyInfo.openingHours.carwash.sunday}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h4 className="font-semibold text-neutral-900 mb-3">Wasboxen</h4>
            <div className="text-primary-600 font-bold text-lg">
              {companyInfo.openingHours.wasboxen}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
