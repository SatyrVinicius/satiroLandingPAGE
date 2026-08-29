import NavBar from "@/components/NavBar";
import StickyContactBar from "@/components/StickyContactBar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ContactCtaSection from "@/components/ContactCtaSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import SegmentsSection from "@/components/SegmentsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import SolutionsCarouselSection from "@/components/SolutionsCarouselSection";
import OtherSolutionsSection from "@/components/OtherSolutionsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <>
    <NavBar />
    <main className="pb-14 sm:pb-12">
    <HeroSection />
    <ProblemsSection />
    <ContactCtaSection />
    <SolutionSection />
    <FeaturesSection />
    <SegmentsSection />
    <DifferentialsSection />
    <PricingSection />
    <SolutionsCarouselSection />
    <CtaSection />
    <OtherSolutionsSection />
    <FooterSection />
    </main>
    <StickyContactBar />
  </>
);

export default Index;
