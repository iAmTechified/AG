'use client'

import { useState, useMemo } from 'react'
import { Search, Play, Headphones, Download, Share2, Filter, ChevronDown, Clock, Calendar, User, Eye, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import PageHero from '@/components/shared/page-hero'
import { mockSermons } from '@/lib/api' // Assuming this exists, otherwise we'll mock locally
import Image from 'next/image'
import Link from 'next/link'

// Extended Mock Data (if needed)
const extendedSermons = [
  ...mockSermons,
  { id: 's4', title: 'Walking in Dominion', preacher: 'Rev. Dr. John Doe', date: '2023-11-12', duration: '55 min', category: 'Faith', video_url: '/sermon-thumb-4.jpg', views: '1.2k' },
  { id: 's5', title: 'The Power of Prayer', preacher: 'Pst. Jane Doe', date: '2023-11-05', duration: '48 min', category: 'Prayer', video_url: '/sermon-thumb-5.jpg', views: '900' },
  { id: 's6', title: 'Kingdom Finance', preacher: 'Rev. Peter Smith', date: '2023-10-29', duration: '60 min', category: 'Finance', video_url: '/sermon-thumb-6.jpg', views: '2.5k' },
]

const sermonSeries = [
  { title: "The Book of Romans", count: "12 Parts", image: "/series-romans.jpg" },
  { title: "Kingdom Culture", count: "8 Parts", image: "/series-kingdom.jpg" },
  { title: "Faith Foundations", count: "5 Parts", image: "/series-faith.jpg" },
]

export default function SermonsPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPreacher, setSelectedPreacher] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')

  const categories = ['All', 'Faith', 'Healing', 'Family', 'Prayer', 'Finance', 'Prophecy']
  const preachers = ['All', 'Rev. Dr. John Doe', 'Pst. Jane Doe', 'Rev. Peter Smith']
  const years = ['All', '2024', '2023', '2022']

  // Featured Sermon (Latest)
  const featuredSermon = extendedSermons[0]

  const filteredSermons = useMemo(() => {
    return extendedSermons.filter((sermon) => {
      const matchesSearch =
        sermon.title.toLowerCase().includes(search.toLowerCase()) ||
        sermon.preacher.toLowerCase().includes(search.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || sermon.category === selectedCategory
      // Add preacher and year logic if data supports it
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* 1. Hero Section */}
      <div className="relative pb-32 md:pb-48"> {/* Extra padding for overlap */}
        <PageHero
          title="Sermons & Messages"
          subtitle="Dive deep into the Word of God. Watch, listen, and be transformed."
          className="min-h-[60vh] md:min-h-[70vh]"
        />
      </div>

      {/* 2. Featured Sermon (Overlapping Card) */}
      <div className="relative z-20 -mt-60 md:-mt-70 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border/50 flex flex-col lg:flex-row group">
          {/* Thumbnail / Video Area */}
          <div className="lg:w-3/5 relative min-h-[300px] lg:min-h-[450px] bg-gray-900 overflow-hidden">
            {/* Placeholder for Video/Image */}
            <div className="absolute inset-0 bg-[url('/sermon-placeholder.jpg')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-secondary group-hover:border-secondary transition-all duration-300 shadow-lg">
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </div>

            <div className="absolute top-6 left-6">
              <Badge className="bg-secondary text-primary hover:bg-secondary-accent border-none px-3 py-1 text-sm font-bold uppercase tracking-wider shadow-lg">
                Latest Message
              </Badge>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Play className="w-40 h-40" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-widest">
                <Calendar className="w-4 h-4" />
                {featuredSermon.date}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary leading-tight">
                {featuredSermon.title}
              </h2>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  {/* Preacher Avatar Placeholder */}
                </div>
                <div>
                  <p className="font-bold text-primary">{featuredSermon.preacher}</p>
                  <p className="text-xs text-muted-foreground">Senior Pastor</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Discover the keys to unlocking your spiritual potential and walking in the fullness of God's promises for your life.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white h-12">
                  <Play className="w-4 h-4 mr-2" /> Watch Now
                </Button>
                <Button variant="outline" className="flex-1 border-primary/20 text-primary hover:bg-primary/5 h-12">
                  <Headphones className="w-4 h-4 mr-2" /> Listen
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 text-muted-foreground hover:text-secondary">
                  <Download className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 text-muted-foreground hover:text-secondary">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="relative">
        {/* 3. Filters & Sorting (Sticky) */}
        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

              {/* Category Pills */}
              <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border",
                      selectedCategory === cat
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-transparent text-muted-foreground border-transparent hover:bg-gray-100"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search & Dropdowns */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search sermons..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9 bg-gray-50 border-transparent focus:bg-white transition-all rounded-full"
                  />
                </div>

                <Select value={selectedPreacher} onValueChange={setSelectedPreacher}>
                  <SelectTrigger className="w-[140px] rounded-full border-transparent bg-gray-50 hover:bg-white">
                    <SelectValue placeholder="Preacher" />
                  </SelectTrigger>
                  <SelectContent>
                    {preachers.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                  </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-[100px] rounded-full border-transparent bg-gray-50 hover:bg-white">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Sermon Grid (Main Library) */}
        <div className="py-16 md:py-24 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon) => (
                <div key={sermon.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col h-full hover:-translate-y-1">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors z-10" />
                    {/* Image would go here */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        <Play className="w-6 h-6 fill-current" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm border-none text-white hover:bg-black/70">
                      {sermon.duration}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">{sermon.category || 'General'}</span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Eye className="w-3 h-3 mr-1" /> {sermon.views || '1.2k'}
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {sermon.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <User className="w-3 h-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{sermon.preacher}</span>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> {sermon.date}
                      </span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                          <Headphones className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More / Pagination */}
            <div className="mt-16 text-center">
              <Button variant="outline" size="lg" className="min-w-[200px] border-primary/20 text-primary hover:bg-primary hover:text-white">
                Load More Sermons
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sermon Series Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">Sermon Series</h2>
              <p className="text-muted-foreground">Journey through specific themes and books of the Bible.</p>
            </div>
            <Button variant="link" className="text-secondary font-bold hover:text-secondary-accent hidden md:flex">
              View All Series <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sermonSeries.map((series, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/70 transition-colors z-10" />
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gray-800" />

                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <Badge className="self-start bg-secondary text-primary border-none mb-3">
                    {series.count}
                  </Badge>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {series.title}
                  </h3>
                  <div className="h-1 w-12 bg-white/50 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-secondary/20" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go Deeper?
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Join us in person this Sunday or subscribe to our podcast for weekly inspiration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary-accent h-14 px-8 text-lg font-bold shadow-[0_0_20px_rgba(212,165,55,0.3)]">
              Plan Your Visit
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg backdrop-blur-sm">
              Subscribe to Podcast
            </Button>
          </div>
        </div>
      </section>

    </div >
  )
}
