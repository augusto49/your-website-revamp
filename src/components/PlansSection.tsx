import { Check, MessageCircle, Building2, Users, Smile } from "lucide-react";

const plans = [
  {
    icon: Building2,
    title: "Plano",
    highlight: "Empresarial",
    subtitle: "Para empresas que cuidam do seu time",
    description:
      "Ofereça saúde completa aos colaboradores com atendimento ágil, rede qualificada e gestão simples. O plano empresarial garante bem-estar, reduz absenteísmo e valoriza quem faz o negócio acontecer.",
    features: [
      "Ampla rede credenciada",
      "Mais de 55 especialidades",
      "Telemedicina",
      "Atendimento humanizado",
    ],
  },
  {
    icon: Users,
    title: "Plano",
    highlight: "Coletivo por Adesão",
    subtitle: "Saúde acessível para quem caminha em grupo",
    description:
      "Se você faz parte de uma associação, conselho ou entidade de classe, pode garantir um plano completo com preços mais acessíveis. A adesão é simples e você aproveita todos os benefícios sem burocracia.",
    features: [
      "Ampla rede credenciada",
      "Mais de 55 especialidades",
      "Telemedicina",
      "Atendimento humanizado",
    ],
  },
  {
    icon: Smile,
    title: "Plano",
    highlight: "Odontológico",
    subtitle: "Sorrir com saúde é essencial",
    description:
      "Cuide do seu sorriso com um plano odontológico nacional, sem carência e com cobertura para procedimentos essenciais. Ideal para empresas e grupos que valorizam prevenção e qualidade de vida.",
    features: [
      "Cobertura Ampla",
      "Rede Nacional",
      "Benefícios Extras",
      "Adesão Simples",
    ],
  },
];

const PlansSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-innova-teal mb-2">
          Conheça nossos planos e
          <span className="block">escolha o melhor para você</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4 mb-12">
          Oferecemos opções sob medida para atender profissionais, estudantes e
          empresas com agilidade, qualidade e excelente custo-benefício.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.highlight}
              className="bg-card rounded-xl p-8 shadow-sm border border-border flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-innova-teal-light flex items-center justify-center mb-6">
                <plan.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                {plan.title}{" "}
                <span className="text-innova-teal">{plan.highlight}</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                {plan.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {plan.description}
              </p>

              <div className="space-y-3 mt-auto mb-6">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 border-b border-border pb-3"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full border border-primary text-primary rounded-lg py-3 text-sm font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Entre em contato
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
