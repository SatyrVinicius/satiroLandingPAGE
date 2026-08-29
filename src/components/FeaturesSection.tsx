import Section, { SectionTitle } from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import { ShoppingCart, Landmark, Package, DollarSign, FileCheck, FileText, Truck, Users, BarChart3, Wifi } from "lucide-react";

const features = [
  { icon: ShoppingCart, title: "Controle de vendas", desc: "Registre e acompanhe todas as vendas" },
  { icon: Landmark, title: "Controle de caixa", desc: "Abertura, fechamento e sangria" },
  { icon: Package, title: "Controle de estoque", desc: "Saiba exatamente o que tem em estoque" },
  { icon: DollarSign, title: "Financeiro", desc: "Contas a pagar e a receber" },
  { icon: FileCheck, title: "Emissão de NF-e", desc: "Nota fiscal eletrônica sem complicação" },
  { icon: FileText, title: "Emissão de NFC-e", desc: "Cupom fiscal de consumidor" },
  { icon: Truck, title: "Emissão de MDF-e", desc: "Manifesto de documentos fiscais" },
  { icon: Users, title: "Cadastro de clientes", desc: "Dados organizados dos seus clientes" },
  { icon: BarChart3, title: "Relatórios", desc: "Informações para tomar decisões" },
  { icon: Wifi, title: "Online e Offline", desc: "Funciona com e sem internet" },
];

const FeaturesSection = () => (
  <Section alt id="funcionalidades">
    <ScrollReveal>
      <SectionTitle subtitle="Tudo que sua empresa precisa em um só sistema">
        <span className="text-gradient">Funcionalidades</span>
      </SectionTitle>
    </ScrollReveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {features.map((f, i) => (
        <ScrollReveal key={f.title} delay={i * 60} animation="zoom">
          <div className="bg-card rounded-xl p-6 text-center shadow-sm border hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <f.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
            </div>
            <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </Section>
);

export default FeaturesSection;
