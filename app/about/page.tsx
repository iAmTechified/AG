'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  BookOpen,
  Heart,
  Shield,
  Star,
  Target,
  Flame,
  Globe,
  Award,
  ChevronRight,
  Quote,
  Play
} from 'lucide-react'
import ServiceTimes from '@/components/shared/service-times'
import GivingModal from '@/components/shared/giving-modal'
import { cn } from '@/lib/utils'

export default function AboutPage() {
  // Mock Data
  const beliefs = [
    { title: "The Authority of Scripture", desc: "We believe the Bible is the inspired, infallible, and authoritative Word of God, serving as our ultimate guide for faith and life.", ref: "2 Timothy 3:16" },
    { title: "The One True God", desc: "We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit.", ref: "Deuteronomy 6:4" },
    { title: "Salvation Through Christ", desc: "We believe that salvation is a free gift of God, received by grace through faith in Jesus Christ alone.", ref: "Ephesians 2:8-9" },
    { title: "The Holy Spirit", desc: "We believe in the present ministry of the Holy Spirit, who empowers believers for witness, service, and holy living.", ref: "Acts 1:8" },
    { title: "Divine Healing", desc: "We believe that divine healing is an integral part of the gospel and is provided for in the atonement of Christ.", ref: "Isaiah 53:5" },
    { title: "The Church", desc: "We believe the Church is the body of Christ, called to worship God, edify believers, and evangelize the world.", ref: "Ephesians 1:22-23" },
    { title: "The Blessed Hope", desc: "We believe in the resurrection of those who have fallen asleep in Christ and their translation together with those who are alive and remain unto the coming of the Lord.", ref: "1 Thessalonians 4:16-17" },
    { title: "The Millennial Reign", desc: "We believe in the revelation of the Lord Jesus Christ from heaven, the salvation of national Israel, and the Millennial reign of Christ on earth.", ref: "Revelation 20:1-7" },
  ]

  const leadership = [
    { name: "Rev. Dr. John Doe", title: "Senior Pastor", image: "/pastor-portrait.png", bio: "A visionary leader passionate about raising a generation of kingdom giants." },
    { name: "Pst. Mrs. Jane Doe", title: "Associate Pastor", image: "/pastor-portrait.png", bio: "Dedicated to prayer, counseling, and women's ministry." },
    { name: "Rev. Peter Smith", title: "Youth Pastor", image: "/pastor-portrait.png", bio: "Igniting the fire of revival in the hearts of young people." },
    { name: "Dcn. Paul Jones", title: "Head of Operations", image: "/pastor-portrait.png", bio: "Ensuring excellence in church administration and logistics." },
  ]

  const departments = [
    { title: "Men's Fellowship", icon: Shield, desc: "Building men of integrity and spiritual strength." },
    { title: "Women's Fellowship", icon: Heart, desc: "Empowering women to impact their homes and world." },
    { title: "Youth Ministry", icon: Flame, desc: "Raising a firebrand generation for Christ." },
    { title: "Children's Church", icon: Star, desc: "Nurturing the next generation in God's way." },
    { title: "Music Ministry", icon: Users, desc: "Leading the congregation in spirit-filled worship." },
    { title: "Evangelism", icon: Globe, desc: "Taking the gospel to the ends of the earth." },
  ]

  const testimonies = [
    { name: "Chidinma O.", text: "Since joining Citadel of Transformation, my spiritual life has taken a new turn. The word is powerful and practical!", role: "Member" },
    { name: "Emeka K.", text: "I found a family here. The love and support from the brethren helped me through my toughest times.", role: "Worker" },
    { name: "Sarah J.", text: "The worship atmosphere is electrifying! I always leave the service refreshed and blessed.", role: "Visitor" },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/70 to-primary/60 z-10" />
          {/* Placeholder for worship image */}
          <div className="absolute inset-0 bg-[url('/AG_Building.png')] bg-cover bg-center opacity-40 animate-pulse-slow" />
        </div>

        {/* Particles/Effects (Simulated with CSS) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full opacity-50 animate-float-slow" />
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white rounded-full opacity-30 animate-float-medium" />
        </div>

        <div className="relative z-20 text-left mt-20 mb-10 mx-auto w-[90%] p-20">
          <h1 className="font-serif text-7xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            About Us <br />
          </h1>
          <p className="text-md md:text-xl text-white/80 max-w-xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-light">
            A place where lives are molded, destinies are shaped, and the glory of God is revealed.
          </p>
          {/* CTA Group */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 mt-10 flex flex-col w-full sm:w-auto sm:flex-row gap-4 sm:gap-6">

            {/* Primary CTA */}
            <Button
              size="lg"
              variant="default"
              className="bg-secondary text-white hover:bg-secondary/10 hover:border hover:text-white font-semibold text-base h-14 px-8 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link href="#whoweare">
                Read more
              </Link>
            </Button>

            {/* Secondary CTA 1 */}
            {/* <Button
              size="lg"
              variant="outline"
              className="border-secondary/30 bg-white/5 text-white hover:bg-white/10 hover:border-white hover:text-secondary font-semibold text-base h-14 px-8 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link href="/sermons">
                <Play className="h-4 w-4" /> Watch Sermons
              </Link>
            </Button> */}
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-20 md:py-28" id="whoweare">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-widest">
                <Star className="w-4 h-4" /> Who We Are
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
                A Beacon of Hope & <span className="text-secondary">Transformation</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Assemblies of God Church, Citadel of Transformation, is more than just a building; we are a vibrant family of believers dedicated to experiencing God's presence and sharing His love. Located in the heart of Aba, we exist to raise kingdom giants who will impact their generation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: BookOpen, title: "Biblical Truth", desc: "Rooted in the unshakeable Word of God." },
                  { icon: Flame, title: "Spirit-Filled", desc: "Led and empowered by the Holy Spirit." },
                  { icon: Users, title: "Authentic Community", desc: "Doing life together in love and unity." },
                  { icon: Target, title: "Purpose Driven", desc: "Helping you discover and fulfill your destiny." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 relative shadow-2xl">
                {/* Placeholder for About Image */}
                <div className="absolute inset-0 bg-primary/10" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-serif text-4xl">
                  <img src="/AG_Building.png" alt="AGC 222 Building" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Decorative floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-secondary max-w-xs hidden md:block">
                <p className="font-serif text-xl font-bold text-primary mb-2">"Established in Grace"</p>
                <p className="text-sm text-muted-foreground">Serving the community with love and power for over 20 years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Vision */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Vision</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            "A transformed community where every individual experiences God's love, grows spiritually, and contributes to advancing God's kingdom."
          </p>
          <div className="mt-8 text-sm font-bold uppercase tracking-wider text-secondary">
            Habakkuk 2:14
          </div>
        </div>
      </section>

      {/* 4. Our Mission */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-muted-foreground">The mandate that drives everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Proclaim the Gospel", desc: "To boldly proclaim the saving message of Jesus Christ to our community and beyond.", icon: Globe },
              { title: "Make Disciples", desc: "To intentionally mentor and raise believers who are grounded in the Word and mature in faith.", icon: Users },
              { title: "Empower Believers", desc: "To equip every saint to live out their faith and walk in the power of the Holy Spirit.", icon: Flame },
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-2 border-secondary hover:-translate-y-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Beliefs */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-5xl font-bold mb-4">What We Believe</h2>
            <p className="text-white/70">The doctrinal foundation of our faith.</p>
          </div>

          <div className="flex flex-col space-y-6 w-full items-center">
            {beliefs.map((belief, idx) => (
              <div key={idx} className="max-w-2xl group flex flex-col md:flex-row items-center gap-9 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                {/* Icon/Number - Alternating */}
                <div className={cn("shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-serif text-2xl font-bold transition-colors",
                  idx % 2 === 0 ? "bg-white/10 text-white md:order-1" : "bg-secondary text-primary md:order-2"
                )}>
                  {idx + 1}
                </div>

                {/* Content */}
                <div className={cn("flex-grow text-center md:text-left", idx % 2 === 0 && "md:text-left md:order-1")}>
                  <h3 className="font-serif text-xl font-bold mb-2 text-white">{belief.title}</h3>
                  <p className="text-white/70 mb-2 leading-relaxed w-95">{belief.desc}</p>
                  <span className="text-secondary text-sm font-medium italic">{belief.ref}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Citadel Experience */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="aspect-[3/4] bg-secondary rounded-2xl shadow-lg overflow-hidden">
                  <img src="/IMG1.jpg" className='opacity-80 w-full h-full object-cover' alt="" /></div>
                  <div className="aspect-square bg-secondary rounded-2xl shadow-lg overflow-hidden">
                    <img src="/IMG7.jpg" className='opacity-80 w-full h-full object-cover' alt="" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square bg-secondary rounded-2xl shadow-lg overflow-hidden">
                    <img src="/IMG3.jpg" className='opacity-80 w-full h-full object-cover' alt="" />
                  </div>
                  <div className="aspect-[3/4] bg-secondary rounded-2xl shadow-lg overflow-hidden">
                  <img src="/IMG2.jpg" className='opacity-80 w-full h-full object-cover' alt="" /></div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                Experience the <br />
                <span className="text-secondary">Presence of God</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you step into the Citadel, you step into an atmosphere charged with faith, hope, and love. Our services are designed to help you encounter God in a personal way. From the soul-stirring worship to the life-transforming word, every moment is an opportunity for a miracle.
              </p>
              <div className="space-y-4">
                {[
                  "Dynamic Praise & Worship",
                  "Practical & Powerful Teaching",
                  "Warm & Welcoming Atmosphere",
                  "Ministry for All Ages"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Leadership Snapshot */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-2">Our Leadership</h2>
              <p className="text-muted-foreground">Meet the shepherds God has placed over this house.</p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              See Full Leadership Page <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-primary/5" />
                </div>
                <div className="p-6 relative bg-white z-10">
                  <h3 className="font-serif text-xl font-bold text-primary">{leader.name}</h3>
                  <p className="text-sm text-secondary font-bold uppercase tracking-wider mb-2">{leader.title}</p>
                </div>
                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-primary/95 p-6 flex flex-col justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-xs text-secondary uppercase tracking-wider mb-4">{leader.title}</p>
                  <p className="text-white/80 text-sm leading-relaxed">"{leader.bio}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Departments Snapshot */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Ministries & Departments</h2>
            <p className="text-muted-foreground">Find your place to serve and grow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <dept.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{dept.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{dept.desc}</p>
                <Link href="/departments" className="inline-flex items-center text-sm font-bold text-secondary hover:text-secondary-accent">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              Explore All Departments
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Impact & Testimonies */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary font-bold text-sm uppercase tracking-widest mb-6">
                <Heart className="w-4 h-4" /> Impact Stories
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Lives Transformed by Grace
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Every testimony is a testament to God's faithfulness. Read how God is moving in the lives of our members.
              </p>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Read More Testimonies
              </Button>
            </div>

            <div className="lg:w-2/3 w-full">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonies.map((testimony, idx) => (
                    <CarouselItem key={idx} className="md:basis-1/2 lg:basis-2/3 pl-6">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl h-full relative">
                        <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
                        <div className="flex items-center gap-1 mb-6 text-secondary">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-lg text-white/90 italic mb-6 leading-relaxed">"{testimony.text}"</p>
                        <div>
                          <h4 className="font-bold text-white">{testimony.name}</h4>
                          <p className="text-sm text-white/50">{testimony.role}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-4 pr-6">
                  <CarouselPrevious className="static translate-y-0 bg-white/10 border-none text-white hover:bg-white/20" />
                  <CarouselNext className="static translate-y-0 bg-white/10 border-none text-white hover:bg-white/20" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Visit Us (Reusing ServiceTimes logic but customized wrapper if needed, or just the component) */}
      <ServiceTimes />

      {/* 11. Final CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-secondary/20 via-white to-primary/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Become a Part of the Family
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            There is a place for you here. Whether you want to grow in your faith, serve the community, or find a home, we welcome you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 h-14 px-8 text-lg">
              Join Us This Sunday
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 h-14 px-8 text-lg">
              Watch Sermons
            </Button>
            <GivingModal>
              <Button size="lg" variant="secondary" className="bg-secondary text-primary hover:bg-secondary-accent h-14 px-8 text-lg">
                Give Online
              </Button>
            </GivingModal>
          </div>
        </div>
      </section>

    </div>
  )
}
