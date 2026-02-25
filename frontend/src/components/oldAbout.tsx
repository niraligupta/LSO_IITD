import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title text-center">About LSO 2026</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <img
              src="/images/logo_lso.png"
              alt="LSO 2026 Logo"
              className=" rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground">
              Large Scale Optimization (LSO) Summer School, 2026 will cover advanced topics in integer, linear and nonlinear optimization. It will feature sessions on theory, modeling, applications and computing.
            </p>

            <p className="text-muted-foreground">
              The school is targeted at PhD students, post-graduate students, faculty and industry professionals interested in advanced topics in this area.
            </p>

            <p className="text-muted-foreground">
              This is the 6th in series, following the LSO Summer Schools at IIM Indore (2019), IIM Ahmedabad (2022), IIT Kanpur (2023), IIT Roorkee (2024), and IIT Bombay (2025).
            </p>

            <Button className="bg-red-500 hover:bg-red-400">
              <a href="#registration">Register for the summer school</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
