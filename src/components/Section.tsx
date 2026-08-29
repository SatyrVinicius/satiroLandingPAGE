interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}

const Section = ({ children, className = "", id, alt }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 ${alt ? "section-alt" : ""} ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">{children}</h2>
    {subtitle && <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default Section;
