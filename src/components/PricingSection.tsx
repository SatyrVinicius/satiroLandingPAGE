import { CheckCircle2 } from "lucide-react";
import { CtaWhatsApp } from "@/components/CtaButtons";
import ScrollReveal from "@/components/ScrollReveal";

const PricingSection = () => (
  <section id="planos" className="py-16 md:py-24">
    <div className="container">
      <ScrollReveal animation="zoom">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Plano Acessível</p>
            <div className="mb-2">
              <span className="text-muted-foreground text-lg">A partir de</span>
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-gradient mb-2">
              R$ 100,00
            </div>
            <p className="text-muted-foreground mb-8">por mês • ótimo custo-benefício</p>
            <ul className="text-left space-y-3 mb-8">
              {["Controle de estoque", "Loja virtual", "Emissão de documentos fiscais", "Sistema Web", "Funciona em Computador, maquininha de cartão e Celular"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary flex-shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <CtaWhatsApp size="xl" className="w-full" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingSection;
