const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">

      <div className="section-container">

        <div className="flex items-center justify-center gap-5 mb-8">
          <img
            src="/images/iit_delhi_logo.png"
            alt="IIT Delhi Logo"
            className="h-14 w-14 "
          />
          <div>
            <h3 className="text-2xl font-bold tracking-tight">LSO Summer School 2026</h3>
            <p className="text-background/60 mt-1">
              Large Scale Optimization Summer School
            </p>
          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-background/70 mb-8">
          <span>📅 June 1–6, 2026</span>
          <span>📍 IIT Delhi, India</span>
        </div>

        <div className="border-t border-background/15 pt-6 text-sm text-background/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <p className="w-full sm:w-auto">
              © 2026 LSO Summer School. All rights reserved.
            </p>
            <p className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 w-full sm:w-auto">
              <span>Developed by</span>
              <a
                href="https://www.linkedin.com/in/civiliitd/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors text-center sm:text-left"
              >
                Department of Civil and Environmental Engineering, IIT Delhi
              </a>
            </p>
          </div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
