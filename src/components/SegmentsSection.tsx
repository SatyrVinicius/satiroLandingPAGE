import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/components/CtaButtons";
import segMercadinho from "@/assets/seg-mercadinho.jpg";
import segLoja from "@/assets/seg-loja.jpg";
import segRestaurante from "@/assets/seg-restaurante.jpg";
import segLanchonete from "@/assets/seg-lanchonete.jpg";
import segFarmacia from "@/assets/seg-farmacia.jpg";
import segPosto from "@/assets/seg-posto.jpg";
import segServicos from "@/assets/seg-servicos.jpg";
import segEscola from "@/assets/seg-escola.jpg";
import segSalao from "@/assets/seg-salao.jpg";
import segIndustria from "@/assets/seg-industria.jpg";

const segments = [
  { img: segMercadinho, name: "Mercadinhos", desc: "PDV rápido, balança e controle de estoque no dia a dia." },
  { img: segLoja, name: "Lojas", desc: "Vendas, crediário, loja virtual e emissão fiscal completa." },
  { img: segRestaurante, name: "Restaurantes", desc: "Cardápio digital, mesas e aplicativo do garçom." },
  { img: segLanchonete, name: "Lanchonetes", desc: "Pedidos ágeis, delivery e fechamento de caixa simples." },
  { img: segFarmacia, name: "Farmácias", desc: "Controle de lotes, validade e nota fiscal sem dor de cabeça." },
  { img: segPosto, name: "Postos", desc: "Abastecimentos, conveniência e financeiro integrados." },
  { img: segServicos, name: "Prestadores de serviço", desc: "Ordem de serviço, orçamentos e cobranças em dia." },
  { img: segEscola, name: "Escolas", desc: "Secretaria, boletos, financeiro e frequência do aluno." },
  { img: segSalao, name: "Salões e barbearias", desc: "Agenda, comissões e controle de caixa." },
  { img: segIndustria, name: "Indústrias e atacados", desc: "Gestão completa para empresas de médio e grande porte." },
];

const SegmentsSection = () => (
  <Section id="segmentos" alt>
    <ScrollReveal>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-4xl mx-auto">
          Encontre aqui o seu <span className="text-gradient">segmento</span> e descubra o que a{" "}
          <span className="text-gradient">Sátiro</span> pode fazer pelo seu negócio.
        </h2>
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {segments.map((s, i) => (
        <ScrollReveal key={s.name} delay={i * 60} animation="fade-up">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full rounded-2xl overflow-hidden hero-gradient text-primary-foreground shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={s.img}
                alt={s.name}
                loading="lazy"
                width={512}
                height={512}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2">{s.name}</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-secondary">
                Saiba mais <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        </ScrollReveal>
      ))}
    </div>
  </Section>
);

export default SegmentsSection;
