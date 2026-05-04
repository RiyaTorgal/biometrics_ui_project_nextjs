// "use client";

// import { useState } from "react";
// import { z } from "zod";
// import { Handshake, Calendar, Clock, Users, Mail } from "lucide-react";
// import { Navbar } from "@/app/components/Navbar";
// import { Button } from "@/app/components/ui/button";
// import { Input } from "@/app/components/ui/input";
// import { Label } from "@/app/components/ui/label";
// import { Textarea } from "@/app/components/ui/textarea";
// import { useToast } from "@/app/hooks/use-toast";
// import Image from "next/image";

// type Collaboration = {
//   title: string;
//   collaboratedWith: string;
//   dateFrom: string;
//   dateTo: string;
//   duration: string;
//   photos?: string[];
//   description?: string;
// };

// const collaborations: Collaboration[] = [
//   {
//     title: "Plant Proteomics Capacity Building",
//     collaboratedWith: "European Plant Science Consortium",
//     dateFrom: "Jan 2023",
//     dateTo: "Dec 2024",
//     duration: "2 Years",
//     description:
//       "Joint training program on advanced LC-MS workflows for crop improvement research across partner institutions.",
//   },
//   {
//     title: "Agri-Multiomics Data Pipeline",
//     collaboratedWith: "AgriBiotech Research Institute",
//     dateFrom: "Mar 2023",
//     dateTo: "Sep 2023",
//     duration: "6 Months",
//     description:
//       "Co-development of an end-to-end multiomics data analysis pipeline for sustainable agriculture studies.",
//   },
//   {
//     title: "Sustainable Crop Stress Symposium",
//     collaboratedWith: "European Sustainable Agriculture Network",
//     dateFrom: "Jun 2024",
//     dateTo: "Aug 2024",
//     duration: "3 Months",
//     description:
//       "Co-hosted symposium and curated training modules for early-career researchers in plant stress proteomics.",
//   },
//   {
//     title: "Proteomics Standards Working Group",
//     collaboratedWith: "International Proteomics Society",
//     dateFrom: "Sep 2022",
//     dateTo: "Mar 2024",
//     duration: "1.5 Years",
//     description:
//       "Contributed to publishing best-practice guidelines for plant proteomics experiments and reproducibility.",
//   },
// ];

// const inquirySchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(100),
//   email: z.string().trim().email("Invalid email").max(255),
//   organization: z.string().trim().min(1, "Organization is required").max(150),
//   collaborationType: z.string().trim().min(1, "Please specify the type").max(150),
//   message: z.string().trim().min(20, "Please write at least 20 characters").max(2000),
// });

// export default function Collaborations() {
//   const { toast } = useToast();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     organization: "",
//     collaborationType: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const handleChange = (field: keyof typeof form, value: string) => {
//     setForm((p) => ({ ...p, [field]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = inquirySchema.safeParse(form);
//     if (!result.success) {
//       const newErrors: Record<string, string> = {};
//       result.error.issues.forEach((i) => {
//         if (i.path[0]) newErrors[i.path[0] as string] = i.message;
//       });
//       setErrors(newErrors);
//       return;
//     }
//     setErrors({});

//     const subject = encodeURIComponent(`Collaboration Inquiry — ${form.organization}`);
//     const body = encodeURIComponent(
//       `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nCollaboration Type: ${form.collaborationType}\n\nMessage:\n${form.message}`
//     );
//     window.location.href = `mailto:contact@sukshmadarshini.com?subject=${subject}&body=${body}`;

//     toast({
//       title: "Inquiry ready to send",
//       description: "Your email client should open with the message pre-filled.",
//     });

//     setForm({ name: "", email: "", organization: "", collaborationType: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       <main className="pt-24 md:pt-28">
//         {/* Hero */}
//         <section className="container mx-auto px-4 py-12 md:py-20 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
//             <Handshake className="w-4 h-4" />
//             <span className="text-sm font-medium">Collaborations</span>
//           </div>
//           <h1 className="font-display text-gradient text-4xl md:text-6xl font-bold mb-4">
//             Partnering for Scientific Impact
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A look at our past collaborations across research, training, and capacity-building — and how to start a new one with us.
//           </p>
//         </section>

//         {/* Past Collaborations */}
//         <section className="container mx-auto px-4 py-12">
//           <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10 text-center">
//             Past Collaborations
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//             {collaborations.map((c, idx) => (
//               <article
//                 key={idx}
//                 className="border border-border rounded-2xl p-6 bg-card hover:shadow-lg transition-shadow"
//               >
//                 <h3 className="font-display text-xl font-semibold text-foreground mb-3">
//                   {c.title}
//                 </h3>

//                 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
//                   <Users className="w-4 h-4 text-primary" />
//                   <span>
//                     <span className="font-medium text-foreground">Collaborated with:</span>{" "}
//                     {c.collaboratedWith}
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
//                   <Calendar className="w-4 h-4 text-primary" />
//                   <span>
//                     <span className="font-medium text-foreground">Date:</span> {c.dateFrom} – {c.dateTo}
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
//                   <Clock className="w-4 h-4 text-primary" />
//                   <span>
//                     <span className="font-medium text-foreground">Duration:</span> {c.duration}
//                   </span>
//                 </div>

//                 {c.description && (
//                   <p className="text-sm text-muted-foreground leading-relaxed mb-4">
//                     {c.description}
//                   </p>
//                 )}

//                 {c.photos && c.photos.length > 0 && (
//                   <div className="grid grid-cols-3 gap-2 mt-4">
//                     {c.photos.map((src, i) => (
//                       <Image
//                         key={i}
//                         src={src}
//                         alt={`${c.title} photo ${i + 1}`}
//                         loading="lazy"
//                         className="w-full h-24 object-cover rounded-lg"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* Get in Touch */}
//         <section className="container mx-auto px-4 py-16">
//           <div className="max-w-3xl mx-auto border border-border rounded-2xl p-6 md:p-10 bg-card">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
//                 <Mail className="w-4 h-4" />
//                 <span className="text-sm font-medium">Collaborate with us</span>
//               </div>
//               <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
//                 Get in Touch
//               </h2>
//               <p className="text-muted-foreground">
//                 Tell us about your organization and the collaboration you have in mind.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid md:grid-cols-2 gap-5">
//                 <div className="space-y-2">
//                   <Label htmlFor="collab-name">Name *</Label>
//                   <Input
//                     id="collab-name"
//                     value={form.name}
//                     onChange={(e) => handleChange("name", e.target.value)}
//                     placeholder="Your full name"
//                   />
//                   {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="collab-email">Email *</Label>
//                   <Input
//                     id="collab-email"
//                     type="email"
//                     value={form.email}
//                     onChange={(e) => handleChange("email", e.target.value)}
//                     placeholder="you@example.com"
//                   />
//                   {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-5">
//                 <div className="space-y-2">
//                   <Label htmlFor="collab-org">Organization *</Label>
//                   <Input
//                     id="collab-org"
//                     value={form.organization}
//                     onChange={(e) => handleChange("organization", e.target.value)}
//                     placeholder="Your institution or company"
//                   />
//                   {errors.organization && (
//                     <p className="text-sm text-destructive">{errors.organization}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="collab-type">Type of Collaboration *</Label>
//                   <Input
//                     id="collab-type"
//                     value={form.collaborationType}
//                     onChange={(e) => handleChange("collaborationType", e.target.value)}
//                     placeholder="Research, Training, Joint event…"
//                   />
//                   {errors.collaborationType && (
//                     <p className="text-sm text-destructive">{errors.collaborationType}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="collab-msg">Message *</Label>
//                 <Textarea
//                   id="collab-msg"
//                   rows={6}
//                   value={form.message}
//                   onChange={(e) => handleChange("message", e.target.value)}
//                   placeholder="Briefly describe your goals, scope, and timeline."
//                 />
//                 {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
//               >
//                 Send Inquiry
//               </Button>
//             </form>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };


"use client";

import { useState } from "react";
import { z } from "zod";
import { Handshake, Calendar, Clock, Users, Mail } from "lucide-react";
import { Navbar } from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { useToast } from "@/app/hooks/use-toast";
import Image from "next/image";

type Photo = {
  asset: { url: string };
};

type Collaboration = {
  title: string;
  collaboratedWith: string;
  dateFrom: string;
  dateTo: string;
  duration: string;
  photos?: Photo[];
  description?: string;
};

type CollaborationsProps = {
  collaborations: Collaboration[];
};

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  organization: z.string().trim().min(1, "Organization is required").max(150),
  collaborationType: z.string().trim().min(1, "Please specify the type").max(150),
  message: z.string().trim().min(20, "Please write at least 20 characters").max(2000),
});

export default function Collaborations({ collaborations = [] }: CollaborationsProps) {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    collaborationType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = inquirySchema.safeParse(form);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) newErrors[i.path[0] as string] = i.message;
      });
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const subject = encodeURIComponent(`Collaboration Inquiry — ${form.organization}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nCollaboration Type: ${form.collaborationType}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:contact@sukshmadarshini.com?subject=${subject}&body=${body}`;

    toast({
      title: "Inquiry ready to send",
      description: "Your email client should open with the message pre-filled.",
    });

    setForm({ name: "", email: "", organization: "", collaborationType: "", message: "" });
  };

  const hasPastCollaborations = (collaborations ?? []).length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Handshake className="w-4 h-4" />
            <span className="text-sm font-medium">Collaborations</span>
          </div>
          <h1 className="font-display text-gradient text-4xl md:text-6xl font-bold mb-4">
            Partnering for Scientific Impact
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A look at our past collaborations across research, training, and capacity-building — and how to start a new one with us.
          </p>
        </section>

        {/* ✅ Past Collaborations — only shown when Sanity has entries */}
        {hasPastCollaborations && (
          <section className="container mx-auto px-4 py-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-10 text-center">
              Past Collaborations
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {collaborations.map((c, idx) => (
                <article
                  key={idx}
                  className="border border-border rounded-2xl p-6 bg-card hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {c.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>
                      <span className="font-medium text-foreground">Collaborated with:</span>{" "}
                      {c.collaboratedWith}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>
                      <span className="font-medium text-foreground">Date:</span> {c.dateFrom} – {c.dateTo}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>
                      <span className="font-medium text-foreground">Duration:</span> {c.duration}
                    </span>
                  </div>

                  {c.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {c.description}
                    </p>
                  )}

                  {c.photos && c.photos.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {c.photos.map((photo, i) => (
                        <Image
                          key={i}
                          src={photo.asset.url}
                          alt={`${c.title} photo ${i + 1}`}
                          width={200}
                          height={96}
                          loading="lazy"
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Get in Touch — always visible */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto border border-border rounded-2xl p-6 md:p-10 bg-card">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Collaborate with us</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Tell us about your organization and the collaboration you have in mind.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="collab-name">Name *</Label>
                  <Input
                    id="collab-name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collab-email">Email *</Label>
                  <Input
                    id="collab-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="collab-org">Organization *</Label>
                  <Input
                    id="collab-org"
                    value={form.organization}
                    onChange={(e) => handleChange("organization", e.target.value)}
                    placeholder="Your institution or company"
                  />
                  {errors.organization && (
                    <p className="text-sm text-destructive">{errors.organization}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collab-type">Type of Collaboration *</Label>
                  <Input
                    id="collab-type"
                    value={form.collaborationType}
                    onChange={(e) => handleChange("collaborationType", e.target.value)}
                    placeholder="Research, Training, Joint event…"
                  />
                  {errors.collaborationType && (
                    <p className="text-sm text-destructive">{errors.collaborationType}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="collab-msg">Message *</Label>
                <Textarea
                  id="collab-msg"
                  rows={6}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Briefly describe your goals, scope, and timeline."
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Send Inquiry
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}