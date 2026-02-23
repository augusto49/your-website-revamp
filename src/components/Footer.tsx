import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span className="text-innova-blue">Y</span>
              <span className="text-foreground">nnova</span>
            </h3>
            <p className="text-[10px] text-muted-foreground mb-4">A evolução do seu Plano de Saúde</p>
            <span className="inline-block bg-foreground text-background text-xs px-3 py-1 rounded">
              ANS: 42357 - 2
            </span>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Início", "Quem somos", "Blog", "Rede de Atendimento", "Suporte ao cliente", "Cotação", "Seja um credenciado"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portais */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Portais</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Portal do Beneficiário", "Portal do Prestador", "Portal do Corretor", "Portal da Empresa"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors block mb-2">Termos de Uso</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors block mb-2">Política de Privacidade</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors block">Gerenciar Cookies</a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contato</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Central de Atendimento - 0800 345 9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Ouvidoria - (69) 2018-1000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>faleconosco@innovaoperadora.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p>Porto Velho</p>
                  <p>Manaus</p>
                  <p>Boa Vista</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground mt-2">Em breve em</p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Macaé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Redes Sociais</h4>
            <div className="flex gap-3">
              {["facebook", "whatsapp", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-innova-blue flex items-center justify-center text-background hover:opacity-90 transition-opacity"
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          ©2026 Innova Plano de Saúde – Todos Direitos Reservados | CNPJ: 48.982.275/0001-02
        </div>
      </div>
    </footer>
  );
};

export default Footer;
