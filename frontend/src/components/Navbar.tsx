import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#important', label: 'Important Dates' },
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
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo + Title */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <img
              src="/images/iit_delhi_logo.png"
              alt="IIT Delhi Logo"
              className="h-9 w-9 sm:h-11 sm:w-11 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`
                  font-display font-bold text-base sm:text-lg
                  ${scrolled ? 'text-foreground' : 'text-white'}
                `}
              >
                LSO Summer School <span className="text-red-500">2026</span>
              </span>
              <span
                className={`
                  text-s sm:text-sm opacity-80 font-bold
                  ${scrolled ? 'text-foreground' : 'text-white'}
                `}
              >
                (June 1–6)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                   font-bold text-sm lg:text-base transition-colors
                  hover:text-accent
                  ${scrolled
                    ? 'text-foreground/80 hover:text-foreground'
                    : 'text-white/85 hover:text-white'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
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
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[500px] border-t' : 'max-h-0'}
          ${scrolled
            ? 'bg-background/95 border-border'
            : 'bg-black/50 backdrop-blur-md border-white/10'
          }
        `}
      >
        <div className="px-4 py-5 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                block py-3 px-4 rounded-lg font-medium text-base
                transition-colors
                ${scrolled
                  ? 'text-foreground/80 hover:text-foreground hover:bg-muted'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
                }
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav >
  );
};

export default Navbar;