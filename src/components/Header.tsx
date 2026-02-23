import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  "Início",
  "Quem somos",
  "Blog",
  "Rede de Atendimento",
  "Cotação",
  "Seja um credenciado",
  "Corretoras",
  "Portais",
  "SAC",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-innova-blue">Y</span>
            <span className="text-foreground">nnova</span>
          </span>
          <span className="text-[10px] text-muted-foreground leading-tight block -mt-1">
            A evolução do seu<br />Plano de Saúde
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item === "Portais" ? (
                <span className="flex items-center gap-1">
                  <ChevronDown className="w-3 h-3" />
                  {item}
                </span>
              ) : (
                item
              )}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-card border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
