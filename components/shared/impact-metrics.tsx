'use client'

import { Users, Calendar, Heart, Globe } from 'lucide-react'

export default function ImpactMetrics() {
    const metrics = [
        { label: "Years of Grace", value: "20+", icon: Calendar },
        { label: "Active Members", value: "500+", icon: Users },
        { label: "Ministries", value: "50+", icon: Heart },
        { label: "Global Reach", value: "10+", icon: Globe },
    ]

    return (
        <section className="py-10 bg-primary text-white border-y border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-row items-center justify-center space-x-3 text-left group">
                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                                <metric.icon className="w-7 h-7 text-brand-gold" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-bold font-serif text-white group-hover:text-brand-gold transition-colors">
                                {metric.value}
                            </span>
                            <span className="text-xs text-white/60 uppercase tracking-wider font-medium">
                                {metric.label}
                            </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
