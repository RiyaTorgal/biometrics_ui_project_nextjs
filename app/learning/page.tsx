"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Eye,
  Play,
  FileText,
  Download,
  Clock,
  BookOpen,
  Video,
  ChevronRight,
  Lock,
  CheckCircle,
  CreditCard,
  Mail,
  User,
  Phone,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { ScrollArea } from "../components/ui/scroll-area";
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
import Image from "next/image";

/* ------------------ DATA ------------------ */

const trainingVideos = [
  {
    id: 1,
    title: "Introduction to Multi-Omics",
    duration: "15:30",
    thumbnail:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=225&fit=crop",
    description: "Learn the fundamentals of multi-omics analysis and integration",
  },
  {
    id: 2,
    title: "Genomics Fundamentals",
    duration: "22:45",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
    description: "Deep dive into genomic sequencing and data interpretation",
  },
  {
    id: 3,
    title: "Proteomics Deep Dive",
    duration: "28:15",
    thumbnail:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=225&fit=crop",
    description: "Master proteomic analysis techniques and applications",
  },
  {
    id: 4,
    title: "Metabolomics Applications",
    duration: "19:50",
    thumbnail:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=225&fit=crop",
    description: "Explore metabolomic pathways and clinical applications",
  },
  {
    id: 5,
    title: "Advanced Data Integration",
    duration: "35:20",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
    description: "Integrate multi-omics data for comprehensive insights",
  },
];

const studyMaterials = [
  {
    id: 1,
    title: "Multi-Omics Handbook",
    type: "PDF",
    size: "2.4 MB",
    category: "Guide",
    description: "Comprehensive guide to multi-omics methodologies",
  },
  {
    id: 2,
    title: "Genomics Lab Protocols",
    type: "PDF",
    size: "1.8 MB",
    category: "Protocol",
    description: "Step-by-step laboratory protocols for genomic analysis",
  },
  {
    id: 3,
    title: "Case Studies Collection",
    type: "PDF",
    size: "3.2 MB",
    category: "Reference",
    description: "Real-world applications and research findings",
  },
];

const COURSE_PRICE = "₹4,999";

/* ------------------ COMPONENT ------------------ */

export default function LearningPage() {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [enrollmentStep, setEnrollmentStep] = useState<"form" | "payment">("form");
  const { toast } = useToast();

  // Form states
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

  // Check enrollment status on mount
  useEffect(() => {
    const enrolled = localStorage.getItem("sukshmadarshini_enrolled");
    if (enrolled === "true") {
      setIsEnrolled(true);
    }
  }, []);

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
      // Store enrollment
      localStorage.setItem("sukshmadarshini_enrolled", "true");
      localStorage.setItem("sukshmadarshini_user", JSON.stringify(formData));
      
      setIsEnrolled(true);
      setShowEnrollModal(false);
      
      toast({
        title: "🎉 Enrollment Successful!",
        description: "Welcome to SukshmaDarshini. You now have full access to all training materials.",
      });
      
      // Reset forms
      setEnrollmentStep("form");
      setFormData({ name: "", email: "", phone: "", organization: "" });
      setPaymentData({ cardNumber: "", expiryDate: "", cvv: "", cardholderName: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:shadow-xl transition-shadow">
              <Eye className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              SukshmaDarshini Learning
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {isEnrolled ? (
              <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                <CheckCircle className="w-3 h-3 mr-1" />
                Enrolled
              </Badge>
            ) : (
              <Button 
                onClick={() => setShowEnrollModal(true)}
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Enroll Now
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Master Multi-Omics Analysis
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive training program covering genomics, proteomics, metabolomics, and advanced data integration techniques
          </p>
          
          {!isEnrolled && (
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Complete Course Access</p>
                    <p className="text-3xl font-bold text-foreground">{COURSE_PRICE}</p>
                    <p className="text-sm text-muted-foreground mt-1">One-time payment • Lifetime access</p>
                  </div>
                  <Button 
                    size="lg"
                    onClick={() => setShowEnrollModal(true)}
                    className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
                  >
                    Start Learning Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="videos">
              <Video className="mr-2 h-4 w-4" />
              Training Videos
            </TabsTrigger>
            <TabsTrigger value="materials">
              <FileText className="mr-2 h-4 w-4" />
              Study Materials
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trainingVideos.map((video, index) => (
                <Card 
                  key={video.id} 
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/50"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!isEnrolled && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <Lock className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="pt-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg leading-tight">{video.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        #{index + 1}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {video.description}
                    </p>
                    <Button 
                      onClick={handleAccessContent}
                      variant={isEnrolled ? "default" : "secondary"}
                      className="w-full"
                    >
                      {isEnrolled ? (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Watch Now
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Enroll to Access
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="materials" className="mt-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {studyMaterials.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{item.type}</span>
                      <span>{item.size}</span>
                    </div>
                    <Button 
                      onClick={handleAccessContent}
                      variant={isEnrolled ? "default" : "secondary"}
                      className="w-full"
                      size="sm"
                    >
                      {isEnrolled ? (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Enroll to Access
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* ENROLLMENT MODAL */}
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
    </div>
  );
}