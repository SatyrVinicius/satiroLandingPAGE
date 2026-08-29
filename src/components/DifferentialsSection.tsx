import Section, { SectionTitle } from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import { Globe, Smile, Headphones, Rocket, MessageCircle, Monitor } from "lucide-react";

const diffs = [
  { icon: Globe, title: "Web híbrido", desc: "Funciona online e offline" },
  { icon: Smile, title: "Fácil de usar", desc: "Interface simples e intuitiva" },
  { icon: Headphones, title: "Suporte rápido e 100% potiguar", desc: "Atendimento ágil com a cara do RN" },
  { icon: Rocket, title: "Pronto para uso", desc: "Solução pronta, sem espera" },
  { icon: MessageCircle, title: "Integração WhatsApp", desc: "Conecte com seus clientes" },
  { icon: Monitor, title: "Multiplataforma", desc: "Computador, tablet e celular" },
];

const DifferentialsSection = () => (
  <Section alt id="diferenciais">
    <ScrollReveal>
      <SectionTitle subtitle="O que faz a Sátiro Sistemas diferente">
        Nossos <span className="text-gradient">diferenciais</span>
      </SectionTitle>
    </ScrollReveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {diffs.map((d, i) => (
        <ScrollReveal key={d.title} delay={i * 100} animation="fade-up">
          <div className="relative bg-card rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <d.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-bold text-foreground mb-1">{d.title}</h3>
            <p className="text-sm text-muted-foreground">{d.desc}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </Section>
);

export default DifferentialsSection;
