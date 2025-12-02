'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar, Clock, MapPin, Search, Filter, ChevronRight,
  ArrowRight, Share2, CalendarPlus, Users, Music, Heart,
  ChevronLeft, ChevronDown, Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from '@/lib/utils'
import PageHero from '@/components/shared/page-hero'

// --- Mock Data ---

const eventCategories = ['All', 'Worship', 'Outreach', 'Youth', 'Family', 'Leadership', 'Prayer']

const featuredEvent = {
  id: 'feat-1',
  title: "Kingdom Advance Conference 2025",
  date: "2025-11-20",
  time: "09:00 AM",
  venue: "Main Auditorium & Overflow",
  image: "/events/conference.jpg", // Placeholder
  description: "Join us for a 3-day spiritual encounter that will shift your paradigm and propel you into your next level of destiny. Featuring guest ministers and powerful worship.",
  category: "Conference"
}

const upcomingEvents = [
  {
    id: '1',
    title: "Worship Night: Atmosphere of Glory",
    date: "2025-12-05",
    time: "06:00 PM",
    venue: "Main Sanctuary",
    category: "Worship",
    image: "/events/worship.jpg",
    description: "An evening of unadulterated worship and soaking in God's presence."
  },
  {
    id: '2',
    title: "Community Outreach: Feed the 5000",
    date: "2025-12-12",
    time: "10:00 AM",
    venue: "City Center Square",
    category: "Outreach",
    image: "/events/outreach.jpg",
    description: "Sharing the love of Christ by providing food and medical checkups to our community."
  },
  {
    id: '3',
    title: "Youth Fire Night",
    date: "2025-12-19",
    time: "05:00 PM",
    venue: "Youth Hall",
    category: "Youth",
    image: "/events/youth.jpg",
    description: "Igniting a passion for Jesus in the next generation. Don't miss it!"
  },
  {
    id: '4',
    title: "Christmas Carol Service",
    date: "2025-12-24",
    time: "06:00 PM",
    venue: "Main Auditorium",
    category: "Family",
    image: "/events/christmas.jpg",
    description: "Celebrate the birth of our Savior with carols, drama, and joy."
  },
  {
    id: '5',
    title: "Crossover Service",
    date: "2025-12-31",
    time: "09:00 PM",
    venue: "Main Auditorium",
    category: "Worship",
    image: "/events/crossover.jpg",
    description: "Ushering in the New Year with prayer, prophecy, and praise."
  },
  {
    id: '6',
    title: "Leadership Summit",
    date: "2026-01-10",
    time: "08:00 AM",
    venue: "Conference Room A",
    category: "Leadership",
    image: "/events/leadership.jpg",
    description: "Equipping leaders for effective ministry in the new year."
  }
]

const yearlyOverview = [
  { quarter: "Q1", title: "Foundation", events: ["21 Days Fasting", "Leadership Summit", "First Fruits Service"] },
  { quarter: "Q2", title: "Expansion", events: ["Easter Convention", "Family Week", "Music Concert"] },
  { quarter: "Q3", title: "Impact", events: ["Youth Camp", "Missions Week", "Community Outreach"] },
  { quarter: "Q4", title: "Harvest", events: ["Kingdom Conference", "Anniversary", "Christmas Carol"] },
]

const testimonies = [
  { text: "The Worship Night changed my life. I experienced God in a way I never have before.", author: "Sarah K." },
  { text: "The Leadership Summit gave me the tools I needed to lead my team effectively.", author: "John D." },
  { text: "I found a family at the Youth Fire Night. It's amazing to see young people on fire for God.", author: "Mike T." },
]

// --- Components ---

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = new Date(targetDate).getTime() - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex gap-4 md:gap-8 text-center">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col">
          <span className="text-2xl md:text-4xl font-bold font-serif text-brand-gold tabular-nums">
            {item.value.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function EventsPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [view, setView] = useState('upcoming')
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null)

  // Filter Logic
  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) || event.venue.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory
    // In a real app, we'd filter by 'view' (upcoming/past) using dates
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* 1. Hero Section */}
      <div className="relative pb-20">
        <PageHero
          title="Events & Programmes"
          subtitle="Gathering together to worship, learn, and impact our world."
          className="min-h-[50vh]"
        />
      </div>

      {/* 2. Featured Event (Highlight) */}
      <section className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-brand-navy rounded-3xl shadow-2xl overflow-hidden border border-white/10 relative group">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-[url('/events/conference-bg.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <Badge className="bg-brand-gold text-brand-navy hover:bg-brand-gold-accent border-none px-3 py-1 text-sm font-bold uppercase tracking-wider animate-pulse">
                Upcoming Major Event
              </Badge>

              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
                {featuredEvent.title}
              </h2>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-white/80 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                  <span>{new Date(featuredEvent.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  <span>{featuredEvent.venue}</span>
                </div>
              </div>

              <p className="text-white/70 max-w-xl text-lg">
                {featuredEvent.description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold-accent font-bold">
                  Register Now
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <CalendarPlus className="w-4 h-4 mr-2" /> Add to Calendar
                </Button>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex-shrink-0 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="text-center mb-4">
                <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Event Starts In</span>
              </div>
              <CountdownTimer targetDate={`${featuredEvent.date}T${featuredEvent.time}`} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filter Bar (Sticky) */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-y border-border shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

            {/* Categories */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
              {eventCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border",
                    selectedCategory === cat
                      ? "bg-brand-navy text-white border-brand-navy shadow-md"
                      : "bg-transparent text-muted-foreground border-transparent hover:bg-gray-100"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search & Toggle */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-grow md:flex-grow-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search events..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 bg-gray-50 border-transparent focus:bg-white transition-all rounded-full w-full md:w-64"
                />
              </div>

              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setView('upcoming')}
                  className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", view === 'upcoming' ? "bg-white text-brand-navy shadow-sm" : "text-muted-foreground")}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setView('past')}
                  className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", view === 'past' ? "bg-white text-brand-navy shadow-sm" : "text-muted-foreground")}
                >
                  Past
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Events Calendar (Mini Date Bar) */}
      <section className="py-8 bg-gray-50/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-brand-navy">December 2025</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronLeft className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </div>
          <div className="grid grid-cols-7 md:grid-cols-14 gap-2 text-center">
            {Array.from({ length: 14 }).map((_, i) => {
              const date = new Date(2025, 11, i + 1)
              const isToday = i === 4 // Mock "today"
              const hasEvent = [5, 12, 19, 24, 31].includes(i + 1)
              return (
                <div key={i} className={cn(
                  "flex flex-col items-center p-2 rounded-xl cursor-pointer transition-all hover:bg-white hover:shadow-sm border border-transparent",
                  isToday && "bg-brand-navy text-white shadow-md",
                  !isToday && hasEvent && "bg-brand-gold/10 border-brand-gold/30"
                )}>
                  <span className="text-[10px] uppercase font-bold opacity-60">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                  <span className="text-lg font-bold">{date.getDate()}</span>
                  {hasEvent && <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Events Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col h-full hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10" />
                  {/* Placeholder for Image */}
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-muted-foreground">
                    <Image src={event.image} alt={event.title} width={400} height={300} className="object-cover w-full h-full" />
                  </div>

                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center min-w-[60px] shadow-lg">
                    <span className="block text-xs font-bold text-brand-navy uppercase">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                    <span className="block text-xl font-bold text-brand-navy">{new Date(event.date).getDate()}</span>
                  </div>

                  <Badge className="absolute top-4 right-4 z-20 bg-brand-navy/80 backdrop-blur-sm border-none text-white">
                    {event.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-gold" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                    {event.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-white border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white group-hover:bg-brand-navy group-hover:text-white transition-all">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
                        <div className="relative h-48 bg-brand-navy">
                          <div className="absolute inset-0 bg-[url('/events/modal-bg.jpg')] bg-cover bg-center opacity-50" />
                          <div className="absolute bottom-0 left-0 p-6 text-white">
                            <Badge className="bg-brand-gold text-brand-navy mb-2">{event.category}</Badge>
                            <h2 className="font-serif text-2xl font-bold">{event.title}</h2>
                          </div>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <Calendar className="w-5 h-5 text-brand-navy" />
                              <div>
                                <p className="text-xs text-muted-foreground">Date</p>
                                <p className="font-semibold text-sm">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <Clock className="w-5 h-5 text-brand-navy" />
                              <div>
                                <p className="text-xs text-muted-foreground">Time</p>
                                <p className="font-semibold text-sm">{event.time}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg col-span-2">
                              <MapPin className="w-5 h-5 text-brand-navy" />
                              <div>
                                <p className="text-xs text-muted-foreground">Venue</p>
                                <p className="font-semibold text-sm">{event.venue}</p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-bold text-brand-navy">About This Event</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {event.description} Join us for a transformative experience. We believe God is going to move mightily. Invite your friends and family!
                            </p>
                          </div>

                          <DialogFooter className="gap-2 sm:gap-0">
                            <Button variant="outline" className="w-full sm:w-auto">
                              <Share2 className="w-4 h-4 mr-2" /> Share
                            </Button>
                            <Button className="w-full sm:w-auto bg-brand-navy text-white hover:bg-brand-navy/90">
                              <CalendarPlus className="w-4 h-4 mr-2" /> Add to Calendar
                            </Button>
                          </DialogFooter>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Yearly Events Overview */}
      <section className="py-20 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Yearly Overview</h2>
            <p className="text-white/60">Our major spiritual milestones throughout the year.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yearlyOverview.map((q, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {q.quarter}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-6 mt-2 text-brand-gold">{q.title}</h3>
                <ul className="space-y-3">
                  {q.events.map((ev, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      {ev}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimony Ribbon */}
      <section className="py-16 bg-brand-gold/10">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonies.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="text-center px-4 md:px-12">
                    <div className="flex justify-center mb-6 text-brand-gold">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                    </div>
                    <blockquote className="font-serif text-xl md:text-2xl text-brand-navy mb-6 leading-relaxed">
                      "{t.text}"
                    </blockquote>
                    <cite className="not-italic font-bold text-brand-navy/70 block">
                      — {t.author}
                    </cite>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white" />
              <CarouselNext className="border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-black" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Miss Out
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Stay connected with what God is doing in our midst. Subscribe to get event updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email address" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12" />
            <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold-accent h-12 font-bold">
              Subscribe
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/40">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

    </div>
  )
}
