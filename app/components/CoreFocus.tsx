import { Leaf, FlaskConical, Microscope, GraduationCap, Globe, Beaker } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const expertiseAreas = [
  {
    icon: Leaf,
    title: "Agri-Proteomics & Crop Molecular Innovation",
    description: "Application of LC–MS/MS-based proteomics to plant biology, crop resilience, stress response mechanisms, and sustainable agricultural research.",
    tags: ["Plant Stress Proteomics", "Biomarker Discovery", "Crop Resilience"],
  },
  {
    icon: FlaskConical,
    title: "Proteomics Workflow & Sample Preparation Consulting",
    description: "Strategic consultation on experimental design and pre-analytical workflows for LC–MS/MS-based proteomics studies.",
    tags: ["LC–MS/MS", "DDA & DIA", "Quality Control"],
  },
  {
    icon: GraduationCap,
    title: "Biotechnology Skill Development",
    description: "Industry-aligned training in molecular biology, HPLC fundamentals, LC–MS/MS workflows, and translational data interpretation designed to extend beyond standard academic curriculum.",
    tags: ["Molecular Biology", "HPLC", "Data Analysis"],
  },
  {
    icon: Globe,
    title: "European Science Pathway Advisory",
    description: "Structured academic mentoring for biotechnology and agricultural science students aspiring to pursue Master's and PhD programs across Europe, with emphasis on research alignment and global readiness.",
    tags: ["University Selection", "SOP Review", "Interview Prep"],
  },
];

const consultingDetails = [
  "Plant tissue protein extraction strategies",
  "Plasma and serum proteomics workflows",
  "Sample clean-up and digestion optimization",
  "DDA & DIA experimental planning for MS/MS workflow",
  "Contaminant mitigation and quality control",
  "Targeted vs discovery proteomics design",
];

export function CoreFocusSection() {
  return (
    <section id="core-focus" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      {/* <div className="absolute top-0 left-0 w-full h-1 gradient-accent opacity-50" /> */}
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Microscope className="w-4 h-4" />
            <span className="text-sm font-semibold">Core Areas</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our 
            <span className="text-gradient"> Core Focus </span>
            Areas
          </h2>
          <p className="text-lg text-muted-foreground">
            Sukshmadarshini™ specializes in Agri-Proteomics, advanced proteomics workflow consulting, 
            and biotechnology skill development with scientifically rigorous and globally aligned outcomes.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {expertiseAreas.map((area, index) => (
            <Card
              key={area.title}
              className="group bg-card hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base mb-4">
                  {area.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Consulting Focus Detail */}
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
              <Beaker className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Proteomics Consulting Focus Areas
            </h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Our focus is on ensuring reproducibility, analytical precision, and scientifically 
            robust outcomes before mass spectrometry analysis.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {consultingDetails.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
