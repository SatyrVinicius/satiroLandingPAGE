import { MessageCircle, Instagram } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5584933004200?text=Quero%20saber%20mais%20sobre%20seus%20sistemas";
const INSTAGRAM_URL = "https://www.instagram.com/satirosistemas/";

type CtaProps = { size?: ButtonProps["size"]; className?: string };
export const CtaWhatsApp = ({ size = "lg", className = "" }: CtaProps) => (
  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
    <Button variant="whatsapp" size={size} className={className}>
      <MessageCircle /> Fale conosco no WhatsApp
    </Button>
  </a>
);

export const CtaInstagram = ({ size = "lg", className = "" }: CtaProps) => (
  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
    <Button variant="instagram" size={size} className={className}>
      <Instagram /> Ir para o Instagram
    </Button>
  </a>
);

export { WHATSAPP_URL, INSTAGRAM_URL };
