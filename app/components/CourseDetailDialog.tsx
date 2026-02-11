"use client"
import { 
  Clock, Play, Share2, BookOpen, Video, FileText, 
  Award, Users, Download, CheckCircle, Lock, Tag,
  ChevronRight,
  CreditCard,
  Mail,
  Phone,
  User
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
import Image from "next/image";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

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

const courseDetails: Record<number, {
  description: string;
  instructor: string;
  students: number;
  rating: number;
  originalPrice: string;
  discountPrice: string;
  discountPercent: number;
  includes: string[];
}> = {
  1: {
    description: "A comprehensive introduction to multi-omics approaches, covering the fundamentals of integrating genomics, proteomics, and metabolomics data for holistic biological insights.",
    instructor: "Dr. Sarah Chen",
    students: 1240,
    rating: 4.8,
    originalPrice: "$199",
    discountPrice: "$99",
    discountPercent: 50,
    includes: [
      "15 minutes of on-demand video",
      "Downloadable study materials",
      "Certificate of completion",
      "Lifetime access",
      "Practice exercises",
    ],
  },
  2: {
    description: "Deep dive into genomics fundamentals including DNA sequencing technologies, genome assembly, annotation techniques, and variant calling pipelines.",
    instructor: "Prof. James Miller",
    students: 980,
    rating: 4.7,
    originalPrice: "$249",
    discountPrice: "$149",
    discountPercent: 40,
    includes: [
      "22 minutes of on-demand video",
      "Lab protocol documents",
      "Certificate of completion",
      "Lifetime access",
      "Hands-on data exercises",
      "Community forum access",
    ],
  },
  3: {
    description: "Explore the world of proteomics with mass spectrometry techniques, protein identification, quantification methods, and post-translational modification analysis.",
    instructor: "Dr. Emily Watson",
    students: 750,
    rating: 4.9,
    originalPrice: "$279",
    discountPrice: "$179",
    discountPercent: 36,
    includes: [
      "28 minutes of on-demand video",
      "Sample datasets for practice",
      "Certificate of completion",
      "Lifetime access",
      "Expert Q&A sessions",
    ],
  },
  4: {
    description: "Learn metabolomics applications in clinical research, biomarker discovery, and pathway analysis using cutting-edge analytical techniques.",
    instructor: "Dr. Michael Park",
    students: 620,
    rating: 4.6,
    originalPrice: "$199",
    discountPrice: "$129",
    discountPercent: 35,
    includes: [
      "19 minutes of on-demand video",
      "Analysis templates",
      "Certificate of completion",
      "Lifetime access",
      "Case study walkthrough",
    ],
  },
  5: {
    description: "Master advanced techniques for integrating multi-omics datasets using statistical methods, network analysis, and machine learning approaches.",
    instructor: "Prof. Lisa Zhang",
    students: 430,
    rating: 4.9,
    originalPrice: "$349",
    discountPrice: "$249",
    discountPercent: 29,
    includes: [
      "35 minutes of on-demand video",
      "Code notebooks & scripts",
      "Certificate of completion",
      "Lifetime access",
      "1-on-1 mentoring session",
      "Advanced project assignments",
    ],
  },
  6: {
    description: "Apply machine learning algorithms to omics data for classification, clustering, feature selection, and predictive modeling in biological research.",
    instructor: "Dr. Alex Rivera",
    students: 890,
    rating: 4.8,
    originalPrice: "$399",
    discountPrice: "$279",
    discountPercent: 30,
    includes: [
      "42 minutes of on-demand video",
      "ML model templates",
      "Certificate of completion",
      "Lifetime access",
      "GPU cloud access for exercises",
      "Industry case studies",
    ],
  },
};


const handleShare = (title: string) => {
  if (navigator.share) {
    navigator.share({ title, text: `Check out this course: ${title}`, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
  }
};
const COURSE_PRICE = "₹4,999";


export default function CourseDetailDialog({ video, open, onOpenChange, isEnrolled, onEnrollmentComplete }: CourseDetailDialogProps) {
  const [enrollmentStep, setEnrollmentStep] = useState<"form" | "payment">("form");
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });

  if (!video) return null;
  
  const details = courseDetails[video.id] || courseDetails[1];


  const handleAccessContent = () => {
    if (isEnrolled) {
      // User is enrolled, allow access
      toast({
        title: "Access Granted",
        description: "Enjoy your learning content!",
      });
    } else {
      // Show enrollment modal
      setShowEnrollModal(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollmentStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    setTimeout(() => {
      // Get existing enrolled courses
      const enrolledCoursesStr = localStorage.getItem("sukshmadarshini_enrolled_courses");
      const enrolledCourses = enrolledCoursesStr ? JSON.parse(enrolledCoursesStr) : [];
      
      // Add current course to enrolled courses
      if (!enrolledCourses.includes(video.id)) {
        enrolledCourses.push(video.id);
      }
      
      // Store enrollment
      localStorage.setItem("sukshmadarshini_enrolled_courses", JSON.stringify(enrolledCourses));
      localStorage.setItem("sukshmadarshini_user", JSON.stringify(formData));
      
      setShowEnrollModal(false);
      
      toast({
        title: "🎉 Enrollment Successful!",
        description: `You now have access to "${video.title}".`,
      });
      
      // Reset forms
      setEnrollmentStep("form");
      setFormData({ name: "", email: "", phone: "", organization: "" });
      setPaymentData({ cardNumber: "", expiryDate: "", cvv: "", cardholderName: "" });
      
      // Notify parent to update enrollment status
      if (onEnrollmentComplete) {
        onEnrollmentComplete(video.id);
      }
    }, 1500);
  };


  return (
    <>
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-0">
        {/* Hero Image */}
        <div className="relative">
          <div className="w-full h-52">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover rounded-t-lg"
          />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent rounded-t-lg" />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-xl font-bold text-white drop-shadow-md">{video.title}</h2>
            <p className="text-white/80 text-sm mt-1">by {details.instructor}</p>
          </div>
          {video.completed && (
            <Badge className="absolute top-3 right-10 bg-secondary text-secondary-foreground">
              <CheckCircle className="w-3 h-3 mr-1" />
              Completed
            </Badge>
          )}
          {video.locked && (
            <Badge className="absolute top-3 right-10 bg-muted text-muted-foreground">
              <Lock className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          )}
        </div>

        <div className="p-6 space-y-5">
          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              {video.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary" />
              {details.students.toLocaleString()} students
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-primary" />
              {details.rating} rating
            </span>
          </div>

          {/* Description */}
          <DialogHeader>
            <DialogTitle className="text-base font-semibold sr-only">{video.title}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {details.description}
          </p>

          <Separator />

          {/* Pricing & Discount */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-foreground">{details.discountPrice}</span>
              <span className="text-sm text-muted-foreground line-through">{details.originalPrice}</span>
              <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                <Tag className="w-3 h-3 mr-1" />
                {details.discountPercent}% OFF
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleShare(video.title)}
              className="text-muted-foreground hover:text-primary"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          <Separator />

          {/* This Course Includes */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              This course includes:
            </h3>
            <ul className="space-y-2.5">
              {details.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <Button
            className="w-full"
            size="lg"
            disabled={video.locked && !isEnrolled}
            onClick={() => !isEnrolled ? setShowEnrollModal(true) : null}
          >
            {!isEnrolled ? (
              <>
                <Lock className="w-4 h-4 mr-2" />
                Enroll to Access
              </>
            ) : video.completed ? (
              <>
                <Play className="w-4 h-4 mr-2" />
                Watch Again
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Start Learning
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    <Dialog open={showEnrollModal} onOpenChange={setShowEnrollModal}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              {enrollmentStep === "form" ? "Complete Your Registration" : "Payment Details"}
            </DialogTitle>
            <DialogDescription>
              {enrollmentStep === "form" 
                ? "Fill in your details to get started with your learning journey"
                : `Complete your payment of ${COURSE_PRICE} to unlock all content`
              }
            </DialogDescription>
          </DialogHeader>

          {enrollmentStep === "form" ? (
            <form onSubmit={handleFormSubmit} className="space-y-4 pt-4">
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
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                Continue to Payment
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          ) : (
            <form onSubmit={handlePaymentSubmit} className="space-y-4 pt-4">
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                <p className="text-3xl font-bold">{COURSE_PRICE}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number *</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardholderName">Cardholder Name *</Label>
                <Input
                  id="cardholderName"
                  placeholder="John Doe"
                  value={paymentData.cardholderName}
                  onChange={(e) => setPaymentData({ ...paymentData, cardholderName: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date *</Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={paymentData.expiryDate}
                    onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    type="password"
                    maxLength={4}
                    value={paymentData.cvv}
                    onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setEnrollmentStep("form")}
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay {COURSE_PRICE}
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-4">
                🔒 Secure payment powered by industry-standard encryption
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}