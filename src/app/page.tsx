import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { TankenSection } from '@/components/home/TankenSection'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <HeroSection />
        <AboutSection />
        <ServicesOverview />
        <TankenSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
