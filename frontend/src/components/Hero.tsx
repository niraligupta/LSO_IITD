import {
  ArrowRight,
  Calendar,
  MapPin,
  Sparkles,
  Target,
  Lightbulb,
  ChevronDown,
  ArrowDownToLine,
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
      className="relative min-h-[90svh] md:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-12 md:pb-24 overflow-hidden"
    >

      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/iit_delhi.jpg')",
        }}
      />


      <div className="absolute inset-0 hero-overlay bg-black/50 md:bg-black/40" />


      <div className="absolute -top-10 left-6 w-20 h-20 md:w-32 md:h-32 border-2 border-red-500/40 rounded-full floating-shape opacity-60 md:opacity-80" />
      <div
        className="absolute bottom-20 right-10 w-16 h-16 md:w-24 md:h-24 border-2 border-red-500/40 rotate-12 floating-shape opacity-60 md:opacity-80"
        style={{ animationDelay: '1.8s' }}
      />


      <div className="relative z-10 container-custom flex flex-col flex-grow justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">

          <div className="space-y-6 md:space-y-8 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">

            <div className="inline-flex flex-wrap justify-center lg:justify-start items-center gap-3 px-4 py-2.5 rounded-full border border-red-400/60 backdrop-blur-sm text-sm sm:text-base animate-fade-up">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              <span className="font-medium text-white">
                June 1–6, 2026
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              <span className="font-medium text-white">IIT Delhi</span>
            </div>

            {/* Title */}
            <div className="space-y-3 sm:space-y-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                Large-Scale
                <span className="block text-white">Optimization</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90">
                Summer School 2026 <span className="opacity-90">(6th Edition)</span>
              </p>
            </div>


            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Dive deep into advanced linear, integer, and nonlinear optimization.
              Join India’s premier optimization community for a week of intensive learning.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 animate-fade-up pt-2"
              style={{ animationDelay: '0.3s' }}
            >
              {/*}
              <Button
                size="lg"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-semibold px-8 shadow-lg shadow-red-900/30"
                asChild
              >
                <a
                  href="https://cepqip.iitd.ac.in/post/program/large-scale-optimization-summer-school"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              */}

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/40 text-black  font-bold hover:bg-white/10 px-8"
                asChild
              >
                <a href="#program">Explore Program</a>
              </Button>

              <Button
                size="lg"
                className="w-full sm:w-auto bg-red-600/90 hover:bg-red-500 text-white font-semibold px-8 shadow-lg shadow-red-900/20"
                asChild
              >
                <a
                  href="/LSO2026_brochure_v2.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2"
                >
                  Brochure
                  <ArrowDownToLine className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>


          <div className="mt-10 lg:mt-0 relative animate-scale-in lg:w-5/12 xl:w-2/5" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4 md:space-y-5">
              {features.map((item, index) => (
                <div
                  key={item.label}
                  className="group bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ animationDelay: `${0.5 + index * 0.12}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-600 flex items-center justify-center shadow-md">
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg text-white">
                        {item.label}
                      </h3>
                      <p className="text-sm sm:text-base text-white/70 truncate">
                        {item.detail}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="relative z-10 mt-auto flex justify-center pt-8 md:pt-12">
        <a
          href="#about"
          className="inline-flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-xs sm:text-sm mb-1.5 uppercase tracking-wider opacity-80">
            Scroll to learn more
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce-slow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;