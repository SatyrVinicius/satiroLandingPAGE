import Section, { SectionTitle } from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Monitor,
  Clock,
  UtensilsCrossed,
  GraduationCap,
  Stethoscope,
  BedDouble,
  ListOrdered,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5584933004200?text=Olá! Gostaria de saber mais sobre o sistema da Sátiro Sistemas.";

const solutions = [
  {
    icon: Monitor,
    title: "Sátiro WEB",
    description:
      "Sistema para gestão comercial, com ordem de serviço, ponto de venda, emissão fiscal completa e muito mais.",
  },
  {
    icon: Clock,
    title: "Clock7",
    description:
      "Sistema de controle de RH e ponto eletrônico com reconhecimento facial e geolocalização.",
  },
  {
    icon: UtensilsCrossed,
    title: "Sátiro Menu",
    description:
      "Sistema para restaurantes e lanchonetes com cardápio digital, controle de mesas, aplicativo do garçom e muito mais.",
  },
  {
    icon: GraduationCap,
    title: "Sátiro Escolar",
    description:
      "Sistema web completo para gestão de escolas particulares, com controle financeiro, emissão de boleto, secretariado escolar completo e controle de frequência do aluno com inteligência artificial e reconhecimento facial.",
  },
  {
    icon: Stethoscope,
    title: "Sátiro Clínicas",
    description:
      "Sistema completo para clínicas: agendamento, prontuário eletrônico, controle financeiro e emissão de notas fiscais.",
  },
  {
    icon: BedDouble,
    title: "Sátiro PMS",
    description:
      "Sistema completo para pousadas com gestão de reservas, hóspedes, camareira e emissão fiscal.",
  },
  {
    icon: ListOrdered,
    title: "Sátiro WaitList",
    description:
      "Gestor inteligente de filas de atendimento: organize a ordem dos clientes, reduza a espera e melhore a experiência.",
  },
];

const SolutionsCarouselSection = () => (
  <Section id="solucoes">
    <ScrollReveal>
      <SectionTitle subtitle="Conheça os sistemas desenvolvidos pela Sátiro Sistemas">
        Nossas <span className="text-gradient">Soluções</span>
      </SectionTitle>
    </ScrollReveal>
    <ScrollReveal animation="fade-up" delay={150}>
      <div className="max-w-3xl mx-auto px-12">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {solutions.map((s) => (
              <CarouselItem key={s.title}>
                <div className="bg-card rounded-2xl border p-8 md:p-12 text-center flex flex-col items-center gap-5 min-h-[340px] justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg max-w-lg">
                    {s.description}
                  </p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="lg">
                      <MessageCircle /> Saiba mais
                    </Button>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </ScrollReveal>
  </Section>
);

export default SolutionsCarouselSection;
