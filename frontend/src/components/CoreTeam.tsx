import { ExternalLink } from 'lucide-react';

const organizers = [
  { name: 'Nezamuddin', department: 'Civil Engineering Department', image: '/images/coreTeam/nezam.jpg', profile: 'https://web.iitd.ac.in/~nezam/' },
  { name: 'Pramesh Kumar', department: 'Civil Engineering Department', image: '/images/coreTeam/pramesh.jfif', profile: 'https://prameshk.github.io/index.html#about' },
  { name: 'Prashant Palkar', department: 'Mechanical Engineering Department', image: '/images/coreTeam/prashant.jfif', profile: 'https://mech.iitd.ac.in/faculty-profile/207' },
  { name: 'Varun Ramamohan', department: 'Mechanical Engineering Department', image: '/images/coreTeam/varun.jpg', profile: 'https://mech.iitd.ac.in/faculty-profile/189' },
  { name: 'Prasanna R', department: ' Management studies Department', image: '/images/coreTeam/Prasanna.jpg', profile: 'https://dms.iitd.ac.in/faculity_type/prof-prasanna/' },
  { name: 'Vikas Vikarm Singh', department: 'Mathematics Department', image: '/images/coreTeam/vikas_vikram.jpg', profile: 'https://iitd.irins.org/profile/70403' },
  { name: 'Amber Srivastava', department: 'Mechanical Engineering Department', image: '/images/coreTeam/Amber.jpg', profile: 'https://mech.iitd.ac.in/faculty-profile/203' },
  { name: 'Ramachandra Rao Kalaga', department: 'Civil Engineering Department', image: '/images/coreTeam/Kalgasir.jpg', profile: 'https://web.iitd.ac.in/~rrkalaga/' },

];

const CoreTeam = () => {
  return (
    <section id="coreteam" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Core Team</h2>
          <p className="section-subtitle">
            Meet the team behind LSO Summer School 2026.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {organizers.map((organizer) => (
            <div key={organizer.name} className="speaker-card">
              <img
                src={organizer.image}
                alt={organizer.name}
                className="speaker-image"
              />
              <a
                href={organizer.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {organizer.name}
                <ExternalLink className="h-3 w-3" />
              </a>
              <p className="text-sm text-muted-foreground mt-1">{organizer.department}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
