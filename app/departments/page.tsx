'use client'

import Link from 'next/link'
import { mockDepartments } from '@/lib/api'

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Departments
          </h1>
          <p className="text-lg opacity-90">
            Meet our ministry teams dedicated to serving the body of Christ
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockDepartments.map((dept) => (
              <Link key={dept.id} href={`/departments/${dept.id}`}>
                <div className="group cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-video">
                    <img
                      src={dept.image || '/placeholder.svg'}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {dept.description}
                  </p>
                  <p className="text-sm text-secondary font-semibold">
                    Led by {dept.leader}
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
