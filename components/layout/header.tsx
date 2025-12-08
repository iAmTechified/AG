'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Play, Facebook, Twitter, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import GivingModal from '@/components/shared/giving-modal'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const logo_image = '/ag-logo.png';

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/sermons', label: 'Sermons' },
    { href: '/programmes', label: 'Events' },
    // { href: '/giving', label: 'Give' },
  ]

  const socialLinks = [
    { href: '/sermons', icon: Play, label: 'Watch Sermon' },
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header className={`${scrolled ? 'sticky' : 'absolute'} absolute top-0 z-50 w-full border-b border-border/40 transition-colors duration-300 ${scrolled || mobileMenuOpen ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent text-white'}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src={logo_image || "/placeholder.svg"}
                alt={"AGC222"}
                className="w-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col space-x-0">
              <span className="font-sans font-extrabold hidden text-xs sm:inline">Assemblies of God church</span>
              <span className="font-sans font-medium text-xs hidden sm:inline">Citadel of Transformation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-base font-medium hover:font-bold hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map(link => (
                <Link key={link.href} href={link.href} className={`text-white hover:text-secondary hover:font-bold transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                  <link.icon size={20} className={`${scrolled ? 'text-primary' : 'text-white'} hover:text-secondary hover:font-bold`} />
                </Link>
              ))}
            </div>
            <GivingModal>
              <Button className="cursor-pointer bg-primary hover:bg-brand-gold-accent">
                Give Now
              </Button>
            </GivingModal>
            <Button asChild variant="outline" className={`bg-transparent hover:border-brand-gold-accent hover:bg-transparent hover:text-brand-gold-accent  ${scrolled ? 'border-primary' : 'border-white'}`}>
              <Link href="/sermons">Watch Sermons</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base font-semibold text-foreground hover:text-secondary hover:font-bold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-center gap-4 mt-4 w-full">
            <GivingModal>
              <Button variant="default" className="flex-1 cursor-pointer bg-brand-gold hover:bg-brand-gold-accent py-4">
                Give Now
              </Button>
            </GivingModal>
            <Button asChild variant="outline" className={`flex-1 bg-transparent hover:border-brand-gold-accent hover:bg-transparent hover:text-brand-gold-accent py-4 ${scrolled || mobileMenuOpen ? 'border-primary' : 'border-white'}`}>
              <Link href="/sermons">Watch Sermons</Link>
            </Button>
            </div>
            <div className="flex items-center justify-center gap-4 pt-4 mb-4">
              {socialLinks.map(link => (
                <Link key={link.href} href={link.href} className="rounded-full bg-primary p-2 text-white hover:bg-primary/80 hover:text-secondary hover:font-bold transition-colors">
                  <link.icon size={16} />
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
