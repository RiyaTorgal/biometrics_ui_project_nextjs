"use client"
import { Calendar, MapPin, ExternalLink, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const events = [
  {
    title: "International Omics Conference 2026",
    date: "March 15-18, 2026",
    location: "Bangalore, India",
    type: "Conference",
    description: "Join leading researchers and industry experts for the premier multi-omics conference in Asia.",
    featured: true,
  },
  {
    title: "Biologics Innovation Summit",
    date: "April 5-6, 2026",
    location: "Mumbai, India",
    type: "Summit",
    description: "Explore cutting-edge biologics development strategies and regulatory insights.",
    featured: false,
  },
  {
    title: "Webinar: AI in Drug Discovery",
    date: "February 28, 2026",
    location: "Online",
    type: "Webinar",
    description: "Learn how AI and machine learning are transforming pharmaceutical research.",
    featured: false,
  },
  {
    title: "Proteomics Workshop Series",
    date: "May 10-12, 2026",
    location: "Hyderabad, India",
    type: "Workshop",
    description: "Hands-on training in mass spectrometry and protein characterization techniques.",
    featured: false,
  },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "Conference":
      return "bg-primary/10 text-primary border-primary/20";
    case "Summit":
      return "bg-secondary/10 text-secondary border-secondary/20";
    case "Webinar":
      return "bg-accent/10 text-accent border-accent/20";
    case "Workshop":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function EventsSection() {
  return (
    <section id="events" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Upcoming Events</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Connect & 
            <span className="text-gradient"> Learn</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our conferences, summits, and webinars to stay at the forefront 
            of omics research and biologics development.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card
              key={event.title}
              className={`group bg-card hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-up ${
                event.featured ? "lg:col-span-2 bg-gradient-to-br from-primary/5 via-card to-secondary/5" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className={getTypeStyles(event.type)}>
                      {event.type}
                    </Badge>
                    {event.featured && (
                      <Badge className="bg-gradient-to-r from-primary to-tertiary-foreground text-primary-foreground border-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className={`font-display group-hover:text-primary transition-colors ${
                  event.featured ? "text-2xl md:text-3xl" : "text-xl"
                }`}>
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button variant={event.featured ? "default" : "outline"} className={event.featured ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" : ""}>
                  Register Now
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            View Full Event Calendar
          </Button>
        </div>
      </div>
    </section>
  );
}
