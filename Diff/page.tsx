import { Button } from '@/components/ui/button'
import Link from 'next/link'
import PageHero from '@/components/shared/page-hero'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      {/* Hero */}
      <PageHero
        title="About Citadel of Transformation"
        subtitle="A community of believers committed to spiritual growth and transformation"
      />

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Assemblies of God Church – Citadel of Transformation was established to serve as
              a beacon of light and hope in the Aba community. Since our inception, we have been
              dedicated to advancing the kingdom of God through dynamic worship, powerful preaching,
              and compassionate ministry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our name reflects our core mission: to be a place where lives are transformed by
              the power of the Holy Spirit. We believe that every person can experience God's
              grace and love, regardless of their background or current circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To proclaim the Gospel of Jesus Christ, make disciples, and empower believers
                to live out their faith in the power of the Holy Spirit.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A transformed community where every individual experiences God's love, grows
                spiritually, and contributes to advancing God's kingdom.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Our Values
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Spirit-filled worship, biblical truth, authentic community, passionate service,
                and radical transformation in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'The Authority of Scripture', desc: 'The Bible is God\'s Word and our guide for faith and practice.' },
              { title: 'Salvation Through Christ', desc: 'Jesus Christ is our Savior, and salvation comes through faith in Him.' },
              { title: 'The Holy Spirit', desc: 'The Holy Spirit empowers believers for worship, service, and transformation.' },
              { title: 'Community', desc: 'We are stronger together and committed to building authentic relationships.' },
              { title: 'Service', desc: 'We serve our community with compassion and dedication to God\'s kingdom.' },
              { title: 'Growth', desc: 'Spiritual growth and discipleship are lifelong journeys we undertake together.' },
            ].map((belief, idx) => (
              <div key={idx} className="border-l-4 border-secondary pl-6 py-4">
                <h3 className="font-semibold text-primary mb-2">{belief.title}</h3>
                <p className="text-muted-foreground text-sm">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Whether you're a longtime believer or just exploring faith, we welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/sermons">Watch a Sermon</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
