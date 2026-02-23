import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quem pode contratar o Plano Coletivo por Adesão da Innova?",
    answer:
      "Esse plano é destinado a profissionais e estudantes com vínculo a uma entidade de classe, associação, conselho ou sindicato. Caso tenha dúvidas se você se enquadra, entre em contato com nossa equipe e nós ajudamos!",
  },
  {
    question: "Quais empresas podem contratar o Plano Empresarial (PME)?",
    answer:
      "Empresas de todos os portes podem contratar nosso plano empresarial. Entre em contato para receber uma proposta personalizada.",
  },
  {
    question: "Como posso consultar a rede credenciada do meu plano?",
    answer:
      "Você pode acessar nosso guia médico online ou entrar em contato pelo 0800 345 9999 para consultar a rede disponível.",
  },
  {
    question: "A Innova cobre atendimentos de emergência e urgência?",
    answer:
      "Sim, nossos planos cobrem atendimentos de emergência e urgência conforme regulamentação da ANS.",
  },
  {
    question: "O que são carências em um plano de saúde?",
    answer:
      "Carência é o período que você precisa aguardar após a contratação para utilizar determinados procedimentos. Os prazos variam conforme o tipo de cobertura.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-innova-blue mb-12 italic">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-xl border border-border px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground text-sm hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
