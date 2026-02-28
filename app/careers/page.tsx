import { Users, GraduationCap, FlaskConical, BookOpen, Briefcase, Mail, Lightbulb } from "lucide-react";
// import { Navbar } from "../components/Navbar";
// import { Footer } from "../components/Footer";

const roles = [
  { icon: GraduationCap, label: "Biotechnology and Agricultural Science graduates" },
  { icon: FlaskConical, label: "Proteomics and molecular biology researchers" },
  { icon: BookOpen, label: "Academic program coordinators" },
  { icon: Briefcase, label: "Business development professionals in life sciences" },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}

      {/* Hero Banner */}
      <section className="relative pt-10 overflow-hidden">
        <div className="gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-4 animate-fade-up">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/70 font-medium tracking-wide uppercase text-sm">Join Us</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Careers
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Join a forward-thinking team advancing Agri-Proteomics, multiomics innovation, and global research pathways.
            </p>
          </div>
          <div className="absolute inset-0 dna-pattern opacity-30" />
        </div>

        {/* Wave */}
        <div className="relative h-20 overflow-hidden bg-background -mt-1">
          <svg className="absolute -top-1 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z" fill="url(#careersWave)" />
            <defs>
              <linearGradient id="careersWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--init))" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-24">
        <div className="space-y-6">
          {/* Introduction */}
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Our Mission</span>
                <h2 className="font-display text-xl font-semibold text-foreground">Who We Are</h2>
              </div>
            </div>
            <div className="text-foreground/80 leading-relaxed pl-14 space-y-4">
              <p>
                At Sukshmadarshini™, we are building a forward-thinking Agri-Proteomics and biotechnology platform focused on multiomics innovation, scientific skill development, and global research pathways.
              </p>
              <p>We welcome unsolicited applications from passionate individuals who align with our mission.</p>
            </div>
          </div>

          {/* Roles */}
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Opportunities</span>
                <h2 className="font-display text-xl font-semibold text-foreground">We&apos;re Interested in Connecting With</h2>
              </div>
            </div>
            <div className="pl-14 space-y-3">
              {roles.map((role) => (
                <div key={role.label} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <role.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <span>{role.label}</span>
                </div>
              ))}
              <p className="text-foreground/80 leading-relaxed mt-4">
                If you believe your skills and vision align with our work, we encourage you to share your CV and a short statement of interest outlining how you can contribute.
              </p>
            </div>
          </div>

          {/* Internships */}
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Students</span>
                <h2 className="font-display text-xl font-semibold text-foreground">Internship Opportunities</h2>
              </div>
            </div>
            <div className="text-foreground/80 leading-relaxed pl-14">
              <p>We periodically offer structured internships for motivated students who wish to gain exposure in research workflows, scientific communication, and academic advisory projects.</p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Apply</span>
                <h2 className="font-display text-xl font-semibold text-foreground">Send Your Application</h2>
              </div>
            </div>
            <div className="text-foreground/80 leading-relaxed pl-14 space-y-3">
              <p>
                📩 Send your application to:{" "}
                <a href="mailto:sukshmadarshini@gmail.com" className="text-secondary hover:underline font-medium">
                  sukshmadarshini@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                We carefully review all submissions and will reach out when a suitable opportunity arises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
