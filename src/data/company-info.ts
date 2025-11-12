import type { ContactInfo } from '@/lib/types'

export const companyInfo: ContactInfo = {
  name: 'Broers Auto Wellness',
  address: {
    street: 'Anthony Fokkerweg 26',
    postal: '1422 AG',
    city: 'Uithoorn',
    country: 'Nederland',
  },
  contact: {
    phone: '0297 273 224',
    email: 'info@broersautowellness.nl',
  },
  social: {
    facebook: 'https://facebook.com/broersautowellness',
    instagram: 'https://instagram.com/broers_auto_wellness',
  },
  openingHours: {
    shop: {
      weekdays: { open: '09:00', close: '18:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: 'Gesloten',
    },
    carwash: {
      weekdays: { open: '08:00', close: '18:00' },
      saturday: { open: '08:00', close: '17:00' },
      sunday: 'Gesloten',
    },
    wasboxen: '24/7',
  },
}
