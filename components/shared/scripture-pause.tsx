'use client'

export default function ScripturePause() {
    return (
        <section className="py-24 relative overflow-hidden bg-primary flex items-center justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-primary to-primary" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                        "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mb-6" />
                    <p className="text-brand-gold font-bold tracking-widest uppercase text-sm">
                        Jeremiah 29:11
                    </p>
                </div>
            </div>
        </section>
    )
}
