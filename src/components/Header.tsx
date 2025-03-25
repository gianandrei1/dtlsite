"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dtlwide from "@/app/images/dtlwide.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={dtlwide}
            alt="Hï Ibiza club interior"
            className="w-20 md:w-24 lg:w-28"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-x-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-red-600">
                Events
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="  md:w-[200px] lg:w-[300px]  bg-black">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 focus:bg-zinc-800"
                        href="/events-calendar"
                      >
                        <div className="text-sm font-medium leading-none text-white">
                          Events Calendar
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          View all upcoming events
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/vip" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-red-600">
                  VIP
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-red-600">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="border-none text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black text-white border-gray-800"
          >
            <nav className="flex flex-col gap-4 mt-10">
              <Link
                href="/events-calendar"
                className="text-xl hover:text-gray-300 py-2 border-b border-gray-800"
              >
                Events Calendar
              </Link>

              <Link
                href="/vip"
                className="text-xl hover:text-gray-300 py-2 border-b border-gray-800"
              >
                VIP
              </Link>
              <Link
                href="/about"
                className="text-xl hover:text-gray-300 py-2 border-b border-gray-800"
              >
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Button
          className="hidden md:flex bg-white text-black hover:bg-red-600  rounded-full font-semibold"
          size="sm"
        >
          <Link href="/vip">Book Now</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
