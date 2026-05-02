// import { Card, CardContent } from "../components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
// import { Microscope, Code, SquareChartGantt, Users, Files, BadgeIndianRupee, Mail } from "lucide-react";

// const founder = {
//   name: "Dr. Founder",
//   image: "/Dr. Priyadarshini Tilak.jpeg",
//   role: "Founder & Principal Scientist",
//   bio: "Leads Sukshmadarshini's vision in Agri-Proteomics, bridging European scientific rigor with Indian research talent.",
//   initials: "SF",
//   Icon: Microscope,
// };

// // const members = [
// //   {
// //     name: "Riya Torgal",
// //     image: "/Photo.jpg",
// //     role: "Lead Web Developer",
// //     initials: "RT",
// //     Icon: Code,
// //   },
// //   {
// //     name: "Sayali Tansale",
// //     image: "/sayali.jpeg",
// //     role: "Manager",
// //     initials: "ST",
// //     Icon: SquareChartGantt,
// //   },
// //   {
// //     name: "Anjali Torgal",
// //     image: "/academic-talks.jpg",
// //     role: "Accountant and HR",
// //     initials: "AT",
// //     Icon: Files,
// //   },
// //   {
// //     name: "Haresh Powale",
// //     image: "/academic-talks.jpg",
// //     role: "Finance & Operations",
// //     initials: "HP",
// //     Icon: BadgeIndianRupee,
// //   },
// // ];
// const members = [
//   {
//     name: "Riya Torgal",
//     image: "/Photo.jpg",
//     role: "Lead Web Developer",
//     bio: "Leads the design and development of scalable web platforms, ensuring seamless user experience and performance across Sukshmadarshini’s digital ecosystem.",
//     initials: "RT",
//     Icon: Code,
//   },
//   {
//     name: "Sayali Tansale",
//     image: "/academic-talks.jpg",
//     role: "Manager",
//     bio: "Oversees project execution and team coordination, ensuring operational efficiency and alignment with organizational goals.",
//     initials: "ST",
//     Icon: SquareChartGantt,
//   },
//   {
//     name: "Anjali Torgal",
//     image: "/academic-talks.jpg",
//     role: "Accountant and HR",
//     bio: "Manages financial records and human resources, supporting organizational stability through structured processes and people-focused policies.",
//     initials: "AT",
//     Icon: Files,
//   },
//   {
//     name: "Haresh Powale",
//     image: "/academic-talks.jpg",
//     role: "Finance & Operations",
//     bio: "Handles financial planning and operational workflows, ensuring efficient resource allocation and smooth day-to-day operations.",
//     initials: "HP",
//     Icon: BadgeIndianRupee,
//   },
// ];

// export function TeamSection() {
//   return (
//     <section id="team" className="py-20 relative">
//       <div className="absolute inset-0 opacity-[0.05]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }} />
//         </div>
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
//             <Users className="w-4 h-4" />
//             Our People
//           </span>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             <span className="text-gradient block">
//               Meet the Team
//             </span>
//           </h2>
//           <p className="mt-3 text-muted-foreground">
//             The scientists and educators driving Sukshmadarshini forward.
//           </p>
//         </div>

//         {/* Founder */}
//         <div className="flex justify-center mb-12">
//             <div className="w-full max-w-md text-center flex flex-col items-center">
//               <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6">
//                 <span className="text-gradient block">
//                   Our Founder
//                 </span>
//               </h3>
//               <Avatar className="h-72 w-60 border-4 rounded-lg border-primary/20">
//                 <AvatarImage src={founder.image} />
//                 <AvatarFallback className="bg-gradient-to-br from-primary/15 to-initial/15 text-primary font-display text-2xl font-semibold">
//                   {founder.initials}
//                 </AvatarFallback>
//               </Avatar>
//               <div className="inline-flex items-center gap-2 mt-4 rounded-full bg-primary/10 px-3 py-1 text-primary">
//                 <founder.Icon className="h-4 w-4" />
//                 <span className="text-xs uppercase tracking-wider font-medium">Founder</span>
//               </div>
//               <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
//                 {founder.name}
//               </h3>
//               <p className="text-sm text-secondary font-medium">{founder.role}</p>
//               <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//                 {founder.bio}
//               </p>
//           </div>
//         </div>

        
//         <div className="max-w-max mx-auto">
//         <div className="w-full text-center justify-center flex flex-col items-center">
//           <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6">
//           {/* About <span className="text-gradient">Sukshmadarshini™</span> */}
//             <span className="text-gradient block">
//               Our Members
//             </span>
//           </h3>
//         </div>
//         {/* Team grid of 4 */}
//         <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//           {members.map((m) => (
//             // <Card
//             //   key={m.name}
//             //   className="group relative overflow-hidden border-border/60 bg-card/60 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg"
//             // >
//             <div
//               key={m.name}
//               className="flex flex-col items-center text-center p-6 transition-all "
//             >
//               {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-initial opacity-70" /> */}
//               {/* <CardContent className="p-6 flex flex-col items-center text-center"> */}
//                 <Avatar className="h-52 w-full rounded-lg border-2 border-primary/20">
//                   <AvatarImage src={m.image} />
//                   <AvatarFallback className="bg-gradient-to-br from-primary/15 to-initial/15 text-primary font-display font-semibold">
//                     {m.initials}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div className="mt-3 rounded-lg bg-primary/10 p-2 text-primary">
//                   <m.Icon className="h-4 w-4" />
//                 </div>
//                 <h3 className="mt-3 font-display text-base font-semibold text-foreground">
//                   {m.name}
//                 </h3>
//                 <p className="text-xs text-secondary font-medium">{m.role}</p>
//                 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//                 {m.bio}
//               </p>
//               {/* </CardContent> */}
//               </div>
//             // </Card>
//           ))}
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import { Microscope, Code, SquareChartGantt, Users, Files, BadgeIndianRupee, Mail, LucideIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

// Map icon name strings from Sanity → actual Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  SquareChartGantt,
  Files,
  BadgeIndianRupee,
  Microscope,
  Users,
  Mail,
};

type SanityMember = {
  name: string;
  image: { asset: { url: string } } | null;
  role: string;
  bio: string;
  initials: string;
  iconName: string;
};

type SanityFounder = {
  name: string;
  image: { asset: { url: string } } | null;
  role: string;
  bio: string;
  initials: string;
};

type TeamSectionProps = {
  founder: SanityFounder;
  members: SanityMember[];
};

export function TeamSection({ founder, members }: TeamSectionProps) {
  // ✅ Hide the entire section if no members exist in Sanity
  if (!members || members.length === 0) return null;

  return (
    <section id="team" className="py-20 relative">
      {/* ... background texture ... */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Our People
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient block">Meet the Team</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            The scientists and educators driving Sukshmadarshini forward.
          </p>
        </div>

        {/* Founder */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-md text-center flex flex-col items-center">
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6">
              <span className="text-gradient block">Our Founder</span>
            </h3>
            <Avatar className="h-72 w-60 border-4 rounded-lg border-primary/20">
              <AvatarImage src={founder.image?.asset?.url} />
              <AvatarFallback className="bg-gradient-to-br from-primary/15 to-initial/15 text-primary font-display text-2xl font-semibold">
                {founder.initials}
              </AvatarFallback>
            </Avatar>
            <div className="inline-flex items-center gap-2 mt-4 rounded-full bg-primary/10 px-3 py-1 text-primary">
              <Microscope className="h-4 w-4" />
              <span className="text-xs uppercase tracking-wider font-medium">Founder</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{founder.name}</h3>
            <p className="text-sm text-secondary font-medium">{founder.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{founder.bio}</p>
          </div>
        </div>

        {/* Members grid */}
        <div className="max-w-max mx-auto">
          <div className="w-full text-center justify-center flex flex-col items-center">
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6">
              <span className="text-gradient block">Our Members</span>
            </h3>
          </div>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {members.map((m) => {
              const Icon = ICON_MAP[m.iconName] ?? Users;
              return (
                <div key={m.name} className="flex flex-col items-center text-center p-6 transition-all">
                  <Avatar className="h-52 w-full rounded-lg border-2 border-primary/20">
                    <AvatarImage src={m.image?.asset?.url} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/15 to-initial/15 text-primary font-display font-semibold">
                      {m.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="mt-3 rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-foreground">{m.name}</h3>
                  <p className="text-xs text-secondary font-medium">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}