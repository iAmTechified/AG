'use client'

import { mockMinisters } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function MinisterDetail({ params }: { params: { id: string } }) {
  const minister = mockMinisters.find((m) => m.id === params.id) || mockMinisters[0]

  return (
    <div className="min-h-screen bg-background">
      {/* Image */}
      <section className="relative w-full aspect-square bg-muted max-h-96">
        <img
          src={minister.image || '/placeholder.svg'}
          alt={minister.name}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6 gap-2">
            <Link href="/ministers">
              <ArrowLeft size={18} />
              Back to Leadership
            </Link>
          </Button>

          {/* Info */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
            {minister.name}
          </h1>
          <p className="text-2xl text-secondary font-semibold mb-8">{minister.title}</p>

          {/* Bio */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {minister.bio}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {minister.name} is committed to pastoral care and spiritual growth of our
              congregation. When not in ministry, {minister.name} enjoys time with family and
              studying Scripture.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
