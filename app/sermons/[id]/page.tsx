'use client'

import { mockSermons } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Download, Share2, Play } from 'lucide-react'
import Link from 'next/link'

export default function SermonDetail({ params }: { params: { id: string } }) {
  const sermon = mockSermons.find((s) => s.id === params.id) || mockSermons[0]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with Video */}
      <section className="relative w-full aspect-video bg-black">
        <img
          src={sermon.video_url || '/placeholder.svg'}
          alt={sermon.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors">
          <button className="bg-secondary hover:bg-brand-gold-accent text-primary rounded-full p-4 transition-transform hover:scale-110">
            <Play size={32} fill="currentColor" />
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta Info */}
          <div className="mb-8 pb-8 border-b border-border">
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <span>{new Date(sermon.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{sermon.duration}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              {sermon.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              By <span className="text-primary font-semibold">{sermon.preacher}</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button className="gap-2">
                <Play size={18} />
                Watch
              </Button>
              <Button variant="outline" className="gap-2">
                <Download size={18} />
                Download Audio
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 size={18} />
                Share
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              About This Message
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {sermon.description} This powerful sermon challenges us to deepen our walk with
              God and embrace the transformative power of the Holy Spirit. Join us as we explore
              biblical truths that will strengthen your faith and deepen your understanding of
              God's purpose for your life.
            </p>
          </div>

          {/* Speaker Bio */}
          <div className="bg-muted rounded-lg p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-3">
              About the Speaker
            </h3>
            <p className="text-muted-foreground mb-4">
              {sermon.preacher} is a dedicated pastor and teacher with years of experience
              in ministry. He brings passion, insight, and biblical wisdom to every message,
              helping believers grow in their relationship with God.
            </p>
          </div>
        </div>
      </section>

      {/* Related Sermons */}
      <section className="py-12 md:py-16 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">More Sermons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockSermons.slice(0, 3).map((relatedSermon) => (
              <Link
                key={relatedSermon.id}
                href={`/sermons/${relatedSermon.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden card-shadow">
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <img
                      src={relatedSermon.video_url || '/placeholder.svg'}
                      alt={relatedSermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-primary mb-2 line-clamp-2">
                      {relatedSermon.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {relatedSermon.preacher}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
