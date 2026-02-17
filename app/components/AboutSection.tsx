// "use client"
// import { CheckCircle2, Sparkles, Landmark, ChartArea, Dna, Microscope, GraduationCap } from "lucide-react";
// import Image from "next/image";

// const highlights = [
//   "Built by active researchers with hands-on industry and academic experience",
//   "Seamlessly bridges wet-lab biology, omics technologies, and data science",
//   "Focus on reproducibility, interpretability, and real-world applicability",
//   "Programs designed for both scientific depth and industry readiness",
// ];

// const coreServices = [
//   {
//     Icon: ChartArea,
//     heading: "Data-Driven Insights",
//     content: "Advanced computational biology and bioinformatics services to transform your raw data into actionable research insights. We specialize in multi-omics data integration and statistical analysis.",
//     color: "blue"
//   },
//   {
//     Icon: Dna,
//     heading: "Multi-Omics Research",
//     content: "Comprehensive omics analysis including genomics, proteomics, metabolomics, and transcriptomics. Our expertise bridges molecular biology with computational approaches for breakthrough discoveries.",
//     color: "purple"
//   },
//   {
//     Icon: Microscope,
//     heading: "Advanced Analytical Services",
//     content: "State-of-the-art LC-MS/MS (Liquid Chromatography-Mass Spectrometry) capabilities for precise molecular characterization, metabolite identification, and quantitative analysis.",
//     color: "teal"
//   },
//   {
//     Icon: GraduationCap,
//     heading: "Hands-on Workshops",
//     content: "Comprehensive training programs designed for students, researchers, and industry professionals. Learn through interactive sessions, practical demonstrations, and real-world applications.",
//     color: "orange"
//   }
// ];

// export function AboutSection() {
//   return (
//     <section id="about" className="py-24 bg-background relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 dna-pattern opacity-50" />
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-2 items-center">
//           {/* Left Content */}
//           <div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
//               <Landmark className="w-4 h-4" />
//               <span className="text-sm font-semibold">Our Four Pillars</span>
//             </div>
            
//             <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               About 
//               <span className="text-gradient block">Sukshmadarshini™</span>
//             </h2>
            
//             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//               Sukshmadarshini™ is a specialized scientific platform focused on advancing Agri-Proteomics and empowering biotechnology students with globally relevant research skills.
//             </p>
//             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//               Founded with a vision to bridge molecular agriculture, translational proteomics, and international academic pathways, Sukshmadarshini™ operates at the intersection of science, data, and career transformation.
//             </p>
//             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//               We recognize that while academic foundations are strong, students often require deeper exposure to applied research methodologies, advanced analytical platforms, and global research expectations. Our programs are designed to close this gap — equipping learners with the precision, confidence, and technical clarity needed to succeed in competitive research environments.
//             </p>
//             {/* <div className="grid md:grid-cols-2 gap-2">
//               {coreServices.map((service, index) => {
//                 const { Icon, heading, content } = service;
                
//                 return (
//                   <div
//                     key={heading}
//                     className="flex items-start gap-4 animate-fade-up p-4 rounded-lg hover:bg-accent/5 transition-colors border-2 border-border/50"
//                     style={{ animationDelay: `${index * 0.1}s` }}
//                   >
//                     Icon Container
//                     <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
//                       <Icon className="w-6 h-6 text-accent" />
//                     </div>
                    
//                     Content Container
//                     <div className="flex-1">
//                       <h3 className="text-lg font-bold text-foreground mb-2">
//                         {heading}
//                       </h3>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         {content}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div> */}
//           </div>

//           {/* Right Visual */}
//           <div className="relative">
//             <div className="relative aspect-video max-w-md mx-auto">
//               {/* Main card */}
//               {/* <div className="absolute inset-4 rounded-3xl gradient-accent shadow-glow animate-scale-in overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/30" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-20">
//                     <defs>
//                       <linearGradient id="helixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                         <stop offset="0%" stopColor="white" stopOpacity="0.8" />
//                         <stop offset="100%" stopColor="white" stopOpacity="0.2" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       d="M40 100 Q70 60, 100 100 T160 100"
//                       fill="none"
//                       stroke="url(#helixGrad)"
//                       strokeWidth="2"
//                       className="animate-pulse-slow"
//                     />
//                     <path
//                       d="M40 100 Q70 140, 100 100 T160 100"
//                       fill="none"
//                       stroke="url(#helixGrad)"
//                       strokeWidth="2"
//                       className="animate-pulse-slow"
//                       style={{ animationDelay: '0.5s' }}
//                     />
//                     {[45, 75, 105, 135].map((x, i) => (
//                       <circle
//                         key={x}
//                         cx={x}
//                         cy={100 + (i % 2 === 0 ? -15 : 15)}
//                         r="4"
//                         fill="white"
//                         opacity="0.8"
//                         className="animate-pulse-slow"
//                         style={{ animationDelay: `${i * 0.2}s` }}
//                       />
//                     ))}
//                   </svg>
//                 </div>
//               </div> */}
//               <div className="absolute items-center justify-center">
//                 <Image 
//                   src="/official logo.svg" 
//                   alt="EyeIcon Navbar Logo" 
//                   width={400}   // w-14 in Tailwind = 14 * 4px = 56px
//                   height={64}  // h-10 in Tailwind = 10 * 4px = 40px
//                   className="object-contain"
//                 />
//               </div>
              
              
//               {/* Floating elements */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float">
//                 <span className="font-display font-bold text-2xl text-primary">DNA</span>
//               </div>
//               <div className="absolute -bottom-4 -left-4 w-32 h-20 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float" style={{ animationDelay: '-2s' }}>
//                 <span className="font-display font-bold text-lg text-accent">Genomics</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"
import { CheckCircle2, Sparkles, Landmark, ChartArea, Dna, Microscope, GraduationCap } from "lucide-react";
import { AnimatedLogo } from "../components/AnimatedLogo";

const highlights = [
  "Built by active researchers with hands-on industry and academic experience",
  "Seamlessly bridges wet-lab biology, omics technologies, and data science",
  "Focus on reproducibility, interpretability, and real-world applicability",
  "Programs designed for both scientific depth and industry readiness",
];

const coreServices = [
  {
    Icon: ChartArea,
    heading: "Data-Driven Insights",
    content: "Advanced computational biology and bioinformatics services to transform your raw data into actionable research insights. We specialize in multi-omics data integration and statistical analysis.",
    color: "blue"
  },
  {
    Icon: Dna,
    heading: "Multi-Omics Research",
    content: "Comprehensive omics analysis including genomics, proteomics, metabolomics, and transcriptomics. Our expertise bridges molecular biology with computational approaches for breakthrough discoveries.",
    color: "purple"
  },
  {
    Icon: Microscope,
    heading: "Advanced Analytical Services",
    content: "State-of-the-art LC-MS/MS (Liquid Chromatography-Mass Spectrometry) capabilities for precise molecular characterization, metabolite identification, and quantitative analysis.",
    color: "teal"
  },
  {
    Icon: GraduationCap,
    heading: "Hands-on Workshops",
    content: "Comprehensive training programs designed for students, researchers, and industry professionals. Learn through interactive sessions, practical demonstrations, and real-world applications.",
    color: "orange"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dna-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Landmark className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Four Pillars</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About 
              <span className="text-gradient block">Sukshmadarshini™</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sukshmadarshini™ is a specialized scientific platform focused on advancing Agri-Proteomics and empowering biotechnology students with globally relevant research skills.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to bridge molecular agriculture, translational proteomics, and international academic pathways, Sukshmadarshini™ operates at the intersection of science, data, and career transformation.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We recognize that while academic foundations are strong, students often require deeper exposure to applied research methodologies, advanced analytical platforms, and global research expectations. Our programs are designed to close this gap — equipping learners with the precision, confidence, and technical clarity needed to succeed in competitive research environments.
            </p>
            {/* <div className="grid md:grid-cols-2 gap-2">
              {coreServices.map((service, index) => {
                const { Icon, heading, content } = service;
                
                return (
                  <div
                    key={heading}
                    className="flex items-start gap-4 animate-fade-up p-4 rounded-lg hover:bg-accent/5 transition-colors border-2 border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    Icon Container
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    
                    Content Container
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {heading}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-video max-w-md mx-auto">
              {/* Main card */}
              {/* <div className="absolute inset-4 rounded-3xl gradient-accent shadow-glow animate-scale-in overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-20">
                    <defs>
                      <linearGradient id="helixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M40 100 Q70 60, 100 100 T160 100"
                      fill="none"
                      stroke="url(#helixGrad)"
                      strokeWidth="2"
                      className="animate-pulse-slow"
                    />
                    <path
                      d="M40 100 Q70 140, 100 100 T160 100"
                      fill="none"
                      stroke="url(#helixGrad)"
                      strokeWidth="2"
                      className="animate-pulse-slow"
                      style={{ animationDelay: '0.5s' }}
                    />
                    {[45, 75, 105, 135].map((x, i) => (
                      <circle
                        key={x}
                        cx={x}
                        cy={100 + (i % 2 === 0 ? -15 : 15)}
                        r="4"
                        fill="white"
                        opacity="0.8"
                        className="animate-pulse-slow"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </svg>
                </div>
              </div> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatedLogo />
              </div>
              
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float">
                <span className="font-display font-bold text-2xl text-primary">DNA</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-20 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float" style={{ animationDelay: '-2s' }}>
                <span className="font-display font-bold text-lg text-accent">Genomics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}