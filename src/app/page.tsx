import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dtlpic2 from "@/app/images/dtlpic2.png";
import event11 from "@/app/images/event11.jpg";
import event12 from "@/app/images/event12.jpg";
import event13 from "@/app/images/event13.jpg";
import event14 from "@/app/images/event14.jpg";
import event15 from "@/app/images/event15.jpg";
import event16 from "@/app/images/event16.jpg";
import dtl1234 from "@/app/images/dtl1234.jpg";
import dtl4 from "@/app/images/dtl4.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Fullscreen background video/image */}
        <div className="absolute inset-0 w-full h-full bg-black z-0">
          <Image
            src={dtlpic2}
            alt="Hï Ibiza club interior"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-glow">
            THE REAL PARTY IS
            <br />
            <span className="text-4xl md:text-7xl lg:text-8xl">
              IN <span className="text-red-600 ">DOWNTOWN</span>
            </span>
          </h1>
          <p className="text-.5xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Immerse yourself in the ultimate house, techno, and electronic beats
            at Down Town Lounge—where top DJs, next-level production, and VIP
            service redefine CDO's nightlife.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-red-600 rounded-full text-lg font-semibold px-8"
            >
              <Link href="/events-calendar">View Events</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-red-600 rounded-full text-lg font-semibold px-8"
            >
              <Link href="/vip">VIP Tables</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* Featured Events/Residencies */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            FEATURED EVENTS
          </h2>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {/* Black Coffee */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-[450px]">
                <div className="h-full p-2">
                  <Card className="border-0 h-full overflow-hidden bg-transparent">
                    <CardContent className="relative p-0 h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                      <Image
                        src={event11}
                        alt="shake down sunday"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Shakedown Sunday
                        </h3>
                        <p className="text-gray-300 mb-4">Sundays at DTL</p>
                        <Button
                          asChild
                          className="bg-white text-black hover:bg-red-600 rounded-full"
                        >
                          <Link href="/residency/black-coffee">
                            View Events
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* Afterlife */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-[450px]">
                <div className="h-full p-2">
                  <Card className="border-0 h-full overflow-hidden bg-transparent">
                    <CardContent className="relative p-0 h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                      <Image
                        src={event12}
                        alt="saturday socials"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Saturday Socials
                        </h3>
                        <p className="text-gray-300 mb-4">
                          High-energy beats, elite vibes.
                        </p>
                        <Button
                          asChild
                          className="bg-white text-black hover:bg-red-600 rounded-full"
                        >
                          <Link href="/residency/tale-of-us-present-afterlife">
                            View Events
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-[450px]">
                <div className="h-full p-2">
                  <Card className="border-0 h-full overflow-hidden bg-transparent">
                    <CardContent className="relative p-0 h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                      <Image
                        src={event13}
                        alt="saturday socials"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Fridaze
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Weekend kickoff, electrifying nights.
                        </p>
                        <Button
                          asChild
                          className="bg-white text-black hover:bg-red-600  rounded-full"
                        >
                          <Link href="/residency/tale-of-us-present-afterlife">
                            View Events
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* Fisher */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-[450px]">
                <div className="h-full p-2">
                  <Card className="border-0 h-full overflow-hidden bg-transparent">
                    <CardContent className="relative p-0 h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                      <Image
                        src={event14}
                        alt="bacardingihts"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Bacardi Nights
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Smooth pours, high-energy vibes.
                        </p>
                        <Button
                          asChild
                          className="bg-white text-black hover:bg-red-600  rounded-full"
                        >
                          <Link href="/residency/fisher">View Events</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              {/* Fisher */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-[450px]">
                <div className="h-full p-2">
                  <Card className="border-0 h-full overflow-hidden bg-transparent">
                    <CardContent className="relative p-0 h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                      <Image
                        src={event15}
                        alt="LadiesNights"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Ladies Nights
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Glam, beats, and free flows.
                        </p>
                        <Button
                          asChild
                          className="bg-white text-black hover:bg-red-600  rounded-full"
                        >
                          <Link href="/residency/fisher">View Events</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              {/* Fisher */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-[450px]">
                <div className="h-full p-2">
                  <Card className="border-0 h-full overflow-hidden bg-transparent">
                    <CardContent className="relative p-0 h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                      <Image
                        src={event16}
                        alt="universitynights"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          University Nights
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Campus vibes, wild nights.
                        </p>
                        <Button
                          asChild
                          className="bg-white text-black hover:bg-red-600  rounded-full"
                        >
                          <Link href="/residency/fisher">View Events</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute -bottom-14 left-0 right-0 flex justify-center gap-4">
              <CarouselPrevious
                variant="outline"
                className="static bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800"
              />
              <CarouselNext
                variant="outline"
                className="static bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800"
              />
            </div>
          </Carousel>
        </div>
      </section>

      {/* About the Venue Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                EXPLORE CDO’s #1 NIGHTLIFE DESTINATION
              </h2>
              <p className="text-gray-300 mb-6">
                Since opening in 2023, DTL has set the stage for unforgettable
                nights, attracting renowned artists and cementing its reputation
                as CDO’s premier nightlife destination.
              </p>
              <p className="text-gray-300 mb-8">
                The club comprises three distinct spaces: The Al Fresco, the
                Club Room, and the VIP Lounge, each offering a unique atmosphere
                and musical journey.
              </p>
              <Button
                asChild
                className="bg-white text-black hover:bg-red-600  rounded-full"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={dtl1234}
                alt="Hï Ibiza interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIP Experience Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={dtl4}
                alt="Hï Ibiza VIP section"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                VIP EXPERIENCE
              </h2>
              <p className="text-gray-300 mb-6">
                Elevate your night with our premium VIP tables offering the best
                views, dedicated service, and exclusive amenities to make your
                DTL experience truly unforgettable.
              </p>
              <p className="text-gray-300 mb-8">
                Our VIP hosts will ensure you and your guests receive
                personalized attention throughout the night, with priority entry
                and access to our premium bottle service.
              </p>
              <Button
                asChild
                className="bg-white text-black hover:bg-red-600  rounded-full"
              >
                <Link href="/vip">Book VIP Tables</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zinc-950 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            WHAT PEOPLE SAY
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="p-4">
                  <blockquote className="text-xl text-gray-300 italic mb-6">
                    "DTL is without doubt the most technically advanced club
                    I've ever played. The sound system, lighting, and overall
                    production are truly next level."
                  </blockquote>
                  <p className="text-white font-semibold">— DJ GIAN ANDREI</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-4">
                  <blockquote className="text-xl text-gray-300 italic mb-6">
                    "There's a reason DTL is rated the #1 club in CDO. The
                    experience from start to finish is absolutely impeccable."
                  </blockquote>
                  <p className="text-white font-semibold">— DJ DAWIN</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-4">
                  <blockquote className="text-xl text-gray-300 italic mb-6">
                    "The energy at DTL is unmatched. From the moment you walk
                    in, you're transported to another dimension where the music,
                    people and production all combine to create pure magic."
                  </blockquote>
                  <p className="text-white font-semibold">— MADAM</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious
                variant="outline"
                className="static bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800"
              />
              <CarouselNext
                variant="outline"
                className="static bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800"
              />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            GET READY FOR AN UNFORGETTABLE NIGHT
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us at DTL for top-tier music, high-energy beats, and the
            ultimate nightlife experience in CDO.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-red-600  rounded-full text-lg font-semibold px-8"
          >
            <Link href="/events-calendar">View All Events</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
