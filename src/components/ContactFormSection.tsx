import { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    plano: "",
    nome: "",
    email: "",
    telefone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Fale com a Innova e receba atendimento personalizado
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Preencha os dados abaixo e nossa equipe entrará em contato com você para apresentar a melhor
          opção de plano, de forma rápida, clara e sem burocracia.
        </p>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-4">
          <select
            value={formData.plano}
            onChange={(e) => setFormData({ ...formData, plano: e.target.value })}
            className="w-full rounded-lg bg-muted border-0 px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Escolha seu plano</option>
            <option value="empresarial">Plano Empresarial</option>
            <option value="adesao">Plano Coletivo por Adesão</option>
            <option value="odontologico">Plano Odontológico</option>
          </select>

          <input
            type="text"
            placeholder="Nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full rounded-lg bg-muted border-0 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg bg-muted border-0 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />

          <input
            type="tel"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full rounded-lg bg-muted border-0 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />

          <button
            type="submit"
            className="w-full bg-innova-blue text-background rounded-lg py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
