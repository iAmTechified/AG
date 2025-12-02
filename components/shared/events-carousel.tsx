"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const upcomingEvents = [
  {
    id: "1",
    title: "Sunday Worship Service",
    date: "2025-11-16",
    time: "9:00 AM",
    location: "Main Sanctuary",
    image: "/placeholder.jpg",
  },
  {
    id: "2",
    title: "Mid-week Prayer",
    date: "2025-11-19",
    time: "7:00 PM",
    location: "Prayer Hall",
    image: "/placeholder.jpg",
  },
  {
    id: "3",
    title: "Youth Fellowship",
    date: "2025-11-23",
    time: "5:00 PM",
    location: "Youth Center",
    image: "/placeholder.jpg",
  },
  {
    id: "4",
    title: "Sunday Worship Service",
    date: "2025-11-30",
    time: "9:00 AM",
    location: "Main Sanctuary",
    image: "/placeholder.jpg",
  },
];

export default function EventsCarousel() {
  return (
    <section
      id="scroll"
      className="py-20 md:py-24 bg-gradient-to-b from-secondary/5 via-muted/50 to-muted"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="font-serif text-3xl md:text-3xl font-bold text-primary mb-2">
            Upcoming Events
          </h2>
          <p className="text-base text-muted-foreground">
            Join us for worship, prayer, and fellowship
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {upcomingEvents.map((event) => (
              <CarouselItem key={event.id}>
                <div className="p-1">
                  <div className="bg-white rounded-lg card-shadow border border-border overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={800}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="text-secondary font-semibold text-sm mb-2">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                        {event.title}
                      </h3>
                      <div className="space-y-0 text-sm text-muted-foreground mb-4">
                        <p>Time: {event.time}</p>
                        <p>Location: {event.location}</p>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="mt-auto w-full group"
                      >
                        <Link href="/calendar">
                          View Calendar
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-background" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-background" />
        </Carousel>
      </div>
    </section>
  );
}