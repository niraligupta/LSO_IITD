import {
  ArrowRight,
  Calendar,
  MapPin,
  Sparkles,
  Target,
  Lightbulb,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Sparkles,
    label: 'Expert Faculty',
    detail: 'Leading researchers',
  },
  {
    icon: Target,
    label: 'Hands-on Training',
    detail: 'Real-world problems',
  },
  {
    icon: Lightbulb,
    label: 'Cutting Edge Techniques',
    detail: 'Latest techniques',
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/iitdelhi.jpg)' }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-500 rounded-full floating-shape" />
      <div
        className="absolute bottom-40 right-20 w-24 h-24 border-2 border-red-500 rotate-45 floating-shape"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/10 border-2 border-red-500 rounded-full floating-shape"
        style={{ animationDelay: '1s' }}
      />

      {/* Main Content */}
      <div className="relative z-10 section-container min-h-screen flex flex-col justify-center py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full  border border-red-400 backdrop-blur-sm animate-fade-up">
              <Calendar className="w-4 h-4 text-red-500" />
              <span className="text-xl font-medium text-primary-foreground">
                June 01– 06, 2026
              </span>
              <span className="w-1 h-1 rounded-full bg-red-500" />
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-xl font-medium text-primary-foreground">
                IIT Delhi
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1]">
                Large Scale
                <span className="block text-red-500">Optimization</span>
              </h1>
              <p className="text-2xl md:text-3xl font-display font-medium text-primary-foreground/80">
                Summer School 2026 <span>(6th Edition)</span>
              </p>

            </div>

            {/* Description */}
            <p
              className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Dive deep into advanced integer, linear, and nonlinear optimization.
              Join India&apos;s premier optimization community for a week of intensive learning.
            </p>

            {/* CTA */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-300 text-accent-foreground font-semibold px-8 shadow-glow"
                asChild
              >
                <a href="/registration" className="inline-flex items-center gap-2">
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-red-500 hover:bg-primary-foreground/10 font-semibold px-8"
                asChild
              >
                <a href="#program">Explore Program</a>
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              {features.map((item, index) => (
                <div
                  key={item.label}
                  className="group bg-card/10 backdrop-blur-md border border-primary-foreground/10 rounded-2xl p-6 hover:bg-card/20 transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl  bg-red-500 flex items-center justify-center shadow-glow">
                      <item.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-primary-foreground">
                        {item.label}
                      </h3>
                      <p className="text-sm text-primary-foreground/60">
                        {item.detail}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            {/* <div
              className="absolute -bottom-12 -left-10 bg-card rounded-2xl p-5 shadow-elevated animate-fade-up"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">6th</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Edition
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-16 inline-flex flex-col items-center text-white/60 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll down to learn more</span>
          <ChevronDown className="h-6 w-6 animate-bounce-slow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
