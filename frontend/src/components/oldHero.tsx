import { BookOpen, Laptop, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: BookOpen,
    title: 'Expert Lectures',
    description: 'Learn from leading experts in the field of optimization from prestigious institutions across India.',
  },
  {
    icon: Laptop,
    title: 'Hands-on Sessions',
    description: 'Gain practical experience through interactive sessions on real-world optimization problems.',
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with fellow researchers, students, and industry professionals in the field of optimization.',
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/iitdelhi.jpg)' }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white py-20">
        <div className="date-badge mx-auto mb-6   bg-red-500 hover:bg-red-400">
          <span>June 16-21, 2026 • IIT Delhi</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Large Scale Optimization<br />
          Summer School 2026
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
          Advanced topics in integer, linear and nonlinear optimization with sessions on theory, modeling, applications and computing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-red-500 hover:bg-red-400 text-primary-foreground">
            <a href="#registration">Register Now</a>
          </Button>
          <Button size="lg" className=" bg-white border-white text-red-500 hover:bg-white/10  hover:text-white">
            <a href="#program">View Program</a>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 bg-foreground/30 backdrop-blur-sm rounded-xl p-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="feature-icon mx-auto mb-4 bg-red-500 hover:bg-red-400 ">
                <feature.icon className="h-6 w-6 " />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="inline-flex flex-col items-center mt-12 text-white/60 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll down to learn more</span>
          <ChevronDown className="h-6 w-6 animate-bounce-slow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
