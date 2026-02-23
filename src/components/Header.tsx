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
    <header className="sticky top-0 z-50 bg-card backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl font-bold tracking-tight italic">
            <span className="text-innova-blue">Y</span>
            <span className="text-foreground">nnova</span>
          </span>
          <span className="text-[9px] text-muted-foreground leading-tight block -mt-0.5 font-medium">
            A evolução do seu<br />
            <span className="text-innova-blue font-semibold">Plano de Saúde</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[13px] font-medium text-foreground/70 hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
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
        <nav className="lg:hidden bg-card border-t border-border px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2.5 text-sm text-foreground/70 hover:text-primary transition-colors"
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
