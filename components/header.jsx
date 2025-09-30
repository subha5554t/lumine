"use client";

import React, { useState } from "react";
import { LayoutDashboard, Menu, X } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  const { isLoading } = useStoreUser();
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (path.includes("/editor")) {
    return null; // Hide header on editor page
  }

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap">
      {/* Center - Glass Navigation Container */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 md:px-8 py-3 flex items-center justify-between gap-4 md:gap-8">
        {/* Logo */}
        <Link href="/" className="mr-4 md:mr-10 lg:mr-20">
          <Image
            src="/download.png"
            alt="Pixxel Logo"
            className="min-w-18 object-cover"
            width={96}
            height={24}
          />
        </Link>

        {/* Desktop Navigation */}
        {path === "/" && (
          <div className="hidden md:flex space-x-6">
            <Link
              href="#features"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        )}

        {/* Mobile Hamburger Menu Button */}
        {path === "/" && (
          <button
            className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        )}

        {/* Auth Actions */}
        <div className="flex items-center gap-3 ml-4 md:ml-10 lg:ml-20">
          <Authenticated>
            <Link href="/dashboard">
              <Button variant="glass" className="hidden sm:flex">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:flex">Dashboard</span>
              </Button>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-lg border border-white/20",
                  userButtonPopoverCard:
                    "shadow-xl backdrop-blur-md bg-slate-900/90 border border-white/20",
                  userPreviewMainIdentifier: "font-semibold text-white",
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant="glass" className="hidden sm:flex">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button variant="primary">Get Started</Button>
            </SignUpButton>
          </Unauthenticated>
        </div>

        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"95%"} color="#06b6d4" />
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {path === "/" && isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 space-y-4">
          <Link
            href="#features"
            className="block text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="block text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="block text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
