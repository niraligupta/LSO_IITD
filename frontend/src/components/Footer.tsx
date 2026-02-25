const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">LSO Summer School 2026</h3>
          <p className="text-background/60 mb-4">
            Large Scale Optimization Summer School
          </p>
          <p className="text-background/60 text-sm">
            June 01-06, 2026 • IIT Delhi,  India
          </p>
          <div className="mt-6 pt-6 border-t border-background/20">
            <p className="text-background/40 text-sm">
              © 2026 LSO Summer School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
