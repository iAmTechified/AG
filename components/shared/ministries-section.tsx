'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Heart, Zap, Baby, Music, BookOpen, HandHeart, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const ministries = [
    {
        title: "Men's Fellowship",
        subtitle: "Kings & Priests",
        description: "Empowering men to lead with integrity, serve with passion, and walk in their God-given authority.",
        icon: Shield,
        href: "/ministries/men",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "Women's Fellowship",
        subtitle: "Daughters of Zion",
        description: "A sisterhood of faith, prayer, and purpose, raising women who build their homes and impact their world.",
        icon: Heart,
        href: "/ministries/women",
        color: "text-pink-600",
        bg: "bg-pink-50"
    },
    {
        title: "Youth Church",
        subtitle: "Firebrand Generation",
        description: "A dynamic community for young people to discover their identity in Christ and unleash their potential.",
        icon: Zap,
        href: "/ministries/youth",
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        title: "Children's Church",
        subtitle: "Heritage of the Lord",
        description: "Nurturing the next generation with biblical truth in a fun, safe, and engaging environment.",
        icon: Baby,
        href: "/ministries/children",
        color: "text-green-600",
        bg: "bg-green-50"
    }
]

export default function MinistriesSection() {
    return (
        <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                        Connect & Grow
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Find your place, serve with purpose, and grow in community. There is a family for everyone.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {ministries.map((ministry, index) => (
                        <Link
                            key={ministry.title}
                            href={ministry.href}
                            className="group relative flex flex-col h-full"
                        >
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:border-brand-gold/30 group-hover:-translate-y-1" />

                            <div className="relative p-8 flex flex-col h-full z-10">
                                {/* Icon */}
                                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110", ministry.bg, ministry.color)}>
                                    <ministry.icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <div className="mb-4">
                                    <h3 className="font-serif text-xl font-bold text-brand-navy mb-1 group-hover:text-brand-gold transition-colors">
                                        {ministry.title}
                                    </h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
                                        {ministry.subtitle}
                                    </p>
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                    {ministry.description}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors mt-auto">
                                    Learn More
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Button asChild variant="outline" size="lg" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                        <Link href="/ministries">
                            View All Ministries
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
