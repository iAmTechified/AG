'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ProgrammeDetail({ params }: { params: { id: string } }) {
  const programme = {
    id: params.id,
    title: 'Sunday Worship Service',
    date: '2025-11-16',
    time: '9:00 AM',
    location: 'Main Sanctuary',
    description: 'Main worship service with teaching and fellowship',
    details:
      'Join us for our main Sunday worship service where we gather as a community to worship God, hear powerful biblical teaching, and connect with our church family.',
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6 gap-2">
            <Link href="/programmes">
              <ArrowLeft size={18} />
              Back to Programmes
            </Link>
          </Button>

          {/* Header */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            {programme.title}
          </h1>

          {/* Details Card */}
          <div className="bg-muted rounded-lg p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 text-secondary font-semibold mb-2">
                  <Calendar size={20} />
                  Date
                </div>
                <p className="text-lg text-primary font-semibold">
                  {new Date(programme.date).toLocaleDateString()}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-secondary font-semibold mb-2">
                  <Clock size={20} />
                  Time
                </div>
                <p className="text-lg text-primary font-semibold">{programme.time}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-secondary font-semibold mb-2">
                  <MapPin size={20} />
                  Location
                </div>
                <p className="text-lg text-primary font-semibold">
                  {programme.location}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {programme.details}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a long-time member or visiting for the first time, we welcome you
              to be part of our worship experience. Come as you are and experience the love and
              grace of our church family.
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Button size="lg">Get Directions</Button>
            <Button variant="outline" size="lg">
              Share Programme
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
