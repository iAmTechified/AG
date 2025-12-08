'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Play, Pause, Globe, ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PastoralGreeting() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [language, setLanguage] = useState('English')
    const [feedbackGiven, setFeedbackGiven] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleFeedback = (isFirstTime: boolean) => {
        setFeedbackGiven(true)
        // In a real app, you would send this data to your backend
        console.log('First time visitor:', isFirstTime)
    }

    const languages = ['English', 'Yoruba', 'Igbo', 'Hausa']

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-primary/5">
            {/* Floating Scripture Watermark */}
            {/* <div className="absolute top-10 left-1/2 md:left-1/4 text-9xl font-serif font-bold text-primary/5 pointer-events-none select-none z-0 whitespace-nowrap animate-in fade-in zoom-in duration-1000">
                Psalm 122:1
            </div> */}

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

                    {/* Left Side: Pastor's Portrait */}
                    <div className="relative group mx-auto lg:mx-0 max-w-lg w-full">
                        {/* Background Glow/Halo */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/20 to-primary/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

                        {/* Image Container */}
                        <div className="bg-secondary relative aspect-[6/7] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform transition-transform duration-700 group-hover:scale-[1.02]">
                            <Image
                                src="/IMG5.jpg"
                                alt="Pastor Greeting"
                                fill
                                className="object-cover object-top opacity-88"
                                priority
                            />

                            {/* Hover Overlay with Scripture */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                                <div className="bg-secondary/70 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="font-serif text-primary font-medium italic">
                                        "I was glad when they said unto me..."
                                    </p>
                                    <p className="text-xs text-left text-muted-foreground mt-1">Psalm 122:1</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="space-y-8 text-center lg:text-left animate-in slide-in-from-right fade-in duration-1000 delay-200">

                        {/* Header with Language & Audio */}
                        {/* <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-between gap-4 mb-6"> */}
                            {/* <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                                    Welcome Home
                                </span>
                            </div> */}

                            {/* <div className="flex items-center gap-3"> */}
                                {/* Language Dropdown */}
                                {/* <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className="h-8 gap-2 text-muted-foreground hover:text-primary">
                                            <Globe className="w-4 h-4" />
                                            {language}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        {languages.map((lang) => (
                                            <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)}>
                                                {lang}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu> */}

                                {/* Audio Player */}
                                {/* <Button
                                    variant="outline"
                                    size="sm"
                                    className={cn(
                                        "h-8 gap-2 transition-all duration-300",
                                        isPlaying ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground hover:text-primary"
                                    )}
                                    onClick={toggleAudio}
                                >
                                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                                    <span className="text-xs">{isPlaying ? 'Playing...' : 'Play Greeting'}</span>
                                </Button>
                                <audio ref={audioRef} src="/greeting-audio.mp3" onEnded={() => setIsPlaying(false)} className="hidden" />
                            </div>
                        </div> */}

                        {/* Main Greeting Text */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                                Welcome to <br />
                                <span className="text-brand-gold-accent">Assemblies of God,</span> <br />
                                Clifford Road
                            </h2>

                            <div className="prose prose-lg text-muted-foreground mx-auto lg:mx-0">
                                <p className="leading-relaxed">
                                    “We’re honoured to have you here. Whether this is your first time visiting or you’re returning home, we pray this space fills your heart with hope, faith, and clarity. Our desire is simple: to help you grow deeper in Christ and discover the purpose He has placed inside you.”
                                </p>
                            </div>

                            {/* <div className="pt-2">
                                <p className="font-serif text-xl text-primary font-medium">
                                    — Rev. Dr. Solomon Alor
                                </p>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">
                                    Senior Pastor
                                </p>
                            </div> */}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-w-[160px] h-12 text-base shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                                <Link href="/about">Learn About Us</Link>
                            </Button>
                            {/* <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 text-primary min-w-[160px] h-12 text-base group">
                                <Link href="/leadership" className="flex items-center gap-2">
                                    Meet Leadership
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button> */}
                        </div>

                        {/* Additional Links */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground pt-4">
                            <Link href="/visit" className="hover:text-primary transition-colors hover:underline underline-offset-4">
                                Plan a Visit
                            </Link>
                            <span className="text-border">•</span>
                            <Link href="/sermons/latest" className="hover:text-primary transition-colors hover:underline underline-offset-4">
                                Watch Latest Sermon
                            </Link>
                        </div>

                        {/* Micro-Feedback */}
                        {!feedbackGiven ? (
                            <div className="mt-8 pt-8 border-t border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                                <p className="text-sm text-muted-foreground mb-3">Is this your first time visiting online?</p>
                                <div className="flex gap-3 justify-center lg:justify-start">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleFeedback(true)}
                                        className="h-8 px-4 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                                    >
                                        Yes
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleFeedback(false)}
                                        className="h-8 px-4 hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
                                    >
                                        No
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-8 pt-8 border-t border-border/50 animate-in zoom-in fade-in duration-500">
                                <div className="flex items-center gap-2 text-green-600 justify-center lg:justify-start">
                                    <Check className="w-4 h-4" />
                                    <span className="text-sm font-medium">Thank you for connecting with us!</span>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}
