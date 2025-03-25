"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import dtl20 from "@/app/images/dtl20.jpg";
import sofa2 from "@/app/images/sofa2.jpg";
import dtl10 from "@/app/images/dtl10.jpg";
import vip2 from "@/app/images/vip2.jpg";
import dtl5 from "@/app/images/dtl5.jpg";
import dtl6 from "@/app/images/dtl6.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function VIP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally send the data to a server
    toast.success(
      "Thank you for your inquiry. Our VIP team will contact you shortly."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={dtl10.src}
            alt="dtl VIP section"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              VIP EXPERIENCE
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Elevate your night with premium table service and the best views
              in the club
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-red-600 rounded-full text-lg font-semibold"
              onClick={() => {
                const bookingSection = document.getElementById("booking");
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* VIP Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              DTL TABLE OPTIONS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from a variety of premium table experiences, each offering
              exceptional service and the perfect view of the action
            </p>
          </div>

          <Tabs defaultValue="theatre" className="w-full max-w-4xl mx-auto">
            <TabsList className="w-full bg-zinc-900 mb-8">
              <TabsTrigger value="theatre" className="flex-1 text-lg">
                Sofas
              </TabsTrigger>
              <TabsTrigger value="clubroom" className="flex-1 text-lg">
                VIP Tables
              </TabsTrigger>
            </TabsList>
            <TabsContent value="theatre">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <VIPCard image={dtl5.src} showButton={false} />

                <VIPCard
                  title="Sofa Tables"
                  description="Our sofas provide a comfortable and stylish space to relax, enjoy drinks, and fully immerse yourself in the vibrant energy of the party. Whether you're taking a break from dancing or socializing with friends, they offer the perfect setting to keep the night going."
                  image={sofa2.src}
                  price="From ₱5,000"
                  guests="6-10 guests"
                />
              </div>
            </TabsContent>
            <TabsContent value="clubroom">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <VIPCard
                  title="VIP - Tables"
                  description="Our VIP tables are strategically positioned in prime locations, offering exceptional views of the DJ and stage. Designed for those who want to be at the heart of the action, they provide the perfect setting for an electrifying night of nonstop partying, wild drinks, and dancing until dawn."
                  image={dtl20.src}
                  price="From ₱10,000"
                  guests="10-15 guests"
                />

                <VIPCard image={dtl6.src} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="bg-zinc-800" />

      {/* VIP Benefits */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              THE VIP EXPERIENCE
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              When you book a VIP table at DOWNTOWN LOUNGE, you're not just
              reserving a space – you're unlocking a premium nightlife
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4  bg-white rounded-full flex items-center justify-center hover:bg-red-600">
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
                  className="text-black"
                >
                  <path d="M15 5v14"></path>
                  <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5H5Z"></path>
                  <path d="M5 14v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path>
                  <path d="M17 9V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fast Track Entry
              </h3>
              <p className="text-gray-400">
                Skip the queues with priority entry through our dedicated VIP
                access lane
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center hover:bg-red-600">
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
                  className="text-black"
                >
                  <circle cx="12" cy="12" r="8"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Premium Views
              </h3>
              <p className="text-gray-400">
                Enjoy the perfect view of the stage and dance floor from our
                strategically positioned tables
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center hover:bg-red-600">
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
                  className="text-black"
                >
                  <path d="M13 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-6"></path>
                  <path d="M15.2 2.4a2 2 0 1 1 2.8 2.8L12.8 11 10 11.7l.7-2.8 6.3-6.5Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Dedicated Service
              </h3>
              <p className="text-gray-400">
                Experience attentive care from our professional VIP hosts
                throughout your night
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center hover:bg-red-600">
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
                  className="text-black"
                >
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
                  <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"></path>
                  <path d="M5 18v2"></path>
                  <path d="M19 18v2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Premium Bottles
              </h3>
              <p className="text-gray-400">
                Access to our exclusive bottle menu featuring premium spirits,
                champagnes, and custom mixers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                BOOK YOUR DTL EXPERIENCE
              </h2>
              <p className="text-gray-300 mb-6">
                Complete the form, and our team will get in touch to go over
                availability, pricing, and any special requests for your
                booking.
              </p>
              <p className="text-gray-300 mb-8">
                For immediate assistance or last-minute bookings, please contact
                our Manager Lance at{" "}
                <span className="text-white">lance@gmail.com</span> or call{" "}
                <span className="text-white">+63 912 234 5678</span>.
              </p>

              <div className="bg-zinc-900 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Important Information
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Bawal Magsuka</li>
                  <li>
                    • All VIP bookings include club entry for the specified
                    number of guests
                  </li>
                  <li>
                    • Full prepayment is required to confirm your reservation
                  </li>
                  <li>
                    • We recommend booking at least 1-2 weeks in advance for
                    popular nights
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-white mb-2">
                      Preferred Date *
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-white mb-2">
                    Number of Guests *
                  </label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-700 text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md bg-zinc-800 border-zinc-700 text-white p-2"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-full text-lg font-semibold"
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

type VIPCardProps = {
  title?: string;
  description?: string;
  image: string; // Allow StaticImageData type for imported images
  price?: string;
  guests?: string;
  showButton?: boolean; // Add this prop to control button visibility
};

function VIPCard({
  title,
  description,
  image,
  price,
  guests,
  showButton = true,
}: VIPCardProps) {
  const hasContent = title || description || price || guests;
  return (
    <Card
      className={`border-0 overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-colors ${
        hasContent ? "h-full flex flex-col" : ""
      }`}
    >
      <CardContent className="p-0">
        <div className={`relative ${hasContent ? "h-[200px]" : "h-[500px]"}`}>
          <Image
            src={image}
            alt={title || "VIP Table"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {(title || description || price || guests) && (
          <div className="p-6">
            {title && (
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            )}
            {description && (
              <p className="text-gray-400 mb-4 min-h-[80px]">{description}</p>
            )}
            {(price || guests) && (
              <div className="flex justify-between items-center">
                <div>
                  {price && <p className="text-white font-semibold">{price}</p>}
                  {guests && <p className="text-gray-500 text-sm">{guests}</p>}
                </div>
                {showButton && (
                  <Button
                    className="bg-white text-black hover:bg-red-600 rounded-full"
                    onClick={() => {
                      const bookingSection = document.getElementById("booking");
                      if (bookingSection) {
                        bookingSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Inquire
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
