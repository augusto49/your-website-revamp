import { Monitor, Building2, FileCheck, CalendarDays } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Telemedicina",
    description:
      "Acesse médicos online de onde estiver, com praticidade e segurança. Atendimento rápido, humanizado e disponível 24h.",
  },
  {
    icon: Building2,
    title: "Rede Credenciada",
    description:
      "Consulte médicos, clínicas e hospitais disponíveis no seu plano. Encontre atendimento com agilidade e confiança.",
  },
  {
    icon: FileCheck,
    title: "Autorizações e Exames",
    description:
      "Solicite suas autorizações e acompanhe seus exames com poucos cliques. Mais controle, menos burocracia.",
  },
  {
    icon: CalendarDays,
    title: "Agendamentos",
    description:
      "Marque suas consultas com os prestadores do nosso guia médico, disponível em nosso site ou ligue no 0800 345 9999.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-foreground mb-4">
          Acesse facilmente os{" "}
          <span className="block">serviços do seu plano</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-innova-teal-light flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-8 py-3 text-sm font-medium">
            Acesse o Portal do Beneficiário
          </Button>
        </div>
      </div>
    </section>
  );
};

// Inline button to avoid extra import
const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <button className={className}>{children}</button>;

export default ServicesSection;
