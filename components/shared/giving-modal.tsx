'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    CreditCard,
    Smartphone,
    QrCode,
    ArrowRight,
    Lock,
    Gift,
    Heart,
    Building,
    HelpingHand,
    Sprout,
    Coins
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface GivingModalProps {
    children: React.ReactNode
}

export default function GivingModal({ children }: GivingModalProps) {
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
        { id: 'donation', label: 'Donation', icon: Heart },
        { id: 'tithe', label: 'Tithe', icon: Coins },
        { id: 'offering', label: 'Offering', icon: Gift },
        { id: 'seed', label: 'Seed Sowing', icon: Sprout },
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
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white border-none shadow-2xl h-[calc(100vh-4rem)] pr-1 py-2">
                {/* Holy Glow Animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-brand-light-gold to-brand-gold animate-text-gradient z-10"></div>

                <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="font-serif text-2xl font-bold text-brand-navy text-center">
                        Give Online
                    </DialogTitle>
                    <p className="text-center text-muted-foreground text-sm">
                        "God loves a cheerful giver." — 2 Cor 9:7
                    </p>
                </DialogHeader>


                <div className="overflow-y-scroll">
                    <div className="p-6 pt-2 space-y-6">

                        {/* Giving Type Cards */}
                        <div className="grid grid-cols-3 gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setCategory(cat.id)}
                                    className={cn(
                                        "flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-200 hover:shadow-md",
                                        category === cat.id
                                            ? "bg-primary text-white border-primary shadow-md"
                                            : "bg-white text-muted-foreground border-border hover:border-secondary hover:text-primary"
                                    )}
                                >
                                    <cat.icon className={cn("w-6 h-6", category === cat.id ? "text-secondary" : "text-current")} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-center">{cat.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Category Selection */}
                        {/* <div className="space-y-3">
                            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</Label>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setCategory(cat.id)}
                                        className={cn(
                                            "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
                                            category === cat.id
                                                ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                                                : "bg-white text-muted-foreground border-border hover:border-brand-gold hover:text-brand-navy"
                                        )}
                                    >
                                        <cat.icon className="w-3 h-3" />
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div> */}

                        {/* Amount Presets */}
                        <div className="space-y-3">
                            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Amount</Label>
                            <div className="grid grid-cols-4 gap-2">
                                {presets.map((preset) => (
                                    <button
                                        key={preset.value}
                                        onClick={() => handlePresetClick(preset.value)}
                                        className={cn(
                                            "py-2 px-1 rounded-lg text-xs font-bold border transition-all duration-200",
                                            amount === preset.value && customAmount === ''
                                                ? "border-brand-gold bg-brand-gold/10 text-brand-navy"
                                                : "border-border bg-white text-muted-foreground hover:border-brand-gold/50"
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
                                className="pl-8 h-12 text-lg font-semibold border-border focus-visible:ring-brand-gold"
                            />
                        </div>

                        {/* Primary CTA */}
                        <Button size="lg" className="w-full bg-primary border border-primary hover:bg-primary/90 text-white h-12 text-base font-bold shadow-lg shadow-brand-navy/20 transition-all hover:-translate-y-0.5">
                            Give
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>

                        {/* Payment Methods (Mock) */}
                        <div className="flex gap-3 justify-center py-1 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-1 text-[10px] font-bold border px-2 py-1 rounded bg-gray-50">
                                <CreditCard className="w-3 h-3" /> Card
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-bold border px-2 py-1 rounded bg-gray-50">
                                <Smartphone className="w-3 h-3" /> Transfer
                            </div>
                        </div>

                        {/* Security Note */}
                        <div className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground/60 bg-muted/30 py-2 rounded-lg">
                            <Lock className="w-3 h-3" />
                            <span>Secure SSL Encrypted Transaction</span>
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
