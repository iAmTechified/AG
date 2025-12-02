"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

const aboutSections = {
  "About the Church": [
    { title: "Our Story", href: "/about/our-story" },
    { title: "Our Mission & Vision", href: "/about/mission-vision" },
    { title: "What We Believe", href: "/about/what-we-believe" },
    { title: "Our Mandate", href: "/about/our-mandate" },
    { title: "Church History", href: "/about/church-history" },
  ],
  Leadership: [
    { title: "Senior Pastor", href: "/about/senior-pastor" },
    { title: "Associate Pastors", href: "/about/associate-pastors" },
    { title: "Ministers & Council", href: "/about/ministers-council" },
    { title: "Meet Our Workers", href: "/about/workers" },
  ],
  "Visitor Information": [
    { title: "Plan Your Visit", href: "/about/plan-your-visit" },
    { title: "Service Times", href: "/about/service-times" },
    { title: "Location & Directions", href: "/about/location" },
    { title: "What to Expect", href: "/about/what-to-expect" },
  ],
  Contact: [
    { title: "Contact Us", href: "/contact" },
    { title: "Prayer Request", href: "/contact/prayer-request" },
    { title: "Testimony Submission", href: "/contact/testimony" },
  ],
};

const departmentsSections = {
  "Ministry Departments": [
    { title: "Music Ministry", href: "/departments/music" },
    { title: "Prayer & Intercession", href: "/departments/prayer" },
    { title: "Evangelism & Outreach", href: "/departments/evangelism" },
    { title: "Ushering Unit", href: "/departments/ushering" },
    { title: "Children’s Ministry", href: "/departments/children" },
    { title: "Youth Ministry", href: "/departments/youth" },
    { title: "Women’s Ministry", href: "/departments/women" },
    { title: "Men’s Fellowship", href: "/departments/men" },
  ],
  "Service Units": [
    { title: "Media & Technical", href: "/departments/media" },
    { title: "Protocol Team", href: "/departments/protocol" },
    { title: "Welfare Unit", href: "/departments/welfare" },
    { title: "Hospitality", href: "/departments/hospitality" },
    { title: "Sanctuary Keepers", href: "/departments/sanctuary-keepers" },
    { title: "Security Team", href: "/departments/security" },
  ],
  "Joining & Participation": [
    { title: "Join a Department", href: "/departments/join" },
    { title: "Volunteer Opportunities", href: "/departments/volunteer" },
    { title: "Worker Training Program", href: "/departments/training" },
  ],
};

const sermonsAndEventsSections = {
  "Sermon Library": [
    { title: "Latest Sermons", href: "/sermons/latest" },
    { title: "Sermon Series", href: "/sermons/series" },
    { title: "Audio Messages", href: "/sermons/audio" },
    { title: "Scripture-Based Teaching", href: "/sermons/scripture" },
    { title: "All Preachers", href: "/sermons/preachers" },
  ],
  "Live & Media": [
    { title: "Watch Live", href: "/live" },
    { title: "Media Gallery", href: "/gallery" },
    { title: "Highlights & Recaps", href: "/media/highlights" },
  ],
  Programmes: [
    { title: "Weekly Services", href: "/programmes/weekly" },
    { title: "Special Programmes", href: "/programmes/special" },
    { title: "Night Vigils", href: "/programmes/vigils" },
    { title: "Prayer Meetings", href: "/programmes/prayer-meetings" },
  ],
  Events: [
    { title: "Events Calendar", href: "/events" },
    { title: "Upcoming Events", href: "/events/upcoming" },
    { title: "Annual Conferences", href: "/events/conferences" },
    { title: "Youth & Children Events", href: "/events/youth-children" },
  ],
};

const giveSections = {
  "Online Giving": [
    { title: "Tithe", href: "/give/tithe" },
    { title: "Offering", href: "/give/offering" },
    { title: "Donations", href: "/give/donations" },
    { title: "Seed Sowing", href: "/give/seed-sowing" },
    { title: "Partnership Giving", href: "/give/partnership" },
  ],
  Campaigns: [
    { title: "Building Project", href: "/give/building-project" },
    { title: "Missions Support", href: "/give/missions-support" },
    { title: "Welfare Support Drive", href: "/give/welfare-drive" },
  ],
  "Giving Support": [
    { title: "Ways to Give", href: "/give/ways-to-give" },
    { title: "Payment Confirmation", href: "/give/payment-confirmation" },
    { title: "Giving FAQs", href: "/give/faq" },
  ],
};

const menuItems = {
  About: aboutSections,
  Departments: departmentsSections,
  "Sermons & Events": sermonsAndEventsSections,
  Give: giveSections,
};

export function MainNav() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          {Object.entries(menuItems).map(([title, sections]) => (
            <NavigationMenuItem key={title}>
              <NavigationMenuTrigger className="font-serif text-base bg-transparent text-white hover:bg-transparent hover:text-accent-foreground">{title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className={`grid w-[800px] grid-cols-${Object.keys(sections).length} gap-4 p-4`}>
                  {Object.entries(sections).map(([sectionTitle, links]) => (
                    <div key={sectionTitle} className="w-max-content">
                      <h3 className="px-2 font-serif font-semibold text-sm text-black/50 mb-2">{sectionTitle}</h3>
                      <ul className="space-y-1">
                        {links.map((link) => (
                          <ListItem key={link.title} href={link.href} title={link.title} className="font-medium text-sm text-black/80 hover:bg-muted/50 hover:text-primary" />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <Accordion type="multiple" className="w-full">
      {Object.entries(menuItems).map(([title, sections]) => (
        <AccordionItem key={title} value={title}>
          <AccordionTrigger className="font-serif text-base">{title}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-4">
              {Object.entries(sections).map(([sectionTitle, links]) => (
                <div key={sectionTitle}>
                  <h3 className="font-serif font-semibold text-sm mb-2">{sectionTitle}</h3>
                  <ul className="space-y-1">
                    {links.map((link) => (
                      <li key={link.title}>
                        <Link href={link.href} className="block p-2 text-sm hover:bg-accent rounded-md">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";