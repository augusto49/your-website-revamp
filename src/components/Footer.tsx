import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-innova-teal">Y</span>nnova
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              A evolução do seu Plano de Saúde. Cuidando de você e da sua
              família com inovação e humanização.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Quem somos", "Rede de Atendimento", "Cotação", "Blog", "SAC"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:opacity-100 transition-opacity">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0800 345 9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@innova.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm opacity-50">
          © 2026 Innova Planos de Saúde. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
