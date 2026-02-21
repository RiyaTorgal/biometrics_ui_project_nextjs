"use client"
import { useState } from "react";
import { Menu, X, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
// import  EyeIcon  from "./assets/Screenshot_2026-01-27_201728-removebg-preview.png"
import Image from "next/image";

const navLinks = [
  { label: "About us", href: "#about", },
  { label: "Expertise", href: "#expertise", },
  { label: "Workshops", href: "#trainings", },
  // { label: "Agri-Proteomics", href: "#",},
  // { label: "Biotech Training", href: "#",},
  { label: "Core Focus", href: "#home", },
  { label: "Events", href: "#events", },
  { label: "European Science Advisory", href: "#european-advisory",},
  { label: "Resources", href: "#resources",},
  { label: "Contact", href: "#contact",},
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const navbarHeight = 0; // matches your h-20 navbar height
    const offsetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" onClick={(e) => handleNavClick(e, "#home")}>
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
              {/* <span className="font-display font-bold text-xl text-foreground">
                SukshmaDarshini
              </span> */}
              <span className="font-display font-bold text-xl">
                Sukshmadarshini <span className="text-secondary"></span>™
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
                className="text-muted-foreground hover:text-primary transition-colors  text-sm font-medium"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="flex items-center gap-3" onClick={(e) => handleNavClick(e, "#contact")}>
            <Button className="rounded-full px-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Enquire Today
            </Button>
            </a>
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
                  onClick={(e) => { handleNavClick(e, link.href); setIsOpen(false); }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="flex items-center gap-3" onClick={(e) => { handleNavClick(e, "#contact"); setIsOpen(false); }}>
                <Button className="w-full mt-2 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Enquire Today
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}