const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Chez Filiberto</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          59 Rue de Boulainvilliers, 75016 Paris
        </p>
        <a href="tel:+33142307738" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 1 42 30 77 38
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Chez Filiberto. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
