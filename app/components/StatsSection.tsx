const stats = [
  { value: "500+", label: "Research Projects" },
  { value: "50+", label: "Partner Institutions" },
  { value: "100+", label: "Published Papers" },
  { value: "24/7", label: "Support Available" },
];

export function StatsSection() {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background blur */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-accent/30 blur-3xl" />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
