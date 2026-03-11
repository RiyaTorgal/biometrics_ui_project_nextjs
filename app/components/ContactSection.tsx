"use client"
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, XCircle, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";

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
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [overlay, setOverlay] = useState<{ visible: boolean; success: boolean } | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) throw new Error("Failed");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      setOverlay({ visible: true, success: true });
    } catch {
      setOverlay({ visible: true, success: false });
    }
    setLoading(false);
  };

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
              Let&apos;s <span className="text-gradient font-bold"> Connect </span>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  rows={5}
                  placeholder="Tell us about your research needs..."
                  className="resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4 mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
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

      {/* Confirmation / Error Overlay */}
      {overlay?.visible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          onClick={() => setOverlay(null)}
        >
          <div
            className="relative bg-background rounded-3xl shadow-2xl border border-border p-10 max-w-md w-full flex flex-col items-center text-center"
            style={{
              animation: "overlayIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOverlay(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors rounded-full p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                overlay.success ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"
              }`}
            >
              {overlay.success ? (
                <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
              )}
            </div>

            {/* Heading */}
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              {overlay.success ? "Message Sent!" : "Sending Failed"}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              {overlay.success
                ? "Thank you for reaching out. We'll get back to you shortly."
                : "Something went wrong while sending your message. Please try again later."}
            </p>

            <Button
              size="lg"
              className={`w-full ${
                overlay.success
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-destructive text-destructive-foreground hover:bg-destructive/90"
              }`}
              onClick={() => setOverlay(null)}
            >
              {overlay.success ? "Great, thanks!" : "Got it, I'll try again"}
            </Button>
          </div>

          <style>{`
            @keyframes overlayIn {
              from { opacity: 0; transform: scale(0.88) translateY(16px); }
              to   { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}