import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Topics from '@/components/Topics';
import Speakers from '@/components/Speakers';
import Program from '@/components/Program';
import Registration from '@/components/Registration';
import Venue from '@/components/Venue';
import CoreTeam from '@/components/CoreTeam';
import Footer from '@/components/Footer';
import ImportantDates from '@/components/ImportantDates';
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ImportantDates />
      <Topics />
      <Speakers />
      <Program />
      <Registration />
      <Venue />
      <CoreTeam />
      <Footer />
    </div>
  );
};

export default Index;
