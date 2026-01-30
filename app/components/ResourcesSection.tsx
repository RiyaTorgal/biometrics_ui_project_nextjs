"use client"
import { FileText, Download, BookOpen, Video, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const resources = [
  {
    icon: FileText,
    type: "Whitepaper",
    title: "Multi-Omics Integration: Best Practices Guide",
    description: "Comprehensive guide on integrating genomics, transcriptomics, and proteomics data for holistic biological insights.",
    downloadable: true,
  },
  {
    icon: BookOpen,
    type: "eBook",
    title: "Fundamentals of Biologics Development",
    description: "From concept to clinic: Understanding the biologics pipeline and regulatory considerations.",
    downloadable: true,
  },
  {
    icon: Video,
    type: "Video Series",
    title: "Bioinformatics Masterclass",
    description: "10-part video series covering essential bioinformatics tools and techniques for researchers.",
    downloadable: false,
  },
  {
    icon: FileText,
    type: "Case Study",
    title: "Accelerating Drug Discovery with AI",
    description: "Real-world example of how machine learning reduced drug discovery timelines by 40%.",
    downloadable: true,
  },
  {
    icon: BookOpen,
    type: "Protocol",
    title: "scRNA-seq Analysis Pipeline",
    description: "Step-by-step protocol for single-cell RNA sequencing data processing and visualization.",
    downloadable: true,
  },
  {
    icon: Video,
    type: "Webinar Recording",
    title: "Future of Precision Medicine",
    description: "Expert panel discussion on how multi-omics is shaping personalized healthcare.",
    downloadable: false,
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Whitepaper":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "eBook":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "Video Series":
    case "Webinar Recording":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "Case Study":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "Protocol":
      return "bg-rose-100 text-rose-800 border-rose-200";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function ResourcesSection() {
  return (
    <section id="resources" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">Learning Resources</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Knowledge
            <span className="text-gradient"> Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Access our curated collection of whitepapers, guides, protocols, and video content 
            to accelerate your research and development journey.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card
              key={resource.title}
              className="group bg-card hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <Badge variant="outline" className={getTypeColor(resource.type)}>
                    {resource.type}
                  </Badge>
                </div>
                <CardTitle className="font-display text-lg group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-muted-foreground text-sm flex-1">
                  {resource.description}
                </CardDescription>
                <div className="mt-4">
                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                    {resource.downloadable ? (
                      <>
                        <Download className="w-4 h-4 mr-1.5" />
                        Download
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-1.5" />
                        Watch Now
                      </>
                    )}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8 gradient-accent text-primary-foreground hover:opacity-90">
            Browse All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
