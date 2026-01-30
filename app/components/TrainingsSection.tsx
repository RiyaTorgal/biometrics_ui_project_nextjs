"use client"
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const trainings = [
  {
    title: "Introduction to Multi-Omics Analysis",
    duration: "3 Days",
    participants: "15-20",
    level: "Beginner",
    description: "Foundation course covering genomics, transcriptomics, and proteomics fundamentals with hands-on data analysis.",
    upcoming: "Feb 15-17, 2026",
  },
  {
    title: "Advanced Bioinformatics Pipeline Development",
    duration: "5 Days",
    participants: "10-15",
    level: "Advanced",
    description: "Deep dive into building scalable bioinformatics workflows using industry-standard tools and best practices.",
    upcoming: "Mar 3-7, 2026",
  },
  {
    title: "Single-Cell RNA Sequencing Workshop",
    duration: "4 Days",
    participants: "12-15",
    level: "Intermediate",
    description: "Comprehensive training on scRNA-seq experimental design, data processing, and biological interpretation.",
    upcoming: "Mar 20-23, 2026",
  },
  {
    title: "Metabolomics for Drug Discovery",
    duration: "3 Days",
    participants: "15-20",
    level: "Intermediate",
    description: "Learn metabolite profiling techniques and their application in pharmaceutical research and biomarker discovery.",
    upcoming: "Apr 8-10, 2026",
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-800 border-green-200";
    case "Intermediate":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "Advanced":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function TrainingsSection() {
  return (
    <section id="trainings" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">Training Programs</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Upcoming Hands-on
            <span className="text-gradient"> Workshops</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry-ready training programs designed by scientists with deep domain expertise 
            and active research experience at the forefront of biologics R&D.
          </p>
        </div>

        {/* Trainings Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {trainings.map((training, index) => (
            <Card
              key={training.title}
              className="group bg-card hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                    {training.title}
                  </CardTitle>
                  <Badge variant="outline" className={getLevelColor(training.level)}>
                    {training.level}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground text-base">
                  {training.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{training.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{training.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span className="text-secondary font-medium">{training.upcoming}</span>
                  </div>
                </div>
                <Button variant="outline" className="group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            View All Training Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
