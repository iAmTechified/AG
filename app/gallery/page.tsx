'use client'

import { useState, useMemo } from 'react'
import { X } from 'lucide-react'

interface GalleryImage {
  id: string
  url: string
  title: string
  category: string
  date: string
}

const mockGalleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://placeholder.svg?height=400&width=600&query=worship-1',
    title: 'Sunday Worship Service',
    category: 'Worship',
    date: '2025-11-10',
  },
  {
    id: '2',
    url: 'https://placeholder.svg?height=400&width=600&query=youth-1',
    title: 'Youth Outreach Program',
    category: 'Youth',
    date: '2025-11-08',
  },
  {
    id: '3',
    url: 'https://placeholder.svg?height=400&width=600&query=prayer-1',
    title: 'Prayer Meeting',
    category: 'Prayer',
    date: '2025-11-05',
  },
  {
    id: '4',
    url: 'https://placeholder.svg?height=400&width=600&query=fellowship-1',
    title: 'Fellowship Dinner',
    category: 'Events',
    date: '2025-11-01',
  },
  {
    id: '5',
    url: 'https://placeholder.svg?height=400&width=600&query=ministry-1',
    title: 'Ministry Training',
    category: 'Ministry',
    date: '2025-10-28',
  },
  {
    id: '6',
    url: 'https://placeholder.svg?height=400&width=600&query=outreach-1',
    title: 'Community Outreach',
    category: 'Outreach',
    date: '2025-10-25',
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    ...new Set(mockGalleryImages.map((img) => img.category)),
  ]

  const filteredImages = useMemo(
    () =>
      selectedCategory === 'All'
        ? mockGalleryImages
        : mockGalleryImages.filter((img) => img.category === selectedCategory),
    [selectedCategory]
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg opacity-90">
            Moments from our church community
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-lg aspect-video bg-muted cursor-pointer"
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-start p-4">
                  <h3 className="font-semibold text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-secondary transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.url || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white">
              <h3 className="font-serif text-xl font-bold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm opacity-75">
                {selectedImage.category} • {new Date(selectedImage.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
