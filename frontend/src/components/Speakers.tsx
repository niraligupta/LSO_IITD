import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const speakers = [
  { name: 'Yogesh Agarwal', institution: 'IIM Lucknow (retd)', image: '/images/speakers/Yogesh_Agarwal.jpg', profile: 'https://www.iiml.ac.in/hi/faculty-data?n=NDU=' },
  { name: 'Sachin Jayaswal', institution: 'IIM Ahmedabad', image: '/images/speakers/Sachin_Jayaswal.jpg', profile: 'https://www.iima.ac.in/faculty-research/faculty-directory/sachin-jayaswal' },
  { name: 'Faiz Hamid', institution: 'IIT Kanpur', image: '/images/speakers/Faiz_Hamid.jpg', profile: 'https://www.iitk.ac.in/new/faiz-hamid' },
  { name: 'Nezamuddin', institution: 'IIT Delhi', image: '/images/coreTeam/nezam.jpg', profile: 'https://web.iitd.ac.in/~nezam/' },
  { name: 'Ashutosh Mahajan', institution: 'IIT Bombay', image: '/images/speakers/Ashutosh_Mahajan.png', profile: 'https://www.ieor.iitb.ac.in/amahajan' },

  { name: 'Prashant Palkar', institution: 'IIT Delhi', image: '/images/coreTeam/prashant.jfif', profile: 'https://mech.iitd.ac.in/faculty-profile/207' },

  { name: 'Manu Kumar Gupta', institution: 'IIT Roorkee', image: '/images/speakers/Manu_Gupta.jpeg', profile: 'https://www.iitr.ac.in/~DM/Manu_Gupta' },
  { name: 'Sumit Kumar Yadav', institution: 'IIT Roorkee', image: '/images/speakers/sumit_yadav.jfif', profile: 'https://www.iitr.ac.in/~DM/Sumit_Kumar_Yadav' },
  { name: 'Shuvabrata Chakraborty', institution: 'IIM Raipur', image: '/images/speakers/Shuvabrata_Chakraborty.jpg', profile: 'https://iimraipur.ac.in/profile/?uid=82' },
  { name: 'Tarun Rambha', institution: 'IISC Bengaluru', image: '/images/speakers/trun_rambha.jfif', profile: 'https://cistup.iisc.ac.in/tarun/' },
  { name: 'Saurabh Chandra', institution: 'IIM Indore', image: '/images/speakers/Saurabh_Chandra.jpg', profile: 'https://iimidr.ac.in/faculty/full-time-faculty/saurabh-chandra/' },
  { name: 'Reshma Chandrasekharan', institution: 'IIM Bangalore', image: '/images/speakers/Reshma_Chandrasekharan.jpg', profile: 'https://www.iimb.ac.in/user/225/reshma-chirayil-chandrasekharan' },
  { name: 'Guneshwar Anand', institution: "Queen's University Belfast", image: '/images/speakers/Guneshwar_Anand.png', profile: 'https://www.qub.ac.uk/schools/queens-business-school/people/academic-staff/AllAcademicStaffProfiles/Anand.html' },
  { name: 'Divya Padmanabhan', institution: 'IIT Goa', image: '/images/speakers/Divya_Padmanabhan.jpg', profile: 'https://iitgoa.ac.in/CS-faculty-profile/?uid=divya&&exp=CS' },
  { name: 'Pramesh Kumar', institution: 'IIT Delhi', image: '/images/coreTeam/pramesh.jfif', profile: 'https://prameshk.github.io/index.html#about' },
  { name: 'Amit Vatsa', institution: 'IIM Indore', image: '/images/speakers/Amit_Vatsa.jfif', profile: 'https://www.linkedin.com/in/amitvatsa/?originalSubdomain=in' },
  { name: 'Varun Ramamohan', institution: 'IIT Delhi', image: '/images/coreTeam/varun.jpg', profile: 'https://mech.iitd.ac.in/faculty-profile/189' },
  { name: 'Prasanna R', institution: 'IIT Delhi', image: '/images/coreTeam/Prasanna.jpg', profile: 'https://dms.iitd.ac.in/faculity_type/prof-prasanna/' },
  { name: 'Vikas Vikram Singh', institution: 'IIT Delhi', image: '/images/coreTeam/vikas_vikram.jpg', profile: 'https://iitd.irins.org/profile/70403' },
  { name: 'Amber Srivastava', institution: 'IIT Delhi', image: '/images/coreTeam/Amber.jpg', profile: 'https://mech.iitd.ac.in/faculty-profile/203' },




];

const Speakers = () => {
  return (
    <section id="speakers" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title"> Tentative Speakers</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="speaker-card">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker-image"
              />
              <h4 className="font-semibold text-foreground mb-1">{speaker.name}</h4>
              <p className="text-sm text-muted-foreground mb-3">{speaker.institution}</p>
              <Button variant="link" size="sm" asChild className="text-primary p-0 h-auto">
                <a href={speaker.profile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                  View profile <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
