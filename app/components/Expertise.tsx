"use client"
import { CheckCircle2, Sparkles, Landmark, ChartArea, Dna, Microscope, GraduationCap, Award } from "lucide-react";
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

export function Expertise() {
  return (
    <section id="expertise" className="py-16 pt-0 pb-20  bg-background relative overflow-hidden">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 dna-pattern opacity-50" /> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative max-w-2xl mx-auto">
              {/* Main image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/trainingSessions.png" 
                  alt="Dr. Priyadarshini Tilak - Founder & CEO"
                  width={900}
                  height={1200}
                  className="w-auto h-auto"
                  priority
                />
                {/* Gradient overlay
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
                Right side */}
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-28 h-20 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float bg-white/90 backdrop-blur-sm">
                <span className="font-display font-bold text-lg text-primary">Trainings</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-20 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float bg-white/90 backdrop-blur-sm" style={{ animationDelay: '-2s' }}>
                <span className="font-display font-bold text-lg text-accent">Proteomics</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">What we do</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-gradient block">Our Expertise</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              <span className="text-gradient font-bold">Sukshmadarshini™ </span>specializes in Agri-Proteomics, advanced proteomics workflow consulting, and biotechnology skill development. Our expertise spans plant proteomics, molecular biology, LC–MS/MS workflows (DDA & DIA), and genomics ensuring scientifically rigorous and globally aligned outcomes.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              We cultivate collaborative bridges between Indian and European academic ecosystems, supporting knowledge exchange, research alignment, and cross-border opportunities. Through analytical precision, structured training, and guided mentorship, we enable students and researchers to build strong, research-oriented careers.
            </p>            
          </div>
        </div>
      </div>
    </section>
  );
}