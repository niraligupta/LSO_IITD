import { MapPin, Building, Plane, Train, Car, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const nearbyHotels = [
  { name: 'Hotel Shyama International', distance: '0.1 km (Opposite IIT Delhi Main Gate)' },
  { name: 'The Ashtan Sarovar Portico', distance: '1.5 km from IIT Delhi' },
  { name: 'Hotel Oscar', distance: '1.2 km from IIT Delhi' },
  { name: 'Hotel Park Residency', distance: '1.8 km from IIT Delhi' },
  { name: 'Hotel South Gate', distance: '1.6 km from IIT Delhi' },
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
          <h3 className="text-2xl font-bold mb-4">LHC IIT Delhi</h3>

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
                    Classroom LH 101<br />
                    Lecture Hall Complex (LHC)<br />
                    IIT Delhi Campus
                  </p>
                </div>
              </div>

              <Button className="mt-6" asChild>
                <a href="https://www.google.com/maps/place/Indian+Institute+of+Technology+Delhi/@28.5450109,77.186786,17z" target="_blank" rel="noopener noreferrer">
                  View on Google Maps <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.725237481481!2d77.18678597496047!3d28.545010975708684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df4b6b7b6f7%3A0x5c88f6c6f45f2b6b!2sIndian%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1704899000000!5m2!1sen!2sin"
                className="w-full h-64 rounded-lg border"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </div>
        </Card>

        {/* Accommodation */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <img
              src="/images/iit_hostel.jpg"
              alt="IIT Delhi campus view"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">On-Campus Accommodation</h4>
            <p className="text-muted-foreground mb-4">
              Shared rooms in hostels are available from June 15th to June 22nd. Please reserve your rooms before the registration deadline.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Rs 300 per night (excluding GST)</p>
              <p className="text-sm text-muted-foreground">Walking distance to venue</p>
            </div>
          </Card>

          <Card className="p-6">
            <img
              src="/images/iit_guestHouse.jpg"
              alt="IIT Delhi campus view with flowers"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Guest House Accommodation</h4>
            <p className="text-muted-foreground mb-4">
              A limited number of guest house accommodations on campus are available for speakers and other attendees, offering comfortable stays in a serene environment.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Priority for speakers and invited guests</p>
              <p className="text-sm text-muted-foreground">Limited availability - request early</p>
            </div>
          </Card>
        </div>

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
                  <p className="font-medium">{hotel.name}</p>
                  <p className="text-sm text-muted-foreground">{hotel.distance}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            *Hotel information is provided for reference only. LSO 2026 does not have any official tie-ups with these hotels.
          </p>
        </Card>

        {/* How to Reach */}
        {/* <div>
          <h3 className="text-2xl font-bold mb-8 text-center">How to Reach</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon bg-red-500 hover:bg-red-400">
                  <Plane className="h-5 w-5  " />
                </div>
                <h4 className="text-lg font-semibold">By Air</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Indira Gandhi International Airport (DEL) is approximately 10–15 km from the campus.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Taxi: </li>
                <li>• App-based cabs available</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon bg-red-500 hover:bg-red-400">
                  <Train className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">By Train</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Nearest stations: New Delhi and  Hazrat Nizamuddin on Central line.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Auto-rickshaws available</li>
                <li>• Taxi: </li>
              </ul>
            </Card>

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
                <li>• IIT Delhi Metro Station (Magenta Line) – ~1 km</li>
                <li>• Hauz Khas Metro Station (Yellow & Magenta Line) – ~2 km</li>
              </ul>
            </Card>


            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon bg-red-500 hover:bg-red-400">
                  <Car className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">By Road</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                IIT Delhi is well-connected by road network and easily accessible from all parts of Delhi.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Bus: </li>
                <li>• App-based cabs available</li>
              </ul>
            </Card>
          </div>
        </div> */}

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
                <li>• Taxi: 20–30 minutes depending on traffic</li>
                <li>• App-based cabs available (Ola / Uber)</li>
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
                <li>• Auto-rickshaws available</li>
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
                <li>• DTC Buses available</li>
                <li>• App-based cabs (Ola / Uber)</li>
              </ul>
            </Card>

          </div>
        </div>



      </div>
    </section>
  );
};

export default Venue;
