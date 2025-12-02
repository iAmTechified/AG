import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Church Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Asseblies of God church</h3>
            <h4 className="font-serif font-bold text-lg mb-4">Citadel of Transformation</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>#222 Clifford Road, Aba, Nigeria</span>
              </div>
              <div className="flex gap-2">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span>+234(0) 701 234 5678</span>
              </div>
              <div className="flex gap-2">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span>contact@agc222.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/sermons" className="hover:text-secondary transition-colors">Sermons</Link></li>
              <li><Link href="/programmes" className="hover:text-secondary transition-colors">Programmes</Link></li>
              <li><Link href="/calendar" className="hover:text-secondary transition-colors">Calendar</Link></li>
            </ul>
          </div>

          {/* Giving */}
          <div>
            <h4 className="font-serif font-bold text-sm mb-4">Give</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/giving/donations" className="hover:text-secondary transition-colors">Donations</Link></li>
              <li><Link href="/giving/tithe" className="hover:text-secondary transition-colors">Tithe</Link></li>
              <li><Link href="/giving/offering" className="hover:text-secondary transition-colors">Offering</Link></li>
              <li><Link href="/giving/seed-sowing" className="hover:text-secondary transition-colors">Seed Sowing</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold text-sm mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="text-center text-sm opacity-75">
            <p>&copy; {currentYear} Assemblies of God Church – Citadel of Transformation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
