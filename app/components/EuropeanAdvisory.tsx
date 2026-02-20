// "use client"
// import { FileText, Download, BookOpen, Video, ArrowRight, ExternalLink, Landmark, Earth, CheckCircle2 } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Badge } from "../components/ui/badge";
// import { AnimatedLogo } from "./AnimatedLogo";

// const coverings = [
//   "University & program selection aligned with research interests",
//   "Understanding European academic structures",
//   "Research proposal development",
//   "Statement of purpose refinement",
//   "Scientific CV optimization",
//   "Identifying skill gaps before application",
//   "Interview & research discussion preparation",
// ];

// const forWho = [
//   "Biotechnology students",
//   "Agricultural science students",
//   "Plant molecular biology researchers",
//   "Early-stage research scholars",
//   "Students planning Master's or PhD in Europe",
// ];

// export function EuropeanAdvisory() {
//   return (
//     <section id="european-advisory" className="py-24 bg-background relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-[0.04]">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//         }} />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
//             <Earth className="w-4 h-4" />
//             <span className="text-sm font-semibold">Foreign Reach</span>
//           </div>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             <span className="text-gradient">European Science Path Advisory</span>
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             Sukshmadarshini™ provides structured academic consultation for biotechnology and agricultural science students seeking higher education and research opportunities in Europe.
//           </p>
//           <p className="text-lg text-muted-foreground">
//             With direct understanding of European research ecosystems, we guide students through a focused, strategic preparation process.
//           </p>
//         </div>
//         <div className="container mx-auto px-4 relative z-10">
//             <div className="grid lg:grid-cols-2 items-center gap-6">
//             {/* Left Content */}
//             <div>
                
//                 <h4 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6"> 
//                 <span className="text-gradient block">Our Advisory Covers: </span>
//                 </h4>
                
//                 {coverings.map((item, index) => (
//                 <div
//                   key={item}
//                   className="flex gap-3 animate-fade-up"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
//                     <CheckCircle2 className="w-4 h-4 text-accent" />
//                   </div>
//                   <span className="text-md text-muted-foreground mb-6 leading-relaxed">{item}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Right Visual */}
//             <div>
                
//                 <h4 className="flex items-startfont-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6"> 
//                     <span className="text-gradient block">Who This Is For: </span>
//                 </h4>
                
//                 {forWho.map((item, index) => (
//                 <div
//                   key={item}
//                   className="flex gap-3 animate-fade-up"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
//                     <CheckCircle2 className="w-4 h-4 text-accent" />
//                   </div>
//                   <span className="text-lg text-muted-foreground mb-6 leading-relaxed">{item}</span>
//                 </div>
//               ))}
//             </div>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"
import { Earth, CheckCircle2, GraduationCap, BookOpen, FileText, Users, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const coverings = [
  "University & program selection aligned with research interests",
  "Understanding European academic structures",
  "Research proposal development",
  "Statement of purpose refinement",
  "Scientific CV optimization",
  "Identifying skill gaps before application",
  "Interview & research discussion preparation",
];

const forWho = [
  "Biotechnology students",
  "Agricultural science students",
  "Plant molecular biology researchers",
  "Early-stage research scholars",
  "Students planning Master's or PhD in Europe",
];

export function EuropeanAdvisory() {
  return (
    <section id="european-advisory" className="py-24 bg-background relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 border border-accent/20">
            <Earth className="w-4 h-4" />
            <span className="text-sm font-semibold">Foreign Reach</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient">European Science Path Advisory</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sukshmadarshini™ provides structured academic consultation for biotechnology and agricultural science students seeking higher education and research opportunities in Europe.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With direct understanding of European research ecosystems, we guide students through a focused, strategic preparation process.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left — Advisory Covers (wider) */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 h-full shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Our Advisory Covers
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {coverings.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 p-3 rounded-xl bg-accent/5 hover:bg-accent/10 border border-transparent hover:border-accent/20 transition-all duration-200 group animate-fade-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-md text-muted-foreground leading-relaxed pt-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Who This Is For + CTA */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Who This Is For card */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Who This Is For
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {forWho.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-md text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-accent" />
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="relative p-8">
                <GraduationCap className="w-10 h-10 text-white/80 mb-4" />
                <h4 className="font-display text-xl font-bold text-white mb-2">
                  Ready to plan your European research journey?
                </h4>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Book a one-on-one advisory session and get a personalised roadmap.
                </p>
                <a href="#contact">
                  <Button className="w-full bg-white text-secondary hover:bg-white/90 rounded-xl font-semibold flex items-center justify-center gap-2">
                    Book a Session
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
