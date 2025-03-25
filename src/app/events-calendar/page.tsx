import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import event11 from "@/app/images/event11.jpg";
import event12 from "@/app/images/event12.jpg";
import event13 from "@/app/images/event13.jpg";
import event14 from "@/app/images/event14.jpg";
import event15 from "@/app/images/event15.jpg";
import event16 from "@/app/images/event16.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StaticImageData } from 'next/image';

// Mock event data
const events = [
  {
    id: 1,
    title: "Shakedown Sunday",
    date: "Sunday, May 1, 2025",
    time: "10:00 - 05:00",
    image: event11,
    link: "/residency/black-coffee",
    room: "Theatre",
  },
  {
    id: 2,
    title: "Saturday Socials",
    date: "Saturday, May 2, 2025",
    time: "10:00 - 05:00",
    image: event12,
    link: "/residency/tale-of-us-present-afterlife",
    room: "Theatre",
  },
  {
    id: 3,
    title: "Fridaze",
    date: "Friday, May 3, 2025",
    time: "10:00 - 05:00",
    image: event13,
    link: "/residency/fisher",
    room: "Theatre",
  },
  {
    id: 4,
    title: "Bacardi Night",
    date: "Thursday, May 4, 2025",
    time: "10:00 - 03:00",
    image: event14,
    link: "/residency/glitterbox",
    room: "Theatre",
  },
  {
    id: 5,
    title: "University Night",
    date: "Wednesday, May 5, 2025",
    time: "10:00 - 03:00",
    image: event15,
    link: "/residency/eric-prydz",
    room: "Theatre",
  },
  {
    id: 6,
    title: "University Night",
    date: "Wednesday, May 6, 2025",
    time: "10:00 - 03:00",
    image: event16,
    link: "/residency/martinez-brothers",
    room: "Theatre",
  },
];
const juneevents = [
  {
    id: 7,
    title: "Shakedown Sunday",
    date: "Sunday, June 1, 2025",
    time: "10:00 - 05:00",
    image: event11,
    link: "/residency/black-coffee",
    room: "Theatre",
  },
];

export default function EventsCalendar() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-center">
            2025 EVENTS CALENDAR
          </h1>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Full listings for DTL 2025 events. Explore DJ lineups for all
            residencies and the hottest nights in CDO at the city's top
            nightlife destination.
          </p>

          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto mb-12">
            <TabsList className="w-full bg-zinc-900 mb-8">
              <TabsTrigger value="all" className="flex-1 text-lg">
                All Events
              </TabsTrigger>
              <TabsTrigger value="may" className="flex-1 text-lg">
                May
              </TabsTrigger>
              <TabsTrigger value="june" className="flex-1 text-lg">
                June
              </TabsTrigger>
              <TabsTrigger value="july" className="flex-1 text-lg">
                July
              </TabsTrigger>
              <TabsTrigger value="august" className="flex-1 text-lg">
                August
              </TabsTrigger>
              <TabsTrigger value="september" className="flex-1 text-lg">
                September
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...events, ...juneevents].map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="may">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="june">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {juneevents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="july">
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-gray-400 text-lg">
                  Events for July coming soon
                </p>
              </div>
            </TabsContent>
            <TabsContent value="august">
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-gray-400 text-lg">
                  Events for August coming soon
                </p>
              </div>
            </TabsContent>
            <TabsContent value="september">
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-gray-400 text-lg">
                  Events for September coming soon
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
}

type EventProps = {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    image: StaticImageData;
    link: string;
    room: string;
  };
};

function EventCard({ event }: EventProps) {
  return (
    <Card className="border-0 overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-colors">
      <CardContent className="p-0">
        <div className="relative h-[300px]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-1">
              {event.title}
            </h3>
            <p className="text-gray-300 mb-1">{event.date}</p>
            <p className="text-gray-400 mb-3">{event.time}</p>
            <div className="flex items-center gap-4">
              <Button
                asChild
                className="bg-white text-black hover:bg-red-600 rounded-full"
              >
                <Link href="/vip">Book Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-red-600 rounded-full"
              >
                <Link href={event.link}>View Event</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
