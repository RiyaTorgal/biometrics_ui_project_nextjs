// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Clock,
//   Users,
//   Briefcase,
//   CheckCircle,
//   BookOpenText,
// } from "lucide-react";

// import { Button } from "../components/ui/button";
// import {
//   Card,
//   CardContent,
// } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "../components/ui/tabs";
// import { useToast } from "../hooks/use-toast";
// import WorkshopDetailDialog from "../components/WorkshopDetailDialogue";
// import LectureDetailDialog from "../components/LectureDetailDialogue";
// import ConsultationDetailDialog from "../components/ConsultationDetailDialogue";

// /* ------------------ DATA ------------------ */
// const lectures = [
//   {
//     id: 1,
//     category: "Agri-Proteomics & Crop Molecular Innovation",
//     title: "Fundamentals of Plant Proteomics",
//     duration: "3–4 Hours",
//     mode: "Online / Offline",
//     idealFor: "Agriculture & Biotechnology students",
//     priceNote: "Early bird and group discounts available",
//     content: [
//       "Fundamentals of plant proteomics",
//       "Introduction to LC–MS/MS workflows",
//       "Plant stress proteomics concepts",
//       "Crop resilience & yield improvement research",
//       "Career pathways in Agri-Proteomics",
//     ],
//     thumbnail:
//       "/Fundamentals of Plant Proteomics.png",
//   },
//   {
//     id: 2,
//     category: "Precision Organic Farming",
//     title: "Precision Organic Farming Masterclass",
//     duration: "1-Day Field Implementation",
//     mode: "Offline (Field आधारित training)",
//     idealFor:
//       "Farmers, FPOs, agri-entrepreneurs, and growers of fruits, medicinal plants, and high-value vegetables",
//     priceNote:
//       "₹5,000 per person | ₹3,500 (Group/FPO, min. 5 people)",
//     content: [
//       "Precision Nutrient Timing using leaf-sap analysis",
//       "Brix monitoring to detect 'silent' deficiencies",
//       "Biological Yield Engineering techniques",
//       "Standardization of farm-made inputs",
//       "Measuring and improving microbial density in ferments",
//       "Improving crop quality, appearance, and chemical consistency",
//     ],
//     thumbnail: "/Precision Organic Farming.jpeg", // change if needed
//   },
// ];

// const workshops = [
//   // {
//   //   id: 1,
//   //   category: "Agri-Proteomics & Crop Molecular Innovation",
//   //   title: "Fundamentals of Plant Proteomics",
//   //   duration: "3–4 Hours",
//   //   mode: "Online / Offline",
//   //   idealFor: "Agriculture & Biotechnology students",
//   //   priceNote: "Early bird and group discounts available",
//   //   content: [
//   //     "Fundamentals of plant proteomics",
//   //     "Introduction to LC–MS/MS workflows",
//   //     "Plant stress proteomics concepts",
//   //     "Crop resilience & yield improvement research",
//   //     "Career pathways in Agri-Proteomics",
//   //   ],
//   //   thumbnail:
//   //     "/Fundamentals of Plant Proteomics.png",
//   // },
//   {
//     id: 2,
//     category: "Agri-Proteomics & Crop Molecular Innovation",
//     title: "2–3 Day Intensive Agri-Proteomics Workshop",
//     duration: "2–3 Days",
//     mode: "Online / Offline",
//     idealFor: "Advanced students & researchers",
//     priceNote: "Depends on batch size & format",
//     content: [
//       "Applied LC–MS/MS workflows for plant systems",
//       "Experimental design in crop molecular research",
//       "DDA vs DIA strategy planning",
//       "Case studies in sustainable agriculture",
//       "Workflow design exercises",
//     ],
//     thumbnail:
//       "/2–3 Day Intensive Agri-Proteomics Workshop.png",
//   },
//   {
//     id: 3,
//     category: "Agri-Proteomics & Crop Molecular Innovation",
//     title: "Advanced Certification in Plant Proteomics",
//     duration: "6–8 Weeks",
//     mode: "Hybrid / Offline Preferred",
//     idealFor: "Research-track learners",
//     priceNote: "Depends on batch size & format",
//     content: [
//       "End-to-end plant proteomics workflow",
//       "Sample preparation & digestion strategy",
//       "Experimental design principles",
//       "Visit to Mass Spectrometry facility (Optional)",
//       "Basics of proteomics data analysis",
//       "Research presentation & evaluation (Optional)",
//     ],
//     thumbnail:
//       "/Advanced Course in Plant Proteomics.png",
//   },
//   {
//     id: 4,
//     category: "Biotechnology Industry Skill Development",
//     title: "Biotechnology Industry Skill Development Program",
//     duration: "4–6 Weeks",
//     mode: "Online / Hybrid",
//     idealFor: "Students seeking industry-ready biotech skills",
//     priceNote: "Depends on batch size & format",
//     content: [
//       "Advanced molecular biology techniques",
//       "HPLC fundamentals",
//       "LC–MS/MS workflows",
//       "Experimental design strategy",
//       "Translational data interpretation",
//       "Research profile building & career positioning",
//     ],
//     thumbnail:
//       "/Biotechnology Career Advancement Program.png",
//   },
// ];

// const consultationServices = [
//   {
//     id: 1,
//     title: "Proteomics Workflow & Sample Preparation Consulting",
//     duration: "60-minute session • Project-based available",
//     price: "₹3,500 per session",
//     thumbnail:
//       "/Proteomics Workflow & Sample Preparation Consulting.jpg",
//     mode: "Online",
//     audience: "Researchers • Labs • Institutions",
//     description:
//       "Strategic consulting support for experimental design, LC–MS/MS workflows, and sample preparation optimization in plant proteomics research.",
//     includes: [
//       "Plant tissue protein extraction strategies",
//       "Sample clean-up & digestion optimization",
//       "DDA & DIA workflow planning",
//       "Contaminant mitigation & QC strategy",
//       "Targeted vs discovery proteomics planning",
//       "Free 15-minute discovery call",
//     ],
//     cta: "Book Session",
//   },

//   /* -------------------------------------------------- */
//   /* 2A. Europe Profile Review Session */
//   /* -------------------------------------------------- */
//   {
//     id: 2,
//     title: "European Science Pathway – Profile Review Session",
//     duration: "60 Minutes",
//     price: "₹2,500 per session",
//     thumbnail:
//       "/European Science Pathway – Profile Review Session.png",
//     mode: "Online",
//     audience: "Biotech • Agriculture • Molecular Biology Students",
//     description:
//       "Scientific profile evaluation and strategic recommendations for Master's or PhD pathways in Europe.",
//     includes: [
//       "Scientific CV review",
//       "Program alignment advice",
//       "Skill gap assessment",
//       "Personalized academic strategy guidance",
//     ],
//     cta: "Book Session",
//   },

//   /* -------------------------------------------------- */
//   /* 2B. Application Strategy Package */
//   /* -------------------------------------------------- */
//   // {
//   //   id: 3,
//   //   title: "Europe Application Strategy Package (Basic)",
//   //   duration: "Flexible",
//   //   price: "₹2,500 per session",
//   //   thumbnail:
//   //     "/Europe Application Strategy Package (Basic).png",
//   //   mode: "Online",
//   //   audience: "Students applying to European universities",
//   //   description:
//   //     "Structured guidance for university selection, SOP improvement, and application planning.",
//   //   includes: [
//   //     "University shortlist (5–7 programs)",
//   //     "SOP review (1 round)",
//   //     "CV optimization",
//   //     "Application timeline planning",
//   //   ],
//   //   cta: "Book Session",
//   // },

//   /* -------------------------------------------------- */
//   /* 2C. Comprehensive Europe Mentorship */
//   /* -------------------------------------------------- */
//   {
//     id: 4,
//     title: "Comprehensive Europe Mentorship (Premium)",
//     duration: "3 Months • 10 Meetings",
//     price: "₹20,000",
//     thumbnail:
//       "/Comprehensive Europe Mentorship (Premium).png",
//     mode: "Online Mentorship",
//     audience: "Serious Master's / PhD applicants",
//     description:
//       "End-to-end structured mentorship for European academic admissions, research alignment, and interview preparation.",
//     includes: [
//       "Research alignment strategy",
//       "University shortlisting",
//       "SOP drafting guidance",
//       "Multiple review rounds",
//       "Interview preparation",
//       "Skill development roadmap",
//       "End-to-end mentorship support",
//     ],
//     cta: "Apply for Mentorship",
//   },
// ];


// /* ------------------ COMPONENT ------------------ */

// export default function ServicesPage() {
//   const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
//   const [selectedLecture, setSelectedLecture] = useState<any>(null);
//   const [selectedService, setSelectedService] = useState<any>(null);
//   const [selectedConsultation, setSelectedConsultation] = useState<any>(null);
//   const [showEnrollModal, setShowEnrollModal] = useState(false);
//   const [enrollmentStep, setEnrollmentStep] = useState<"form" | "confirmation">("form");
  
//   const { toast } = useToast();
  
//   const COURSE_PRICE = selectedService?.price ?? "";
//   const COURSE_NAME = selectedService?.title ?? "";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     organization: "",
//   });

//   // const getInitialTab = () => {
//   //   if (typeof window !== "undefined") {
//   //     const hash = window.location.hash.replace("#", "");
//   //     if (hash === "consulting" || hash === "workshops") return hash;
//   //   }
//   //   return "workshops";
//   // };

//   // ✅ This does the job — getInitialTab is redundant


//   const [activeTab, setActiveTab] = useState<string>("lectures");

//   useEffect(() => {
//     const readHash = () => {
//       const hash = window.location.hash.replace("#", "");
//       if (hash === "consulting" || hash === "workshops" || hash === "lectures") {
//         setActiveTab(hash);
//       }
//     };

//     // Read immediately on mount
//     readHash();

//     // Also read after a short delay — Next.js Link navigation with hashes
//     // sometimes settles the URL after the initial render cycle
//     const timer = setTimeout(readHash, 50);

//     window.addEventListener("hashchange", readHash);
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("hashchange", readHash);
//     };
//   }, []);

//   // useEffect(() => {
//   //   // Set tab based on hash after mount (avoids SSR mismatch)
//   //   const hash = window.location.hash.replace("#", "");
//   //   if (hash === "consulting" || hash === "workshops") {
//   //     setActiveTab(hash);
//   //   }
//   // }, []);

//   // const [paymentData, setPaymentData] = useState({
//   //   cardNumber: "",
//   //   expiryDate: "",
//   //   cvv: "",
//   //   cardholderName: "",
//   // });

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setEnrollmentStep("confirmation");
//   };

//   // const handlePaymentSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setTimeout(() => {
//   //     setShowEnrollModal(false);
//   //     setEnrollmentStep("form");
//   //     toast({
//   //       title: "🎉 Registration Successful",
//   //       description:
//   //         "Our team will contact you shortly with workshop details.",
//   //     });
//   //     setFormData({ name: "", email: "", organization: "" });
//   //     setPaymentData({
//   //       cardNumber: "",
//   //       expiryDate: "",
//   //       cvv: "",
//   //       cardholderName: "",
//   //     });
//   //   }, 1200);
//   // };

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
//         <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl shadow-sm">
//          <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
//            <Link href="/" className="flex items-center gap-3 group">
//              <Image 
//                src="/official logo.svg" 
//                alt="EyeIcon Navbar Logo" 
//                width={56}   // w-14 in Tailwind = 14 * 4px = 56px
//                height={40}  // h-10 in Tailwind = 10 * 4px = 40px
//                className="object-contain"
//              />
//              <div className="flex flex-col">
//                <span className="font-display text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
//                  Sukshmadarshini Services
//                </span>
//                <span className="text-xs text-muted-foreground">
//                  Insight Beyond Vision
//                </span>
//              </div>
//            </Link>
//          </div>
//        </nav>

//         {/* HERO */}
//         <section className="container mx-auto px-4 py-14 text-center">
//           <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent">
//             Advanced Agri-Proteomics Workshops & Research Consulting
//           </h1>
//           <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
//             Hands-on training, workflow consulting, and strategic mentorship in
//             plant proteomics and molecular agriculture.
//           </p>
//         </section>

//         {/* CONTENT */}
//         <main className="container mx-auto px-4 pb-16">
//           <Tabs
//             value={activeTab}
//             onValueChange={(val) => {
//               setActiveTab(val);
//               window.location.hash = val;
//             }}>
//             <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-1 md:grid-cols-3 h-auto">
//               <TabsTrigger value="lectures">
//                 <BookOpenText className="w-4 h-4 mr-2" />
//                 Lectures provided
//               </TabsTrigger>
//               <TabsTrigger value="workshops">
//                 <Users className="w-4 h-4 mr-2" />
//                 Workshops & Programs
//               </TabsTrigger>
//               <TabsTrigger value="consulting">
//                 <Briefcase className="w-4 h-4 mr-2" />
//                 Consulting Services
//               </TabsTrigger>
//             </TabsList>

//             {/* LECTURES */}
//             <TabsContent value="lectures" className="mt-10 text-center">
//               <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
//                 One-on-One & Group Lectures
//               </h3>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {lectures.map((l) => (
//                   <Card
//                     key={l.id}
//                     className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col"
//                     onClick={() => setSelectedLecture(l)}
//                   >
//                     <div className="relative h-48 w-full overflow-hidden bg-muted">
//                       <Image
//                         src={l.thumbnail}
//                         alt={l.title}
//                         fill
//                         className="object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
//                       />
//                       <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
//                         <Clock className="w-3 h-3" />
//                         {l.duration}
//                       </div>
//                     </div>

//                     <CardContent className="pt-4 flex flex-col flex-1">
//                       <div className="flex-1 space-y-3">
//                         <Badge variant="outline">{l.category}</Badge>
//                         <h3 className="font-semibold text-lg">{l.title}</h3>

//                         <p className="text-sm text-muted-foreground">
//                           <strong>Mode:</strong> {l.mode}
//                         </p>

//                         <ul className="space-y-2 text-sm text-muted-foreground">
//                           {l.content.slice(0, 3).map((c, i) => (
//                             <li key={i} className="flex items-start gap-2">
//                               <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
//                               <span>{c}</span>
//                             </li>
//                           ))}
//                           <li className="italic text-xs text-muted-foreground">+ more</li>
//                         </ul>

//                         <p className="text-xs italic text-muted-foreground">
//                           {l.priceNote}
//                         </p>
//                       </div>

//                       <Button variant="secondary" className="w-full mt-4">
//                         View Details
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
            
//             {/* WORKSHOPS */}
//             <TabsContent value="workshops" className="mt-10 text-center">
//               <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
//                 Offline and Online Workshops
//               </h3>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {workshops.map((w) => (
//                   <Card
//                     key={w.id}
//                     className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col"
//                     onClick={() => setSelectedWorkshop(w)}
//                   >
//                     <div className="relative h-48">
//                       <Image
//                         src={w.thumbnail}
//                         alt={w.title}
//                         fill
//                         className="object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
//                       />
//                       <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
//                         <Clock className="w-3 h-3" />
//                         {w.duration}
//                       </div>
//                     </div>

//                     <CardContent className="pt-4 flex flex-col flex-1">
//                       <div className="flex-1 space-y-3">
//                         <Badge variant="outline">{w.category}</Badge>
//                         <h3 className="font-semibold text-lg">{w.title}</h3>

//                         <p className="text-sm text-muted-foreground">
//                           <strong>Mode:</strong> {w.mode}
//                         </p>

//                         <ul className="space-y-2 text-sm text-muted-foreground">
//                           {w.content.slice(0, 3).map((c, i) => (
//                             <li key={i} className="flex items-start gap-2">
//                               <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
//                               <span>{c}</span>
//                             </li>
//                           ))}
//                           <li className="italic text-xs text-muted-foreground">+ more</li>
//                         </ul>

//                         <p className="text-xs italic text-muted-foreground">
//                           {w.priceNote}
//                         </p>
//                       </div>

//                       <Button variant="secondary" className="w-full mt-4">
//                         View Details
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>

//             {/* CONSULTING */}
//             <TabsContent value="consulting" className="mt-10 text-center">
//               <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
//                 Consultation Services
//               </h3>

//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {consultationServices.map((service, index) => (
//                   <Card
//                     key={service.id}
//                     // className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1"
//                     className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col"
//                   >
//                     {/* Thumbnail */}
//                     <div className="relative h-48 w-full overflow-hidden bg-muted">
//                       <Image
//                         src={service.thumbnail}
//                         alt={service.title}
//                         fill
//                         className="object-cover transition-transform duration-300 hover:scale-105"
//                       />
//                       <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
//                         <Clock className="w-3 h-3" />
//                         {service.duration}
//                       </div>
//                     </div>

//                     {/* <CardContent className="pt-4 flex flex-col flex-1">
//                       <div className="flex items-start justify-between gap-2">
//                         <h3 className="font-semibold text-lg leading-tight">
//                           {service.title}
//                         </h3>
//                         <Badge variant="secondary" className="text-xs">
//                           #{index + 1}
//                         </Badge>
//                       </div>

//                       <p className="text-sm text-muted-foreground line-clamp-3">
//                         {service.description}
//                       </p>

//                       <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
//                         <Badge variant="outline">{service.mode}</Badge>
//                         <Badge variant="outline">{service.audience}</Badge>
//                       </div>

//                       <Button
//                         onClick={() => {
//                           setSelectedService(service);
//                           setShowEnrollModal(true);
//                           setEnrollmentStep("form");
//                         }}
//                         className="w-full"
//                       >
//                         <Briefcase className="w-4 h-4 mr-2" />
//                         {service.cta}
//                       </Button>
//                       <Button
//                         onClick={() => setSelectedConsultation(service)}
//                         className="w-full"
//                       >
//                         <Briefcase className="w-4 h-4 mr-2" />
//                         {service.cta}
//                       </Button>
//                     </CardContent> */}
//                     <CardContent className="pt-4 flex flex-col flex-1">
//                       <div className="flex-1 space-y-3">
//                         <div className="flex items-start justify-between gap-2">
//                           <h3 className="font-semibold text-lg leading-tight">
//                             {service.title}
//                           </h3>
//                           {/* <Badge variant="secondary" className="text-xs">
//                             #{index + 1}
//                           </Badge> */}
//                         </div>

//                         <p className="text-sm text-muted-foreground line-clamp-3">
//                           {service.description}
//                         </p>

//                         <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
//                           <Badge variant="outline">{service.mode}</Badge>
//                           <Badge variant="outline">{service.audience}</Badge>
//                         </div>
//                       </div>

//                       <Button
//                         onClick={() => setSelectedConsultation(service)}
//                         className="w-full mt-4"        // mt-4 replaces space-y-3 gap
//                       >
//                         <Briefcase className="w-4 h-4 mr-2" />
//                         {service.cta}
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </main>
//       </div>

//       {/* ENROLL MODAL */}
//       {/* <Dialog open={showEnrollModal} onOpenChange={setShowEnrollModal}>
//         <DialogContent className="max-w-md">
//           <DialogHeader>
//             {selectedService?.thumbnail && (
//               <div className="relative w-full h-40 rounded-lg overflow-hidden border">
//                 <Image
//                   src={selectedService.thumbnail}
//                   alt={selectedService.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             )}
//             <DialogTitle className="text-2xl font-display">
//               {enrollmentStep === "form"
//                 ? "Register Your Interest"
//                 : "Confirmation"}
//             </DialogTitle>

//             <DialogDescription>
//               <div className="space-y-4">
//                 {selectedService && (
//                   <>
//                     <div className="font-semibold text-lg text-foreground">
//                         {COURSE_NAME}
//                     </div>
//                     <div className="text-primary font-medium">
//                       {COURSE_PRICE}
//                     </div>
//                   </>
//                 )}
//               </div>
//               <div>
//                 {enrollmentStep === "form"
//                   ? "Enter your details to continue."
//                   : `Please follow the instructions to complete your registration.`}
//               </div>
//             </DialogDescription>
//           </DialogHeader>

//           {enrollmentStep === "form" ? (
//             <form onSubmit={handleFormSubmit} className="space-y-3 pt-4">
//               <Label>Full Name *</Label>
//               <Input
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 required
//               />
//               <Label>Email *</Label>
//               <Input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 required
//                 className="pb-5"
//               />
//               <Label>Organization (Optional)</Label>
//               <Input
//                 value={formData.organization}
//                 onChange={(e) =>
//                   setFormData({ ...formData, organization: e.target.value })
//                 }
//               />
//               <Button type="submit" className="w-full">
//                 Continue
//                 <ChevronRight className="w-4 h-4 ml-2" />
//               </Button>
//             </form>
//           ) : (
//              <div className="space-y-6 pt-4 text-center">
//               <MailCheck className="w-20 h-20 mx-auto text-primary" />
//               <p className="text-sm text-muted-foreground leading-relaxed">
//                 You will receive the confirmation email for the{" "}
//                 <span className="font-semibold text-foreground">
//                   {selectedService?.title}
//                 </span>{" "}
//                 in a few minutes.
//                 <br /><br />
//                 Please follow the steps given in the email to confirm your seat in the workshop.
//               </p>
//               <Button
//                 className="w-full"
//                 onClick={() => {
//                   const stored =
//                     localStorage.getItem("sukshmadarshini_enrolled_courses") || "[]";
//                   const enrolled = JSON.parse(stored);
//                   if (!enrolled.includes(selectedService?.id)) {
//                     enrolled.push(selectedService?.id);
//                   }
//                   localStorage.setItem(
//                     "sukshmadarshini_enrolled_courses",
//                     JSON.stringify(enrolled)
//                   );
//                   localStorage.setItem(
//                     "sukshmadarshini_user",
//                     JSON.stringify(formData)
//                   );
//                   toast({
//                     title: "Confirmation email sent",
//                     description: `Confirmation instructions sent for "${selectedService?.title}"`,
//                   });
//                   setShowEnrollModal(false);
//                   setEnrollmentStep("form");
//                   setSelectedService(null);
//                 }}
//               >
//                 Done
//               </Button>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog> */}

//       {/* DETAIL DIALOG */}
//       <LectureDetailDialog  
//         video={selectedLecture}
//         open={!!selectedLecture}
//         onOpenChange={(open) => !open && setSelectedLecture(null)}
//         isEnrolled={false}
//         onEnrollmentComplete={() => {}}
//       />
      
//       <WorkshopDetailDialog
//         video={selectedWorkshop}
//         open={!!selectedWorkshop}
//         onOpenChange={(open) => !open && setSelectedWorkshop(null)}
//         isEnrolled={false}
//         onEnrollmentComplete={() => {}}
//       />

//       <ConsultationDetailDialog
//         service={selectedConsultation}
//         open={!!selectedConsultation}
//         onOpenChange={(open) => !open && setSelectedConsultation(null)}
//         isBooked={false}
//         onBookingComplete={() => {}}
//       />
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname, useSearchParams } from "next/navigation";
// import {
//   Clock,
//   Users,
//   Briefcase,
//   CheckCircle,
//   BookOpenText,
// } from "lucide-react";

// import { Button } from "../components/ui/button";
// import {
//   Card,
//   CardContent,
// } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "../components/ui/tabs";
// import { useToast } from "../hooks/use-toast";
// import WorkshopDetailDialog from "../components/WorkshopDetailDialogue";
// import LectureDetailDialog from "../components/LectureDetailDialogue";
// import ConsultationDetailDialog from "../components/ConsultationDetailDialogue";

// /* ------------------ DATA ------------------ */
// const lectures = [
//   {
//     id: 1,
//     category: "Agri-Proteomics & Crop Molecular Innovation",
//     title: "Fundamentals of Plant Proteomics",
//     duration: "3–4 Hours",
//     mode: "Online / Offline",
//     idealFor: "Agriculture & Biotechnology students",
//     priceNote: "Early bird and group discounts available",
//     content: [
//       "Fundamentals of plant proteomics",
//       "Introduction to LC–MS/MS workflows",
//       "Plant stress proteomics concepts",
//       "Crop resilience & yield improvement research",
//       "Career pathways in Agri-Proteomics",
//     ],
//     thumbnail:
//       "/Fundamentals of Plant Proteomics.png",
//   },
//   {
//     id: 2,
//     category: "Precision Organic Farming",
//     title: "Precision Organic Farming Masterclass",
//     duration: "1-Day Field Implementation",
//     mode: "Offline (Field आधारित training)",
//     idealFor:
//       "Farmers, FPOs, agri-entrepreneurs, and growers of fruits, medicinal plants, and high-value vegetables",
//     priceNote:
//       "₹5,000 per person | ₹3,500 (Group/FPO, min. 5 people)",
//     content: [
//       "Precision Nutrient Timing using leaf-sap analysis",
//       "Brix monitoring to detect 'silent' deficiencies",
//       "Biological Yield Engineering techniques",
//       "Standardization of farm-made inputs",
//       "Measuring and improving microbial density in ferments",
//       "Improving crop quality, appearance, and chemical consistency",
//     ],
//     thumbnail: "/Precision Organic Farming.jpeg",
//   },
// ];

// const workshops = [
//   {
//     id: 2,
//     category: "Agri-Proteomics & Crop Molecular Innovation",
//     title: "2–3 Day Intensive Agri-Proteomics Workshop",
//     duration: "2–3 Days",
//     mode: "Online / Offline",
//     idealFor: "Advanced students & researchers",
//     priceNote: "Depends on batch size & format",
//     content: [
//       "Applied LC–MS/MS workflows for plant systems",
//       "Experimental design in crop molecular research",
//       "DDA vs DIA strategy planning",
//       "Case studies in sustainable agriculture",
//       "Workflow design exercises",
//     ],
//     thumbnail:
//       "/2–3 Day Intensive Agri-Proteomics Workshop.png",
//   },
//   {
//     id: 3,
//     category: "Agri-Proteomics & Crop Molecular Innovation",
//     title: "Advanced Certification in Plant Proteomics",
//     duration: "6–8 Weeks",
//     mode: "Hybrid / Offline Preferred",
//     idealFor: "Research-track learners",
//     priceNote: "Depends on batch size & format",
//     content: [
//       "End-to-end plant proteomics workflow",
//       "Sample preparation & digestion strategy",
//       "Experimental design principles",
//       "Visit to Mass Spectrometry facility (Optional)",
//       "Basics of proteomics data analysis",
//       "Research presentation & evaluation (Optional)",
//     ],
//     thumbnail:
//       "/Advanced Certification in Plant Proteomics.jpeg",
//   },
//   {
//     id: 4,
//     category: "Biotechnology Industry Skill Development",
//     title: "Biotechnology Industry Skill Development Program",
//     duration: "4–6 Weeks",
//     mode: "Online / Hybrid",
//     idealFor: "Students seeking industry-ready biotech skills",
//     priceNote: "Depends on batch size & format",
//     content: [
//       "Advanced molecular biology techniques",
//       "HPLC fundamentals",
//       "LC–MS/MS workflows",
//       "Experimental design strategy",
//       "Translational data interpretation",
//       "Research profile building & career positioning",
//     ],
//     thumbnail:
//       "/Biotechnology Industry Skill Development Program.jpeg",
//   },
// ];

// const consultationServices = [
//   {
//     id: 1,
//     title: "Proteomics Workflow & Sample Preparation Consulting",
//     duration: "60-minute session • Project-based available",
//     price: "₹3,500 per session",
//     thumbnail:
//       "/Proteomics Workflow & Sample Preparation Consulting.jpg",
//     mode: "Online",
//     audience: "Researchers • Labs • Institutions",
//     description:
//       "Strategic consulting support for experimental design, LC–MS/MS workflows, and sample preparation optimization in plant proteomics research.",
//     includes: [
//       "Plant tissue protein extraction strategies",
//       "Sample clean-up & digestion optimization",
//       "DDA & DIA workflow planning",
//       "Contaminant mitigation & QC strategy",
//       "Targeted vs discovery proteomics planning",
//       "Free 15-minute discovery call",
//     ],
//     cta: "Book Session",
//   },
//   {
//     id: 2,
//     title: "European Science Pathway – Profile Review Session",
//     duration: "60 Minutes",
//     price: "₹2,500 per session",
//     thumbnail:
//       "/European Science Pathway – Profile Review Session.png",
//     mode: "Online",
//     audience: "Biotech • Agriculture • Molecular Biology Students",
//     description:
//       "Scientific profile evaluation and strategic recommendations for Master's or PhD pathways in Europe.",
//     includes: [
//       "Scientific CV review",
//       "Program alignment advice",
//       "Skill gap assessment",
//       "Personalized academic strategy guidance",
//     ],
//     cta: "Book Session",
//   },
//   {
//     id: 4,
//     title: "Comprehensive Europe Mentorship (Premium)",
//     duration: "3 Months • 10 Meetings",
//     price: "₹20,000",
//     thumbnail:
//       "/Comprehensive Europe Mentorship (Premium).png",
//     mode: "Online Mentorship",
//     audience: "Serious Master's / PhD applicants",
//     description:
//       "End-to-end structured mentorship for European academic admissions, research alignment, and interview preparation.",
//     includes: [
//       "Research alignment strategy",
//       "University shortlisting",
//       "SOP drafting guidance",
//       "Multiple review rounds",
//       "Interview preparation",
//       "Skill development roadmap",
//       "End-to-end mentorship support",
//     ],
//     cta: "Apply for Mentorship",
//   },
// ];


// /* ------------------ COMPONENT ------------------ */

// const VALID_TABS = ["lectures", "workshops", "consulting"] as const;
// type TabValue = typeof VALID_TABS[number];

// function getTabFromHash(hash: string): TabValue {
//   const clean = hash.replace("#", "") as TabValue;
//   return VALID_TABS.includes(clean) ? clean : "lectures";
// }

// export default function ServicesPage() {
//   const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
//   const [selectedLecture, setSelectedLecture] = useState<any>(null);
//   const [selectedService, setSelectedService] = useState<any>(null);
//   const [selectedConsultation, setSelectedConsultation] = useState<any>(null);
//   const [showEnrollModal, setShowEnrollModal] = useState(false);
//   const [enrollmentStep, setEnrollmentStep] = useState<"form" | "confirmation">("form");

//   const { toast } = useToast();

//   const COURSE_PRICE = selectedService?.price ?? "";
//   const COURSE_NAME = selectedService?.title ?? "";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     organization: "",
//   });

//   const pathname = usePathname();

//   // ─── KEY FIX ───────────────────────────────────────────────────────────────
//   // Next.js Link navigation across pages does NOT fire "hashchange".
//   // We watch `pathname` (via usePathname) as a proxy for page navigation —
//   // every time it changes (i.e. we arrive at /services), we re-read the hash
//   // from the URL and sync the tab state.
//   // ───────────────────────────────────────────────────────────────────────────
//   const [activeTab, setActiveTab] = useState<TabValue>(() => {
//     // Safe default for SSR — real value applied in useEffect below
//     return "lectures";
//   });

//   useEffect(() => {
//     const syncTab = () => {
//       const tab = getTabFromHash(window.location.hash);
//       setActiveTab(tab);
//     };

//     // Sync immediately when the component mounts or when we navigate to this page
//     syncTab();

//     // Also handle in-page hash changes (e.g. browser back/forward or manual URL edits)
//     window.addEventListener("hashchange", syncTab);
//     return () => window.removeEventListener("hashchange", syncTab);
//   }, [pathname]); // <-- re-runs every time the pathname changes (i.e. on navigation)

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setEnrollmentStep("confirmation");
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
//         <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl shadow-sm">
//          <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
//            <Link href="/" className="flex items-center gap-3 group">
//              <Image 
//                src="/official logo.svg" 
//                alt="EyeIcon Navbar Logo" 
//                width={56}
//                height={40}
//                className="object-contain"
//              />
//              <div className="flex flex-col">
//                <span className="font-display text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
//                  Sukshmadarshini Services
//                </span>
//                <span className="text-xs text-muted-foreground">
//                  Insight Beyond Vision
//                </span>
//              </div>
//            </Link>
//          </div>
//        </nav>

//         {/* HERO */}
//         <section className="container mx-auto px-4 py-14 text-center">
//           <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent">
//             Advanced Agri-Proteomics Workshops & Research Consulting
//           </h1>
//           <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
//             Hands-on training, workflow consulting, and strategic mentorship in
//             plant proteomics and molecular agriculture.
//           </p>
//         </section>

//         {/* CONTENT */}
//         <main className="container mx-auto px-4 pb-16">
//           <Tabs
//             value={activeTab}
//             onValueChange={(val) => {
//               setActiveTab(val as TabValue);
//               window.location.hash = val;
//             }}>
//             <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-1 md:grid-cols-3 h-auto">
//               <TabsTrigger value="lectures">
//                 <BookOpenText className="w-4 h-4 mr-2" />
//                 Lectures provided
//               </TabsTrigger>
//               <TabsTrigger value="workshops">
//                 <Users className="w-4 h-4 mr-2" />
//                 Workshops & Programs
//               </TabsTrigger>
//               <TabsTrigger value="consulting">
//                 <Briefcase className="w-4 h-4 mr-2" />
//                 Consulting Services
//               </TabsTrigger>
//             </TabsList>

//             {/* LECTURES */}
//             <TabsContent value="lectures" className="mt-10 text-center">
//               <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
//                 One-on-One & Group Lectures
//               </h3>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {lectures.map((l) => (
//                   <Card
//                     key={l.id}
//                     className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col"
//                     onClick={() => setSelectedLecture(l)}
//                   >
//                     <div className="relative h-48 w-full overflow-hidden bg-muted">
//                       <Image
//                         src={l.thumbnail}
//                         alt={l.title}
//                         fill
//                         className="object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
//                       />
//                       <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
//                         <Clock className="w-3 h-3" />
//                         {l.duration}
//                       </div>
//                     </div>

//                     <CardContent className="pt-4 flex flex-col flex-1">
//                       <div className="flex-1 space-y-3">
//                         <Badge variant="outline">{l.category}</Badge>
//                         <h3 className="font-semibold text-lg">{l.title}</h3>

//                         <p className="text-sm text-muted-foreground">
//                           <strong>Mode:</strong> {l.mode}
//                         </p>

//                         <ul className="space-y-2 text-sm text-muted-foreground">
//                           {l.content.slice(0, 3).map((c, i) => (
//                             <li key={i} className="flex items-start gap-2">
//                               <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
//                               <span>{c}</span>
//                             </li>
//                           ))}
//                           <li className="italic text-xs text-muted-foreground">+ more</li>
//                         </ul>

//                         <p className="text-xs italic text-muted-foreground">
//                           {l.priceNote}
//                         </p>
//                       </div>

//                       <Button variant="secondary" className="w-full mt-4">
//                         View Details
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
            
//             {/* WORKSHOPS */}
//             <TabsContent value="workshops" className="mt-10 text-center">
//               <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
//                 Offline and Online Workshops
//               </h3>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {workshops.map((w) => (
//                   <Card
//                     key={w.id}
//                     className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col"
//                     onClick={() => setSelectedWorkshop(w)}
//                   >
//                     <div className="relative h-48">
//                       <Image
//                         src={w.thumbnail}
//                         alt={w.title}
//                         fill
//                         className="object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
//                       />
//                       <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
//                         <Clock className="w-3 h-3" />
//                         {w.duration}
//                       </div>
//                     </div>

                    // <CardContent className="pt-4 flex flex-col flex-1">
                    //   <div className="flex-1 space-y-3">
                    //     <Badge variant="outline">{w.category}</Badge>
                    //     <h3 className="font-semibold text-lg">{w.title}</h3>

                    //     <p className="text-sm text-muted-foreground">
                    //       <strong>Mode:</strong> {w.mode}
                    //     </p>

                    //     <ul className="space-y-2 text-sm text-muted-foreground">
                    //       {w.content.slice(0, 3).map((c, i) => (
                    //         <li key={i} className="flex items-start gap-2">
                    //           <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    //           <span>{c}</span>
                    //         </li>
                    //       ))}
                    //       <li className="italic text-xs text-muted-foreground">+ more</li>
                    //     </ul>

                    //     <p className="text-xs italic text-muted-foreground">
                    //       {w.priceNote}
                    //     </p>
                    //   </div>

                    //   <Button variant="secondary" className="w-full mt-4">
                    //     View Details
                    //   </Button>
                    // </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>

//             {/* CONSULTING */}
            // <TabsContent value="consulting" className="mt-10 text-center">
            //   <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
            //     Consultation Services
            //   </h3>

            //   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            //     {consultationServices.map((service, index) => (
            //       <Card
            //         key={service.id}
            //         className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col"
            //       >
            //         {/* Thumbnail */}
            //         <div className="relative h-48 w-full overflow-hidden bg-muted">
            //           <Image
            //             src={service.thumbnail}
            //             alt={service.title}
            //             fill
            //             className="object-cover transition-transform duration-300 hover:scale-105"
            //           />
            //           <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            //             <Clock className="w-3 h-3" />
            //             {service.duration}
            //           </div>
            //         </div>

            //         <CardContent className="pt-4 flex flex-col flex-1">
            //           <div className="flex-1 space-y-3">
            //             <div className="flex items-start justify-between gap-2">
            //               <h3 className="font-semibold text-lg leading-tight">
            //                 {service.title}
            //               </h3>
            //             </div>

            //             <p className="text-sm text-muted-foreground line-clamp-3">
            //               {service.description}
            //             </p>

            //             <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            //               <Badge variant="outline">{service.mode}</Badge>
            //               <Badge variant="outline">{service.audience}</Badge>
            //             </div>
            //           </div>

            //           <Button
            //             onClick={() => setSelectedConsultation(service)}
            //             className="w-full mt-4"
            //           >
            //             <Briefcase className="w-4 h-4 mr-2" />
            //             {service.cta}
            //           </Button>
            //         </CardContent>
            //       </Card>
            //     ))}
            //   </div>
            // </TabsContent>
//           </Tabs>
//         </main>
//       </div>

//       {/* DETAIL DIALOGS */}
//       <LectureDetailDialog  
//         video={selectedLecture}
//         open={!!selectedLecture}
//         onOpenChange={(open) => !open && setSelectedLecture(null)}
//         isEnrolled={false}
//         onEnrollmentComplete={() => {}}
//       />
      
//       <WorkshopDetailDialog
//         video={selectedWorkshop}
//         open={!!selectedWorkshop}
//         onOpenChange={(open) => !open && setSelectedWorkshop(null)}
//         isEnrolled={false}
//         onEnrollmentComplete={() => {}}
//       />

//       <ConsultationDetailDialog
//         service={selectedConsultation}
//         open={!!selectedConsultation}
//         onOpenChange={(open) => !open && setSelectedConsultation(null)}
//         isBooked={false}
//         onBookingComplete={() => {}}
//       />
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import {
//   Clock,
//   Users,
//   Briefcase,
//   CheckCircle,
//   BookOpenText,
// } from "lucide-react";

// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "../components/ui/tabs";

// import WorkshopDetailDialog from "../components/WorkshopDetailDialogue";
// import LectureDetailDialog from "../components/LectureDetailDialogue";
// import ConsultationDetailDialog from "../components/ConsultationDetailDialogue";

// /* ------------------ STATIC (KEEP FOR NOW) ------------------ */
// const lectures: any[] = [];
// const workshops: any[] = [];

// /* ------------------ TABS ------------------ */
// const VALID_TABS = ["lectures", "workshops", "consulting"] as const;
// type TabValue = typeof VALID_TABS[number];

// function getTabFromHash(hash: string): TabValue {
//   const clean = hash.replace("#", "") as TabValue;
//   return VALID_TABS.includes(clean) ? clean : "lectures";
// }

// export default function ServicesPage() {
//   const pathname = usePathname();

//   const [activeTab, setActiveTab] = useState<TabValue>("lectures");

//   const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
//   const [selectedLecture, setSelectedLecture] = useState<any>(null);
//   const [selectedConsultation, setSelectedConsultation] = useState<any>(null);

//   const [consultationServices, setConsultationServices] = useState<any[]>([]);

//   /* ------------------ FETCH STRAPI ------------------ */
//   useEffect(() => {
//     async function fetchConsultations() {
//       try {
//         const res = await fetch(
//           "https://stylish-duck-63b45afbfa.strapiapp.com/api/consultations?populate=*"
//         );
//         const json = await res.json();

//         const formatted = (json.data || []).map((item: any) => ({
//           id: item.id,
//           title: item.title,
//           duration: item.duration,
//           price: item.price,
//           mode: item.mode || "Online",
//           audience: item.audience,
//           description: item.description,
//           includes: item.includes || [],
//           cta: item.cta,
//           thumbnail:
//             item.thumbnail?.[0]?.formats?.medium?.url ||
//             item.thumbnail?.[0]?.url ||
//             "",
//         }));

//         setConsultationServices(formatted);
//       } catch (err) {
//         console.error("Failed to fetch consultations", err);
//       }
//     }

//     fetchConsultations();
//   }, []);

//   /* ------------------ HASH SYNC ------------------ */
//   useEffect(() => {
//     const syncTab = () => {
//       const tab = getTabFromHash(window.location.hash);
//       setActiveTab(tab);
//     };

//     syncTab();
//     window.addEventListener("hashchange", syncTab);
//     return () => window.removeEventListener("hashchange", syncTab);
//   }, [pathname]);

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
//         {/* NAV */}
//         <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl shadow-sm">
//           <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src="/official logo.svg"
//                 alt="Logo"
//                 width={56}
//                 height={40}
//               />
//               <div>
//                 <span className="font-bold">
//                   Sukshmadarshini Services
//                 </span>
//                 <p className="text-xs text-muted-foreground">
//                   Insight Beyond Vision
//                 </p>
//               </div>
//             </Link>
//           </div>
//         </nav>

//         {/* HERO */}
//         <section className="container mx-auto px-4 py-14 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Services
//           </h1>
//           <p className="text-muted-foreground mt-2">
//             Training, consulting, and mentorship in agri-proteomics
//           </p>
//         </section>

//         {/* CONTENT */}
//         <main className="container mx-auto px-4 pb-16">
//           <Tabs
//             value={activeTab}
//             onValueChange={(val) => {
//               setActiveTab(val as TabValue);
//               window.location.hash = val;
//             }}
//           >
//             <TabsList className="grid grid-cols-3 max-w-2xl mx-auto">
//               <TabsTrigger value="lectures">
//                 <BookOpenText className="w-4 h-4 mr-2" />
//                 Lectures
//               </TabsTrigger>
//               <TabsTrigger value="workshops">
//                 <Users className="w-4 h-4 mr-2" />
//                 Workshops
//               </TabsTrigger>
//               <TabsTrigger value="consulting">
//                 <Briefcase className="w-4 h-4 mr-2" />
//                 Consulting
//               </TabsTrigger>
//             </TabsList>

//             {/* CONSULTING TAB */}
//             <TabsContent value="consulting" className="mt-10">
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {consultationServices.map((service) => (
//                   <Card
//                     key={service.id}
//                     className="cursor-pointer hover:shadow-lg"
//                   >
//                     <div className="relative h-48">
//                       <Image
//                         src={service.thumbnail}
//                         alt={service.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <CardContent className="pt-4 flex flex-col">
//                       <h3 className="font-semibold text-lg">
//                         {service.title}
//                       </h3>

//                       <p className="text-sm text-muted-foreground">
//                         {service.description}
//                       </p>

//                       <Button
//                         className="mt-4"
//                         onClick={() =>
//                           setSelectedConsultation(service)
//                         }
//                       >
//                         {service.cta}
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </main>
//       </div>

//       {/* DIALOG */}
//       <ConsultationDetailDialog
//         service={selectedConsultation}
//         open={!!selectedConsultation}
//         onOpenChange={(open) =>
//           !open && setSelectedConsultation(null)
//         }
//         isBooked={false}
//       />
//     </>
//   );
// }


//Working code
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Briefcase, Users, BookOpenText } from "lucide-react";

// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

// import WorkshopDetailDialog from "../components/WorkshopDetailDialogue";
// import LectureDetailDialog from "../components/LectureDetailDialogue";
// import ConsultationDetailDialog from "../components/ConsultationDetailDialogue";

// /* ------------------ STATIC (optional later) ------------------ */
// const lectures: any[] = [];

// /* ------------------ TAB TYPES ------------------ */
// const VALID_TABS = ["lectures", "workshops", "consulting"] as const;
// type TabValue = (typeof VALID_TABS)[number];

// function getTabFromHash(hash: string): TabValue {
//   const clean = hash.replace("#", "") as TabValue;
//   return VALID_TABS.includes(clean) ? clean : "lectures";
// }

// /* ------------------ TYPES ------------------ */
// type Workshop = any;
// type Consultation = any;
// type Lecture = any;

// export default function ServicesPage() {
//   const pathname = usePathname();

//   const [activeTab, setActiveTab] = useState<TabValue>("lectures");

//   const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
//   const [selectedLecture, setSelectedLecture] = useState<any>(null);
//   const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);

//   const [workshops, setWorkshops] = useState<Workshop[]>([]);
//   const [lectures, setLectures] = useState<Lecture[]>([]);
//   const [consultationServices, setConsultationServices] = useState<Consultation[]>([]);

//   /* ------------------ FETCH WORKSHOPS ------------------ */
//   useEffect(() => {
//     async function fetchlectures() {
//       try {
//         const res = await fetch(
//           "https://stylish-duck-63b45afbfa.strapiapp.com/api/lectures?populate=*",
//           { cache: "no-store" }
//         );

//         const json = await res.json();

//         const formatted = (json.data || []).map((item: any) => {
//           const thumb = item.thumbnail;

//           return {
//             id: item.id,
//             title: item.title,
//             duration: item.duration,
//             description: item.description,
//             // instructor: item.instructor,
//             price: item.discountedPrice,
//             originalPrice: item.originalPrice,
//             includes: item.includes ?? [],
//             // students: item.students ?? 0,
//             // rating: item.rating ?? 4.5,
//             thumbnail:
//               thumb?.formats?.medium?.url ||
//               thumb?.formats?.small?.url ||
//               thumb?.url ||
//               "",
//           };
//         });

//         setLectures(formatted);
//       } catch (err) {
//         console.error("Failed to fetch lectures", err);
//       }
//     }

//     fetchlectures();
//   }, []);
  
//   useEffect(() => {
//     async function fetchWorkshops() {
//       try {
//         const res = await fetch(
//           "https://stylish-duck-63b45afbfa.strapiapp.com/api/workshops?populate=*",
//           { cache: "no-store" }
//         );

//         const json = await res.json();

//         const formatted = (json.data || []).map((item: any) => {
//           const thumb = item.thumbnail;

//           return {
//             id: item.id,
//             title: item.title,
//             duration: item.duration,
//             description: item.description,
//             instructor: item.instructor,
//             price: item.discountedPrice,
//             originalPrice: item.originalPrice,
//             includes: item.includes ?? [],
//             students: item.students ?? 0,
//             rating: item.rating ?? 4.5,
//             thumbnail:
//               thumb?.formats?.medium?.url ||
//               thumb?.formats?.small?.url ||
//               thumb?.url ||
//               "",
//           };
//         });

//         setWorkshops(formatted);
//       } catch (err) {
//         console.error("Failed to fetch workshops", err);
//       }
//     }

//     fetchWorkshops();
//   }, []);

//   /* ------------------ FETCH CONSULTATIONS ------------------ */
//   useEffect(() => {
//     async function fetchConsultations() {
//       try {
//         const res = await fetch(
//           "https://stylish-duck-63b45afbfa.strapiapp.com/api/consultations?populate=*",
//           { cache: "no-store" }
//         );

//         const json = await res.json();

//         const formatted = (json.data || []).map((item: any) => {
//           const thumb = item.thumbnail?.[0];

//           return {
//             id: item.id,
//             title: item.title ?? "",
//             duration: item.duration ?? "",
//             price: item.price ?? "",
//             mode: item.mode ?? "Online",
//             audience: item.audience ?? "",
//             description: item.description ?? "",
//             includes: item.includes ?? [],
//             cta: item.cta ?? "Book",
//             thumbnail:
//               thumb?.formats?.medium?.url ||
//               thumb?.formats?.small?.url ||
//               thumb?.url ||
//               "",
//           };
//         });

//         setConsultationServices(formatted);
//       } catch (err) {
//         console.error("Failed to fetch consultations", err);
//       }
//     }

//     fetchConsultations();
//   }, []);

//   /* ------------------ HASH SYNC ------------------ */
//   useEffect(() => {
//     const syncTab = () => {
//       const tab = getTabFromHash(window.location.hash);
//       setActiveTab(tab);
//     };

//     syncTab();
//     window.addEventListener("hashchange", syncTab);
//     return () => window.removeEventListener("hashchange", syncTab);
//   }, [pathname]);

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">

//         {/* NAV */}
//         <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl shadow-sm">
//           <div className="container mx-auto flex h-16 items-center px-4">
//             <Link href="/" className="flex items-center gap-3">
//               <Image src="/official logo.svg" alt="Logo" width={56} height={40} />
//               <div>
//                 <span className="font-bold">Sukshmadarshini Services</span>
//                 <p className="text-xs text-muted-foreground">
//                   Insight Beyond Vision
//                 </p>
//               </div>
//             </Link>
//           </div>
//         </nav>

//         {/* HERO */}
//         <section className="container mx-auto px-4 py-14 text-center">
//           <h1 className="text-4xl font-bold">Services</h1>
//           <p className="text-muted-foreground mt-2">
//             Training, consulting, and mentorship in agri-proteomics
//           </p>
//         </section>

//         {/* CONTENT */}
//         <main className="container mx-auto px-4 pb-16">
//           <Tabs
//             value={activeTab}
//             onValueChange={(val) => {
//               setActiveTab(val as TabValue);
//               window.location.hash = val;
//             }}
//           >
//             <TabsList className="grid grid-cols-3 max-w-2xl mx-auto">
//               <TabsTrigger value="lectures">
//                 <BookOpenText className="w-4 h-4 mr-2" />
//                 Lectures
//               </TabsTrigger>

//               <TabsTrigger value="workshops">
//                 <Users className="w-4 h-4 mr-2" />
//                 Workshops
//               </TabsTrigger>

//               <TabsTrigger value="consulting">
//                 <Briefcase className="w-4 h-4 mr-2" />
//                 Consulting
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="lectures" className="mt-10">
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {lectures.map((w) => (
//                   <Card
//                     key={w.id}
//                     className="cursor-pointer hover:shadow-lg"
//                     onClick={() => setSelectedWorkshop(w)}
//                   >
//                     <div className="relative h-48">
//                       <Image
//                         src={w.thumbnail || "/placeholder.png"}
//                         alt={w.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <CardContent className="pt-4">
//                       <h3 className="font-semibold">{w.title}</h3>
//                       <p className="text-sm text-muted-foreground">
//                         {w.description?.slice(0, 80)}...
//                       </p>

//                       <Button className="mt-4 w-full">
//                         View Details
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>

//             {/* WORKSHOPS TAB */}
//             <TabsContent value="workshops" className="mt-10">
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {workshops.map((w) => (
//                   <Card
//                     key={w.id}
//                     className="cursor-pointer hover:shadow-lg"
//                     onClick={() => setSelectedWorkshop(w)}
//                   >
//                     <div className="relative h-48">
//                       <Image
//                         src={w.thumbnail || "/placeholder.png"}
//                         alt={w.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <CardContent className="pt-4">
//                       <h3 className="font-semibold">{w.title}</h3>
//                       <p className="text-sm text-muted-foreground">
//                         {w.description?.slice(0, 80)}...
//                       </p>

//                       <Button className="mt-4 w-full">
//                         View Details
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>

//             {/* CONSULTING TAB */}
//             <TabsContent value="consulting" className="mt-10">
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {consultationServices.map((s) => (
//                   <Card
//                     key={s.id}
//                     className="cursor-pointer hover:shadow-lg"
//                   >
//                     <div className="relative h-48">
//                       <Image
//                         src={s.thumbnail || "/placeholder.png"}
//                         alt={s.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <CardContent className="pt-4">
//                       <h3 className="font-semibold">{s.title}</h3>
//                       <p className="text-sm text-muted-foreground">
//                         {s.description}
//                       </p>

//                       <Button
//                         className="mt-4 w-full"
//                         onClick={() => setSelectedConsultation(s)}
//                       >
//                         {s.cta}
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </main>
//       </div>

//       {/* DIALOGS */}
//       <WorkshopDetailDialog
//         workshop={selectedWorkshop}
//         open={!!selectedWorkshop}
//         onOpenChange={(v) => !v && setSelectedWorkshop(null)}
//       />

//       <ConsultationDetailDialog
//         service={selectedConsultation}
//         open={!!selectedConsultation}
//         onOpenChange={(v) => !v && setSelectedConsultation(null)}
//         isBooked={false}
//       />
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

import {   Clock, Users, Briefcase, CheckCircle, BookOpenText } from "lucide-react";

import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import WorkshopDetailDialog from "../components/WorkshopDetailDialogue";
import LectureDetailDialog from "../components/LectureDetailDialogue";
import ConsultationDetailDialog from "../components/ConsultationDetailDialogue";

import { getServices } from "@/app/lib/queries";

/* ------------------ TYPES ------------------ */

type TabValue = "lectures" | "workshops" | "consulting";

function getTabFromHash(hash: string): TabValue {
  const clean = hash.replace("#", "") as TabValue;
  return ["lectures", "workshops", "consulting"].includes(clean)
    ? clean
    : "lectures";
}

/* ------------------ PAGE ------------------ */

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<TabValue>("lectures");

  const [lectures, setLectures] = useState<any[]>([]);
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [consultationServices, setConsultationServices] = useState<any[]>([]);

  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
  const [selectedLecture, setSelectedLecture] = useState<any>(null);
  const [selectedConsultation, setSelectedConsultation] = useState<any>(null);

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  const pathname = usePathname();


  /* ------------------ FETCH SANITY ------------------ */

  useEffect(() => {
    async function load() {
      try {
        const data = await getServices();

        setLectures(
          (data.lectures || []).map((item: any) => ({
            id: item._id,
            title: item.title,
            duration: item.duration,
            date: item.date,
            mode: item.mode,
            description: item.description,
            category: item.category,
            originalPrice: item.originalPrice,
            discountedPrice: item.discountedPrice,
            discountPercent: item.discountPercent,
            priceNote: item.priceNote,
            instructor: item.instructor,
            content: item.content || [],
            includes: item.includes || [],
            thumbnail: item.thumbnail?.asset?.url || "",
          }))
        );

        setWorkshops(
          (data.workshops || []).map((item: any) => ({
            id: item._id,
            title: item.title,
            duration: item.duration,
            description: item.description,
            mode: item.mode,
            category: item.category,
            originalPrice: item.originalPrice,
            discountedPrice: item.discountedPrice,
            discountPercent: item.discountPercent,
            priceNote: item.priceNote,
            instructor: item.instructor,
            content: item.content || [],  
            includes: item.includes || [],
            thumbnail: item.thumbnail?.asset?.url || "",
          }))
        );

        setConsultationServices(
          (data.consultations || []).map((item: any) => ({
            id: item._id,
            title: item.title,
            duration: item.duration,
            mode: item.mode,
            audience: item.audience,
            description: item.description,
            price: item.price,
            cta: item.cta,
            includes: item.includes || [],
            thumbnail: item.thumbnail?.asset?.url || "",
          }))
        );
      } catch (err) {
        console.error("Sanity fetch error:", err);
      }
    }

    load();
  }, []);

  /* ------------------ HASH SYNC ------------------ */

  useEffect(() => {
    const sync = () => {
      setActiveTab(getTabFromHash(window.location.hash));
    };

    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  /* ------------------ UI ------------------ */

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl shadow-sm">
         <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
           <Link href="/" className="flex items-center gap-3 group">
             <Image 
               src="/official logo.svg" 
               alt="EyeIcon Navbar Logo" 
               width={56}
               height={40}
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

      {/* HEADER */}
      <section className="container mx-auto px-4 py-14 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent">
            Advanced Agri-Proteomics Workshops & Research Consulting
          </h1>
          <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
            Hands-on training, workflow consulting, and strategic mentorship in
            plant proteomics and molecular agriculture.
          </p>
        </section>

       <main className="container mx-auto px-4 pb-16">
      {/* TABS */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabValue)}>
        <TabsList className="grid grid-cols-3 max-w-2xl mx-auto">
          <TabsTrigger value="lectures">
            <BookOpenText className="w-4 h-4 mr-2" />
            Lectures Provided
          </TabsTrigger>

          <TabsTrigger value="workshops">
            <Users className="w-4 h-4 mr-2" />
            Workshops & Programs
          </TabsTrigger>

          <TabsTrigger value="consulting">
            <Briefcase className="w-4 h-4 mr-2" />
            Consulting Services
          </TabsTrigger>
        </TabsList>

        {/* ---------------- LECTURES ---------------- */}
        <TabsContent value="lectures"  className="mt-10 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
              One-on-One & Group Lectures
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {lectures.map((l) => (
              <Card className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col" key={l.id} onClick={() => setSelectedLecture(l)}>
                <div className="relative h-48">
                  <Image
                    src={l.thumbnail || "/placeholder.png"}
                    alt={l.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {l.duration}
                  </div>
                </div>
                <CardContent className="pt-4 flex flex-col flex-1">
                  <div className="flex-1 space-y-3">
                    <Badge variant="outline">{l.category}</Badge>
                    <h3 className="font-semibold">{l.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      <strong>Mode:</strong>{l.mode ?? "N/A"}
                    </p>
                    {/* <p className="text-sm text-muted-foreground">
                      {l.description?.slice(0, 80)}...
                    </p> */}
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(l.content ?? []).slice(0, 3).map((c: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}

                      {l.content && l.content.length > 3 && (
                        <li className="italic text-xs text-muted-foreground">+ more</li>
                      )}
                    </ul>
                    <p className="text-xs italic text-muted-foreground">
                      {l.priceNote}
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

        {/* ---------------- WORKSHOPS ---------------- */}
        <TabsContent value="workshops" className="mt-10 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
            Offline and Online Workshops
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {workshops.map((w) => (
              <Card className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col" key={w.id} onClick={() => setSelectedWorkshop(w)}>
                <div className="relative h-48">
                  <Image
                    src={w.thumbnail || "/placeholder.png"}
                    alt={w.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {w.duration}
                  </div>
                </div>
                <CardContent className="p-4 flex flex-col flex-1">
                  <div className="flex-1 space-y-3">
                    <Badge variant="outline">{w.category}</Badge>
                    <h3 className="font-semibold text-lg">{w.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        <strong>Mode:</strong> {w.mode}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(w.content ?? []).slice(0, 3).map((c: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}

                      {w.content && w.content.length > 3 && (
                        <li className="italic text-xs text-muted-foreground">+ more</li>
                      )}
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

        {/* ---------------- CONSULTING ---------------- */}
        <TabsContent value="consulting" className="mt-10 text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10">
              Consultation Services
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {consultationServices.map((c) => (
              <Card className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 flex flex-col" key={c.id} onClick={() => setSelectedConsultation(c)}>
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={c.thumbnail || "/placeholder.png"}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {c.duration}
                  </div>
                </div>
                <CardContent className="pt-4 flex flex-col flex-1">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg leading-tight">{c.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {c.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <Badge variant="outline">{c.mode}</Badge>
                      <Badge variant="outline">{c.audience}</Badge>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedConsultation(c)}
                    className="w-full mt-4"
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    {c.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      </main>

      {/* ---------------- DIALOGS ---------------- */}
      <LectureDetailDialog
        video={selectedLecture}
        open={!!selectedLecture}
        onOpenChange={() => setSelectedLecture(null)}
      />

      <WorkshopDetailDialog
        workshop={selectedWorkshop}
        open={!!selectedWorkshop}
        onOpenChange={() => setSelectedWorkshop(null)}
      />

      <ConsultationDetailDialog
        service={selectedConsultation}
        open={!!selectedConsultation}
        onOpenChange={() => setSelectedConsultation(null)}
        isBooked={false}
      />
    </div>
  );
}