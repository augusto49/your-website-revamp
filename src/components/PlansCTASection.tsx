import familyImg from "@/assets/family-plans.jpg";

const PlansCTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src={familyImg}
              alt="Família feliz"
              className="rounded-xl object-cover w-full max-w-lg mx-auto shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Planos que cabem na sua vida e no seu bolso
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Solicite uma cotação personalizada e descubra as vantagens de ter um plano de saúde
              com atendimento humanizado, agilidade no agendamento e uma rede preparada para
              cuidar de você em Porto Velho.
              <br />
              Simples, rápido e sem compromisso.
            </p>
            <button className="border border-primary text-primary rounded-lg px-6 py-3 text-sm font-medium hover:bg-primary/5 transition-colors">
              Clique aqui e faça uma cotação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansCTASection;
