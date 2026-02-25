import { GraduationCap, BookOpen, Briefcase, Users } from 'lucide-react';

const topics = [
  'Optimization Modeling',
  'Polyhedral theory',
  'Lagrangean relaxation',
  'Branch-and-Bound, Branch-and-Cut, and Branch-and-Price',
  'Cutting plane methods',
  'Benders decomposition',
  'Column Generation',
  'Nonlinear optimization',
  'Robust optimization',
  'Heuristic methods',
  'Approximation algorithms',
];

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students / Post Doctoral',
    description:
      'Build a strong foundation in large-scale optimization, enhance your research capabilities, and interact with leading experts to advance your academic career.',
  },
  {
    icon: BookOpen,
    title: 'Faculty Members',
    description:
      'Update your knowledge with recent advances in optimization theory and applications to strengthen your teaching, research, and academic collaborations.',
  },
  {
    icon: Briefcase,
    title: 'Industry Professionals',
    description:
      'Apply modern optimization techniques and tools to solve complex real-world business and operational challenges efficiently.',
  },
  {
    icon: Users,
    title: 'Government Officers',
    description:
      'Gain practical insights into optimization methods to support policy planning, data-driven decision-making, and efficient public administration.',
  },
];


const Topics = () => {
  return (
    <section id="topics" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Topics</h2>
          <p className="section-subtitle">
            The summer school will cover various advanced topics in integer, linear and nonlinear optimization.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {topics.map((topic) => (
            <span key={topic} className="topic-badge">
              {topic}
            </span>
          ))}
        </div>

        {/* Who Should Attend */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Who Should Attend?</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <div key={audience.title} className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="feature-icon mx-auto mb-4 bg-red-500 hover:bg-red-400">
                  <audience.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{audience.title}</h4>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
