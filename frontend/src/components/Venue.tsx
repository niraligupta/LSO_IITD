import { MapPin, Building, Plane, Train, Car, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const nearbyHotels = [
  { name: 'Hotel Shyama International', distance: '0.1 km (Opposite IIT Delhi Main Gate)', link: "https://maps.app.goo.gl/19SrXbxGa7iVitrY8" },
  { name: 'The Ashtan Sarovar Portico', distance: '1.5 km from IIT Delhi', link: "https://maps.app.goo.gl/6rHidmMeWEDEVHUM9" },
  { name: 'Hotel Oscar', distance: '1.2 km from IIT Delhi', link: "https://maps.app.goo.gl/pNWXoeY5R9kDfVnW8" },
  { name: 'Hotel Park Residency', distance: '1.8 km from IIT Delhi', link: "https://maps.app.goo.gl/hgyJfSLFkPBc8ovg7" },
  { name: 'Hotel South Gate', distance: '1.6 km from IIT Delhi', link: "https://maps.app.goo.gl/2sc7WsiJoHfaLyYC9" },
];


const Venue = () => {
  return (
    <section id="venue" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Venue</h2>
          <p className="section-subtitle">
            Join us at IIT Delhi campus in Hauz Khas, New Delhi.
          </p>
        </div>

        <Card className="p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Lecture Hall Complex (LHC), IIT Delhi</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Venue Information</h4>
              <p className="text-muted-foreground mb-6">
                LSO 2026 will be held in IIT Delhi campus located in Hauz Khas, New Delhi. The campus offers state-of-the-art facilities for academic conferences and a serene environment conducive to learning and networking.
              </p>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </h5>
                  <p className="text-muted-foreground">
                    Indian Institute of Technology Delhi<br />
                    Hauz Khas, New Delhi- 110016<br />
                    India
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    Exact Venue
                  </h5>
                  <p className="text-muted-foreground">

                    Lecture Hall Complex (LHC)<br />
                    IIT Delhi Campus
                  </p>
                </div>
              </div>

              <Button className="mt-6" asChild>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Lecture+Hall+Complex+IIT+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps?q=Lecture+Hall+Complex+IIT+Delhi&output=embed"
                className="w-full h-64 rounded-lg border"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </div>
        </Card>

        {/* Nearby Hotels */}
        <Card className="p-6 mb-12">
          <h4 className="text-xl font-bold mb-4">Nearby Hotels</h4>
          <p className="text-muted-foreground mb-4">
            For attendees seeking alternative accommodation, several hotels are available near the IIT Delhi campus:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {nearbyHotels.map((hotel) => (
              <div key={hotel.name} className="flex items-center gap-3">
                <Building className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  {/* <p className="font-medium">{hotel.name}</p> */}
                  <a
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-black hover:underline"
                  >
                    {hotel.name}
                  </a>
                  <p className="text-sm text-muted-foreground">{hotel.distance}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            *Hotel information is provided for reference only. LSO 2026 does not have any official tie-ups with these hotels.
          </p>
        </Card>


        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">How to Reach</h3>
          <div className="grid md:grid-cols-4 gap-6">

            {/* By Air */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon bg-red-500 hover:bg-red-400">
                  <Plane className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">By Air</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Indira Gandhi International Airport (DEL) is approximately 10–15 km from the campus.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Taxi/App-based (Ola / Uber) cabs are available at all terminals: 20–40 minutes depending on traffic</li>
                <li>• If you arrive at Terminal 1, you can also take the Magenta Line from Terminal 1 Metro Station to IIT Delhi Metro Station.   </li>
              </ul>
            </Card>

            {/* By Train */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon bg-red-500 hover:bg-red-400">
                  <Train className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">By Train</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Nearest railway stations: New Delhi Railway Station & Hazrat Nizamuddin Railway Station.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Taxi: 25–35 minutes</li>
                <li>• Auto-rickshaws are available</li>
                <li>• If you arrive at New Delhi Railway Station, you can take the Yellow Line from New Delhi Metro Station to Hauz Khas Metro Station, then transfer to the Magenta Line to reach IIT Delhi Metro Station.</li>
                <li>• If you arrive at Hazrat Nizamuddin Railway Station, you can take the Pink Line from Sarai Kale Khan Metro Station, transfer to the Yellow Line at Delhi Haat/INA, and then transfer to the Magenta Line at Hauz Khas Metro Station to reach IIT Delhi Metro Station.</li>
              </ul>
            </Card>

            {/* By Metro */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon bg-red-500 hover:bg-red-400">
                  <Train className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">By Metro</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                IIT Delhi is well connected via Delhi Metro.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• IIT Delhi Metro Station (Magenta Line) – ~0.2 km</li>
                <li>• Hauz Khas Metro Station (Yellow & Magenta Line) – ~2 km</li>
              </ul>
            </Card>

            {/* By Road */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon bg-red-500 hover:bg-red-400">
                  <Car className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">By Road</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                IIT Delhi is well-connected by road and easily accessible from all parts of Delhi.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• DTC buses are available</li>
                <li>• App-based  (Ola / Uber) cabs are available </li>
              </ul>
            </Card>

          </div>
        </div>



      </div>
    </section>
  );
};

export default Venue;
