import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-light leading-tight text-foreground">
            Bem-vindo a{" "}
            <span className="text-innova-blue font-semibold">Innova!</span>{" "}
            Aqui, sua saúde{" "}
            <span className="text-innova-teal font-semibold">
              é nossa prioridade.
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8">
              Saiba mais
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 rounded-lg px-8"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Entre em contato
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-80 lg:w-[420px]">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-4 translate-y-4" />
            <img
              src={doctorImg}
              alt="Médico profissional sorrindo"
              className="relative z-10 rounded-3xl object-cover w-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
