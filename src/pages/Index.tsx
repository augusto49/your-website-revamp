import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PlansSection from "@/components/PlansSection";
import AboutSection from "@/components/AboutSection";
import ContactCTASection from "@/components/ContactCTASection";
import BlogSection from "@/components/BlogSection";
import PlansCTASection from "@/components/PlansCTASection";
import CredenciadoSection from "@/components/CredenciadoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PlansSection />
        <AboutSection />
        <ContactCTASection />
        <BlogSection />
        <PlansCTASection />
        <CredenciadoSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
