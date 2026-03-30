"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Clock,
  Play,
  Share2,
  BookOpen,
  Award,
  Users,
  CheckCircle,
  Lock,
  Tag,
  ChevronRight,
  Mail,
  User,
  CalendarDays,
  MailCheck,
  AlertCircle,
  CheckCircle2,
  Loader2,
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

type EnrollmentForm = {
  name: string;
  email: string;
};

type FormErrors = Partial<Record<keyof EnrollmentForm, string>>;

type EmailCheckStatus = "idle" | "checking" | "valid" | "invalid";

async function checkEmail(
  email: string
): Promise<{ valid: boolean; reason?: string }> {
  try {
    const res = await fetch(
      `/api/validateEmail?email=${encodeURIComponent(email)}`,
      { cache: "no-store" }
    );
    if (!res.ok) return { valid: true };
    return res.json();
  } catch {
    return { valid: true };
  }
}

const FAKE_NAME_PATTERNS = [
  /^(.)\1{2,}$/i,
  /^[^aeiou]{5,}$/i,
  /^(test|fake|asdf|qwerty|admin|user|anon|anonymous|nobody|noone|noreply|abc|xyz)$/i,
  /^[a-z]{1,2}$/i,
  /\d{3,}/,
  /^(.{1,3})\1{2,}$/i,
];

function validateName(value: string): string | null {
  const t = value.trim();
  if (!t) return "Full name is required.";
  if (t.length < 2) return "Name is too short.";
  if (t.length > 50) return "Name is too long.";
  if (!/^[\p{L}\p{M}'\- ]+$/u.test(t)) return "Name contains invalid characters.";
  for (const p of FAKE_NAME_PATTERNS) {
    if (p.test(t)) return "Please enter your real name.";
  }
  return null;
}

function validateEmailFormat(value: string): string | null {
  const t = value.trim().toLowerCase();
  if (!t) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t))
    return "Please enter a valid email address.";
  return null;
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

const handleShare = (title: string, id: number) => {
  const url = `${window.location.origin}/services?workshop=${id}`;
  if (navigator.share) {
    navigator.share({
      title,
      text: `Check out this workshop: ${title}`,
      url,
    });
  } else {
    navigator.clipboard.writeText(url);
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
  const [step, setStep] = useState<"form" | "confirmation">("form");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof EnrollmentForm, boolean>>
  >({});
  const [emailCheckStatus, setEmailCheckStatus] =
    useState<EmailCheckStatus>("idle");
  const emailDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<EnrollmentForm>({
    name: "",
    email: "",
  });

  if (!video) return null;

  const details = workshopDetails[video.id] ?? workshopDetails[1];

  /* ── Validation ─────────────────────────────────────────────────────────── */

  function runValidation(data: EnrollmentForm): FormErrors {
    return {
      name: validateName(data.name) ?? undefined,
      email: validateEmailFormat(data.email) ?? undefined,
    };
  }

  /* ── Email handlers ──────────────────────────────────────────────────────── */

  async function handleEmailBlur() {
    setTouched((p) => ({ ...p, email: true }));
    const formatError = validateEmailFormat(formData.email);
    if (formatError) {
      setErrors((p) => ({ ...p, email: formatError }));
      setEmailCheckStatus("idle");
      return;
    }
    setEmailCheckStatus("checking");
    setErrors((p) => ({ ...p, email: undefined }));
    try {
      const result = await checkEmail(formData.email);
      setEmailCheckStatus(result.valid ? "valid" : "invalid");
      setErrors((p) => ({
        ...p,
        email: result.valid
          ? undefined
          : (result.reason ?? "This email address could not be verified."),
      }));
    } catch {
      setEmailCheckStatus("idle");
    }
  }

  function handleEmailChange(value: string) {
    setFormData((p) => ({ ...p, email: value }));
    setEmailCheckStatus("idle");
    if (touched.email) {
      const formatError = validateEmailFormat(value);
      setErrors((p) => ({ ...p, email: formatError ?? undefined }));
      if (!formatError) {
        if (emailDebounceRef.current) clearTimeout(emailDebounceRef.current);
        emailDebounceRef.current = setTimeout(async () => {
          setEmailCheckStatus("checking");
          try {
            const result = await checkEmail(value);
            setEmailCheckStatus(result.valid ? "valid" : "invalid");
            setErrors((p) => ({
              ...p,
              email: result.valid
                ? undefined
                : (result.reason ?? "This email could not be verified."),
            }));
          } catch {
            setEmailCheckStatus("idle");
          }
        }, 800);
      }
    }
  }

  /* ── Generic field handlers ──────────────────────────────────────────────── */

  function handleBlur(field: keyof EnrollmentForm) {
    if (field === "email") return;
    setTouched((p) => ({ ...p, [field]: true }));
    const errs = runValidation(formData);
    setErrors((p) => ({ ...p, [field]: errs[field] }));
  }

  function handleChange(field: keyof EnrollmentForm, value: string) {
    if (field === "email") {
      handleEmailChange(value);
      return;
    }
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      const errs = runValidation(updated);
      setErrors((p) => ({ ...p, [field]: errs[field] }));
    }
  }

  /* ── Submit ──────────────────────────────────────────────────────────────── */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true });

    if (emailCheckStatus === "checking") {
      toast({
        title: "Please wait",
        description: "Verifying email address…",
      });
      return;
    }

    const allErrors = runValidation(formData);
    if (emailCheckStatus === "invalid") {
      allErrors.email =
        errors.email ?? "This email address could not be verified.";
    }
    setErrors(allErrors);

    if (Object.values(allErrors).some(Boolean)) {
      toast({
        title: "Please fix the errors",
        description: "Some fields contain invalid or suspicious values.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    // Simulate a brief async action (e.g. API call) before advancing
    await new Promise((res) => setTimeout(res, 400));
    setLoading(false);
    setStep("confirmation");
  };

  /* ── Sub-components ──────────────────────────────────────────────────────── */

  function FieldError({ field }: { field: keyof EnrollmentForm }) {
    if (!touched[field] || !errors[field]) return null;
    return (
      <p className="flex items-center gap-1 mt-1 text-xs text-destructive">
        <AlertCircle className="w-3 h-3 shrink-0" />
        {errors[field]}
      </p>
    );
  }

  function EmailIndicator() {
    if (emailCheckStatus === "checking")
      return (
        <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground" />
      );
    if (emailCheckStatus === "valid")
      return (
        <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
      );
    if (emailCheckStatus === "invalid")
      return (
        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
      );
    return null;
  }

  const emailBorderClass =
    touched.email && errors.email
      ? "border-destructive focus-visible:ring-destructive"
      : emailCheckStatus === "valid"
      ? "border-green-500 focus-visible:ring-green-500"
      : "";

  /* ── Confirmation done handler ───────────────────────────────────────────── */

  function handleDone() {
    const stored =
      localStorage.getItem("sukshmadarshini_enrolled_courses") || "[]";
    const enrolled: number[] = JSON.parse(stored);
    if (!enrolled.includes(video!.id)) enrolled.push(video!.id);
    localStorage.setItem(
      "sukshmadarshini_enrolled_courses",
      JSON.stringify(enrolled)
    );
    localStorage.setItem("sukshmadarshini_user", JSON.stringify(formData));
    toast({
      title: "Confirmation email sent",
      description: `Confirmation instructions sent for "${video!.title}"`,
    });
    setShowEnrollModal(false);
    setStep("form");
    setFormData({ name: "", email: "" });
    setTouched({});
    setErrors({});
    setEmailCheckStatus("idle");
    onEnrollmentComplete?.(video!.id);
  }

  /* -------------------- Render -------------------- */

  return (
    <>
      {/* ── Workshop Detail Dialog ── */}
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
              <h2 className="text-xl font-bold text-white">{video.title}</h2>
              <p className="text-sm text-white/80">by {details.instructor}</p>
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

      {/* ── Enrollment Modal ── */}
      <Dialog open={showEnrollModal} onOpenChange={setShowEnrollModal}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              {step === "form" ? "Complete Your Registration" : "Confirmation"}
            </DialogTitle>
            <DialogDescription>
              {step === "form"
                ? "Fill in your details to get started with your learning journey"
                : "Seat confirmation instructions will be sent via email"}
            </DialogDescription>
          </DialogHeader>

          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    className={
                      touched.name && errors.name
                        ? "border-destructive focus-visible:ring-destructive pl-10"
                        : "pl-10"
                    }
                    required
                  />
                </div>
                <FieldError field="name" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={handleEmailBlur}
                    className={`pl-10 pr-9 ${emailBorderClass}`}
                    required
                  />
                  <EmailIndicator />
                </div>
                <FieldError field="email" />
              </div>

              <Button
                type="submit"
                className="w-full mt-6"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-2" />
                )}
                {loading ? "Verifying…" : "Continue to Confirmation"}
              </Button>
            </form>
          ) : (
            <div className="space-y-6 pt-4 text-center">
              <MailCheck className="w-32 h-32 justify-center mx-auto text-primary" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                You will receive the confirmation email for the{" "}
                <span className="font-semibold text-foreground">
                  {video.title}
                </span>{" "}
                in a few hours.
                <br />
                <br />
                Please follow the steps given in the email to confirm your seat
                in the workshop.
              </p>
              <Button className="w-full" onClick={handleDone}>
                Done
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}