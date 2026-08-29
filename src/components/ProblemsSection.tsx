import Section, { SectionTitle } from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import {
  TrendingUp, Package, ShoppingCart, FileText, DollarSign, Calendar,
  BarChart3, AlertTriangle, Clock, FolderOpen, Smartphone, BookOpen,
  PackageSearch, PieChart, ClipboardList, CreditCard, Store, Wrench,
  Award, Shield
} from "lucide-react";

const problems = [
  { icon: TrendingUp, text: "Você sabe se sua empresa está dando lucro?" },
  { icon: Package, text: "Seu estoque vive bagunçado?" },
  { icon: ShoppingCart, text: "Você sabe o que mais vende no seu negócio?" },
  { icon: FileText, text: "Você tem dificuldade para emitir nota fiscal?" },
  { icon: DollarSign, text: "Seu financeiro é desorganizado?" },
  { icon: Calendar, text: "Você sabe quanto ganha por dia?" },
  { icon: BarChart3, text: "Você sabe quais produtos dão mais lucro?" },
  { icon: AlertTriangle, text: "Você esquece contas para pagar?" },
  { icon: Clock, text: "Você demora para atender clientes?" },
  { icon: FolderOpen, text: "Seu negócio é desorganizado?" },
  { icon: Smartphone, text: "Você gostaria de controlar seu negócio pelo celular?" },
  { icon: BookOpen, text: "Você ainda anota vendas no caderno?" },
  { icon: PackageSearch, text: "Já faltou produto no seu estoque sem você perceber?" },
  { icon: PieChart, text: "Você entende suas vendas de verdade?" },
  { icon: ClipboardList, text: "Você tem relatórios do seu negócio?" },
  { icon: CreditCard, text: "Você vende fiado e depois se perde?" },
  { icon: Store, text: "Seu mercadinho/loja/oficina é desorganizado?" },
  { icon: Wrench, text: "Você perde muito tempo com trabalho manual?" },
  { icon: Award, text: "Você quer profissionalizar seu negócio?" },
  { icon: Shield, text: "Você quer ter mais controle da sua empresa?" },
];

const ProblemsSection = () => (
  <Section alt id="problemas">
    <ScrollReveal>
      <SectionTitle subtitle='Se você respondeu "SIM" para alguma dessas perguntas, a Sátiro Sistemas é para você.'>
        Você tem essas <span className="text-gradient">dúvidas</span> no seu empreendimento?
      </SectionTitle>
    </ScrollReveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {problems.map((p, i) => (
        <ScrollReveal key={p.text} delay={i * 60} animation="fade-up">
          <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-destructive/10 hover:shadow-md transition-shadow h-full">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <p.icon className="text-destructive" size={20} />
            </div>
            <span className="font-medium text-foreground text-sm">{p.text}</span>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </Section>
);

export default ProblemsSection;
