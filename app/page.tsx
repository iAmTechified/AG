import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Gift, Coins, Leaf } from 'lucide-react'
import EventsCarousel from '@/components/shared/events-carousel'
import PastoralGreeting from '@/components/shared/pastoral-greeting'
import HeroSection from '@/components/shared/hero-section'
import ServiceTimes from '@/components/shared/service-times'
import SermonsSection from '@/components/shared/sermons-section'
import GivingModal from '@/components/shared/giving-modal'
import ImpactMetrics from '@/components/shared/impact-metrics'
import WhyJoinUs from '@/components/shared/why-join-us'
import TestimonialsSection from '@/components/shared/testimonials-section'
import ScripturePause from '@/components/shared/scripture-pause'

export default function Home() {

  return (
    <div className="w-full">
      {/* 1. Hook: Hero Section */}
      <HeroSection />

      {/* 2. Trust (Micro): Impact Metrics */}
      <ImpactMetrics />

      {/* 8. Value: Events */}
      <EventsCarousel />


      {/* 3. Value (Logic): Why Join Us */}
      <WhyJoinUs />

      {/* 4. Trust (Proof): Testimonials */}
      <TestimonialsSection />

      {/* 5. Depth (Story): Pastoral Greeting */}
      <PastoralGreeting />

      {/* 6. Depth (Micro): Scripture Pause */}
      <ScripturePause />

      {/* 7. Value: Sermons */}
      <SermonsSection />

      {/* 10. Action: Giving Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Giving
            </h2>
            <p className="text-lg opacity-90">
              Support the ministry and impact lives through your giving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Donations',
                desc: 'Give freely to support our mission',
                href: '/giving/donations',
              },
              {
                icon: Coins,
                title: 'Tithe',
                desc: 'Return a tenth to God',
                href: '/giving/tithe',
              },
              {
                icon: Gift,
                title: 'Offering',
                desc: 'Present your offerings to God',
                href: '/giving/offering',
              },
              {
                icon: Leaf,
                title: 'Seed Sowing',
                desc: 'Plant seeds for spiritual growth',
                href: '/giving/seed-sowing',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group cursor-pointer"
              >
                <div className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-lg p-6 text-center h-full flex flex-col items-center justify-center">
                  <item.icon size={40} className="mb-4 text-secondary group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <GivingModal>
              <Button size="lg" variant="secondary">
                Give Now
              </Button>
            </GivingModal>
          </div>
        </div>
      </section>

      {/* 9. Action: Service Times */}
      <ServiceTimes />

      {/* 11. Action: Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary/80 to-secondary/20 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Join Us This Sunday
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Experience the warmth of our community and the power of worship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Directions</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-white"
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Live on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
