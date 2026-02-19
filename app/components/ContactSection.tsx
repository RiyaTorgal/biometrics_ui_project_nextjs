"use client"
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sukshmadarshini@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80101 77746",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* Soft wave background */}
      <div className="absolute inset-x-0 bottom-24 h-44 bg-gradient-to-t from-primary/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Mail className="w-4 h-4" />
              Get in Touch
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Let’s Collaborate on
              <span className="block text-primary mt-2">
                Your Research
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed">
              Advance your biologics and omics pipeline with hands-on training,
              experimental design expertise, and applied consultation tailored
              to your research goals.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium text-foreground">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-background rounded-3xl p-8 md:p-10 shadow-soft border border-border">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input placeholder="How can we help?" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  rows={5}
                  placeholder="Tell us about your research needs..."
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* Wave decoration */}
      <div className="relative h-32 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z"
            fill="url(#waveGradient)"
            fillOpacity="0.3"
          />
          <path
            d="M0,80 C360,40 720,100 1080,80 C1260,70 1380,85 1440,80 L1440,120 L0,120 Z"
            fill="url(#waveGradient)"
            fillOpacity="0.2"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--tertiary))" />
              <stop offset="100%" stopColor="hsl(var(--tertiary-foreground))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
