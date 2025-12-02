import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface NewsCardProps {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  image: string
}

export default function NewsCard({
  id,
  title,
  excerpt,
  date,
  author,
  image,
}: NewsCardProps) {
  return (
    <Link href={`/news/${id}`}>
      <div className="group cursor-pointer h-full flex flex-col">
        <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-video">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="text-xs text-secondary font-semibold mb-2">
            {new Date(date).toLocaleDateString()}
          </div>
          <h3 className="font-serif font-semibold text-lg text-primary line-clamp-2 mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
            {excerpt}
          </p>
          <div className="flex items-center gap-2 text-secondary text-sm font-semibold group-hover:gap-3 transition-all">
            Read More
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  )
}
