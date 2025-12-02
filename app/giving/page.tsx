import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Coins, Gift, Leaf, ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/page-hero'

export default function GivingPage() {
  const givingTypes = [
    {
      icon: Heart,
      title: 'Donations',
      description: 'Give freely to support our ministries and help those in need',
      href: '/giving/donations',
      color: 'text-red-500',
    },
    {
      icon: Coins,
      title: 'Tithe',
      description: 'Return a tenth of your income to God',
      href: '/giving/tithe',
      color: 'text-yellow-600',
    },
    {
      icon: Gift,
      title: 'Offering',
      description: 'Give your offering as an act of worship',
      href: '/giving/offering',
      color: 'text-blue-500',
    },
    {
      icon: Leaf,
      title: 'Seed Sowing',
      description: 'Plant seeds for spiritual growth and blessings',
      href: '/giving/seed-sowing',
      color: 'text-green-500',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {/* Hero Section */}
      <PageHero
        title="Give to God's Work"
        subtitle="Support our ministry and impact lives through your generous giving"
      />

      {/* Giving Methods */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {givingTypes.map((type) => (
              <Link key={type.title} href={type.href}>
                <div className="group bg-white rounded-lg p-8 card-shadow border border-border hover:border-secondary transition-all cursor-pointer h-full">
                  <div className={`mb-4 ${type.color}`}>
                    <type.icon size={48} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                    Give Now
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-muted rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Why Give?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Support Ministry</h3>
                <p className="text-sm text-muted-foreground">
                  Your gifts enable us to continue our mission and reach more people with the Gospel.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Community Care</h3>
                <p className="text-sm text-muted-foreground">
                  We use your giving to help those in need within our community.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Spiritual Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Giving is a spiritual practice that deepens your connection with God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is my giving secure?',
                a: 'Yes, we use PayStack to process all payments securely. Your financial information is encrypted and protected.',
              },
              {
                q: 'Can I give anonymously?',
                a: 'Yes, you can give without providing your details. We focus on your heart of worship, not recognition.',
              },
              {
                q: 'Where does my money go?',
                a: 'Your giving supports our ministries, community outreach, building maintenance, and pastoral care programs.',
              },
              {
                q: 'Can I give offline?',
                a: 'Yes, we also accept cash offerings during services and bank transfers. Contact us for details.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-3">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
