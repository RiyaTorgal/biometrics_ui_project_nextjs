"use client"
import { Database, Dna, FlaskConical, LineChart, Microscope, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const services = [
  {
    icon: Dna,
    title: "Genomics",
    description: "Comprehensive genome sequencing and analysis for deep biological insights.",
  },
  {
    icon: FlaskConical,
    title: "Transcriptomics",
    description: "RNA sequencing and gene expression profiling to understand cellular processes.",
  },
  {
    icon: Microscope,
    title: "Proteomics",
    description: "Large-scale protein identification and quantification services.",
  },
  {
    icon: Database,
    title: "Metabolomics",
    description: "Metabolite profiling and biomarker discovery for metabolic research.",
  },
  {
    icon: Network,
    title: "Multi-Omics Integration",
    description: "Integrated analysis combining multiple omics datasets for holistic insights.",
  },
  {
    icon: LineChart,
    title: "Data Analysis",
    description: "Advanced bioinformatics pipelines and statistical analysis services.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      {/* <div className="absolute top-0 left-0 w-full h-1 gradient-accent opacity-50" /> */}
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <FlaskConical className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Omics
            <span className="text-gradient"> Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full spectrum of bioinformatics and bioanalytical services 
            to advance your research and healthcare innovations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
