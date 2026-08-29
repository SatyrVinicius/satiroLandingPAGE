import { CtaWhatsApp, CtaInstagram, CtaEbook } from "@/components/CtaButtons";
import ScrollReveal from "@/components/ScrollReveal";

const CtaSection = () => (
  <section className="hero-gradient py-20 md:py-28">
    <div className="container text-center">
      <ScrollReveal animation="fade-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">
          Comece hoje mesmo a<br /> organizar sua empresa
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
          Organize sua empresa e aumente seus resultados. Fale conosco agora!
        </p>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={200}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CtaWhatsApp size="xl" />
          <CtaInstagram size="lg" />
          <CtaEbook size="lg" />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CtaSection;
