import { Star } from "lucide-react";
import avatarImg from "@/assets/testimonial-avatar.jpg";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-innova-blue leading-tight">
              Veja o que nossos beneficiários dizem sobre a experiência com a gente
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Confira alguns depoimentos de clientes que encontraram aqui o respeito, a agilidade e
              a tranquilidade que procuravam.
            </p>
          </div>

          <div className="lg:w-1/2 space-y-4">
            <div className="h-16 rounded-xl bg-gradient-to-r from-innova-blue to-innova-teal" />
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border -mt-10 relative z-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fiquei surpresa com a qualidade da rede credenciada da Innova. Consegui marcar meus
                exames com facilidade e os profissionais foram excelentes. É um plano que realmente
                entrega o que promete.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={avatarImg}
                    alt="Marta Oliveira"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-innova-orange text-sm">Marta Oliveira</p>
                    <p className="text-xs text-muted-foreground">Cliente Innova</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-innova-orange text-innova-orange" />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-16 rounded-xl bg-gradient-to-r from-innova-blue to-innova-teal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
