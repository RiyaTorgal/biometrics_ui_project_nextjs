"use client"
import { GraduationCap, BookOpen, FlaskConical, Presentation } from "lucide-react";
// import heroScientist from "./assets/hero-scientist.jpg";
import { Button } from "./ui/button";
import Image from "next/image";

const features = [
  {
    icon: Presentation,
    title: "Hands-on Workshops",
    description: "Practical, application and data-drivem workshops led by scientists with deep domain expertise and active research experience at the forefront of biologics R&D",
  },
  {
    icon: BookOpen,
    title: "Customized Training Programs",
    description: "Training designed to fit your specific level of expertise, technical background, and end goal—from foundational principles to advanced, applied workflows",
  },
  {
    icon: FlaskConical,
    title: "Experimental Design & Consultation",
    description: "Strategic consultation on experimental ensuring robust, biologics development—ensuring robust, interpretable, and decision-ready data",
  },
  {
    icon: GraduationCap,
    title: "Educational Consultations and Partnerships",
    description: "Academic guidance and strategic partnerships to support students and early-career researchers aspiring to excel in Europe’s research ecosystem",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative pt-20 overflow-hidden bg-background">
      {/* Hero Content */}
      <div className="relative">
        {/* Gradient overlay background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10" />
        
        {/* Background image */}
        <div className=" absolute inset-0 w-full h-full">
          <Image 
            src="/hero-scientistAgri.jpg" 
            alt="Scientist analyzing data" 
            fill
            className="object-cover object-right"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 min-h-[500px] items-center py-16">
            {/* Left Content */}
            <div className="text-primary-foreground">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Transforming Agriculture Through Proteomics & Empowering Global Science Careers
              </h1>
              {/* <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                In Partnership with 3DCC x Biologics Goa
              </h3> */}
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
                {/* Industry-ready training and experimental strategy to generate robust, interpretable, and decision ready biological data */}
                Specialized Agri-Proteomics training, biotechnology skill development, and strategic academic guidance for students aspiring to excel in Europe’s research ecosystem.
              </p>
              <a href="#trainings" className="flex items-center gap-3">
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="rounded-md px-8 bg-secondary hover:bg-transparent text-secondary-foreground  border-2 border-secondary hover:border-secondary">
                  Register For Upcoming Workshops
                </Button>
              </div>
              {/* <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  View Full Event Calendar
                </Button>
              </div> */}
              </a>
            </div>
            
            {/* Right side is the image (shown through background) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center  gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-foreground">
            Advance your <span className="font-semibold text-primary">biologics pipeline</span> with{" "}
            <span className="font-semibold">hands-on training</span> and applied consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
