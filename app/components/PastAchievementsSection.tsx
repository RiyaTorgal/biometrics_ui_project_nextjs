// "use client";

// import { useEffect, useState } from "react";
// import { Award, FlaskConical, Mic, Rocket, Compass } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/app/components/ui/carousel";
// import academicTalksImage from "@/public/academic-talks.jpg";
// import seminarImage from "@/public/talk-seminar.jpg";
// import cropScienceImage from "@/public/talk-crop-science.jpg";
// import europeanCampusImage from "@/public/talk-european-campus.jpg";
// import samplePrepImage from "@/public/talk-sample-prep.jpg";
// import proteomicsLabImage from "@/public/talk-proteomics-lab.jpg";
// import Image from "next/image";

// const talks = [
//   {
//     year: "2023",
//     title: "Agri-Proteomics Workshop",
//     description:
//       "Delivered an introductory session on plant proteomics workflows for biotechnology graduates.",
//     image: academicTalksImage,
//   },
//   {
//     year: "2023",
//     title: "Dr. D. Y. Patil Institute – November 2023",
//     description:
//       "Delivered an alumni talk focused on biotechnology, research pathways, and global opportunitiesEngaged with students on practical applications of science and career direction ",
//     links: [
//       { label: "YouTube Recording", url: "https://events.dpu.edu.in/event-details.aspx?eventid=16353&InstituteID=5" },
//       { label: "Presentation Slides", url: "https://biotech.dpu.edu.in/documents/alumni-talk-series/30th-november-2023-final-report-dr-priyadarshini-alumni-talk.pdf" },],
//     image: cropScienceImage,
//   },
//   {
//     year: "2025",
//     title: "MIT World Peace University, Pune – October 2025",
//     description:
//       "Conducted an interactive session on higher education, research pathways, and international opportunities",
//       links: [
//         { label: "YouTube Recording", url: "https://www.linkedin.com/posts/p-tilak_highereducation-mastersabroad-phdingermany-activity-7389682994057457664-G77h" },
//       ],
//     image: europeanCampusImage,
//   },
//   {
//     year: "2026",
//     title: "Language Box – February 2026",
//     description:
//       "Contributed to interdisciplinary discussions connecting science, communication, and global perspectives ",
//       links: [
//         { label: "YouTube Recording", url: "https://https://www.linkedin.com/posts/samhit-linguistics_introducing-beyond-borders-the-language-activity-7430861332649799680-WO5n" },
//       ],
//     image: samplePrepImage,
//   },
// ];

// const subsections = [
//   {
//     icon: FlaskConical,
//     title: "Research & Scientific Foundations",
//     subtitle: "Our Roots",
//     description:
//       "Worked on advanced topics in plant proteomics, focusing on understanding molecular level plant responses and stress mechanisms. Explored modern experimental and analytical approaches in plant science through global research resources:",
//   },
//   {
//     icon: Rocket,
//     title: "Startup & Ecosystem Engagement",
//     subtitle: "Biologics X 3DCC Conference, Goa – January 2026",
//     description:
//       "Represented Sukshmadarshini at the Biopitch Session. Engaged with scientists, founders, and industry leaders in biotechnology and biologics ,Highlights: Presented ideas and vision in front of an expert panel.Received valuable feedback from domain experts and jury members.Participated in discussions around innovation, biotech applications, and industry needs.This experience strengthened our direction towards building applied science solutions for real-world challenges.",
//   },
//   // {
//   //   icon: Compass,
//   //   title: "Our Direction",
//   //   description:
//   //     "Moving forward, Sukshmadarshini™ is committed to deepening its impact in Agri-Proteomics, expanding global academic pathways, and nurturing the next generation of biotechnology researchers with clarity, precision, and purpose.",
//   // },
// ];

// export function PastAchievementsSection() {
//   const [api, setApi] = useState<CarouselApi>();
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     if (!api) return;
//     const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
//     onSelect();
//     api.on("select", onSelect);
//     api.on("reInit", onSelect);
//     return () => {
//       api.off("select", onSelect);
//     };
//   }, [api]);

//   const activeTalk = talks[selectedIndex] ?? talks[0];

//   return (
//     <section id="achievements" className="py-10 bg-muted/30 relative overflow-hidden">
//       {/* <div className="absolute inset-0 dna-pattern opacity-40" /> */}

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
//             <Award className="w-4 h-4" />
//             <span className="text-sm font-semibold">Past Achievements</span>
//           </div>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             What We&apos;ve <span className="text-gradient">Done So Far</span>
//           </h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             At Sukshmadarshini, we are building a bridge between scientific research and real-world application in agriculture and biotechnology. Our journey so far reflects a strong foundation in research, knowledge sharing, and ecosystem engagement.
//           </p>
//         </div>

//         {/* Research, Startup, Direction cards */}
//         <div className="grid md:grid-cols-2 gap-6 mb-20">
//           {subsections.map((item, index) => (
//             <Card
//               key={item.title}
//               className="glass-card shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-fade-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <CardHeader>
//                 <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-soft">
//                   <item.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <CardTitle className="text-xl">{item.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground leading-relaxed">{item.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Academic Talks Carousel */}
//         <div className="max-w-auto mx-auto">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
//               <Mic className="w-4 h-4" />
//               <span className="text-sm font-semibold">Academic Talks & Knowledge Sharing</span>
//             </div>
//             <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
//               Sharing Science, Empowering Researchers
//             </h3>
//           </div>

//           <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-8 items-center">
//             {/* Image */}
//             <div className="lg:col-span-2 animate-fade-up">
//               <div className="relative rounded-2xl overflow-hidden shadow-glow group aspect-square">
//                 {talks.map((talk, i) => (
//                   <Image
//                     key={talk.title}
//                     src={talk.image}
//                     alt={`Visual for ${talk.title}`}
//                     width={1024}
//                     height={1024}
//                     loading="lazy"
//                     className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
//                       i === selectedIndex ? "opacity-100" : "opacity-0"
//                     }`}
//                   />
//                 ))}
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent pointer-events-none" />
//                 <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
//                   <p className="text-xs font-medium opacity-90 drop-shadow-lg">{activeTalk.year}</p>
//                   <p className="text-sm font-semibold drop-shadow-lg">{activeTalk.title}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Carousel */}
//             <div className="sm:col-span-1 md:col-span-2 lg:col-span-3">
//               <Carousel
//                 opts={{ align: "start", loop: true }}
//                 setApi={setApi}
//                 className="w-3/4 items-center px-0"
//               >
//                 <CarouselContent>
//                   {talks.map((talk, index) => (
//                     <CarouselItem key={index}>
//                       <Card className="h-full glass-card shadow-soft hover:shadow-glow transition-all duration-500">
//                         <CardHeader>
//                           <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
//                             {talk.year}
//                           </div>
//                           <CardTitle className="text-lg leading-snug">{talk.title}</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             {talk.description}
//                           </p>
//                         </CardContent>
//                       </Card>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { Award, FlaskConical, Mic, Rocket, CheckCheck } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/app/components/ui/carousel";
// import academicTalksImage from "@/public/academic-talks.jpg";
// import cropScienceImage from "@/public/talk-crop-science.jpg";
// import europeanCampusImage from "@/public/talk-european-campus.jpg";
// import samplePrepImage from "@/public/talk-sample-prep.jpg";
// import Image from "next/image";

// const talks = [
//   {
//     year: "2023",
//     title: "Agri-Proteomics Workshop",
//     description:
//       "Delivered an introductory session on plant proteomics workflows for biotechnology graduates.",
//     image: academicTalksImage,
//   },
//   {
//     year: "2023",
//     title: "Dr. D. Y. Patil Institute – November 2023",
//     description:
//       "Delivered an alumni talk focused on biotechnology, research pathways, and global opportunitiesEngaged with students on practical applications of science and career direction ",
//     links: [
//       { label: "Event Details", url: "https://events.dpu.edu.in/event-details.aspx?eventid=16353&InstituteID=5" },
//       { label: "Event Report", url: "https://biotech.dpu.edu.in/documents/alumni-talk-series/30th-november-2023-final-report-dr-priyadarshini-alumni-talk.pdf" },
//     ],
//     image: cropScienceImage,
//   },
//   {
//     year: "2025",
//     title: "MIT World Peace University, Pune – October 2025",
//     description:
//       "Conducted an interactive session on higher education, research pathways, and international opportunities",
//     links: [
//       { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/p-tilak_highereducation-mastersabroad-phdingermany-activity-7389682994057457664-G77h" },
//     ],
//     image: europeanCampusImage,
//   },
//   {
//     year: "2026",
//     title: "Language Box – February 2026",
//     description:
//       "Contributed to interdisciplinary discussions connecting science, communication, and global perspectives ",
//     links: [
//       { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/samhit-linguistics_introducing-beyond-borders-the-language-activity-7430861332649799680-WO5n" },
//     ],
//     image: samplePrepImage,
//   },
// ];

// const subsections = [
//   {
//     icon: FlaskConical,
//     title: "Research & Scientific Foundations",
//     subtitle: "Our Roots",
//     description: [
//       "Worked on advanced topics in plant proteomics, focusing on understanding molecular level plant responses and stress mechanisms.",
//       "Explored modern experimental and analytical approaches in plant science through global research resources.",
//     ],
//     links: [
//       { label: "Publication 1", url: "https://link.springer.com/protocol/10.1007/978-1-0716-0528-8_19" },
//       { label: "Publication 2", url: "https://onlinelibrary.wiley.com/doi/10.1111/tpj.16206" },
//       { label: "Publication 3", url: "https://www.cell.com/molecular-plant/fulltext/S1674-2052(21)00437-8?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS1674205221004378%3Fshowall%3Dtrue" },
//       { label: "Publication 4", url: "https://www.frontiersin.org/articles/10.3389/fpls.2018.00461/full?&utm_source=Email_to_authors_&utm_medium=Email&utm_content=T1_11.5e1_author&utm_campaign=Email_publication&field=&journalName=Frontiers_in_Plant_Science&id=363029" },
//       { label: "Publication 5", url: "http://www.sciencedirect.com/science/article/pii/S0048357516300232" },
//       { label: "Publication 6", url: "https://programme.conventus.de/hupo-2024/program/program-points/461ac613-805e-48d4-aeba-d3d7ec769652" },
//     ],
//   },
//   {
//     icon: Rocket,
//     title: "Startup & Ecosystem Engagement",
//     subtitle: "Biologics X 3DCC Conference, Goa – January 2026",
//     description: [
//       "Represented Sukshmadarshini at the Biopitch Session. Engaged with scientists, founders, and industry leaders in biotechnology and biologics",
//       "Presented ideas and vision in front of an expert panel",
//       "Received valuable feedback from domain experts and jury members.",
//       "Participated in discussions around innovation, biotech applications, and industry needs.",
//       "This experience strengthened our direction towards building applied science solutions for real-world challenges.",
//     ],
//   },
// ];

// export function PastAchievementsSection() {
//   const [api, setApi] = useState<CarouselApi>();
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     if (!api) return;
//     const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
//     onSelect();
//     api.on("select", onSelect);
//     api.on("reInit", onSelect);
//     return () => {
//       api.off("select", onSelect);
//     };
//   }, [api]);

//   const activeTalk = talks[selectedIndex] ?? talks[0];

//   return (
//     <section id="achievements" className="py-10 bg-muted/30 relative overflow-hidden">
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
//             <Award className="w-4 h-4" />
//             <span className="text-sm font-semibold">Past Achievements</span>
//           </div>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             What We&apos;ve <span className="text-gradient">Done So Far</span>
//           </h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             At Sukshmadarshini, we are building a bridge between scientific research and real-world application in agriculture and biotechnology. Our journey so far reflects a strong foundation in research, knowledge sharing, and ecosystem engagement.
//           </p>
//         </div>

//         {/* Research, Startup, Direction cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
//           {subsections.map((item, index) => (
//             <Card
//               key={item.title}
//               className="glass-card shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-fade-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <CardHeader>
//                 <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-soft">
//                   <item.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <CardTitle className="text-xl">{item.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2">
//                   {item.description?.map((point, i) => (
//                     <li key={i} className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
//                       <CheckCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//                 {item.links && (
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {item.links.map((link) => (
//                       <a
//                         key={link.url}
//                         href={link.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-xs text-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
//                       >
//                         {link.label}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Academic Talks Carousel */}
//         <div className="max-w-auto mx-auto">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
//               <Mic className="w-4 h-4" />
//               <span className="text-sm font-semibold">Academic Talks & Knowledge Sharing</span>
//             </div>
//             <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
//               Sharing Science, Empowering Researchers
//             </h3>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
//             {/* Image */}
//             <div className="lg:col-span-2 animate-fade-up">
//               <div className="relative rounded-2xl overflow-hidden shadow-glow group aspect-video lg:aspect-square">
//                 {talks.map((talk, i) => (
//                   <Image
//                     key={talk.title}
//                     src={talk.image}
//                     alt={`Visual for ${talk.title}`}
//                     width={1024}
//                     height={1024}
//                     loading="lazy"
//                     className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
//                       i === selectedIndex ? "opacity-100" : "opacity-0"
//                     }`}
//                   />
//                 ))}
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent pointer-events-none" />
//                 <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
//                   <p className="text-xs font-medium opacity-90 drop-shadow-lg">{activeTalk.year}</p>
//                   <p className="text-sm font-semibold drop-shadow-lg">{activeTalk.title}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Carousel */}
//             <div className="lg:col-span-3 w-full">
//               <Carousel
//                 opts={{ align: "start", loop: true }}
//                 setApi={setApi}
//                 className="w-full"
//               >
//                 <CarouselContent>
//                   {talks.map((talk, index) => (
//                     <CarouselItem key={index}>
//                       <Card className="h-full glass-card shadow-soft hover:shadow-glow transition-all duration-500">
//                         <CardHeader>
//                           <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
//                             {talk.year}
//                           </div>
//                           <CardTitle className="text-lg leading-snug">{talk.title}</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             {talk.description}
//                           </p>
//                           {talk.links && (
//                             <div className="mt-4 flex flex-wrap gap-2">
//                               {talk.links.map((link) => (
//                                 <a
//                                   key={link.url}
//                                   href={link.url}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="text-xs text-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
//                                 >
//                                   {link.label}
//                                 </a>
//                               ))}
//                             </div>
//                           )}
//                         </CardContent>
//                       </Card>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>
//                 <div className="flex items-center justify-center gap-4 mt-6">
//                   <CarouselPrevious className="static translate-y-0" />
//                   <CarouselNext className="static translate-y-0" />
//                 </div>
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Award, FlaskConical, Mic, Rocket, CheckCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel";
import Image from "next/image";

interface PastAchievementsProps {
  data: any;
}

export function PastAchievementsSection({ data }: PastAchievementsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const talks = data?.talks || [];
  const subsections = data?.subsections || [];

  console.log("Past Achievements Data:", data);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const activeTalk = talks[selectedIndex] ?? talks[0];

  // Icon mapping (based on title)
  const iconMap: any = {
    "Research & Scientific Foundations": FlaskConical,
    "Startup & Ecosystem Engagement": Rocket,
  };

  return (
    <section id="achievements" className="py-10 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Past Achievements
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {/* {data?.sectionTitle || ""} */}
            <span className="text-gradient block">
                {data?.sectionTitle || ""}
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {data?.sectionSubtitle || ""}
          </p>
        </div>

        {/* Subsections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {subsections.map((item: any, index: number) => {
            const Icon = iconMap[item.title] || Award;

            return (
              <Card
                key={index}
                className="glass-card shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              >
                <CardHeader>
                  {/* <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="w-6 h-6 text-white" />
                  </div> */}
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-soft overflow-hidden">
                    {item.icon?.asset?.url ? (
                      <Image
                        src={item.icon.asset.url}
                        alt={item.title || "Icon"}
                        width={48}
                        height={48}
                        className="object-contain w-6 h-6"
                      />
                    ) : (
                      (() => {
                        const Icon = iconMap[item.title] || Award;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()
                    )}
                  </div>
                  <CardTitle className="text-gradient text-xl">{item.title}</CardTitle>
                  <span className="flex items-start gap-2 text-sm font-medium text-muted-foreground ">
                    {item.subtitle}
                  </span>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {item.description?.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {item.links && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.links.map((link: any) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary underline underline-offset-2 hover:opacity-75"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Talks Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Mic className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Academic Talks & Knowledge Sharing
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold">
            {/* {data?.talksHeading || ""} */}
            <span className="text-gradient block">
                {data?.talksHeading || ""}
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">

          {/* Image */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square">
              {talks.map((talk: any, i: number) => (
                <Image
                  key={i}
                  src={talk.image?.asset?.url || "/fallback.jpg"}
                  alt={talk.title || "Talk Image"}
                  width={1024}
                  height={1024}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === selectedIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="lg:col-span-3">
            <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
              <CarouselContent>
                {talks.map((talk: any, index: number) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardHeader>
                        <div className="text-xs text-primary mb-2">{talk.year}</div>
                        <CardTitle>{talk.title}</CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {talk.description}
                        </p>

                        {talk.links && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {talk.links.map((link: any) => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                className="text-xs text-primary underline"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-center gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}