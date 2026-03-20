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
          <span>📅 June 01–06, 2026</span>
          <span>📍 IIT Delhi, India</span>
        </div>

        <div className="border-t border-background/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© 2026 LSO Summer School. All rights reserved.</p>
          {/* <p className="flex items-center gap-1.5">
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/nirali-gupta-977011286/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium transition-colors"
            >
              Nirali Gupta

            </a>
          </p> */}

        </div>
      </div >
    </footer >
  );
};

export default Footer;
