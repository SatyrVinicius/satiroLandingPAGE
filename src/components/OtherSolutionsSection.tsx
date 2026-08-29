import Section, { SectionTitle } from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import { Clock, GraduationCap, ShieldCheck, UtensilsCrossed, Fuel, Bot } from "lucide-react";

const otherSolutions = [
  { icon: Clock, title: "Ponto Eletrônico", desc: "Sistema de ponto para gestão de RH" },
  { icon: GraduationCap, title: "Gestão Escolar", desc: "Chamada com inteligência artificial" },
  { icon: ShieldCheck, title: "Certificado Digital", desc: "Emissão de certificado digital" },
  { icon: UtensilsCrossed, title: "Restaurantes", desc: "Sistemas para restaurantes e lanchonetes" },
  { icon: Fuel, title: "Postos de Combustíveis", desc: "Sistemas especializados para postos" },
  { icon: Bot, title: "Automações WhatsApp", desc: "Automações para empresas" },
];

const OtherSolutionsSection = () => (
  <Section alt id="outras-solucoes">
    <ScrollReveal>
      <SectionTitle subtitle="Conheça todas as soluções da Sátiro Sistemas">
        Outras <span className="text-gradient">soluções</span>
      </SectionTitle>
    </ScrollReveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {otherSolutions.map((s, i) => (
        <ScrollReveal key={s.title} delay={i * 100} animation="fade-up">
          <div className="bg-card rounded-xl p-6 border hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <s.icon className="text-accent" size={24} />
            </div>
            <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </Section>
);

export default OtherSolutionsSection;
