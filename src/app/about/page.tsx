import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import dtl15 from "@/app/images/dtl15.jpg";
import dtl23 from "@/app/images/dtl23.jpg";
import alfresco3 from "@/app/images/alfresco3.jpg";
import clubroom1 from "@/app/images/clubroom1.jpg";
import clubroom2 from "@/app/images/clubroom2.jpg";
import vip3 from "@/app/images/vip3.jpg";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ABOUT <span className="text-red-600 ">DOWNTOWN LOUNGE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              EXPLORE THE #1 NIGHTLIFE DESTINATION IN CDO
            </p>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden mb-16">
            <Image
              src={dtl15}
              alt="Hï Ibiza interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Club History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">THE STORY</h2>
              <p className="text-gray-300 mb-4">
                Since opening in 2023, DTL has become a go-to spot for nightlife
                in CDO, bringing people together for unforgettable nights filled
                with great music, good vibes, and non-stop energy. What started
                as a simple idea—to make a spot where people can vibe, let
                loose, and get lost in the music —has grown into one of the
                city's favorite party destinations.
              </p>
              <p className="text-gray-300 mb-4">
                From local talents to big-name DJs, DTL has hosted some of the
                best acts, making every weekend something to look forward to.
                With awesome music, a lively crowd, and an electric atmosphere,
                we've built a place where friends meet, dance floors stay
                packed, and memories are made.
              </p>
              <p className="text-gray-300">
                As we keep the party going, our goal stays the same: to bring
                you the best nightlife experience in CDO. DTL is where the night
                comes alive, and you're always invited.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src={dtl23} alt="dtlclub" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-zinc-800" />

      {/* The Rooms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            THE CLUB SPACES
          </h2>

          {/* The Theatre */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                THE AL FRESCO
              </h3>
              <p className="text-gray-300 mb-4">
                Our Al Fresco area offers the perfect mix of fresh air and
                nightlife energy. Whether you're kicking back with friends or
                soaking in the beats, these outdoor tables give you a prime spot
                to enjoy the party with a little more space to breathe. With
                great views, good vibes, and easy access to the action, it’s the
                ideal place to chill, drink, and dance the night away.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[350px] rounded-xl overflow-hidden">
              <Image
                src={alfresco3}
                alt="The Theatre at Hï Ibiza"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* The Club Room */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="relative h-[350px] rounded-xl overflow-hidden">
              <Image
                src={clubroom2}
                alt="The Club Room at Hï Ibiza"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                THE CLUB ROOM
              </h3>
              <p className="text-gray-300 mb-4">
                Packed wall to wall with energy, The Club Room is where the
                night comes alive. With the DJ at the heart of the action, the
                crowd moves as one to the beat, fueled by pulsating lights and
                an electric atmosphere. This is the spot for those who want to
                be in the thick of it—immersed, loud, and completely lost in the
                music.
              </p>
            </div>
          </div>

          {/* The Wild Corner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                THE VIP LOUNGE
              </h3>
              <p className="text-gray-300 mb-4">
                Step into the VIP Lounge—where exclusivity meets the ultimate
                nightlife experience. Amidst the high-energy crowd, this private
                space offers a premium escape with top-tier service, plush
                seating, and an elevated position that gives you the perfect
                view of the action.
              </p>
              <p className="text-gray-300">
                Here, you’re not just another partygoer—you’re the priority.
                Enjoy personal waiters, a refined atmosphere, and a space
                designed for those who want to celebrate in style while still
                soaking in the electric energy of the club.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[350px] rounded-xl overflow-hidden">
              <Image
                src={vip3}
                alt="The Wild Corner at Hï Ibiza"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Separator className="bg-zinc-800" />

<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-6">
        CUTTING-EDGE TECHNOLOGY
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Hï Ibiza features some of the most advanced club technology in the world
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-zinc-900 p-8 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-4">
          SOUND SYSTEM
        </h3>
        <p className="text-gray-300">
          The club features custom-designed L-Acoustics sound systems
          throughout, delivering crystal-clear audio with powerful bass
          that can be felt as much as heard. Each room's system has been
          specifically tailored to the space's acoustics and musical
          requirements.
        </p>
      </div>
      <div className="bg-zinc-900 p-8 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-4">
          LIGHTING & VISUALS
        </h3>
        <p className="text-gray-300">
          Hï Ibiza's lighting system includes over 300 moving lights, a
          massive LED screen spanning the width of The Theatre, and a
          kinetic ceiling installation that transforms throughout the
          night. The club's visual team creates custom content for each
          residency.
        </p>
      </div>
      <div className="bg-zinc-900 p-8 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-4">
          SPECIAL EFFECTS
        </h3>
        <p className="text-gray-300">
          From CO₂ jets and cryogenic effects to confetti cannons and
          flame throwers, Hï Ibiza's special effects arsenal creates
          immersive moments that enhance the connection between the music
          and the audience throughout the night.
        </p>
      </div>
    </div>
  </div>
</section> */}

      {/* CTA Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            EXPERIENCE <span className="text-red-600 ">DOWNTOWN LOUNGE</span>{" "}
            FOR YOURSELF
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us for an unforgettable night at CDO's #1 premier nightlife
            destination.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-red-600 rounded-full text-lg font-semibold"
            >
              <Link href="/events-calendar">View Events</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-red-600 rounded-full text-lg font-semibold"
            >
              <Link href="/vip">VIP Tables</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
