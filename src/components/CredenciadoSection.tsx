import credenciadoImg from "@/assets/credenciado-banner.jpg";

const CredenciadoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={credenciadoImg}
            alt="Seja um credenciado"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center text-background max-w-3xl px-6">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Faça parte da nossa rede e evolua com a Innova
              </h2>
              <p className="text-sm lg:text-base opacity-90 leading-relaxed mb-8">
                Seja um prestador credenciado e atenda beneficiários que valorizam qualidade, respeito e agilidade. Nossa estrutura
                moderna, processos integrados e suporte dedicado fazem da Innova uma parceira ideal para o seu crescimento
                profissional.
                <br />
                Estamos em constante expansão. Junte-se a nós!
              </p>
              <button className="bg-primary text-primary-foreground rounded-lg px-8 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
                Seja um credenciado
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredenciadoSection;
