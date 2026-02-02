"use client"
import { useState } from "react";
import { Menu, X, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
// import  EyeIcon  from "./assets/Screenshot_2026-01-27_201728-removebg-preview.png"
import Image from "next/image";

const navLinks = [
  { label: "About us", href: "#about", },
  { label: "Trainings", href: "#trainings", },
  { label: "Events", href: "#events", },
  { label: "Resources", href: "#resources",},
  // { label: "Learning Portal", href: "/learning" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            {/* <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center relative">
              <Eye className="w-6 h-6 text-primary-foreground" />
              <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-pulse-slow" />
            </div> */}
            <Image 
              src="/Screenshot_2026-01-27_201728-removebg-preview.png" 
              alt="EyeIcon Navbar Logo" 
              width={56}   // w-14 in Tailwind = 14 * 4px = 56px
              height={40}  // h-10 in Tailwind = 10 * 4px = 40px
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-foreground">
                SukshmaDarshini
              </span>
              <span className="text-xs text-muted-foreground">
                Insight Beyond Vision
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button className="rounded-full px-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Enquire Today
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full mt-2 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Enquire Today
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}