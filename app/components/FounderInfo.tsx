// "use client"
// import { CheckCircle2, Sparkles, Landmark, ChartArea, Dna, Microscope, GraduationCap, UserRound } from "lucide-react";

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

// export function FounderInfo() {
//   return (
//     <section id="about" className="py-24 bg-background relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 dna-pattern opacity-50" />
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-2 items-center">
//           {/* Left Content */}
//           <div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
//               <UserRound className="w-4 h-4" />
//               <span className="text-sm font-semibold">Founder & CEO</span>
//             </div>
            
//             <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               Founder & CEO
//               <span className="text-gradient block">Dr. Priyadarshini Tilak</span>
//             </h2>
            
//             <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
//               With over 11 years of experience in advanced proteomics across Europe and India, 
//               Dr. Tilak brings world-class expertise to SukshmaDarshini™.
//             </p>
            
//             <div className="space-y-3 mb-6">
//               {[
//                 "Expert in LC-MS/MS (DDA & DIA), biomarkers & biologics",
//                 "Built high-impact training & EdTech programs",
//                 "Trusted by biotech, clinical & academic partners",
//                 "Turns omics data into actionable business insights"
//               ].map((point, idx) => (
//                 <div key={idx} className="flex items-start gap-3">
//                   <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                   <span className="text-muted-foreground">{point}</span>
//                 </div>
//               ))}
//             </div>
            
//             <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-6">
//               <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
//                 <Sparkles className="w-5 h-5 text-primary" />
//                 Mission
//               </h3>
//               <p className="text-muted-foreground">
//                 Accelerating life-science innovation through world-class proteomics and a skilled, 
//                 data-driven workforce.
//               </p>
//             </div>
            
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
//             <div className="relative aspect-square max-w-lg mx-auto">
//               {/* Main card */}
//               <div className="absolute inset-4 rounded-3xl gradient-accent shadow-glow animate-scale-in overflow-hidden">
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
//               </div>
              
//               {/* Floating elements */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float">
//                 <span className="font-display font-bold text-2xl text-primary">DNA</span>
//               </div>
//               <div className="absolute -bottom-4 -left-4 w-32 h-20 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float" style={{ animationDelay: '-2s' }}>
//                 <span className="font-display font-bold text-lg text-accent">Multi-Omics</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"
import { CheckCircle2, Sparkles, Landmark, ChartArea, Dna, Microscope, GraduationCap, UserRound } from "lucide-react";
import Image from "next/image";

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

export function FounderInfo() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dna-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto">
              {/* Main image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/scientist-priyadarshini-tilak.jpeg" 
                  alt="Dr. Priyadarshini Tilak - Founder & CEO"
                  width={900}
                  height={1200}
                  className="w-auto h-auto "
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float bg-white/90 backdrop-blur-sm">
                <span className="font-display font-bold text-2xl text-primary">11+ Yrs</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-20 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float bg-white/90 backdrop-blur-sm" style={{ animationDelay: '-2s' }}>
                <span className="font-display font-bold text-lg text-accent">Proteomics</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <UserRound className="w-4 h-4" />
              <span className="text-sm font-semibold">Founder & CEO</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Founder & CEO
              <span className="text-gradient block">Dr. Priyadarshini Tilak</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              With over 11 years of experience in advanced proteomics across Europe and India, 
              Dr. Tilak brings world-class expertise to SukshmaDarshini™.
            </p>
            
            <div className="space-y-3 mb-6">
              {[
                "Expert in LC-MS/MS (DDA & DIA), biomarkers & biologics",
                "Built high-impact training & EdTech programs",
                "Trusted by biotech, clinical & academic partners",
                "Turns omics data into actionable business insights"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Mission
              </h3>
              <p className="text-muted-foreground">
                Accelerating life-science innovation through world-class proteomics and a skilled, 
                data-driven workforce.
              </p>
            </div>
            
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
        </div>
      </div>
    </section>
  );
}