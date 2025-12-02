'use client'

import { Flame, BookOpen, Users, Target } from 'lucide-react'

export default function WhyJoinUs() {
    const features = [
        {
            icon: Flame,
            title: "Spirit-Filled Worship",
            desc: "Experience an atmosphere charged with the presence of God, where worship is not just a song, but a lifestyle."
        },
        {
            icon: BookOpen,
            title: "Sound Biblical Teaching",
            desc: "Grow in grace and knowledge through practical, life-transforming exposition of the Word of God."
        },
        {
            icon: Users,
            title: "Authentic Community",
            desc: "Find a family that loves, supports, and encourages you. We believe in doing life together."
        },
        {
            icon: Target,
            title: "Purpose & Destiny",
            desc: "Discover your God-given potential and find your place of service in the Kingdom."
        }
    ]

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                        The Citadel Experience
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Why you should make this your home church.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-brand-navy mb-3 group-hover:text-primary">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
