'use client'

import { mockNews } from '@/lib/api'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NewsDetail({ params }: { params: { id: string } }) {
  const article = mockNews.find((a) => a.id === params.id) || mockNews[0]

  return (
    <div className="min-h-screen bg-background">
      {/* Featured Image */}
      <section className="relative w-full aspect-video bg-muted">
        <img
          src={article.featured_image || '/placeholder.svg'}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6 gap-2">
            <Link href="/news">
              <ArrowLeft size={18} />
              Back to News
            </Link>
          </Button>

          {/* Meta */}
          <div className="mb-8 pb-8 border-b border-border">
            <div className="text-sm text-muted-foreground mb-4">
              {new Date(article.date).toLocaleDateString()} • By {article.author}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              {article.title}
            </h1>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p>{article.content}</p>
            <p>
              This announcement is part of our ongoing efforts to keep our church community
              informed and engaged. For more information, please visit our contact page or
              speak with a member of our leadership team during service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
