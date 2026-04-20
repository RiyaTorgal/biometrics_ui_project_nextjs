// "use client"
// import { GraduationCap, BookOpen, FlaskConical, Presentation } from "lucide-react";
// // import heroScientist from "./assets/hero-scientist.jpg";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import {Navbar} from "../components/Navbar"

// const features = [
//   {
//     icon: Presentation,
//     title: "Hands-on Workshops",
//     description: "Application focused, data-driven training led by domain experts actively shaping the future of biologics research and development.",
//   },
//   {
//     icon: BookOpen,
//     title: "Customized Training Programs",
//     description: "Training tailored to your level of expertise, technical background, and goals from foundational principles to advanced, applied workflows.",
//   },
//   {
//     icon: FlaskConical,
//     title: "Experimental Design & Consultation",
//     description: "Strategic consultation on experimental design to ensure robust, interpretable, and decision-ready data for biologics development.",
//   },
//   {
//     icon: GraduationCap,
//     title: "Educational Consultations and Partnerships",
//     description: "Academic guidance and strategic partnerships to support students and early-career researchers aspiring to excel in Europe’s research ecosystem",
//   },
// ];

// export function HeroSection() {
//   return (
//     <>
//     <Navbar />
//     <section id="home" className="py-16 bg-background relative overflow-hidden">
//       {/* Hero Content */}
//       <div className="relative">
//         {/* Gradient overlay background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10" />
        
//         {/* Background image */}
//         <div className=" absolute inset-0 w-full h-full">
//           <Image 
//             // src="/Gemini_Generated_Image_e2mn6ge2mn6ge2mn.png" 
//             src="/newimg.png" 
//             alt="Scientist analyzing data" 
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid lg:grid-cols-[auto_1fr]  min-h-[500px] items-end py-16">
//             {/* Left Content */}
//             <div className="text-primary-foreground">
//               <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//                 {/* Transforming Agriculture Through Proteomics & Empowering Global Science Careers */}
//                 {/* Applied Science for Modern Agriculture */}
//                 Develop Science-Driven Skills for Modern Farming
//               </h1>
//               {/* <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl"> */}
//                 {/* Specialized Agri-Proteomics training, biotechnology skill development, and strategic academic guidance for students aspiring to excel in Europe’s research ecosystem. */}
//                 {/* Agri-Proteomics training and biotechnology skill development designed for research-focused learners and future-ready agricultural innovators. */}
//               {/* </p> */}
//               <a href="/services" className="flex items-center gap-3">
//               <div className="text-center mt-5">
//                 <Button variant="outline" size="lg" className="rounded-md px-8 bg-secondary hover:bg-transparent text-secondary-foreground  border-2 border-secondary hover:border-secondary">
//                   Register For Upcoming Workshops
//                 </Button>
//               </div>
//               {/* <div className="text-center mt-12">
//                 <Button variant="outline" size="lg" className="rounded-full px-8">
//                   View Full Event Calendar
//                 </Button>
//               </div> */}
//               </a>
//             </div>
            
//             {/* Right side is the image (shown through background) */}
//             <div className="hidden lg:block" />
//           </div>
//         </div>
//       </div>

//       {/* Feature Cards */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={feature.title}
//               className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex items-center  gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
//                   <feature.icon className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
//                   {feature.title}
//                 </h3>
//               </div>
//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Tagline */}
//         <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
//           {/* <p className="text-xl md:text-2xl text-foreground">
//             Advance your <span className="font-semibold text-primary">biologics pipeline</span> with{" "}
//             <span className="font-semibold">hands-on training</span> and applied consultation.
//           </p> */}
//           <p className="text-xl md:text-2xl italic text-foreground">
//             We don’t just <span className="font-semibold text-primary">teach theory</span>.{" "} We cultivate <span className="font-semibold">scientific leaders</span>.
//           </p>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// }

"use client"
import { GraduationCap, BookOpen, FlaskConical, Presentation } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Navbar } from "../components/Navbar";

const features = [
  {
    icon: Presentation,
    title: "Hands-on Workshops",
    description: "Application focused, data-driven training led by domain experts actively shaping the future of biologics research and development.",
  },
  {
    icon: BookOpen,
    title: "Customized Training Programs",
    description: "Training tailored to your level of expertise, technical background, and goals from foundational principles to advanced, applied workflows.",
  },
  {
    icon: FlaskConical,
    title: "Experimental Design & Consultation",
    description: "Strategic consultation on experimental design to ensure robust, interpretable, and decision-ready data for biologics development.",
  },
  {
    icon: GraduationCap,
    title: "Educational Consultations and Partnerships",
    description: "Academic guidance and strategic partnerships to support students and early-career researchers aspiring to excel in Europe’s research ecosystem",
  },
];

const getImageUrl = (url?: string) => {
  if (url.startsWith("http")) return url;
  return `${url}`;
};

interface HeroSectionProps {
  heroTitle?: string;
  heroCtaLabel?: string;
  heroTagline?: string;
  heroImage?: string;
}

export function HeroSection({ 
  heroTitle ,
  heroCtaLabel ,
  heroTagline,
  heroImage
}: HeroSectionProps) {
  return (
    <>
    <Navbar />
    <section id="home" className="py-16 bg-background relative overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10" />
        
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={getImageUrl(heroImage)}
            alt="Scientist analyzing data" 
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[auto_1fr] min-h-[500px] items-end py-16">
            <div className="text-primary-foreground">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {heroTitle}
              </h1>
              <a href="/services" className="flex items-center gap-3">
                <div className="text-center mt-5">
                  <Button variant="outline" size="lg" className="rounded-md px-8 bg-secondary hover:bg-transparent text-secondary-foreground border-2 border-secondary hover:border-secondary">
                    {heroCtaLabel }
                  </Button>
                </div>
              </a>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Feature Cards — unchanged */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={feature.title} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-4">
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

        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {/* <p className="text-xl md:text-2xl italic text-foreground"> */}
          <span className=" text-xl font-semibold md:text-2xl italic text-gradient block">
            {heroTagline}
          </span>
          {/* </p> */}
        </div>
      </div>
    </section>
    </>
  );
}