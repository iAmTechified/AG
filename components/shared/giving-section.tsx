'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
    Heart,
    ShieldCheck,
    CreditCard,
    Smartphone,
    QrCode,
    ArrowRight,
    CheckCircle2,
    Lock,
    Gift,
    Building,
    HelpingHand
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function GivingSection() {
    const [amount, setAmount] = useState<string>('')
    const [category, setCategory] = useState<string>('tithe')
    const [frequency, setFrequency] = useState<string>('one-time')
    const [customAmount, setCustomAmount] = useState<string>('')

    const presets = [
        { value: '1000', label: '₦1,000' },
        { value: '5000', label: '₦5,000' },
        { value: '10000', label: '₦10,000' },
        { value: '20000', label: '₦20,000' },
    ]

    const categories = [
        { id: 'tithe', label: 'Tithe', icon: CreditCard },
        { id: 'offering', label: 'Offering', icon: Gift },
        { id: 'seed', label: 'Seed Faith', icon: Heart },
        { id: 'project', label: 'Project Fund', icon: Building },
        { id: 'welfare', label: 'Welfare', icon: HelpingHand },
    ]

    const handlePresetClick = (val: string) => {
        setAmount(val)
        setCustomAmount('')
    }

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value)
        setAmount(e.target.value)
    }

    return (
        <section className="relative py-20 md:py-24 bg-gradient-to-b from-white via-brand-light-gold/10 to-white overflow-hidden">
            {/* Watermark */}
            <div className="absolute bottom-0 left-0 text-[10rem] md:text-[15rem] font-serif font-bold text-brand-gold/5 pointer-events-none select-none z-0 whitespace-nowrap leading-none">
                Luke 6:38
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                        Give. Sow. Worship.
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Your seed is a spiritual weapon, a covenant act of faith, and a channel for the Gospel.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Side: Spiritual Context */}
                    <div className="space-y-10">
                        <div className="prose prose-lg text-muted-foreground">
                            <p className="leading-relaxed">
                                Giving is more than a transaction; it is an act of worship. When we give, we align ourselves with God's generosity and participate in the expansion of His Kingdom. Every seed sown in faith has a harvest attached to it.
                            </p>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-full bg-green-100 text-green-600">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy text-sm">Secure Payment</h4>
                                    <p className="text-xs text-muted-foreground">256-bit SSL Encryption</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy text-sm">Transparent</h4>
                                    <p className="text-xs text-muted-foreground">Verified Church Accounts</p>
                                </div>
                            </div>
                        </div>

                        {/* Category Filter Pills (Visual Selection) */}
                        <div className="space-y-4">
                            <Label className="text-brand-navy font-bold uppercase tracking-wider text-xs">Select Giving Category</Label>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setCategory(cat.id)}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                            category === cat.id
                                                ? "bg-brand-navy text-white border-brand-navy shadow-md transform scale-105"
                                                : "bg-white text-muted-foreground border-border hover:border-brand-gold hover:text-brand-navy"
                                        )}
                                    >
                                        <cat.icon className="w-4 h-4" />
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Testimony Link */}
                        <div className="pt-4">
                            <Link href="/testimonies" className="inline-flex items-center text-brand-gold font-semibold hover:text-brand-gold-accent transition-colors group">
                                Share a Testimony of God's Faithfulness
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Donation Interaction Box */}
                    <div className="bg-white rounded-3xl shadow-xl border border-border/50 p-6 md:p-8 relative overflow-hidden">
                        {/* Holy Glow Animation */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-brand-light-gold to-brand-gold animate-text-gradient"></div>

                        <div className="space-y-6">

                            {/* Frequency Tabs */}
                            <Tabs defaultValue="one-time" onValueChange={setFrequency} className="w-full">
                                <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1 rounded-xl">
                                    <TabsTrigger value="one-time" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow-sm">One-Time</TabsTrigger>
                                    <TabsTrigger value="weekly" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow-sm">Weekly</TabsTrigger>
                                    <TabsTrigger value="monthly" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow-sm">Monthly</TabsTrigger>
                                </TabsList>
                            </Tabs>

                            {/* Amount Presets */}
                            <div className="space-y-3">
                                <Label className="text-sm font-medium text-muted-foreground">Choose Amount</Label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {presets.map((preset) => (
                                        <button
                                            key={preset.value}
                                            onClick={() => handlePresetClick(preset.value)}
                                            className={cn(
                                                "py-3 px-2 rounded-xl text-sm font-bold border-2 transition-all duration-200",
                                                amount === preset.value && customAmount === ''
                                                    ? "border-brand-gold bg-brand-gold/5 text-brand-navy"
                                                    : "border-transparent bg-muted/50 text-muted-foreground hover:bg-muted hover:border-muted-foreground/20"
                                            )}
                                        >
                                            {preset.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Custom Amount Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-muted-foreground font-semibold">₦</span>
                                </div>
                                <Input
                                    type="number"
                                    placeholder="Enter custom amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="pl-8 h-12 text-lg font-semibold border-border/50 focus-visible:ring-brand-gold"
                                />
                            </div>

                            {/* Note Input */}
                            <Input
                                placeholder="Add a note (optional)"
                                className="bg-muted/30 border-transparent focus-visible:bg-white focus-visible:border-brand-gold transition-all"
                            />

                            {/* Payment Methods (Mock) */}
                            <div className="flex gap-3 justify-center py-2 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-1 text-xs font-bold border px-2 py-1 rounded">
                                    <CreditCard className="w-3 h-3" /> Card
                                </div>
                                <div className="flex items-center gap-1 text-xs font-bold border px-2 py-1 rounded">
                                    <Smartphone className="w-3 h-3" /> Transfer
                                </div>
                                <div className="flex items-center gap-1 text-xs font-bold border px-2 py-1 rounded">
                                    <span className="font-serif">Pay</span> Apple
                                </div>
                            </div>

                            {/* Primary CTA */}
                            <Button size="lg" className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white h-14 text-lg font-bold shadow-lg shadow-brand-navy/20 transition-all hover:-translate-y-0.5">
                                Give Safely Online
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            {/* Secondary Actions */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                                <button className="flex items-center hover:text-brand-navy transition-colors">
                                    <QrCode className="w-4 h-4 mr-1" /> Scan QR Code
                                </button>
                                <button className="hover:text-brand-navy transition-colors underline underline-offset-2">
                                    View Account Details
                                </button>
                            </div>

                            {/* Security Note */}
                            <div className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground/60 bg-muted/30 py-2 rounded-lg mt-4">
                                <Lock className="w-3 h-3" />
                                <span>Secure SSL Encrypted Transaction</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
