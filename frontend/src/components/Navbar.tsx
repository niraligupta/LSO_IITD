



import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#topics', label: 'Topics' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#program', label: 'Program' },
  { href: '#registration', label: 'Registration' },
  { href: '#venue', label: 'Venue' },
  { href: '#coreteam', label: 'Core Team' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-soft'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className={`text-lg font-display font-bold transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'
              }`}
          >
            LSO Summer School 2026

          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${scrolled
                  ? 'text-foreground/70 hover:text-foreground'
                  : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'
              }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden py-4 border-t transition-colors duration-300 ${scrolled
              ? 'border-border bg-background/95'
              : 'border-white/10 bg-black/40 backdrop-blur-md'
              }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-2 px-2 rounded-md transition-colors ${scrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;