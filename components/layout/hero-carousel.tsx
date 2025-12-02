"use client";
import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const slides = [
  {
    id: "1",
    videoSrc: "/Prophetic_Declarations_001.mp4",
    poster: "/hero-cover.jpeg",
    title: "Citadel of Transformation",
    subtitle: "Spirit-filled worship, powerful teaching, and genuine community",
    buttons: [
      { text: "Give Now", href: "/giving" },
      { text: "Watch Sermon", href: "/sermons", variant: "outline" },
    ],
    textPosition: "text-center",
    overlay:
      "bg-gradient-to-t from-primary/80 via-primary/50 to-primary/20",
  },
  {
    id: "2",
    videoSrc: "/path/to/your/second-video.mp4", // Replace with your video
    poster: "/hero-cover.jpeg", // Replace with your poster
    title: "Experience the Joy of Community",
    subtitle: "Connect with us for a life-changing experience",
    buttons: [{ text: "Join a Department", href: "/departments" }],
    textPosition: "text-left",
    overlay:
      "bg-gradient-to-t from-primary/80 via-primary/50 to-primary/20",
  },
  {
    id: "3",
    videoSrc: "/path/to/your/third-video.mp4", // Replace with your video
    poster: "/hero-cover.jpeg", // Replace with your poster
    title: "Grow in Your Faith",
    subtitle: "Explore our resources and deepen your relationship with God",
    buttons: [
      { text: "Explore Resources", href: "/resources" },
      { text: "Latest News", href: "/news", variant: "outline" },
    ],
    textPosition: "text-right",
    overlay: 
      "bg-gradient-to-t from-primary/80 via-primary/50 to-primary/20",
  },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [current, setCurrent] = useState(0);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    const interval = setInterval(() => {
      if (isPlaying && api) {
        api.scrollNext();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api, isPlaying]);

  return (
    <div className="hero-carousel-container">
      <Carousel setApi={setApi} className="w-full h-screen overflow-hidden">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-full w-full">
                <video
                  autoPlay={isPlaying}
                  muted={isMuted}
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster={slide.poster}
                  src={slide.videoSrc}
                  key={slide.videoSrc}
                />
                <div
                  className={`absolute inset-0 ${slide.overlay} flex items-center`}
                >
                  <div
                    className={`z-10 w-full px-6 max-w-3xl mx-auto ${slide.textPosition} text-white`}
                  >
                    <div className="animate-fade-in space-y-6">
                      <h1 className="font-serif text-6xl md:text-7xl font-bold">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl opacity-90">
                        {slide.subtitle}
                      </p>
                      <div
                        className={`flex flex-col sm:flex-row gap-4 pt-8 ${
                          slide.textPosition === "text-center"
                            ? "justify-center"
                            : slide.textPosition === "text-left"
                            ? "justify-start"
                            : "justify-end"
                        }`}
                      >
                        {slide.buttons.map((button) => (
                          <Button
                            key={button.text}
                            size="lg"
                            variant={
                              button.variant === "outline"
                                ? "outline"
                                : "default"
                            }
                            className={`px-6 py-4 text-md font-semibold ${
                              button.variant === "outline"
                                ? "bg-white/0 border-white text-white hover:bg-white/10"
                                : "bg-secondary hover:bg-brand-gold-accent text-white"
                            }`}
                            asChild
                          >
                            <Link href={button.href}>{button.text}</Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="carousel-controls">
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === current ? "active" : ""}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
        <div className="control-buttons">
          <Button variant="ghost" size="icon" onClick={togglePlay}>
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={scrollPrev}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={scrollNext}>
            <ArrowRight className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMute}>
            {isMuted ? (
              <VolumeX className="h-6 w-6" />
            ) : (
              <Volume2 className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}