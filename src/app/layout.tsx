import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "sonner";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DTL CDO",
  description:
    "Officially the World's Number One Club. The best house, techno & electronic music in Ibiza with cutting-edge DJs, pioneering production & VIP Tables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakarta.className} min-h-screen hi-gradient`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
