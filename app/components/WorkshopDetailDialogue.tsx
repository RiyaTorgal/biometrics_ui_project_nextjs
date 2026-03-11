"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Play,
  Share2,
  BookOpen,
  Award,
  Users,
  Download,
  CheckCircle,
  Lock,
  Tag,
  ChevronRight,
  CreditCard,
  Mail,
  User,
  CalendarDays,
  MailCheck,
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

interface CourseVideo {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  completed: boolean;
  locked: boolean;
}

interface CourseDetailDialogProps {
  video: CourseVideo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isEnrolled: boolean;
  onEnrollmentComplete?: (courseId: number) => void;
}

/* -------------------- Workshop Data -------------------- */

const workshopDetails: Record<
  number,
  {
    description: string;
    instructor: string;
    students: number;
    date: string;
    rating: number;
    originalPrice: string;
    discountPrice: string;
    discountPercent: number;
    includes: string[];
  }
> = {
  /* -------------------------------------------------- */
  /* Introductory Agri-Proteomics Workshop */
  /* -------------------------------------------------- */
  1: {
    description:
      "An introductory workshop designed to build strong conceptual foundations in plant proteomics and crop molecular research. Participants gain exposure to LC–MS/MS workflows, plant stress proteomics, crop resilience research, and career pathways in agri-proteomics.",
    instructor: "Dr. Priyadarshini Tilak",
    students: 320,
    date: "Flexible Schedule",
    rating: 4.8,
    originalPrice: "₹6,000",
    discountPrice: "₹3,500",
    discountPercent: 42,
    includes: [
      "Fundamentals of plant proteomics",
      "Introduction to LC–MS/MS workflows",
      "Plant stress & crop resilience concepts",
      "Yield improvement research overview",
      "Career pathways in Agri-Proteomics",
      "Participation certificate",
    ],
  },

  /* -------------------------------------------------- */
  /* 2–3 Day Intensive Agri-Proteomics Workshop */
  /* -------------------------------------------------- */
  2: {
    description:
      "A hands-on intensive workshop focusing on applied LC–MS/MS workflows for plant systems. The program emphasizes experimental design, DDA vs DIA strategy planning, real-world case studies, and workflow design exercises for sustainable agriculture research.",
    instructor: "Dr. Priyadarshini Tilak",
    students: 180,
    date: "Batch Based",
    rating: 4.9,
    originalPrice: "₹15,000",
    discountPrice: "₹11,000",
    discountPercent: 27,
    includes: [
      "Applied LC–MS/MS workflows for plant systems",
      "Experimental design in crop molecular research",
      "DDA vs DIA strategy planning",
      "Case studies in sustainable agriculture",
      "Workflow design exercises",
      "Hands-on research orientation",
    ],
  },

  /* -------------------------------------------------- */
  /* Advanced Certification in Plant Proteomics */
  /* -------------------------------------------------- */
  3: {
    description:
      "An advanced certification program covering the complete end-to-end plant proteomics workflow. The course includes sample preparation strategies, experimental design, proteomics data analysis fundamentals, and optional mass spectrometry facility exposure.",
    instructor: "Dr. Priyadarshini Tilak",
    students: 95,
    date: "6–8 Weeks Program",
    rating: 5.0,
    originalPrice: "₹40,000",
    discountPrice: "₹32,000",
    discountPercent: 20,
    includes: [
      "End-to-end plant proteomics workflow",
      "Sample preparation & digestion strategy",
      "Experimental design principles",
      "Basics of proteomics data analysis",
      "Research presentation & evaluation",
      "Optional mass spectrometry facility visit",
      "Certification upon successful evaluation",
    ],
  },

  /* -------------------------------------------------- */
  /* Biotechnology Industry Skill Development Program */
  /* -------------------------------------------------- */
  4: {
    description:
      "A structured industry-oriented biotechnology skill development program designed to bridge academic learning with real-world laboratory and analytical requirements. Ideal for students seeking industry-ready competencies beyond university curriculum.",
    instructor: "Sukshmadarshini™ Academic Team",
    students: 210,
    date: "4–6 Weeks Program",
    rating: 4.7,
    originalPrice: "₹25,000",
    discountPrice: "₹18,000",
    discountPercent: 28,
    includes: [
      "Advanced molecular biology techniques",
      "HPLC fundamentals",
      "LC–MS/MS workflow understanding",
      "Experimental design strategy",
      "Translational data interpretation",
      "Research profile building & career positioning",
    ],
  },
};

/* -------------------- Helpers -------------------- */

// const COURSE_PRICE = "₹4,999";

const handleShare = (title: string, id: number) => {
  const url = `${window.location.origin}/learning?workshop=${id}`;

  if (navigator.share) {
    navigator.share({
      title,
      text: `Check out this workshop: ${title}`,
      url,
    });
  } else {
    navigator.clipboard.writeText(url).then(() => {
      // optional: you can trigger a toast here if you move handleShare inside the component
    });
  }
};
/* -------------------- Component -------------------- */

export default function WorkshopDetailDialog({
  video,
  open,
  onOpenChange,
  isEnrolled,
  onEnrollmentComplete,
}: CourseDetailDialogProps) {
  const { toast } = useToast();

  const [showEnrollModal, setShowEnrollModal] = useState(false);
  // const [step, setStep] = useState<"form" | "payment">("form");
  const [step, setStep] = useState<"form" | "confirmation">("form");


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  // const [paymentData, setPaymentData] = useState({
  //   cardNumber: "",
  //   cardholderName: "",
  //   expiryDate: "",
  //   cvv: "",
  // });

  if (!video) return null;

  const details = workshopDetails[video.id] || workshopDetails[1];
  const COURSE_PRICE = details.discountPrice;

  /* -------------------- Handlers -------------------- */

  // const handlePaymentSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   setTimeout(() => {
  //     const stored =
  //       localStorage.getItem("sukshmadarshini_enrolled_courses") || "[]";
  //     const enrolled = JSON.parse(stored);

  //     if (!enrolled.includes(video.id)) enrolled.push(video.id);

  //     localStorage.setItem(
  //       "sukshmadarshini_enrolled_courses",
  //       JSON.stringify(enrolled)
  //     );
  //     localStorage.setItem(
  //       "sukshmadarshini_user",
  //       JSON.stringify(formData)
  //     );

  //     toast({
  //       title: "🎉 Enrollment Successful",
  //       description: `You are now enrolled in "${video.title}".`,
  //     });

  //     setShowEnrollModal(false);
  //     setStep("form");
  //     setFormData({ name: "", email: "", organization: "" });
  //     setPaymentData({
  //       cardNumber: "",
  //       cardholderName: "",
  //       expiryDate: "",
  //       cvv: "",
  //     });

  //     onEnrollmentComplete?.(video.id);
  //   }, 1200);
  // };

  /* -------------------- Render -------------------- */

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTitle>{video.title}</DialogTitle>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-0">
          {/* Hero */}
          <div className="relative h-52">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-lg" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-xl font-bold text-white">
                {video.title}
              </h2>
              <p className="text-sm text-white/80">
                by {details.instructor}
              </p>
            </div>
          </div>

          <div className="p-6 space-y-5">
            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                {details.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {video.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {details.students.toLocaleString()} learners
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                {details.rating} rating
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {details.description}
            </p>

            <Separator />

            {/* Pricing */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold">
                  {details.discountPrice}
                </span>
                <span className="line-through text-sm text-muted-foreground">
                  {details.originalPrice}
                </span>
                <Badge variant="destructive">
                  <Tag className="w-3 h-3 mr-1" />
                  {details.discountPercent}% OFF
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleShare(video.title, video.id)}
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <Separator />

            {/* Includes */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                This workshop includes
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
              disabled={isEnrolled}
              onClick={() => setShowEnrollModal(true)}
            >
              {isEnrolled ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Already Enrolled
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Enroll Now
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enrollment Modal */}
      <Dialog open={showEnrollModal} onOpenChange={setShowEnrollModal}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              {step === "form" ? "Complete Your Registration" : "Confirmation"}
            </DialogTitle>
            <DialogDescription>
              {step === "form" 
                ? "Fill in your details to get started with your learning journey"
                : "Seat confirmation instructions will be sent via email"
              }
            </DialogDescription>
          </DialogHeader>

          {step === "form" ? (
            <form onSubmit={(e) => {
                e.preventDefault();
                setStep("confirmation");
              }} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full mt-6">
                Continue to Proceed
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          ) : (
            // <form onSubmit={handlePaymentSubmit} className="space-y-4 pt-4">
            //   <div className="bg-muted/50 p-4 rounded-lg mb-4">
            //     <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
            //     <p className="text-3xl font-bold">{COURSE_PRICE}</p>
            //   </div>

            //   <div className="space-y-2">
            //     <Label htmlFor="cardNumber">Card Number *</Label>
            //     <div className="relative">
            //       <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            //       <Input
            //         id="cardNumber"
            //         placeholder="1234 5678 9012 3456"
            //         value={paymentData.cardNumber}
            //         onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
            //         className="pl-10"
            //         required
            //       />
            //     </div>
            //   </div>

            //   <div className="space-y-2">
            //     <Label htmlFor="cardholderName">Cardholder Name *</Label>
            //     <Input
            //       id="cardholderName"
            //       placeholder="John Doe"
            //       value={paymentData.cardholderName}
            //       onChange={(e) => setPaymentData({ ...paymentData, cardholderName: e.target.value })}
            //       required
            //     />
            //   </div>

            //   <div className="grid grid-cols-2 gap-4">
            //     <div className="space-y-2">
            //       <Label htmlFor="expiryDate">Expiry Date *</Label>
            //       <Input
            //         id="expiryDate"
            //         placeholder="MM/YY"
            //         value={paymentData.expiryDate}
            //         onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
            //         required
            //       />
            //     </div>
            //     <div className="space-y-2">
            //       <Label htmlFor="cvv">CVV *</Label>
            //       <Input
            //         id="cvv"
            //         placeholder="123"
            //         type="password"
            //         maxLength={4}
            //         value={paymentData.cvv}
            //         onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
            //         required
            //       />
            //     </div>
            //   </div>

            //   <div className="flex gap-2 pt-4">
            //     {/* <Button 
            //       type="button" 
            //       variant="outline" 
            //       className="flex-1"
            //       onClick={() => setEnrollmentStep("form")}
            //     >
            //       Back
            //     </Button> */}
            //     <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
            //       <CreditCard className="w-4 h-4 mr-2" />
            //       Pay {COURSE_PRICE}
            //     </Button>
            //   </div>

            //   <p className="text-xs text-center text-muted-foreground mt-4">
            //     🔒 Secure payment powered by industry-standard encryption
            //   </p>
            // </form>
            <div className="space-y-6 pt-4 text-center">
              < MailCheck className="w-32 h-32 justify-center mx-auto text-primary" />
              {/* <div className="text-5xl">📩</div> */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                You will receive the confirmation email for the{" "}
                <span className="font-semibold text-foreground">
                  {video.title}
                </span>{" "}
                in a few hours.
                <br /><br />
                Please follow the steps given in the email to confirm your seat in the workshop.
              </p>
              <Button
                className="w-full"
                onClick={() => {
                  const stored =
                    localStorage.getItem("sukshmadarshini_enrolled_courses") || "[]";
                  const enrolled = JSON.parse(stored);
                  if (!enrolled.includes(video.id)) enrolled.push(video.id);
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
                    description: `Confirmation instructions sent for "${video.title}"`,
                  });
                  setShowEnrollModal(false);
                  setStep("form");
                  onEnrollmentComplete?.(video.id);
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