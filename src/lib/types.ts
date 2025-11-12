export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
  href: string
  features: string[]
}

export interface MenuItem {
  name: string
  description?: string
  price: number
  options?: string[]
}

export interface MenuCategory {
  id: string
  title: string
  subtitle?: string
  items: MenuItem[]
}

export interface OpeningHours {
  weekdays: { open: string; close: string }
  saturday: { open: string; close: string }
  sunday: string
}

export interface ContactInfo {
  name: string
  address: {
    street: string
    postal: string
    city: string
    country: string
  }
  contact: {
    phone: string
    email: string
  }
  social: {
    facebook: string
    instagram: string
  }
  openingHours: {
    shop: OpeningHours
    carwash: OpeningHours
    wasboxen: string
  }
}
