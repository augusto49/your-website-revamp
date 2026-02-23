import aboutImg1 from "@/assets/about-1.jpg";
import aboutImg2 from "@/assets/about-2.jpg";
import aboutImg3 from "@/assets/about-3.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            <span className="text-innova-blue">Innova:</span> um novo jeito de
            <span className="block">cuidar da sua saúde</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            A Innova é uma operadora de saúde que nasceu com o propósito de
            transformar o acesso aos serviços de saúde, unindo inovação,
            agilidade e atendimento humanizado.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Acreditamos que cuidar vai muito além de tratar: é sobre prevenir,
            acolher e acompanhar cada etapa da vida com atenção, respeito e
            eficiência.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Com uma estrutura moderna, uma equipe dedicada e uma ampla rede
            credenciada, oferecemos uma experiência completa para quem busca mais
            qualidade de vida. Mais do que um plano, somos a evolução do cuidado
            com você e com quem você ama.
          </p>

          <button className="border border-primary text-primary rounded-lg px-8 py-3 text-sm font-medium hover:bg-primary/5 transition-colors">
            Saiba mais
          </button>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          <img
            src={aboutImg1}
            alt="Equipe médica"
            className="rounded-xl object-cover w-full h-48 shadow-md"
          />
          <img
            src={aboutImg2}
            alt="Cuidado com paciente"
            className="rounded-xl object-cover w-full h-48 shadow-md row-span-1"
          />
          <img
            src={aboutImg3}
            alt="Família no médico"
            className="rounded-xl object-cover w-full h-48 shadow-md col-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
