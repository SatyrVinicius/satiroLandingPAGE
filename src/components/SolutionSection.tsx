import Section, { SectionTitle } from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  "Sistema fácil de usar",
  "Tudo em um só lugar",
  "Ideal para qualquer tamanho de empresa",
  "Ajuda a organizar a empresa",
  "Ajuda a aumentar o lucro",
  "Reduz erros e retrabalho",
];

const SolutionSection = () => (
  <Section id="solucao">
    <ScrollReveal>
      <SectionTitle subtitle="Sistema simples para organizar sua empresa">
        O que nossas <span className="text-gradient">soluções oferecem?</span>
      </SectionTitle>
    </ScrollReveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {solutions.map((s, i) => (
        <ScrollReveal key={s} delay={i * 80} animation="fade-up">
          <div className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-sm border hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
            <CheckCircle2 className="text-secondary flex-shrink-0" size={28} />
            <span className="font-medium text-foreground">{s}</span>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </Section>
);

export default SolutionSection;
