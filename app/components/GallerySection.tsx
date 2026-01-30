// import { Calendar, MapPin, ExternalLink, Sparkles, ImageIcon } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Button } from "../components/ui/button";
// import Picture1 from "./assets/Picture1.png";
// import Picture2 from "./assets/Picture2.png";
// import Picture3 from "./assets/Picture3.png";
// import Picture4 from "./assets/Picture4.jpg";
// import Picture5 from "./assets/Picture5.jpg";
// import Picture6 from "./assets/Picture6.jpg";
// import Image from "next/image";

// const galleryImages = [
//   {
//     src: Picture1,
//     title: "3DCC x Biologics Goa Workshop",
//   },
//   {
//     src: Picture2,
//     title: "Multi-Omics Workshop - Loni Kalbhor",
//   },
//   {
//     src: Picture3,
//     title: "Advanced Bioinformatics Training",
//   },
//   {
//     src: Picture4,
//     title: "Industry Networking Meet",
//   },
//   {
//     src: Picture5,
//     title: "LC-MS/MS Data Analysis Workshop",
//   },
//   {
//     src: Picture6,
//     title: "Student Research Symposium",
//   }
// ];

// const getTypeStyles = (type: string) => {
//   const styles = {
//     Workshop: "border-blue-500/50 text-blue-600 bg-blue-50",
//     Training: "border-green-500/50 text-green-600 bg-green-50",
//     Conference: "border-purple-500/50 text-purple-600 bg-purple-50",
//     Networking: "border-orange-500/50 text-orange-600 bg-orange-50"
//   };
//   return styles[type as keyof typeof styles] || "";
// };

// export function GallerySection() {
//   return (
//     <section id="gallery" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 grid-pattern opacity-30" />
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
//             <ImageIcon className="w-4 h-4" />
//             <span className="text-sm font-semibold">Our Impact</span>
//           </div>
          
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             Empowering the
//             <span className="text-gradient block">Scientific Community</span>
//           </h2>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Through hands-on workshops and collaborative events, we`&apos;`ve trained hundreds of students, 
//             researchers, and industry professionals across India.
//           </p>
//         </div>

//         {/* Statistics */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {[
//             { value: "500+", label: "Students Trained" },
//             { value: "50+", label: "Workshops Conducted" },
//             { value: "100+", label: "Research Projects" },
//             { value: "24/7", label: "Expert Support" }
//           ].map((stat, index) => (
//             <div 
//               key={stat.label} 
//               className="text-center p-6 rounded-lg bg-card border border-border/50 animate-fade-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
//               <div className="text-sm text-muted-foreground">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Events Grid */}
//         <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-2">
//           {galleryImages.map((event, index) => (
//             <Card
//               key={event.title}
//               className={`group bg-card hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-up overflow-hidden 
//                 `}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Image */}
//               <div className={`relative overflow-hidden h-48 flex items-center justify-center bg-muted`}>
//                 <Image 
//                   src={event.src} 
//                   alt={event.title}
//                   className="w-auto h-auto object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </Card>
//           ))}
//         </div>

//         {/* CTA */}
//         {/* <div className="text-center mt-12">
//           <Button variant="outline" size="lg" className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-colors">
//             View Full Event Calendar
//           </Button>
//         </div> */}
//       </div>
//     </section>
//   );
// }