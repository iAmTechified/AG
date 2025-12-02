'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Calendar, Clock, ArrowRight, Sun, Moon, CloudSun, Map as MapIcon, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ServiceTimes() {
    const [mapMode, setMapMode] = useState<'roadmap' | 'satellite'>('roadmap')

    const services = [
        {
            title: "Sunday Worship",
            time: "8:00 AM",
            day: "Sundays",
            desc: "A powerful worship encounter with praise, Word, and fellowship.",
            icon: Sun,
            color: "text-brand-gold",
            color2: "text-brand-navy"
        },
        {
            title: "Midweek Service",
            time: "5:30 PM",
            day: "Wednesdays",
            desc: "Deep Bible study and spiritual strengthening.",
            icon: CloudSun,
            color: "text-brand-gold",
            color2: "text-brand-navy"
        },
        {
            title: "Prayer Meeting",
            time: "5:00 PM",
            day: "Fridays",
            desc: "Intercessory prayer and spiritual empowerment.",
            icon: Moon,
            color: "text-brand-gold",
            color2: "text-brand-navy"
        }
    ]

    const addToCalendar = (service: typeof services[0]) => {
        // Mock functionality - in production this would generate an .ics file or link to Google Calendar
        console.log(`Adding ${service.title} to calendar`)
        alert(`Added ${service.title} to your calendar!`)
    }

    // Smart time indicator logic (simplified)
    const isSunday = new Date().getDay() === 0
    const isWednesday = new Date().getDay() === 3
    const isFriday = new Date().getDay() === 5

    return (
        <section className="relative py-20 md:py-24 bg-white overflow-hidden">
                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-1">
                        <h2 className="font-serif text-4xl md:text-3xl font-bold text-primary">
                        Service Times & Location
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium tracking-wide">
                        We can’t wait to welcome you.
                        </p>
                    </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
                    {services.map((service, index) => (
                        <Card
                            key={service.title}
                            className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden"
                        >
                            <CardContent className="pb-2 flex flex-col h-full relative">
                                <div className="absolute top-[-10%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-start justify-between mt-2 mb-4">
                                    <div className={cn("p-3 rounded-full bg-gray-50 group-hover:bg-brand-gold/10 transition-colors", service.color)}>
                                        <service.icon className="w-6 h-6 text-brand-navy" />
                                    </div>
                                    {((isSunday && index === 0) || (isWednesday && index === 1) || (isFriday && index === 2)) && (
                                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider animate-pulse">
                                            Today
                                        </span>
                                    )}
                                </div>

                                <h3 className="font-serif text-xl font-bold text-brand-navy mb-2">
                                    {service.title}
                                </h3>

                                <div className="flex items-center gap-2 text-brand-gold font-semibold mb-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{service.day} — {service.time}</span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed flex-grow">
                                    {service.desc}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>


            <div className="bg-gray-50 rounded-3xl p-4 md:p-6 lg:p-8 shadow-inner">
                {/* Location Snapshot Block */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-2xl bg-white p-6 md:p-8 shadow-sm">
                        {/* Left Side: Info */}
                        <div className="lg:col-span-1 space-y-8 flex flex-col justify-center">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-sm">
                                    <MapPin className="w-4 h-4" />
                                    Our Location
                                </div>
                                <h3 className="font-serif text-3xl font-bold text-brand-navy">
                                    Assemblies of God Church
                                </h3>
                                <p className="text-lg text-muted-foreground">
                                    222 Clifford Road,<br />
                                    Aba, Abia State.
                                </p>
                                <p className="text-sm text-muted-foreground/80 italic w-70">
                                    Located in the heart of the city, easily accessible from all major routes.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Button size="lg" asChild className="bg-transparent border border-primary/10 hover:bg-transparent hover:border-primary/50 text-primary hover:text-semibold w-full justify-between group">
                                    <a href="https://maps.google.com/?q=222+Clifford+Road+Aba" target="_blank" rel="noopener noreferrer">
                                        <span>Get Directions</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:rotate-[-45deg] transition-all" />
                                    </a>
                                </Button>
                            </div>

                            {/* Weather Micro-note (Mock) */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <CloudSun className="w-5 h-5 text-orange-400" />
                                <span className="text-sm text-muted-foreground">
                                    Currently 28°C in Aba. Perfect for a visit!
                                </span>
                            </div>
                        </div>

                        {/* Right Side: Map */}
                        <div className="lg:col-span-2 relative h-[400px] rounded-2xl overflow-hidden shadow-inner group">
                            {/* Map Toggle */}
                            <div className="absolute top-4 right-4 z-10 flex bg-white rounded-lg shadow-md p-1">
                                <button
                                    onClick={() => setMapMode('roadmap')}
                                    className={cn(
                                        "p-2 rounded-md transition-all",
                                        mapMode === 'roadmap' ? "bg-brand-navy text-white" : "text-muted-foreground hover:bg-gray-100"
                                    )}
                                    title="Standard View"
                                >
                                    <MapIcon className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setMapMode('satellite')}
                                    className={cn(
                                        "p-2 rounded-md transition-all",
                                        mapMode === 'satellite' ? "bg-brand-navy text-white" : "text-muted-foreground hover:bg-gray-100"
                                    )}
                                    title="Satellite View"
                                >
                                    <Layers className="w-4 h-4" />
                                </button>
                            </div>

                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.896504938636!2d7.3666!3d5.1166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDYnNTkuOCJOIDfCsDIxJzU5LjgiRQ!5e0!3m2!1sen!2sng!4v1634567890123!5m2!1sen!2sng&maptype=${mapMode}`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-[1.02]"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
