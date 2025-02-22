import type { Metadata } from "next";
import "./globals.css";
import JoinWaitlist from "./components/join-waitlist";
import HeroSection from "./components/hero-section";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

export const metadata: Metadata = {
  title: "Token Giver",
  description: "Decentralized Crowd Funding on Starknet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased relative w-[100%] overflow-x-hidden">
        <div className="absolute top-0 left-0 w-[100%] z-[2]">
          <JoinWaitlist />
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
