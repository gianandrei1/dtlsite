"use client";
import Image from "next/image";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import dtlwide from "@/app/images/dtlwide.png";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation would go here
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Social Media */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-6 block">
              <Image
                src={dtlwide}
                alt="DTL Logo"
                className="w-24 md:w-32 lg:w-40"
                width={150} // Adjust as needed
                height={50}
                priority
              />
            </Link>
            <p className="text-gray-400 mb-6">
              CDO's #1 premier nightlife destination.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/dtlcdo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600  transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/downtownloungecdo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600  transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-0">
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/events-calendar"
                  className="text-gray-400 hover:text-red-600  transition-colors"
                >
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/vip"
                  className="text-gray-400 hover:text-red-600  transition-colors"
                >
                  VIP Tables
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-red-600  transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Residencies */}
          <div className="col-span-1 ">
            <h4 className="text-white font-semibold text-lg mb-4">EVENTS</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/residency/black-coffee"
                  className="text-gray-400 hover:text-red-600  transition-colors"
                >
                  Shakedown Sunday
                </Link>
              </li>
              <li>
                <Link
                  href="/residency/tale-of-us-present-afterlife"
                  className="text-gray-400 hover:text-red-600  transition-colors"
                >
                  Saturday Socials
                </Link>
              </li>
              <li>
                <Link
                  href="/residency/fisher"
                  className="text-gray-400 hover:text-red-600  transition-colors"
                >
                  Fridaze
                </Link>
              </li>
              <li>
                <Link
                  href="/residency/glitterbox"
                  className="text-gray-400 hover:text-red-600  transition-colors"
                >
                  Bacardi Nights
                </Link>
              </li>
              <li>
                <Link
                  href="/residency/eric-prydz"
                  className="text-gray-400 hover:text-red-600  transition-colors"
                >
                  Ladies Nights
                </Link>
              </li>
              <li>
                <Link
                  href="/residency/eric-prydz"
                  className="text-gray-400 hover:text-red-600  transition-colors"
                >
                  University Nights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} DownTown Lounge CDO. All rights
            reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-red-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-red-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
