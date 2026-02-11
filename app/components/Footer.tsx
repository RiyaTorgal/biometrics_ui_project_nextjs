// "use client"
// import { Linkedin, Mail, Twitter, Instagram } from "lucide-react";
// import Image from "next/image";

// const footerLinks = {
//   services: [
//     { label: "Genomics", href: "#" },
//     { label: "Transcriptomics", href: "#" },
//     { label: "Proteomics", href: "#" },
//     { label: "Metabolomics", href: "#" },
//   ],
//   company: [
//     { label: "About Us", href: "#about" },
//     { label: "Careers", href: "#" },
//     { label: "Blog", href: "#" },
//     { label: "Contact", href: "#contact" },
//   ],
//   legal: [
//     { label: "Privacy Policy", href: "#" },
//     { label: "Terms of Service", href: "#" },
//   ],
// };

// const socialLinks = [
//   { icon: Instagram, href: "https://www.instagram.com/suksh_madarshini?igsh=ZW10ZDJuYXU3eWZ3", label: "Instagram" },
//   { icon: Linkedin, href: "https://www.linkedin.com/in/p-tilak/", label: "LinkedIn" },
//   { icon: Mail, href: "mailto:sukshmadarshini@gmail.com", label: "Email" },
// ];

// export function Footer() {
//   return (
    
//     <>
//     <footer className="bg-foreground text-background py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-16 h-14 p-1 rounded-full bg-white flex items-center justify-center">
//                 {/* <span className="text-primary-foreground font-display font-bold text-lg">SD</span> */}
//                 <Image 
//                   src="/Screenshot_2026-01-27_201728-removebg-preview.png" 
//                   alt="EyeIcon Navbar Logo" 
//                   width={56}   // w-Tailwind = 14 * 4px = 56px
//                   height={40}  // h-Tailwind = 10 * 4px = 40px
//                   className="object-contain"
//                 />
//               </div>
//               {/* <Image 
//                 src="/Screenshot_2026-01-27_201728-removebg-preview.png" 
//                 alt="EyeIcon Navbar Logo" 
//                 width={56}   // w-Tailwind = 14 * 4px = 56px
//                 height={40}  // h-Tailwind = 10 * 4px = 40px
//                 className="object-contain"
//               /> */}
//               <span className="font-display font-bold text-xl">
//                 Sukshma<span className="text-secondary">Darshini</span>™
//               </span>
//             </div>
//             <p className="text-background/60 text-sm leading-relaxed mb-6">
//               Premier bioanalytical and bioinformatics service provider transforming 
//               biological research through multiomics solutions.
//             </p>
//             <div className="flex gap-3">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
//             <ul className="space-y-3">
//               {footerLinks.services.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-background/60 hover:text-foreground transition-colors text-sm"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
//             <ul className="space-y-3">
//               {footerLinks.company.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-background/60 hover:text-foreground transition-colors text-sm"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h4 className="font-display font-semibold text-lg mb-4">Legal</h4>
//             <ul className="space-y-3">
//               {footerLinks.legal.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-background/60 hover:text-foreground transition-colors text-sm"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="pt-8 border-t border-background/10">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-background/50 text-sm">
//               © {new Date().getFullYear()} SukshmaDarshini™. All rights reserved.
//             </p>
//             <p className="text-background/50 text-sm">
//               Registered with MSME under Startup India Initiative
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//     </>
//   );
// }

"use client"
import { Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Genomics", href: "#" },
    { label: "Transcriptomics", href: "#" },
    { label: "Proteomics", href: "#" },
    { label: "Metabolomics", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/suksh_madarshini?igsh=ZW10ZDJuYXU3eWZ3", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/p-tilak/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sukshmadarshini@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    
    <>
    <footer className="gradient-footer  text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-16 h-14 p-1 rounded-full bg-white flex items-center justify-center"> */}
                {/* <span className="text-primary-foreground font-display font-bold text-lg">SD</span> */}
                <Image 
                  src="/Screenshot_2026-01-27_201728-removebg-preview.png" 
                  alt="EyeIcon Navbar Logo" 
                  width={56}   // w-Tailwind = 14 * 4px = 56px
                  height={40}  // h-Tailwind = 10 * 4px = 40px
                  className="object-contain"
                />
              {/* </div> */}
              {/* <Image 
                src="/Screenshot_2026-01-27_201728-removebg-preview.png" 
                alt="EyeIcon Navbar Logo" 
                width={56}   // w-Tailwind = 14 * 4px = 56px
                height={40}  // h-Tailwind = 10 * 4px = 40px
                className="object-contain"
              /> */}
              <span className="font-display font-bold text-xl">
                Sukshmadarshini<span className="text-secondary"></span>™
              </span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Premier bioanalytical and bioinformatics service provider transforming 
              biological research through multiomics solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/50 text-sm">
              © {new Date().getFullYear()} SukshmaDarshini™. All rights reserved.
            </p>
            <p className="text-foreground/50 text-sm">
              Registered with MSME under Startup India Initiative
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}