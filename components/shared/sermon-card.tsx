import Image from 'next/image'
import Link from 'next/link'
import { Play, Clock } from 'lucide-react'

interface SermonCardProps {
  id: string
  title: string
  preacher: string
  date: string
  duration: string
  image: string
}

export default function SermonCard({
  id,
  title,
  preacher,
  date,
  duration,
  image,
}: SermonCardProps) {
  return (
    <Link href={`/sermons/${id}`}>
      <div className="group cursor-pointer h-full">
        <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-video">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <Play size={40} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <h3 className="font-serif font-semibold text-lg text-primary line-clamp-2 mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{preacher}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{new Date(date).toLocaleDateString()}</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {duration}
          </div>
        </div>
      </div>
    </Link>
  )
}
