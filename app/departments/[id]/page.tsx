'use client'

import { mockDepartments } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'

export default function DepartmentDetail({ params }: { params: { id: string } }) {
  const dept = mockDepartments.find((d) => d.id === params.id) || mockDepartments[0]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <section className="relative w-full aspect-video bg-muted">
        <img
          src={dept.image || '/placeholder.svg'}
          alt={dept.name}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6 gap-2">
            <Link href="/departments">
              <ArrowLeft size={18} />
              Back to Departments
            </Link>
          </Button>

          {/* Header */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            {dept.name}
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {dept.description}
          </p>

          {/* Contact Card */}
          <div className="bg-muted rounded-lg p-6 md:p-8 mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Department Leader
            </h3>
            <p className="text-lg font-semibold text-primary mb-6">{dept.leader}</p>
            <Button className="gap-2" asChild>
              <a href={`mailto:${dept.contact_email}`}>
                <Mail size={18} />
                Contact Department
              </a>
            </Button>
          </div>

          {/* About Section */}
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              About This Ministry
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our {dept.name} is dedicated to serving the church with excellence and passion.
              We believe that every member has a role to play in God's kingdom, and we are
              committed to helping people find their place in ministry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you're interested in joining our team or learning more about what we do,
              please don't hesitate to reach out. We'd love to have you serve with us!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
