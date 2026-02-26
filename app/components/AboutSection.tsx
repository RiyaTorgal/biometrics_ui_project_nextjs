"use client"
import { CheckCircle2, Sparkles, Landmark, Badge, ChartArea, Dna, Microscope, GraduationCap } from "lucide-react";
// import { CircleQuestionMark } from "lucide-react";
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
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Badge className="w-4 h-4" />
              {/* <CircleQuestionMark className="w-4 h-4" /> */}
              <span className="text-sm font-semibold">Who we are</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About 
              <span className="text-gradient block">Sukshmadarshini™</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <span className="text-gradient font-bold">Sukshmadarshini™ </span>
                is a science driven platform redefining modern agriculture by equipping students and farmers with globally competitive research and analytical capabilities.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded by <span className="text-gradient font-bold">Dr. Priyadarshini Tilak</span> , the platform bridges advanced agricultural science with real-world application and international academic pathways transforming scientific knowledge into measurable opportunities.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We don’t just teach theory. We cultivate scientific leaders.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Through application focused programs, we strengthen technical precision, analytical thinking, and research confidence in emerging agricultural and life science professionals.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-video max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatedLogo />
              </div>
              
              
              {/* Floating elements */}
              {/* <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass-card shadow-soft flex items-center justify-center animate-float">
                <span className="font-display font-bold text-2xl text-primary">DNA</span>
              </div> */}
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