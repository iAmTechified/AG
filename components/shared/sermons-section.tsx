'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Clock, Calendar, ArrowRight, Filter, Headphones, Video } from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock Data
const categories = ["All", "Sunday Service", "Midweek", "Prayer", "Series"]

const featuredSermon = {
    id: 1,
    title: "Walking in Divine Purpose",
    series: "Kingdom Foundations",
    preacher: "Rev. Dr. Solomon Alor",
    date: "Nov 26, 2025",
    duration: "1h 15m",
    excerpt: "Discover how to align your daily walk with God's eternal plan for your life. True purpose isn't found in what we do, but in who we are becoming in Christ.",
    image: "/sermon-featured.jpg", // Placeholder
    category: "Sunday Service"
}

const recentSermons = [
    {
        id: 2,
        title: "The Power of Intercession",
        category: "Prayer",
        date: "Nov 24, 2025",
        duration: "45m",
        image: "/sermon-1.jpg"
    },
    {
        id: 3,
        title: "Understanding Grace",
        category: "Midweek",
        date: "Nov 22, 2025",
        duration: "55m",
        image: "/sermon-2.jpg"
    },
    {
        id: 4,
        title: "Financial Stewardship",
        category: "Series",
        date: "Nov 19, 2025",
        duration: "1h 05m",
        image: "/sermon-3.jpg"
    },
    {
        id: 5,
        title: "Overcoming Fear",
        category: "Sunday Service",
        date: "Nov 12, 2025",
        duration: "1h 10m",
        image: "/sermon-4.jpg"
    }
]

export default function SermonsSection() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [hoveredSermon, setHoveredSermon] = useState<number | null>(null)

    return (
        <section className="relative py-20 md:py-24 bg-muted/30 overflow-hidden">
            {/* Watermark */}
            <div className="absolute top-30 right-10 text-[9rem] md:text-[12rem] font-serif font-bold text-primary/2 pointer-events-none select-none z-0 whitespace-nowrap leading-none">
                Psalm 119
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy">
                            Sermons & Messages
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium tracking-wide">
                            Grow in the Word through our latest teachings and weekly messages.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    {/* <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    activeCategory === cat
                                        ? "bg-brand-navy text-white shadow-md"
                                        : "bg-white text-muted-foreground hover:bg-brand-gold/10 hover:text-brand-navy border border-transparent hover:border-brand-gold/20"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div> */}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">

                    {/* Featured Sermon - Spans 7 columns on LG */}
                    <div className="lg:col-span-7 group relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                        {/* Image Background */}
                        <div className="absolute inset-0 bg-brand-navy">
                            {/* Placeholder for actual image */}
                            <div className="w-full h-full bg-gradient-to-br from-brand-navy to-black opacity-50 mix-blend-multiply z-10 absolute"></div>
                            <div className="w-full h-full bg-gray-800 absolute top-0 left-0"></div>
                            {/* In a real app, use next/image here */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-serif text-6xl font-bold">
                                FEATURED
                            </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                            <div className="space-y-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-brand-gold text-brand-navy hover:bg-brand-gold-accent border-none px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                        New Release
                                    </Badge>
                                    <span className="text-white/80 text-sm font-medium flex items-center gap-1">
                                        <Video className="w-3 h-3" /> {featuredSermon.category}
                                    </span>
                                </div>

                                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                                    {featuredSermon.title}
                                </h3>

                                <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-brand-gold" />
                                        {featuredSermon.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-brand-gold" />
                                        {featuredSermon.duration}
                                    </span>
                                    <span className="text-brand-gold font-medium">
                                        {featuredSermon.preacher}
                                    </span>
                                </div>

                                <p className="text-white/80 line-clamp-2 md:line-clamp-3 max-w-xl">
                                    {featuredSermon.excerpt}
                                </p>

                                <div className="pt-4 opacity-90 group-hover:opacity-100 transition-opacity">
                                    <Button size="lg" className="bg-brand-gold hover:bg-brand-gold-accent text-brand-navy font-bold rounded-full px-8 gap-2">
                                        <Play className="w-4 h-4 fill-current" />
                                        Watch Sermon
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Play Button Overlay (Centered) */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
                                    <Play className="w-6 h-6 text-brand-navy fill-current ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Sermons Grid - Spans 5 columns on LG */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        {recentSermons.map((sermon) => (
                            <div
                                key={sermon.id}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50 flex flex-col"
                            >
                                {/* Thumbnail Area */}
                                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                                    <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-brand-navy/10 transition-colors"></div>
                                    {/* Placeholder Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                        <Video className="w-8 h-8" />
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md">
                                        {sermon.duration}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                                            {sermon.category}
                                        </span>
                                        <span className="text-[10px] text-muted-foreground">
                                            {sermon.date}
                                        </span>
                                    </div>

                                    <h4 className="font-serif text-lg font-bold text-brand-navy leading-tight mb-3 group-hover:text-brand-gold-accent transition-colors">
                                        {sermon.title}
                                    </h4>

                                    <div className="mt-auto pt-2 flex items-center justify-between border-t border-border/50">
                                        <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                                            <Headphones className="w-3 h-3" /> Audio
                                        </span>
                                        <span className="text-xs font-bold text-brand-navy flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Watch <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="flex flex-col items-center justify-center space-y-6">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-brand-navy text-white bg-primary/90 hover:bg-primary hover:text-secondary min-w-[200px] h-12 text-base font-semibold transition-all duration-300"
                        asChild
                    >
                        <Link href="/sermons">
                            View All Sermons
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>

                    <p className="text-sm text-muted-foreground">
                        Subscribe to our <Link href="#" className="underline hover:text-brand-navy">Podcast</Link> or <Link href="#" className="underline hover:text-brand-navy">YouTube Channel</Link> for weekly updates.
                    </p>
                </div>

            </div>
        </section>
    )
}
