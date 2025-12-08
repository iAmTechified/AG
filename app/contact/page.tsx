import PageHero from '@/components/shared/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}

      <PageHero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out anytime."
        className="min-h-[70vh] md:min-h-[70vh]"
      />

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      222 Clifford Road, Aba, Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground">[Your Phone Number]</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">[Your Email]</p>
                  </div>
                </div>

                {/* Service Times */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Service Times</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>Sunday: 9:00 AM, 12:00 PM</li>
                      <li>Wednesday: 7:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input placeholder="Message subject" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
            Our Location
          </h2>
          <div className="bg-border rounded-lg h-96 flex items-center justify-center">
            <p className="text-muted-foreground">
              Map placeholder - Replace with your actual Google Maps embed
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
