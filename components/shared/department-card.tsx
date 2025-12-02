import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface DepartmentCardProps {
  id: string
  name: string
  description: string
  leader: string
  image: string
}

export default function DepartmentCard({
  id,
  name,
  description,
  leader,
  image,
}: DepartmentCardProps) {
  return (
    <Link href={`/departments/${id}`}>
      <div className="group cursor-pointer h-full">
        <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-video">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <h3 className="font-serif text-xl font-bold text-primary mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-secondary font-semibold">Led by {leader}</p>
          <ArrowRight size={16} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </Link>
  )
}
