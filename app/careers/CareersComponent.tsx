// "use client";

// import { Users, GraduationCap, FlaskConical, BookOpen, Briefcase, Mail, Lightbulb, ArrowRight, MapPin,Briefcase as JobIcon, CheckCircle2, Clock } from "lucide-react";
// import { Navbar } from "../components/Navbar";
// import { Button } from "../components/ui/button";
// // import { DialogFooter } from "../components/ui/dialog";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "../components/ui/dialog";
// import { useState } from "react";
// // import { Footer } from "../components/Footer";

// type Job = {
//   title: string;
//   type: string;
//   location: string;
//   department: string;
//   description: string;
//   responsibilities: string[];
//   requirements: string[];
//   compensation: string;
// };

// const jobs: Job[] = [
//   {
//     title: "Agri-Proteomics Research Associate",
//     type: "Full-time",
//     location: "Remote / Hybrid",
//     department: "Research",
//     description:
//       "Contribute to plant proteomics workflows, sample preparation, and data analysis for ongoing multiomics projects.",
//     responsibilities: [
//       "Design and execute plant proteomics experiments",
//       "Perform sample preparation and LC-MS workflows",
//       "Analyze multiomics datasets and prepare reports",
//       "Collaborate with academic and industry partners",
//     ],
//     requirements: [
//       "MSc/PhD in Biotechnology, Biochemistry, or related field",
//       "Hands-on experience with proteomics or molecular biology",
//       "Familiarity with bioinformatics tools is a plus",
//     ],
//     compensation: "Competitive, based on experience",
//   },
//   {
//     title: "Academic Program Coordinator",
//     type: "Part-time",
//     location: "Remote",
//     department: "Academics",
//     description:
//       "Support European research pathway advisory — coordinate mentorship sessions, application reviews, and student communications.",
//     responsibilities: [
//       "Coordinate mentorship and advisory sessions",
//       "Review student applications and documents",
//       "Manage student communications and timelines",
//     ],
//     requirements: [
//       "Background in academia or student advisory",
//       "Strong written and spoken English",
//       "Excellent organization and follow-through",
//     ],
//     compensation: "Hourly, flexible engagement",
//   },
//   {
//     title: "Scientific Content & Outreach Intern",
//     type: "Internship",
//     location: "Remote",
//     department: "Communications",
//     description:
//       "Help craft scientific articles, workshop materials, and outreach content across Agri-Proteomics and biotechnology.",
//     responsibilities: [
//       "Draft scientific articles and blog posts",
//       "Develop workshop and outreach materials",
//       "Support social and newsletter content",
//     ],
//     requirements: [
//       "Undergraduate/graduate student in life sciences",
//       "Strong scientific writing skills",
//       "Curiosity for Agri-Proteomics and biotech",
//     ],
//     compensation: "Stipend + certificate",
//   },
// ];

// const roles = [
//   { icon: GraduationCap, label: "Biotechnology and Agricultural Science graduates" },
//   { icon: FlaskConical, label: "Proteomics and molecular biology researchers" },
//   { icon: BookOpen, label: "Academic program coordinators" },
//   { icon: Briefcase, label: "Business development professionals in life sciences" },
// ];

// export default function Careers() {
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Hero Banner */}
//       <section className="relative pt-10 overflow-hidden">
//         <div className="gradient-hero py-16 md:py-24">
//           <div className="container mx-auto px-4 relative z-10">
//             <div className="flex items-center gap-4 mb-4 animate-fade-up">
//               <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
//                 <Users className="w-7 h-7 text-primary-foreground" />
//               </div>
//               <span className="text-primary-foreground/70 font-medium tracking-wide uppercase text-sm">Join Us</span>
//             </div>
//             <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
//               Careers
//             </h1>
//             <p className="text-primary-foreground/80 text-lg max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
//               Join a forward-thinking team advancing Agri-Proteomics, multiomics innovation, and global research pathways.
//             </p>
//           </div>
//           <div className="absolute inset-0 dna-pattern opacity-30" />
//         </div>

//         {/* Wave */}
//         <div className="relative h-20 overflow-hidden bg-background -mt-1">
//           <svg className="absolute -top-1 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
//             <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z" fill="url(#careersWave)" />
//             <defs>
//               <linearGradient id="careersWave" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="hsl(var(--init))" />
//                 <stop offset="50%" stopColor="hsl(var(--secondary))" />
//                 <stop offset="100%" stopColor="hsl(var(--accent))" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="container mx-auto px-4 max-w-4xl pb-24">
//         <div className="space-y-6">
//           {/* Introduction */}
//           <div className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up">
//             <div className="flex items-start gap-4 mb-4">
//               <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
//                 <Lightbulb className="w-5 h-5 text-primary-foreground" />
//               </div>
//               <div>
//                 <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Our Mission</span>
//                 <h2 className="font-display text-xl font-semibold text-foreground">Who We Are</h2>
//               </div>
//             </div>
//             <div className="text-foreground/80 leading-relaxed pl-14 space-y-4">
//               <p>
//                 At Sukshmadarshini™, we are building a forward-thinking Agri-Proteomics and biotechnology platform focused on multiomics innovation, scientific skill development, and global research pathways.
//               </p>
//               <p>We welcome unsolicited applications from passionate individuals who align with our mission.</p>
//             </div>
//           </div>

//           {/* Roles
//           <div className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.05s" }}>
//             <div className="flex items-start gap-4 mb-4">
//               <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
//                 <Users className="w-5 h-5 text-primary-foreground" />
//               </div>
//               <div>
//                 <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Opportunities</span>
//                 <h2 className="font-display text-xl font-semibold text-foreground">We&apos;re Interested in Connecting With</h2>
//               </div>
//             </div>
//             <div className="pl-14 space-y-3">
//               {roles.map((role) => (
//                 <div key={role.label} className="flex items-center gap-3 text-foreground/80">
//                   <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
//                     <role.icon className="w-4 h-4 text-secondary" />
//                   </div>
//                   <span>{role.label}</span>
//                 </div>
//               ))}
//               <p className="text-foreground/80 leading-relaxed mt-4">
//                 If you believe your skills and vision align with our work, we encourage you to share your CV and a short statement of interest outlining how you can contribute.
//               </p>
//             </div>
//           </div> */}
//           {/* Roles */}
//           <div className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.05s" }}>
//             <div className="flex items-start gap-4 mb-4">
//               <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
//                 <Users className="w-5 h-5 text-primary-foreground" />
//               </div>
//               <div>
//                 <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Opportunities</span>
//                 <h2 className="font-display text-xl font-semibold text-foreground">We&apos;re Interested in Connecting With</h2>
//               </div>
//             </div>
//             <div className="pl-14 space-y-3">
//               {roles.map((role) => (
//                 <div key={role.label} className="flex items-center gap-3 text-foreground/80">
//                   <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
//                     <role.icon className="w-4 h-4 text-secondary" />
//                   </div>
//                   <span>{role.label}</span>
//                 </div>
//               ))}
//               <p className="text-foreground/80 leading-relaxed mt-4">
//                 If you believe your skills and vision align with our work, we encourage you to share your CV and a short statement of interest outlining how you can contribute.
//               </p>

//               {/* Available Jobs subsection */}
//               <div className="mt-8 pt-6 border-t border-border/60">
//                 <div className="flex items-center gap-2 mb-1">
//                   <JobIcon className="w-4 h-4 text-accent" />
//                   <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Open Roles</span>
//                 </div>
//                 <h3 className="font-display text-lg font-semibold text-foreground mb-5">Available Jobs</h3>

//                 <div className="grid sm:grid-cols-2 gap-4">
//                   {jobs.map((job) => (
//                     <div
//                       key={job.title}
//                       className="group relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 hover:from-primary hover:via-secondary hover:to-accent transition-all duration-300 shadow-soft hover:shadow-glow"
//                     >
//                       <div className="relative h-full rounded-[11px] bg-card p-5 flex flex-col">
//                         <div className="flex items-center justify-between mb-3">
//                           <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-semibold tracking-wider uppercase">
//                             {job.department}
//                           </span>
//                           <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
//                             {job.type}
//                           </span>
//                         </div>
//                         <h4 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">
//                           {job.title}
//                         </h4>
//                         <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-1">
//                           {job.description}
//                         </p>
//                         <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/60">
//                           <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
//                             <MapPin className="w-3.5 h-3.5" />
//                             {job.location}
//                           </span>
//                           {/* <Button
//                             asChild
//                             size="sm"
//                             variant="ghost"
//                             className="h-8 px-2 text-secondary hover:text-secondary hover:bg-secondary/10"
//                           >
//                             <a href={`mailto:sukshmadarshini@gmail.com?subject=Application: ${encodeURIComponent(job.title)}`}>
//                               Apply
//                               <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
//                             </a>
//                           </Button> */}
//                           <Button
//                             size="sm"
//                             variant="ghost"
//                             onClick={() => setSelectedJob(job)}
//                             className="h-8 px-2 text-secondary hover:text-secondary hover:bg-secondary/10"
//                           >
//                             View details
//                             <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Internships */}
//           <div className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.1s" }}>
//             <div className="flex items-start gap-4 mb-4">
//               <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
//                 <GraduationCap className="w-5 h-5 text-primary-foreground" />
//               </div>
//               <div>
//                 <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Students</span>
//                 <h2 className="font-display text-xl font-semibold text-foreground">Internship Opportunities</h2>
//               </div>
//             </div>
//             <div className="text-foreground/80 leading-relaxed pl-14">
//               <p>We periodically offer structured internships for motivated students who wish to gain exposure in research workflows, scientific communication, and academic advisory projects.</p>
//             </div>
//           </div>

//           {/* Contact CTA */}
//           <div className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.15s" }}>
//             <div className="flex items-start gap-4 mb-4">
//               <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
//                 <Mail className="w-5 h-5 text-primary-foreground" />
//               </div>
//               <div>
//                 <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Apply</span>
//                 <h2 className="font-display text-xl font-semibold text-foreground">Send Your Application</h2>
//               </div>
//             </div>
//             <div className="text-foreground/80 leading-relaxed pl-14 space-y-3">
//               <p>
//                 📩 Send your application to:{" "}
//                 <a href="mailto:sukshmadarshini@gmail.com" className="text-secondary hover:underline font-medium">
//                   sukshmadarshini@gmail.com
//                 </a>
//               </p>
//               <p className="text-muted-foreground text-sm">
//                 We carefully review all submissions and will reach out when a suitable opportunity arises.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
//         <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
//           {selectedJob && (
//             <>
//               <DialogHeader>
//                 <div className="flex flex-wrap items-center gap-2 mb-2">
//                   <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-semibold tracking-wider uppercase">
//                     {selectedJob.department}
//                   </span>
//                   <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
//                     <Clock className="w-3.5 h-3.5" />
//                     {selectedJob.type}
//                   </span>
//                   <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
//                     <MapPin className="w-3.5 h-3.5" />
//                     {selectedJob.location}
//                   </span>
//                 </div>
//                 <DialogTitle className="font-display text-2xl">{selectedJob.title}</DialogTitle>
//                 <DialogDescription className="text-foreground/70 leading-relaxed pt-1">
//                   {selectedJob.description}
//                 </DialogDescription>
//               </DialogHeader>

//               <div className="space-y-5 mt-2">
//                 <div>
//                   <h4 className="font-display text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
//                     Responsibilities
//                   </h4>
//                   <ul className="space-y-2">
//                     {selectedJob.responsibilities.map((item) => (
//                       <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
//                         <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-display text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
//                     Requirements
//                   </h4>
//                   <ul className="space-y-2">
//                     {selectedJob.requirements.map((item) => (
//                       <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
//                         <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="rounded-lg bg-muted/40 border border-border/60 p-4">
//                   <span className="text-[10px] text-muted-foreground font-semibold tracking-wider uppercase">
//                     Compensation
//                   </span>
//                   <p className="text-sm text-foreground/80 mt-1">{selectedJob.compensation}</p>
//                 </div>
//               </div>

//               <DialogFooter className="mt-4">
//                 <Button variant="outline" onClick={() => setSelectedJob(null)}>
//                   Close
//                 </Button>
//                 <Button asChild>
//                   <a href={`mailto:sukshmadarshini@gmail.com?subject=Application: ${encodeURIComponent(selectedJob.title)}`}>
//                     <Mail className="w-4 h-4" />
//                     Apply via Email
//                   </a>
//                 </Button>
//               </DialogFooter>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

"use client";

import {
  Users,
  GraduationCap,
  Mail,
  Lightbulb,
  ArrowRight,
  MapPin,
  Briefcase as JobIcon,
  CheckCircle2,
  Clock,
  Shield,
  CircleCheckBig,
  Upload,
} from "lucide-react";

import { Navbar } from "../components/Navbar";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";

import { z } from "zod";

import { useState } from "react";
import Image from "next/image";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { useToast } from "../hooks/use-toast";

/* ================= TYPES ================= */

type Job = {
  title?: string;
  type?: string;
  location?: string;
  department?: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  compensation?: string;
};

type CareersSection = {
  title?: string;
  tag?: string;
  description?: string;
  icon?: {
    asset?: {
      url?: string;
    };
  };
  points?: string[];
  jobs?: Job[];
};

type CareersData = {
  SectionTitle?: string;
  SectionDescription?: string;
  SectionTag?: string;
  SectionIcon?: {
    asset?: {
      url?: string;
    };
  };
  careersSections?: CareersSection[];
  application?: {
    email?: string;
    note?: string;
  };
};

/* ================= COMPONENT ================= */

export default function CareersComponent({ data }: { data: CareersData }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [form, setForm] = useState({ name: "", email: "", whyHire: "", extracurriculars: "" });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  console.log("CareersComponent data:", data);

  const applicationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  whyHire: z.string().trim().min(20, "Please write at least 20 characters").max(2000, "Must be less than 2000 characters"),
  extracurriculars: z.string().trim().max(1000, "Must be less than 1000 characters").optional(),
});

  const sections = data?.careersSections || [];

  // const intro = sections.find((s) =>
  //   s.title?.toLowerCase().includes("who")
  // );

  // const rolesSection = sections.find((s) =>
  //   s.title?.toLowerCase().includes("connecting")
  // );

  const jobsSection = sections.find((s) => s.jobs?.length);

  // const internshipSection = sections.find((s) =>
  //   s.title?.toLowerCase().includes("intern")
  // );

  const jobs = jobsSection?.jobs || [];

  const openApply = (job: Job) => {
    setSelectedJob(null);
    setApplyJob(job);
    setForm({ name: "", email: "", whyHire: "", extracurriculars: "" });
    setResumeFile(null);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = applicationSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    if (!resumeFile) {
      setErrors({ resume: "Please attach your resume" });
      return;
    }
    const data = result.data;
    const subject = `Application: ${applyJob?.title ?? ""}`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Position: ${applyJob?.title ?? ""}`,
      "",
      "Why we should hire me:",
      data.whyHire,
      "",
      "Extracurricular activities / shareable links:",
      data.extracurriculars || "—",
      "",
      `Resume: ${resumeFile.name} (please find attached)`,
    ].join("\n");
    window.location.href = `mailto:sukshmadarshini@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast({
      title: "Opening your email client",
      description: "Please attach your resume file before sending.",
    });
    setApplyJob(null);
  };

  return (
    <>
    <Navbar />

    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative pt-10 overflow-hidden">
        <div className="gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                {/* <Users className="w-7 h-7 text-primary-foreground" /> */}
                {data?.SectionIcon?.asset?.url ? (
                                      <Image
                                        src={data?.SectionIcon.asset.url}
                                        alt="icon"
                                        width={28}
                                        height={28}
                                        className="w-7 h-7 object-contain"
                                      />
                                    ) : (
                                      // <Shield className="w-5 h-5 text-primary-foreground" />
                                      null
                                    )}
              </div>

              <span className="text-primary-foreground/70 uppercase text-sm">
                {data?.SectionTag }
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              {data?.SectionTitle }
            </h1>

            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              {data?.SectionDescription}
            </p>
          </div>
        </div>
        {/* Wave */}
          <div className="relative h-20 overflow-hidden bg-background -mt-1">
            <svg
              className="absolute -top-1 w-full"
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z"
                fill="url(#privacyWave)"
              />
              <defs>
                <linearGradient
                  id="privacyWave"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="hsl(var(--init))" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
          </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 max-w-4xl pb-24">
        <div className="space-y-6">
            {data?.careersSections?.map((section, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                      {section.icon?.asset?.url ? (
                        <Image
                          src={section.icon.asset.url}
                          alt="icon"
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                        />
                      ) : (
                        <Shield className="w-5 h-5 text-primary-foreground" />
                      )}
                    </div>

                    {/* Title */}
                    <div>
                      <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">{section.tag}</span>
                      <h2 className="font-display text-xl font-semibold text-foreground">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-foreground/80 leading-relaxed pl-14">
                  
                  {/* Description */}
                  {section.description && (
                    <p className="mb-3">{section.description}</p>
                  )}

                  {/* Bullet Points */}
                    {section.points?.length ? (
                      <ul className="space-y-2 ml-1">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CircleCheckBig className="w-4 h-4 rounded-full text-secondary mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                    <JobIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Open Roles</span>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      Available Jobs
                    </h2>
                  </div>
                  </div>
                  {/* <span className="text-xs uppercase">Open Roles</span>
                  <h3 className="text-lg font-semibold mb-4">
                  Available Jobs
                </h3> */}
                </div>


                <div className="grid sm:grid-cols-2 gap-4">
                  {jobs.length ? (
                    jobs.map((job, i) => (
                      <div
                        key={i}
                        className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up"
                      >
                        <div className="flex justify-between mb-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-semibold tracking-wider uppercase">{job.department}</span>
                          <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">{job.type}</span>
                        </div>

                        <h4 className="font-semibold">{job.title}</h4>

                        <p className="text-sm mt-2">
                          {job.description}
                        </p>

                        <div className="flex justify-between mt-4">
                          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>

                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 px-2 text-secondary hover:text-secondary hover:bg-secondary/10"
                            onClick={() => setSelectedJob(job)}
                          >
                            View
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No openings available</p>
                  )}
                </div>
              </div>
      </section>

      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-semibold tracking-wider uppercase">
                    {selectedJob.department}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedJob.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedJob.location}
                  </span>
                </div>
                <DialogTitle className="font-display text-2xl">{selectedJob.title}</DialogTitle>
                <DialogDescription className="text-foreground/70 leading-relaxed pt-1">
                  {selectedJob.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 mt-2">
                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities?.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {selectedJob.requirements?.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-muted/40 border border-border/60 p-4">
                  <span className="text-[10px] text-muted-foreground font-semibold tracking-wider uppercase">
                    Compensation
                  </span>
                  <p className="text-sm text-foreground/80 mt-1">{selectedJob.compensation}</p>
                </div>
              </div>

              <DialogFooter className="mt-4">
                <Button variant="outline" onClick={() => setSelectedJob(null)}>
                  Close
                </Button>
                <Button onClick={() => openApply(selectedJob)}>
                    <Mail className="w-4 h-4" />
                    Apply Now
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!applyJob} onOpenChange={(open) => !open && setApplyJob(null)}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          {applyJob && (
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">Apply: {applyJob.title}</DialogTitle>
                <DialogDescription>
                  Fill in your details below. Your email client will open to send the application — please attach your resume before sending.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div className="space-y-1.5">
                  <Label htmlFor="apply-name">Full name <span className="text-destructive">*</span></Label>
                  <Input
                    id="apply-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    required
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="apply-email">Email <span className="text-destructive">*</span></Label>
                  <Input
                    id="apply-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    required
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="apply-why">Why should we hire you <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="apply-why"
                    rows={5}
                    value={form.whyHire}
                    onChange={(e) => setForm({ ...form, whyHire: e.target.value })}
                    maxLength={2000}
                    placeholder="Tell us about your strengths, motivation, and fit for this role…"
                    required
                  />
                  {errors.whyHire && <p className="text-xs text-destructive">{errors.whyHire}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="apply-resume">Resume <span className="text-destructive">*</span></Label>
                  <label
                    htmlFor="apply-resume"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-md border border-dashed border-input bg-background hover:bg-muted/40 cursor-pointer transition-colors"
                  >
                    <Upload className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground/80 truncate">
                      {resumeFile ? resumeFile.name : "Choose a PDF / DOC / DOCX file"}
                    </span>
                  </label>
                  <Input
                    id="apply-resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                  />
                  {errors.resume && <p className="text-xs text-destructive">{errors.resume}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="apply-extra">Extracurricular activities (shareable links)</Label>
                  <Textarea
                    id="apply-extra"
                    rows={3}
                    value={form.extracurriculars}
                    onChange={(e) => setForm({ ...form, extracurriculars: e.target.value })}
                    maxLength={1000}
                    placeholder="LinkedIn, GitHub, portfolio, publications, volunteer work…"
                  />
                  {errors.extracurriculars && <p className="text-xs text-destructive">{errors.extracurriculars}</p>}
                </div>
              </div>

              <DialogFooter className="mt-6">
                <Button type="button" variant="outline" onClick={() => setApplyJob(null)}>
                  Cancel
                </Button>
                <Button type="submit">
                  <Mail className="w-4 h-4" />
                  Send Application
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
    </>
  );
}