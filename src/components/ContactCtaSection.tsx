import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { WHATSAPP_URL } from "@/components/CtaButtons";

const ContactCtaSection = () => (
  <section className="hero-gradient py-16 md:py-24">
    <div className="container text-center">
      <ScrollReveal animation="fade-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">
          Fale conosco agora!
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-3 max-w-xl mx-auto">
          Tire suas dúvidas e descubra como podemos ajudar sua empresa.
        </p>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/90 mb-8">
          <Phone size={20} />
          <span className="text-xl font-semibold">(84) 9 3300-4200</span>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={150}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="xl" className="text-lg">
            <MessageCircle /> Fale conosco no WhatsApp
          </Button>
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactCtaSection;
