// "use client"
// import { CheckCircle2, Sparkles, Landmark, ChartArea, Dna, Microscope, GraduationCap, Award } from "lucide-react";
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

// export function Expertise() {
//   return (
//     <section id="expertise" className="py-16 pt-0 pb-20  bg-background relative overflow-hidden">
//       {/* Background pattern */}
//       {/* <div className="absolute inset-0 dna-pattern opacity-50" /> */}
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-[auto_1fr] gap-16 items-center">
//           {/* Left - Image */}
//           <div className="relative">
//             <div className="max-w-[450px] mx-auto rounded-3xl shadow-xl">
//               {/* Main image container */}
//               <div className="relative w-full h-full rounded-3xl shadow-xl">
//                 <Image 
//                   src="/Dr. Priyadarshini Tilak.jpeg" 
//                   alt="Dr. Priyadarshini Tilak - Founder & CEO"
//                   width={550}
//                   height={850}
//                   className="w-full h-full object-cover rounded-3xl shadow-2xl"
//                   priority
//                 />
//                 {/* Gradient overlay
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
//                 Right side */}
//               </div>
              
//               {/* Floating elements */}
//               {/* <div className="absolute -top-4 -right-4 w-28 h-20 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float bg-white/90 backdrop-blur-sm">
//                 <span className="font-display font-bold text-lg text-primary">Trainings</span>
//               </div> */}
//               {/* <div className="absolute -bottom-4 -left-4 w-32 h-20 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float bg-white/90 backdrop-blur-sm" style={{ animationDelay: '-2s' }}>
//                 <span className="font-display font-bold text-lg text-accent">Proteomics</span>
//               </div> */}
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="order-1 lg:order-2">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
//               <Award className="w-4 h-4" />
//               <span className="text-sm font-semibold">Who Leads Us</span>
//             </div>
            
//             <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               <span className="text-gradient block">Our Leadership</span>
//             </h2>
            
//             <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
//               <span className="text-gradient font-bold">Dr. rer.nat. Priyadarshini Tilak </span>| <span className="text-gradient italic">Founder & Lead Scientific Consultant</span> <br />
//               An Indo-German life sciences professional  with 12+ years of international experience, Dr. Tilak holds a PhD in Plant Proteomics and stress signalling from Germany and an MTech from India. She combines deep technical expertise in proteomics and LC-MS workflows with a strong background in cross-border collaborations, strategic partnerships, and regulatory compliance (EU-MDR, GCP).
//               {/* <span className="text-gradient font-bold">Sukshmadarshini™ </span>specializes in Agri-Proteomics, advanced proteomics workflow consulting, and biotechnology skill development. Our expertise spans plant proteomics, molecular biology, LC–MS/MS workflows (DDA & DIA), and genomics ensuring scientifically rigorous and globally aligned outcomes. */}
//             </p>
//             <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
//               Her vision guides the Sukshmadarshini™ team in bridging academia and industry, ultimately connecting Indian scientific talent with European opportunities through scientifically rigorous, market-oriented initiatives.
//             </p>            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  ChartArea,
  Dna,
  Microscope,
  GraduationCap,
  Award,
} from "lucide-react";
import Image from "next/image";

interface ExpertiseProps {
  leadershipPhoto?: string;
  leadershipTitle?: string;
  leadershipName?: string;
  leadershipSubtitle?: string;
  leadershipBio1?: string;
  leadershipBio2?: string;
}

const getImageUrl = (url?: string) => {
  if (!url) return undefined;

  if (url.startsWith("http")) return url;

  return url;
};
export function Expertise({
  leadershipPhoto,
  leadershipTitle,
  leadershipName,
  leadershipSubtitle,
  leadershipBio1,
  leadershipBio2,
}: ExpertiseProps) {
  const imageUrl = getImageUrl(leadershipPhoto);
  return (
    <section className="py-16 pt-0 pb-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[auto_1fr] gap-16 items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="max-w-[450px] mx-auto rounded-3xl shadow-xl">
              <div className="relative w-full h-full rounded-3xl shadow-xl">
                {/* <Image
                  src={getImageUrl(leadershipPhoto)}
                  alt={leadershipName || "Leadership"}
                  width={550}
                  height={850}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  priority
                /> */}
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt="Leadership Photo"
                    width={500}
                    height={500}
                  />
                )}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Who Leads Us</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-gradient block">
                {leadershipTitle}
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              <span className="text-gradient font-bold">
                {leadershipName}
              </span>{" "}
              |{" "}
              <span className="text-gradient italic">
                {leadershipSubtitle }
              </span>
              <br />
              {leadershipBio1 ||
                "An Indo-German life sciences professional with extensive international experience."}
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {leadershipBio2 ||
                "Her vision guides the team in bridging academia and industry."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}