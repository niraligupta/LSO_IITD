import { CheckCircle2, GraduationCap, Building2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from "next/link";
const pastEditions = [
  { year: '2019', location: 'IIM Indore', url: 'https://lso2026.iitd.ac.in/' },
  { year: '2022', location: 'IIM Ahmedabad', url: 'https://lso2026.iitd.ac.in/' },
  { year: '2023', location: 'IIT Kanpur', url: 'https://www.iitk.ac.in/cce/courses/23-24/large-scale-optimization/' },
  { year: '2024', location: 'IIT Roorkee', url: 'https://www.iitr.ac.in/lso/' },
  { year: '2025', location: 'IIT Bombay', url: 'https://www.ieor.iitb.ac.in/lso2025/' },
];

const targetAudience = [
  { icon: GraduationCap, label: 'Students / Post Docs' },
  { icon: GraduationCap, label: 'Government Officers' },
  { icon: Building2, label: 'Faculty Members' },
  { icon: Globe, label: 'Industry Professionals' },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">

      <div className="absolute top-9 right-0 h-full w-[45%] hidden lg:block">
        <img
          src="/images/lso_img.jpg"
          alt="Academic professional giving a mathematical presentation"
          className=" object-cover w-[58%]"
        />
      </div>


      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className=" text-red-500  inline-block  font-semibold text-2xl uppercase tracking-wider mb-4">
            About the Program
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            India's Premier
            <span className="block text-red-500">Optimization School</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            LSO 2026 brings together the brightest minds in optimization for an intensive
            week of advanced learning, covering theory, modeling, applications, and computing.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          <div className="lg:col-span-2 space-y-8">
            <div className="relative geometric-accent">
              <div className="  shadow-soft ">
                <img
                  src="/images/logo_lso.png"
                  alt="LSO 2026 Logo"
                  className="w-full h-auto max-w-[450px] mx-auto"
                />
              </div>

            </div>

            {/* Target Audience */}
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Who Should Attend?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {targetAudience.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-base text-muted-foreground"
                  >
                    <item.icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Topics covered */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-xl text-foreground">
                What You'll Learn
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {['Integer Optimization', 'Linear  Optimization', 'Nonlinear Optimization', 'Real-world Applications'].map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border hover:border-accent/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="font-medium text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Editions Timeline */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-xl text-foreground">
                Legacy of Excellence
              </h3>
              <div className="flex flex-wrap gap-2">
                {pastEditions.map((edition) => (
                  <a
                    key={edition.year}
                    href={edition.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary/5 rounded-full border border-primary/10
                 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-display font-semibold text-foreground">
                      {edition.year}
                    </span>
                    <span className="text-muted-foreground">
                      {" "}• {edition.location}
                    </span>
                  </a>
                ))}
              </div>


            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
