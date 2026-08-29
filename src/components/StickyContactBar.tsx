import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL } from "@/components/CtaButtons";

const StickyContactBar = () => (
  <div className="fixed bottom-0 inset-x-0 z-40 grid grid-cols-1 sm:grid-cols-2 text-sm md:text-base">
    <div className="bg-primary text-primary-foreground flex items-center justify-center gap-2 py-3 px-4 text-center">
      <Phone size={18} className="text-secondary" />
      <span className="font-medium">Quer falar com um especialista?</span>
      <a href="tel:+5584933004200" className="font-extrabold">
        (84) 9 3300-4200
      </a>
    </div>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-secondary text-secondary-foreground flex items-center justify-center gap-2 py-3 px-4 font-bold hover:brightness-110 transition"
    >
      <MessageCircle size={18} /> Fale com a gente no WhatsApp
    </a>
  </div>
);

export default StickyContactBar;
