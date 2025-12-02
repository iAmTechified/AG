'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Search, MapPin, Radio } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MainNav } from './main-nav'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const logo_image = '/ag-logo.png';

  const secondaryNavLinks = [
    { href: '/live', label: 'Live Stream' },
    { href: '/events', label: 'Calendar' },
    { href: '/contact', label: 'Contact' },
    { href: '/gallery', label: 'Gallery' },
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
    <header className={`${scrolled ? 'sticky' : 'absolute'} top-0 z-50 w-full border-b border-border/40 transition-colors duration-300 ${scrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent text-white'}`}>
      {/* Secondary Navigation */}
      <div className="bg-primary text-primary-foreground py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            {secondaryNavLinks.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-secondary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/search" className="hover:text-secondary transition-colors"><Search size={14} /></Link>
            <Link href="/about/location" className="hover:text-secondary transition-colors"><MapPin size={14} /></Link>
            <Link href="/live" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Radio size={14} className="animate-pulse" />
              <span>Live</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src={logo_image || "/placeholder.svg"}
                alt={"AGC222"}
                className="w-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="font-serif font-bold hidden sm:inline">AGC 222</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow items-center justify-center">
            <MainNav />
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-2">
            <Button asChild className="bg-brand-gold hover:bg-brand-gold-accent">
              <Link href="/giving">Donate</Link>
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
            <MainNav />
            <Button asChild variant="default" className="w-full mt-2 bg-brand-gold hover:bg-brand-gold-accent">
              <Link href="/giving">Donate</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
