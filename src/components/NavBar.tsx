import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Instagram } from "lucide-react";
import logoBranca from "@/assets/logo-branca.png";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/components/CtaButtons";

const links = [
  { label: "Início", href: "#topo" },
  { label: "Dúvidas", href: "#problemas" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Planos", href: "#planos" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#topo" onClick={go("#topo")} className="flex items-center">
          <img src={logoBranca} alt="Sátiro Sistemas" className="h-9 md:h-11" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={go(l.href)}
              className="text-sm font-semibold text-primary-foreground/90 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/90 hover:text-secondary transition-colors"
          >
            <Instagram size={18} /> Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-sm font-bold px-5 py-2.5 rounded-full hover:brightness-110 transition"
          >
            <MessageCircle size={18} /> Fale conosco
          </a>
        </div>

        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary/98 backdrop-blur border-t border-primary-foreground/10">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={go(l.href)}
                className="py-2 font-semibold text-primary-foreground/90"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold px-5 py-3 rounded-full"
            >
              <MessageCircle size={18} /> Fale conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
