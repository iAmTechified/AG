'use client'

import Link from 'next/link'
import { mockMinisters } from '@/lib/api'

export default function MinistersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Leadership
          </h1>
          <p className="text-lg opacity-90">
            Meet the pastors and leaders guiding our church
          </p>
        </div>
      </section>

      {/* Ministers Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockMinisters.map((minister) => (
              <Link key={minister.id} href={`/ministers/${minister.id}`}>
                <div className="group cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-square">
                    <img
                      src={minister.image || '/placeholder.svg'}
                      alt={minister.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-1">
                    {minister.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-2">{minister.title}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {minister.bio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
