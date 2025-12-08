import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import GivingModal from '../shared/giving-modal'

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
              <li><Link href="/programmes" className="hover:text-secondary transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Giving */}
          <div>
            <h4 className="font-serif font-bold text-sm mb-4">Give</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <GivingModal>
                <Link href="#" className="hover:text-secondary transition-colors">Donations</Link>
                </GivingModal>
                </li>
              <li>
                <GivingModal>
                <Link href="#" className="hover:text-secondary transition-colors">Tithe</Link>
                </GivingModal>
                </li>
              <li>
                <GivingModal>
                <Link href="#" className="hover:text-secondary transition-colors">Offering</Link>
                </GivingModal>
                </li>
              <li>
                <GivingModal>
                <Link href="#" className="hover:text-secondary transition-colors">Seed Sowing</Link>
                </GivingModal>
                </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold text-sm mb-4">Follow Us on Facebook</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors flex items-center"><Facebook size={20} /> <span className="ml-2 text-xs">Assemblies of God Church<br /> Citadel of Transformation</span></a>
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
