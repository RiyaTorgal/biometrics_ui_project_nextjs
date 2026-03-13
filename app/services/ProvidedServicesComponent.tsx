"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Lock,
  Users,
  Briefcase,
  CheckCircle,
  Sparkles,
  ChevronRight,
  CreditCard,
  Mail,
  User,
  MailCheck,
} from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import WorkshopDetailDialog from "../components/WorkshopDetailDialogue";

/* ------------------ DATA ------------------ */

const workshops = [
  {
    id: 1,
    category: "Agri-Proteomics & Crop Molecular Innovation",
    title: "Fundamentals of Plant Proteomics",
    duration: "3–4 Hours",
    mode: "Online / Offline",
    idealFor: "Agriculture & Biotechnology students",
    priceNote: "Early bird and group discounts available",
    content: [
      "Fundamentals of plant proteomics",
      "Introduction to LC–MS/MS workflows",
      "Plant stress proteomics concepts",
      "Crop resilience & yield improvement research",
      "Career pathways in Agri-Proteomics",
    ],
    thumbnail:
      "/Fundamentals of Plant Proteomics.png",
  },
  {
    id: 2,
    category: "Agri-Proteomics & Crop Molecular Innovation",
    title: "2–3 Day Intensive Agri-Proteomics Workshop",
    duration: "2–3 Days",
    mode: "Online / Offline",
    idealFor: "Advanced students & researchers",
    priceNote: "Depends on batch size & format",
    content: [
      "Applied LC–MS/MS workflows for plant systems",
      "Experimental design in crop molecular research",
      "DDA vs DIA strategy planning",
      "Case studies in sustainable agriculture",
      "Workflow design exercises",
    ],
    thumbnail:
      "/2–3 Day Intensive Agri-Proteomics Workshop.png",
  },
  {
    id: 3,
    category: "Agri-Proteomics & Crop Molecular Innovation",
    title: "Advanced Certification in Plant Proteomics",
    duration: "6–8 Weeks",
    mode: "Hybrid / Offline Preferred",
    idealFor: "Research-track learners",
    priceNote: "Depends on batch size & format",
    content: [
      "End-to-end plant proteomics workflow",
      "Sample preparation & digestion strategy",
      "Experimental design principles",
      "Visit to Mass Spectrometry facility (Optional)",
      "Basics of proteomics data analysis",
      "Research presentation & evaluation (Optional)",
    ],
    thumbnail:
      "/Advanced Course in Plant Proteomics.png",
  },
  {
    id: 4,
    category: "Biotechnology Industry Skill Development",
    title: "Biotechnology Industry Skill Development Program",
    duration: "4–6 Weeks",
    mode: "Online / Hybrid",
    idealFor: "Students seeking industry-ready biotech skills",
    priceNote: "Depends on batch size & format",
    content: [
      "Advanced molecular biology techniques",
      "HPLC fundamentals",
      "LC–MS/MS workflows",
      "Experimental design strategy",
      "Translational data interpretation",
      "Research profile building & career positioning",
    ],
    thumbnail:
      "/Biotechnology Career Advancement Program.png",
  },
];

const consultationServices = [
  {
    id: 201,
    title: "Proteomics Workflow & Sample Preparation Consulting",
    duration: "60-minute session • Project-based available",
    price: "₹3,500 per session",
    thumbnail:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=225&fit=crop",
    mode: "Online",
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
    cta: "Book Consulting Session",
  },

  /* -------------------------------------------------- */
  /* 2A. Europe Profile Review Session */
  /* -------------------------------------------------- */
  {
    id: 202,
    title: "European Science Pathway – Profile Review Session",
    duration: "60 Minutes",
    price: "₹2,500 per session",
    thumbnail:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=225&fit=crop",
    mode: "Online",
    audience: "Biotech • Agriculture • Molecular Biology Students",
    description:
      "Scientific profile evaluation and strategic recommendations for Master's or PhD pathways in Europe.",
    includes: [
      "Scientific CV review",
      "Program alignment advice",
      "Skill gap assessment",
      "Personalized academic strategy guidance",
    ],
    cta: "Book Profile Review",
  },

  /* -------------------------------------------------- */
  /* 2B. Application Strategy Package */
  /* -------------------------------------------------- */
  {
    id: 203,
    title: "Europe Application Strategy Package (Basic)",
    duration: "Flexible",
    price: "₹2,500 per session",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=225&fit=crop",
    mode: "Online",
    audience: "Students applying to European universities",
    description:
      "Structured guidance for university selection, SOP improvement, and application planning.",
    includes: [
      "University shortlist (5–7 programs)",
      "SOP review (1 round)",
      "CV optimization",
      "Application timeline planning",
    ],
    cta: "Start Application Strategy",
  },

  /* -------------------------------------------------- */
  /* 2C. Comprehensive Europe Mentorship */
  /* -------------------------------------------------- */
  {
    id: 204,
    title: "Comprehensive Europe Mentorship (Premium)",
    duration: "3 Months • 10 Meetings",
    price: "₹20,000",
    thumbnail:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=225&fit=crop",
    mode: "Online Mentorship",
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
];


/* ------------------ COMPONENT ------------------ */

export default function ServicesPage() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [enrollmentStep, setEnrollmentStep] = useState<"form" | "confirmation">("form");
  
  const { toast } = useToast();
  
  const COURSE_PRICE = selectedService?.price ?? "";
  const COURSE_NAME = selectedService?.title ?? "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  // const getInitialTab = () => {
  //   if (typeof window !== "undefined") {
  //     const hash = window.location.hash.replace("#", "");
  //     if (hash === "consulting" || hash === "workshops") return hash;
  //   }
  //   return "workshops";
  // };

  // ✅ This does the job — getInitialTab is redundant


  const [activeTab, setActiveTab] = useState<string>("workshops");

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "consulting" || hash === "workshops") {
        setActiveTab(hash);
      }
    };

    // Read immediately on mount
    readHash();

    // Also read after a short delay — Next.js Link navigation with hashes
    // sometimes settles the URL after the initial render cycle
    const timer = setTimeout(readHash, 50);

    window.addEventListener("hashchange", readHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", readHash);
    };
  }, []);

  // useEffect(() => {
  //   // Set tab based on hash after mount (avoids SSR mismatch)
  //   const hash = window.location.hash.replace("#", "");
  //   if (hash === "consulting" || hash === "workshops") {
  //     setActiveTab(hash);
  //   }
  // }, []);

  // const [paymentData, setPaymentData] = useState({
  //   cardNumber: "",
  //   expiryDate: "",
  //   cvv: "",
  //   cardholderName: "",
  // });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollmentStep("confirmation");
  };

  // const handlePaymentSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setTimeout(() => {
  //     setShowEnrollModal(false);
  //     setEnrollmentStep("form");
  //     toast({
  //       title: "🎉 Registration Successful",
  //       description:
  //         "Our team will contact you shortly with workshop details.",
  //     });
  //     setFormData({ name: "", email: "", organization: "" });
  //     setPaymentData({
  //       cardNumber: "",
  //       expiryDate: "",
  //       cvv: "",
  //       cardholderName: "",
  //     });
  //   }, 1200);
  // };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl shadow-sm">
         <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
           <Link href="/" className="flex items-center gap-3 group">
             <Image 
               src="/official logo.svg" 
               alt="EyeIcon Navbar Logo" 
               width={56}   // w-14 in Tailwind = 14 * 4px = 56px
               height={40}  // h-10 in Tailwind = 10 * 4px = 40px
               className="object-contain"
             />
             <div className="flex flex-col">
               <span className="font-display text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                 Sukshmadarshini Services
               </span>
               <span className="text-xs text-muted-foreground">
                 Insight Beyond Vision
               </span>
             </div>
           </Link>
         </div>
       </nav>

        {/* HERO */}
        <section className="container mx-auto px-4 py-14 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent">
            Advanced Agri-Proteomics Workshops & Research Consulting
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Hands-on training, workflow consulting, and strategic mentorship in
            plant proteomics and molecular agriculture.
          </p>
        </section>

        {/* CONTENT */}
        <main className="container mx-auto px-4 pb-16">
          <Tabs
            value={activeTab}
            onValueChange={(val) => {
              setActiveTab(val);
              window.location.hash = val;
            }}>
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-1 md:grid-cols-2 h-auto">
              <TabsTrigger value="workshops">
                <Users className="w-4 h-4 mr-2" />
                Workshops & Programs
              </TabsTrigger>
              <TabsTrigger value="consulting">
                <Briefcase className="w-4 h-4 mr-2" />
                Consulting Services
              </TabsTrigger>
            </TabsList>

            {/* WORKSHOPS */}
            <TabsContent value="workshops" className="mt-10 text-center">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
                Offline and Online Workshops
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {workshops.map((w) => (
                  <Card
                    key={w.id}
                    className="cursor-pointer hover:shadow-xl transition flex flex-col"
                    onClick={() => setSelectedWorkshop(w)}
                  >
                    <div className="relative h-48">
                      <Image
                        src={w.thumbnail}
                        alt={w.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {w.duration}
                      </div>
                    </div>

                    <CardContent className="pt-4 flex flex-col flex-1">
                      <div className="flex-1 space-y-3">
                        <Badge variant="outline">{w.category}</Badge>
                        <h3 className="font-semibold text-lg">{w.title}</h3>

                        <p className="text-sm text-muted-foreground">
                          <strong>Mode:</strong> {w.mode}
                        </p>

                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {w.content.slice(0, 3).map((c, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                              <span>{c}</span>
                            </li>
                          ))}
                          <li className="italic text-xs text-muted-foreground">+ more</li>
                        </ul>

                        <p className="text-xs italic text-muted-foreground">
                          {w.priceNote}
                        </p>
                      </div>

                      <Button variant="secondary" className="w-full mt-4">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* CONSULTING */}
            <TabsContent value="consulting" className="mt-10 text-center">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
                Consultation Services
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {consultationServices.map((service, index) => (
                  <Card
                    key={service.id}
                    className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={service.thumbnail}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </div>
                    </div>

                    <CardContent className="pt-4 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-lg leading-tight">
                          {service.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          #{index + 1}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline">{service.mode}</Badge>
                        <Badge variant="outline">{service.audience}</Badge>
                      </div>

                      <Button
                        onClick={() => {
                          setSelectedService(service);
                          setShowEnrollModal(true);
                          setEnrollmentStep("form");
                        }}
                        className="w-full"
                      >
                        <Briefcase className="w-4 h-4 mr-2" />
                        {service.cta}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      {/* ENROLL MODAL */}
      <Dialog open={showEnrollModal} onOpenChange={setShowEnrollModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            {selectedService?.thumbnail && (
              <div className="relative w-full h-40 rounded-lg overflow-hidden border">
                <Image
                  src={selectedService.thumbnail}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <DialogTitle className="text-2xl font-display">
              {enrollmentStep === "form"
                ? "Register Your Interest"
                : "Confirmation"}
            </DialogTitle>

            <DialogDescription>
              <div className="space-y-4">
                {selectedService && (
                  <>
                    <div className="font-semibold text-lg text-foreground">
                        {COURSE_NAME}
                    </div>
                    <div className="text-primary font-medium">
                      {COURSE_PRICE}
                    </div>
                  </>
                )}
              </div>
              <div>
                {enrollmentStep === "form"
                  ? "Enter your details to continue."
                  : `Please follow the instructions to complete your registration.`}
              </div>
            </DialogDescription>
          </DialogHeader>

          {enrollmentStep === "form" ? (
            <form onSubmit={handleFormSubmit} className="space-y-3 pt-4">
              <Label>Full Name *</Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <Label>Email *</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="pb-5"
              />
              <Label>Organization (Optional)</Label>
              <Input
                value={formData.organization}
                onChange={(e) =>
                  setFormData({ ...formData, organization: e.target.value })
                }
              />
              <Button type="submit" className="w-full">
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          ) : (
             <div className="space-y-6 pt-4 text-center">
              <MailCheck className="w-20 h-20 mx-auto text-primary" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                You will receive the confirmation email for the{" "}
                <span className="font-semibold text-foreground">
                  {selectedService?.title}
                </span>{" "}
                in a few minutes.
                <br /><br />
                Please follow the steps given in the email to confirm your seat in the workshop.
              </p>
              <Button
                className="w-full"
                onClick={() => {
                  const stored =
                    localStorage.getItem("sukshmadarshini_enrolled_courses") || "[]";
                  const enrolled = JSON.parse(stored);
                  if (!enrolled.includes(selectedService?.id)) {
                    enrolled.push(selectedService?.id);
                  }
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
                    description: `Confirmation instructions sent for "${selectedService?.title}"`,
                  });
                  setShowEnrollModal(false);
                  setEnrollmentStep("form");
                  setSelectedService(null);
                }}
              >
                Done
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* DETAIL DIALOG */}
      <WorkshopDetailDialog
        video={selectedWorkshop}
        open={!!selectedWorkshop}
        onOpenChange={(open) => !open && setSelectedWorkshop(null)}
        isEnrolled={false}
        onEnrollmentComplete={() => {}}
      />
    </>
  );
}