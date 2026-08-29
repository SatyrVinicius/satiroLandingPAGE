import { MessageCircle, Instagram } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/components/CtaButtons";
import ScrollReveal from "@/components/ScrollReveal";
import logoBranca from "@/assets/logo-branca.png";

const FooterSection = () => (
  <footer className="bg-foreground py-12">
    <div className="container text-center">
      <ScrollReveal animation="fade">
        <img src={logoBranca} alt="Sátiro Sistemas" className="h-16 md:h-20 mx-auto mb-4" />
        <p className="text-primary-foreground/60 mb-6">
          Tecnologia simples para organizar e fazer sua empresa prosperar
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-whatsapp transition-colors">
            <MessageCircle size={20} /> (84) 9 3300-4200
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-instagram transition-colors">
            <Instagram size={20} /> @satirosistemas
          </a>
        </div>
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} Sátiro Sistemas. Todos os direitos reservados.
        </p>
      </ScrollReveal>
    </div>
  </footer>
);

export default FooterSection;
