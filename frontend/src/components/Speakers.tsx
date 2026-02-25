import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const speakers = [
  { name: 'Yogesh Agarwal', institution: 'IIM Lucknow (retd)', image: '/images/speakers/Yogesh_Agarwal.jpg', profile: 'https://www.iiml.ac.in/hi/faculty-data?n=NDU=' },
  { name: 'Sachin Jayaswal', institution: 'IIM Ahmedabad', image: '/images/speakers/Sachin_Jayaswal.jpg', profile: 'https://www.iima.ac.in/faculty-research/faculty-directory/sachin-jayaswal' },
  { name: 'Faiz Hamid', institution: 'IIT Kanpur', image: '/images/speakers/Faiz_Hamid.jpg', profile: 'https://www.iitk.ac.in/new/faiz-hamid' },
  { name: 'Trun Rambha', institution: 'IISC Bengaluru', image: '/images/speakers/trun_rambha.jfif', profile: 'https://cistup.iisc.ac.in/tarun/' },
  { name: 'Manu Kumar Gupta', institution: 'IIT Roorkee', image: '/images/speakers/Manu_Gupta.jpeg', profile: 'https://www.iitr.ac.in/~DM/Manu_Gupta' },
  { name: 'Sumit Kumar Yadav', institution: 'IIT Roorkee', image: '/images/speakers/sumit_yadav.jfif', profile: 'https://www.iitr.ac.in/~DM/Sumit_Kumar_Yadav' },
  // { name: 'Shuvabrata Chakraborty', institution: 'IIM Raipur', image: '/images/speakers/Shuvabrata_Chakraborty.jpg', profile: 'https://iimraipur.ac.in/profile/?uid=82' },
  // { name: 'Saurabh Chandra', institution: 'IIM Indore', image: '/images/speakers/Saurabh_Chandra.jpg', profile: 'https://iimidr.ac.in/faculty/full-time-faculty/saurabh-chandra/' },
  // { name: 'Reshma Chandrasekharan', institution: 'IIM Bangalore', image: '/images/speakers/Reshma_Chandrasekharan.jpg', profile: 'https://www.iimb.ac.in/user/225/reshma-chirayil-chandrasekharan' },
];

const Speakers = () => {
  return (
    <section id="speakers" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Speakers</h2>
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
