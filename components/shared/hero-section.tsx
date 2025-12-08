'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Volume2, VolumeX, ChevronDown, MapPin, Play, Heart, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import GivingModal from './giving-modal'

export default function HeroSection() {
    const [greeting, setGreeting] = useState('')
    const [isMuted, setIsMuted] = useState(true)
    const [scrollY, setScrollY] = useState(0)
    const [scriptureIndex, setScriptureIndex] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)
    const audioRef = useRef<HTMLAudioElement>(null)

    const scriptures = [
        { text: "Do not be conformed to this world, but be transformed by the renewal of your mind.", ref: "Romans 12:2" },
        { text: "For I know the plans I have for you, declares the Lord...", ref: "Jeremiah 29:11" },
        { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" }
    ]

    useEffect(() => {
        // Time-based greeting
        const hour = new Date().getHours()
        if (hour < 12) setGreeting('Good Morning')
        else if (hour < 18) setGreeting('Good Afternoon')
        else setGreeting('Good Evening')

        // Scroll listener for parallax
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)

        // Scripture rotator
        const interval = setInterval(() => {
            setScriptureIndex(prev => (prev + 1) % scriptures.length)
        }, 8000)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearInterval(interval)
        }
    }, [])

    const toggleSound = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play().catch(e => console.log("Audio play failed", e))
                audioRef.current.volume = 0.3
            } else {
                audioRef.current.pause()
            }
            setIsMuted(!isMuted)
        }
    }

    // Smart CTA Logic (Mock: Sunday morning shows Livestream, otherwise Plan a Visit)
    const isSundayMorning = new Date().getDay() === 0 && new Date().getHours() < 13
    // const isSundayMorning = true;

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Video with Parallax */}
            <div
                className="absolute inset-0 z-0"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-70 scale-105"
                    poster="/IMG2.jpg"
                >
                    <source src="/Prophetic_Declarations_001.mp4" type="video/mp4" />
                </video>
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/60 to-primary/70" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Floating Scripture Overlay */}
            <div className="absolute top-3/4 right-10 md:right-20 z-10 max-w-xs text-right hidden lg:block opacity-70">
                <div key={scriptureIndex} className="animate-in fade-in slide-in-from-right-4 duration-1000">
                    <p className="font-serif text-md text-white/80 italic leading-relaxed">
                        "{scriptures[scriptureIndex].text}"
                    </p>
                    <p className="text-xs text-brand-gold mt-2 font-medium tracking-widest">
                        {scriptures[scriptureIndex].ref}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">

                {/* Time-based Greeting */}
                {/* <div className="animate-in fade-in slide-in-from-top-4 duration-1000 delay-100 mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-light-gold text-white backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
                        {greeting}, Welcome Home
                    </span>
                </div> */}

                {/* Main Title */}
                <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-serif text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl drop-shadow-2xl">
                    Citadel of <span className="bg-gradient-to-r from-[#EACDA3] via-secondary to-[#EACDA3] text-transparent bg-clip-text animate-text-gradient">Transformation</span>
                </h1>

                {/* Subheading */}
                <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 mt-6 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl font-light leading-relaxed text-balance">
                    A place where lives are renewed, faith is strengthened, and destinies are aligned with Christ.
                </p>

                {/* Location Line */}
                <div className="animate-in fade-in duration-1000 delay-500 mt-4 flex items-center gap-2 text-white/60 text-sm md:text-base">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>Assemblies of God Church – 222 Clifford Road, Aba</span>
                </div>

                {/* CTA Group */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 mt-10 flex flex-col w-full sm:w-auto sm:flex-row gap-4 sm:gap-6">

                    {/* Primary CTA */}
                    <Button
                        size="lg"
                        className="bg-secondary hover:bg-secondary-accent text-brand-navy font-bold text-base h-14 px-8 shadow-[0_0_20px_rgba(212,165,55,0.3)] hover:shadow-[0_0_30px_rgba(212,165,55,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                        asChild
                    >
                        <Link href={isSundayMorning ? "/" : "/sermon"}>
                            {isSundayMorning ? (
                                <>
                                    <Play className="h-5 w-5 fill-current" /> Watch Live
                                </>
                            ) : (
                                <>
                                    <Play className="h-5 w-8" /> Watch Sermon
                                </>
                            )}
                        </Link>
                    </Button>


                    {/* Secondary CTA 1 */}
                    
            <GivingModal>
                    <Button
                        size="lg"
                        variant="outline"
                        className="cursor-pointer border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary hover:text-white font-semibold text-base h-14 px-8 backdrop-blur-sm transition-all duration-300"
                        asChild
                    >
                        <span>
                            <Heart className="h-4 w-4" /> Give Now</span>
                    </Button>
            </GivingModal>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-between items-end px-6 md:px-12">

                {/* Sound Toggle */}
                <button
                    onClick={toggleSound}
                    className="group flex items-center gap-3 text-white/60 hover:text-secondary transition-colors duration-300"
                >
                    <div className="p-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md group-hover:border-secondary/50 transition-all">
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-medium uppercase tracking-widest hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        {isMuted ? 'Unmute Ambient' : 'Mute Ambient'}
                    </span>
                </button>

                {/* Scroll Indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-5 flex flex-col items-center gap-2 animate-bounce opacity-50">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Scroll</span>
                    <ChevronDown className="w-4 h-4 text-white" />
                </div>

                {/* Social / Extra (Placeholder for balance) */}
                <div className="hidden sm:block w-[100px] h-[20px] border border-white bg-black backdrop-blur-md"></div>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} loop src="/ambient-worship.mp3" />
        </section>
    )
}
