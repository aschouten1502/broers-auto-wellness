import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Home, Phone, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: '404 - Pagina Niet Gevonden | Broers Auto Wellness',
  description: 'De pagina die u zoekt bestaat niet of is verplaatst.',
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen flex items-center bg-gradient-to-b from-white to-primary-50">
        <Container className="py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Nummer */}
            <div className="mb-8">
              <h1 className="text-display-lg font-heading font-bold text-primary-500 mb-4">
                404
              </h1>
              <div className="h-1 w-24 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            {/* Boodschap */}
            <h2 className="text-h2 font-heading font-semibold text-gray-900 mb-4">
              Oeps! Deze pagina is verdwenen
            </h2>
            <p className="text-body-lg text-gray-600 mb-12 max-w-lg mx-auto">
              De pagina die u zoekt bestaat niet of is verplaatst.
              Geen zorgen, we helpen u graag terug op het juiste pad!
            </p>

            {/* Acties */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/" variant="primary" size="lg" className="gap-2">
                <Home className="w-5 h-5" />
                Terug naar Home
              </Button>

              <Button href="/contact" variant="secondary" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Neem Contact Op
              </Button>
            </div>

            {/* Suggesties */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <p className="text-body font-medium text-gray-700 mb-6">
                Of ontdek onze diensten:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Link
                  href="/car-cleaning"
                  className="group p-4 rounded-xl bg-white shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    Car Cleaning
                  </div>
                </Link>

                <Link
                  href="/carwash"
                  className="group p-4 rounded-xl bg-white shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    Carwash
                  </div>
                </Link>

                <Link
                  href="/"
                  className="group p-4 rounded-xl bg-white shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    Wasboxen 24/7
                  </div>
                </Link>

                <Link
                  href="/broodjescorner"
                  className="group p-4 rounded-xl bg-white shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    Broodjescorner
                  </div>
                </Link>
              </div>
            </div>

            {/* Footer link */}
            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-body-sm text-gray-500 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Terug naar de homepage
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
