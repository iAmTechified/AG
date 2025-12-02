'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import NewsCard from '@/components/shared/news-card'
import { mockNews } from '@/lib/api'
import { Input } from '@/components/ui/input'

export default function NewsPage() {
  const [search, setSearch] = useState('')

  const filteredNews = useMemo(() => {
    return mockNews.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.content.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Church News
          </h1>
          <p className="text-lg opacity-90">
            Latest announcements and stories from our community
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <Input
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredNews.map((article) => (
                <NewsCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  excerpt={article.content}
                  date={article.date}
                  author={article.author}
                  image={article.featured_image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No news found. Try adjusting your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
