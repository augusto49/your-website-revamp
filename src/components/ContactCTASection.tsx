import { MessageCircle } from "lucide-react";
import contactImg from "@/assets/contact-cta.jpg";

const ContactCTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-innova-blue/10 to-innova-teal/20">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/2">
              <img
                src={contactImg}
                alt="Atendimento Innova"
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Fale com a Innova e tire suas dúvidas agora mesmo
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Quer saber mais sobre nossos planos ou precisa de ajuda para escolher a
                  melhor opção para você ou sua empresa? Nossa equipe está pronta para te
                  atender com agilidade e atenção.
                </p>
                <button className="border border-primary text-primary rounded-lg px-6 py-3 text-sm font-medium hover:bg-primary/5 transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Entre em contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
