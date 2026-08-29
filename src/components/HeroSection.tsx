import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/components/CtaButtons";

const HeroSection = () => (
  <section id="topo" className="relative overflow-hidden hero-gradient">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.25),transparent_60%)]" />
    <div className="relative z-10 container pt-28 md:pt-36 pb-16 md:pb-24 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6 animate-fade-up max-w-4xl mx-auto">
        O sistema da sua empresa está aqui!
      </h1>
      <p
        className="text-base md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        Sistemas completos para vendas, estoque, financeiro e emissão de notas.
        Simplifique a gestão do seu negócio com a Sátiro Sistemas.
      </p>
      <div
        className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300"
        >
          <MessageCircle size={20} /> Clique aqui e vamos conversar!
        </a>
        <a
          href="#problemas"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("problemas")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-bold text-base md:text-lg px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
        >
          Saiba mais <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
