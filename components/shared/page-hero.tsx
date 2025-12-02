import { cn } from '@/lib/utils'

interface PageHeroProps {
    title: string
    subtitle?: string
    className?: string
    backgroundImage?: string
}

export default function PageHero({ title, subtitle, className, backgroundImage }: PageHeroProps) {
    return (
        <section className={cn("relative bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-24 overflow-hidden", className)}>
            {/* Optional Background Image Overlay */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left mt-20">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute top-0 left-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </section>
    )
}
