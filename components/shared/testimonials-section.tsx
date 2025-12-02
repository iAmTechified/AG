'use client'

import { Quote, Star } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function TestimonialsSection() {
    const testimonials = [
        {
            text: "I walked in broken and without hope, but the love I received here restored my faith. This church is truly a family.",
            author: "Sarah J.",
            role: "Member since 2019"
        },
        {
            text: "The teaching is practical and powerful. I've grown more in the last year than I have in my entire Christian walk.",
            author: "Michael O.",
            role: "Worker"
        },
        {
            text: "The youth ministry has been a blessing to my children. They are excited about God and serving in the church.",
            author: "Mrs. Grace P.",
            role: "Parent"
        }
    ]

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
                        Stories of Transformation
                    </h2>
                    <p className="text-muted-foreground">
                        Real people, real stories, real impact.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {testimonials.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                                    <div className="p-1">
                                        <div className="flex flex-col items-center text-center p-8 md:p-12 bg-white rounded-3xl shadow-sm border border-border/50 relative">
                                            <Quote className="w-12 h-12 text-brand-gold/20 absolute top-8 left-8" />

                                            <div className="flex gap-1 mb-6 text-brand-gold">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <Star key={s} className="w-5 h-5 fill-current" />
                                                ))}
                                            </div>

                                            <blockquote className="text-xl md:text-2xl font-serif text-brand-navy leading-relaxed mb-8 max-w-2xl">
                                                "{item.text}"
                                            </blockquote>

                                            <div className="mt-auto">
                                                <cite className="not-italic font-bold text-lg text-brand-navy block">
                                                    {item.author}
                                                </cite>
                                                <span className="text-sm text-muted-foreground">
                                                    {item.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-12 border-brand-navy/10 hover:bg-brand-navy hover:text-white" />
                            <CarouselNext className="-right-12 border-brand-navy/10 hover:bg-brand-navy hover:text-white" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
