"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Play,
  Share2,
  BookOpen,
  CheckCircle,
  Lock,
  ChevronRight,
  Mail,
  User,
  MailCheck,
  Briefcase,
  Globe,
  Users,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { useToast } from "../hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

/* -------------------- Types -------------------- */

interface ConsultationItem {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  mode: string;
  audience: string;
  description: string;
  includes: string[];
  cta: string;
}

interface ConsultationDetailDialogProps {
  service: ConsultationItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isBooked: boolean;
  onBookingComplete?: (serviceId: number) => void;
}

/* -------------------- Consultation Data -------------------- */

const consultationDetails: Record<
  number,
  {
    price: string;
    perSession: boolean;
    audience: string;
    description: string;
    includes: string[];
    cta: string;
  }
> = {
  /* -------------------------------------------------- */
  /* Proteomics Workflow & Sample Preparation Consulting */
  /* -------------------------------------------------- */
  1: {
    price: "₹3,500",
    perSession: true,
    audience: "Researchers • Labs • Institutions",
    description:
      "Strategic consulting support for experimental design, LC–MS/MS workflows, and sample preparation optimization in plant proteomics research.",
    includes: [
      "Plant tissue protein extraction strategies",
      "Sample clean-up & digestion optimization",
      "DDA & DIA workflow planning",
      "Contaminant mitigation & QC strategy",
      "Targeted vs discovery proteomics planning",
      "Free 15-minute discovery call",
    ],
    cta: "Book Session",
  },

  /* -------------------------------------------------- */
  /* European Science Pathway – Profile Review Session */
  /* -------------------------------------------------- */
  2: {
    price: "₹2,500",
    perSession: true,
    audience: "Biotech • Agriculture • Molecular Biology Students",
    description:
      "Scientific profile evaluation and strategic recommendations for Master's or PhD pathways in Europe.",
    includes: [
      "Scientific CV review",
      "Program alignment advice",
      "Skill gap assessment",
      "Personalized academic strategy guidance",
    ],
    cta: "Book Session",
  },

  /* -------------------------------------------------- */
  /* Europe Application Strategy Package (Basic) */
  /* -------------------------------------------------- */
  3: {
    price: "₹2,500",
    perSession: true,
    audience: "Students applying to European universities",
    description:
      "Structured guidance for university selection, SOP improvement, and application planning.",
    includes: [
      "University shortlist (5–7 programs)",
      "SOP review (1 round)",
      "CV optimization",
      "Application timeline planning",
    ],
    cta: "Book Session",
  },

  /* -------------------------------------------------- */
  /* Comprehensive Europe Mentorship (Premium) */
  /* -------------------------------------------------- */
  4: {
    price: "₹20,000",
    perSession: false,
    audience: "Serious Master's / PhD applicants",
    description:
      "End-to-end structured mentorship for European academic admissions, research alignment, and interview preparation.",
    includes: [
      "Research alignment strategy",
      "University shortlisting",
      "SOP drafting guidance",
      "Multiple review rounds",
      "Interview preparation",
      "Skill development roadmap",
      "End-to-end mentorship support",
    ],
    cta: "Apply for Mentorship",
  },
};

/* -------------------- Helpers -------------------- */

const handleShare = (title: string, id: number) => {
  const url = `${window.location.origin}/services?consultation=${id}`;
  if (navigator.share) {
    navigator.share({ title, text: `Check out this service: ${title}`, url });
  } else {
    navigator.clipboard.writeText(url);
  }
};

/* -------------------- Component -------------------- */

export default function ConsultationDetailDialog({
  service,
  open,
  onOpenChange,
  isBooked,
  onBookingComplete,
}: ConsultationDetailDialogProps) {
  const { toast } = useToast();
  const [showBookModal, setShowBookModal] = useState(false);
  const [step, setStep] = useState<"form" | "confirmation">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  if (!service) return null;

  const details = consultationDetails[service.id] ?? consultationDetails[201];

  /* -------------------- Render -------------------- */

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTitle>{service.title}</DialogTitle>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-0">
          {/* Hero */}
          <div className="relative h-52">
            <Image
              src={service.thumbnail}
              alt={service.title}
              fill
              className="object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-lg" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-xl font-bold text-white">{service.title}</h2>
              <p className="text-sm text-white/80">Sukshmadarshini™</p>
            </div>
          </div>

          <div className="p-6 space-y-5">
            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {service.duration}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                {service.mode}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {details.audience}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {details.description}
            </p>

            <Separator />

            {/* Pricing */}
            <div className="flex items-center justify-between">
              {/* <span className="text-2xl font-bold">{details.price}</span> */}
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">{details.price}</span>
                {details.perSession && (
                <span className="text-sm text-muted-foreground">/session</span>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleShare(service.title, service.id)}
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <Separator />

            {/* Includes */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                This service includes
              </h3>
              <ul className="space-y-2">
                {details.includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              className="w-full"
              size="lg"
              disabled={isBooked}
              onClick={() => setShowBookModal(true)}
            >
              {isBooked ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Already Booked
                </>
              ) : (
                <>
                  <Briefcase className="w-4 h-4 mr-2" />
                  {details.cta}
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Booking Modal */}
      <Dialog open={showBookModal} onOpenChange={setShowBookModal}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              {step === "form" ? "Register Your Interest" : "Confirmation"}
            </DialogTitle>
            <DialogDescription>
              {step === "form"
                ? "Enter your details to continue."
                : "Booking confirmation instructions will be sent via email."}
            </DialogDescription>
          </DialogHeader>

          {step === "form" ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep("confirmation");
              }}
              className="space-y-4 pt-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Organization (Optional)</Label>
                <Input
                  id="organization"
                  placeholder="Your University/Company"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="w-full mt-6">
                Continue to Proceed
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          ) : (
            <div className="space-y-6 pt-4 text-center">
              <MailCheck className="w-32 h-32 justify-center mx-auto text-primary" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                You will receive the confirmation email for{" "}
                <span className="font-semibold text-foreground">
                  {service.title}
                </span>{" "}
                in a few hours.
                <br />
                <br />
                Please follow the steps given in the email to confirm your
                booking.
              </p>
              <Button
                className="w-full"
                onClick={() => {
                  const stored =
                    localStorage.getItem(
                      "sukshmadarshini_enrolled_courses"
                    ) || "[]";
                  const enrolled = JSON.parse(stored);
                  if (!enrolled.includes(service.id)) enrolled.push(service.id);
                  localStorage.setItem(
                    "sukshmadarshini_enrolled_courses",
                    JSON.stringify(enrolled)
                  );
                  localStorage.setItem(
                    "sukshmadarshini_user",
                    JSON.stringify(formData)
                  );
                  toast({
                    title: "Confirmation email sent",
                    description: `Confirmation instructions sent for "${service.title}"`,
                  });
                  setShowBookModal(false);
                  setStep("form");
                  onBookingComplete?.(service.id);
                }}
              >
                Done
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}