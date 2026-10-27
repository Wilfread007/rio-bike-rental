export const BUSINESS = {
  name: "Rio Bike Rental",
  tagline: "Ride • Explore • Repeat",
  phone: "+91 97900 76737",
  tel: "tel:+919790076737",
  whatsapp: "https://wa.me/919790076737?text=Hi%20Rio%20Bike%20Rental%2C%20I%20want%20to%20rent%20a%20bike%20in%20Nagercoil",
  instagram: "https://www.instagram.com/riobikerental/",
  address: "Muppidari Amman Kovil, Cholavar St, opposite Railway Road, Kottar, Nagercoil, Tamil Nadu 629002",
  landmark: "Opposite Railway Road near Muppidari Amman Kovil (2 mins from Nagercoil Junction Railway Station)",
  map: "https://www.google.com/maps/search/?api=1&query=Rio+Bike+Rental+Kottar+Nagercoil",
  domain: "https://rio-bike-rental.vercel.app",
  hours: "Open 24 Hours (24/7 Everyday)",
  openStatus: "Open 24 Hours • 24/7 Pickup & Drop",
};

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  tag: string;
  desc: string;
  best: string;
  kind: "scooter" | "bike" | "bullet";
  color: string;
  photo: string;
  photoAlt: string;
  features: string[];
  specs: { engine: string; mileage: string; fuel: string; brake: string };
}

export const FLEET: Vehicle[] = [
  {
    id: "honda-activa",
    kind: "scooter",
    category: "Scooter Rental",
    tag: "Most Popular",
    name: "Honda Activa & Automatic Scooters",
    desc: "Lightweight, gearless, and exceptionally easy to maneuver through Nagercoil city traffic. Perfect for local shopping, temple visits, couples, and casual sightseeing.",
    best: "Couples, solo riders, and city travel in Nagercoil",
    color: "#ff5a36",
    photo: "/images/scooter-rental-nagercoil.jpg",
    photoAlt: "Honda Activa automatic scooters for rent at Rio Bike Rental shop in Kottar, Nagercoil",
    features: [
      "Smooth automatic twist-and-go transmission",
      "High fuel efficiency (45–50 km/litre)",
      "Spacious under-seat storage for helmets & bags",
      "Comfortable wide dual seating with footboard",
    ],
    specs: { engine: "110cc / 125cc", mileage: "45-50 km/l", fuel: "Petrol", brake: "Combi-Brake System" },
  },
  {
    id: "commuter-bikes",
    kind: "bike",
    category: "Bike Rental",
    tag: "Best Mileage",
    name: "Commuter Motorcycles (110cc - 150cc)",
    desc: "Reliable geared motorcycles built for outstanding mileage and effortless highway riding. Ideal for daily commuting, field work, and exploring Kanyakumari district on a budget.",
    best: "Daily commuters, work travelers, and budget explorers",
    color: "#0e9f7e",
    photo: "/images/bike-rental-nagercoil.jpg",
    photoAlt: "Rental commuter bikes available at Rio Bike Rental in Kottar, Nagercoil",
    features: [
      "Ultra-reliable 4-stroke commuter engine",
      "Exceptional fuel mileage (55–65 km/litre)",
      "Robust telescopic suspension for city and village roads",
      "Upright, fatigue-free ergonomic riding posture",
    ],
    specs: { engine: "110cc - 150cc", mileage: "55-65 km/l", fuel: "Geared", brake: "Disc / Drum" },
  },
  {
    id: "royal-enfield-bullet",
    kind: "bullet",
    category: "Touring & Bullet Rental",
    tag: "Highway Cruiser",
    name: "Royal Enfield Bullet & Touring Motorcycles",
    desc: "Iconic Royal Enfield Bullet and cruiser bikes designed for thrilling road trips toward Kanyakumari sunrise point, coastal highways, and scenic Western Ghats foothills.",
    best: "Kanyakumari road trips, coastal drives, and touring groups",
    color: "#0b1f3a",
    photo: "/images/bullet-rental-nagercoil.jpg",
    photoAlt: "Royal Enfield Bullet rental motorcycle available at Rio Bike Rental in Nagercoil",
    features: [
      "High-torque 350cc engine for effortless highway cruising",
      "Signature Royal Enfield exhaust thump and heavy road presence",
      "Plush cushioned touring saddle for long-distance comfort",
      "Dual-channel ABS with front & rear disc brakes",
    ],
    specs: { engine: "350cc", mileage: "35-40 km/l", fuel: "5-Speed Geared", brake: "Dual Disc ABS" },
  },
];

export const GALLERY = [
  {
    title: "Storefront & Garage View",
    subtitle: "Kottar, Nagercoil (Opposite Railway Road)",
    src: "/images/rio-bike-rental-shop-nagercoil.png",
    alt: "Rio Bike Rental shopfront in Kottar Nagercoil with helmets on wall and rental scooters and bikes",
    desc: "Our fully equipped local garage with helmet racks and serviced vehicles ready for pickup.",
  },
  {
    title: "Scooter Bay & Entrance",
    subtitle: "Honda Activa Fleet",
    src: "/images/rio-bike-rental-kottar-nagercoil.jpg",
    alt: "Rio Bike Rental entrance banner in Kottar, Nagercoil with rental Honda Activa scooters",
    desc: "Clean automatic scooters ready for local city commuting and couples visiting Kanyakumari.",
  },
  {
    title: "Royal Enfield Touring Fleet",
    subtitle: "Highway & Coastal Rides",
    src: "/images/bike-rental-nagercoil.jpg",
    alt: "Red Royal Enfield Bullet motorcycle at Rio Bike Rental in Nagercoil",
    desc: "Well-maintained Royal Enfield Bullet ready for highway tours toward Kanyakumari and Western Ghats.",
  },
];

export const STEPS = [
  {
    t: "1. Call or WhatsApp",
    d: "Contact us directly at +91 97900 76737 with your travel dates, pickup time, and choice of vehicle (Scooter, Bike, or Bullet).",
  },
  {
    t: "2. Bring Original ID & Licence",
    d: "Present your original two-wheeler driving licence and a government ID (Aadhaar, Passport, or Voter ID) along with the refundable deposit.",
  },
  {
    t: "3. Quick Kottar Pickup",
    d: "Inspect your chosen vehicle with us at our Kottar shop opposite Railway Road (2 mins from Nagercoil Junction Station) and collect helmets.",
  },
  {
    t: "4. Ride & Return Smoothly",
    d: "Enjoy exploring Kanyakumari district at your own schedule. Return the vehicle at the agreed time with starting fuel level.",
  },
];

export const PLACES = [
  {
    id: "kanyakumari",
    n: "Kanyakumari (Sunrise & Sunset Point)",
    k: "20 km",
    t: "35-40 min ride",
    route: "Via NH-66 highway (Smooth 4-lane stretch)",
    d: "India's southernmost tip where the Arabian Sea, Indian Ocean, and Bay of Bengal converge. Visit Vivekananda Rock Memorial, Thiruvalluvar 133-ft Statue, and Gandhi Mandapam.",
    tip: "A scooter or Bullet is the fastest way to avoid car parking bottlenecks near the ferry jetty.",
    bestTime: "Early morning 5:30 AM for sunrise, or 4:30 PM for sunset",
  },
  {
    id: "suchindram",
    n: "Suchindram Thanumalayan Temple",
    k: "12 km",
    t: "20 min ride",
    route: "Via Kanyakumari Road",
    d: "Renowned 17th-century architectural masterpiece dedicated to the Trinity (Shiva, Vishnu, Brahma). Renowned for its 18-foot monolithic Hanuman statue, musical stone pillars, and intricate Gopuram.",
    tip: "Strict traditional dress code applies inside the temple premises.",
    bestTime: "Morning 6:00 AM – 11:30 AM or Evening 5:00 PM – 8:00 PM",
  },
  {
    id: "muttom",
    n: "Muttom Beach & Historic Lighthouse",
    k: "30 km",
    t: "45 min ride",
    route: "Via Asambu Road & Coastal corridor",
    d: "Picturesque rocky coastline featuring a 100-year-old British-era lighthouse, secluded sunset viewpoints, and dramatic waves crashing against rocky cliffs.",
    tip: "Scenic coastal highway with refreshing sea breeze, ideal for an afternoon motorcycle ride.",
    bestTime: "Late afternoon 4:00 PM – 6:30 PM",
  },
  {
    id: "thirparappu",
    n: "Thirparappu Waterfalls",
    k: "40 km",
    t: "1 hr ride",
    route: "Via Kulasekharam road through rubber plantations",
    d: "Majestic 50-foot cascading falls fed by the Kodayar River, surrounded by lush Western Ghats greenery, bathing pools, and an ancient Shiva temple.",
    tip: "Safe freshwater bathing facilities available. Scenic mountain roads with enjoyable twists for riders.",
    bestTime: "Morning 8:00 AM – 2:00 PM",
  },
  {
    id: "padmanabhapuram",
    n: "Padmanabhapuram Palace",
    k: "16 km",
    t: "30 min ride",
    route: "Via Thuckalay highway",
    d: "Magnificent 16th-century wooden palace built in traditional Kerala-Travancore architectural grandeur with carved wooden ceilings, antique weapons, and royal courtyards.",
    tip: "Closed on Mondays. Park near the main palace entrance.",
    bestTime: "9:00 AM – 4:00 PM",
  },
];

export const FAQ = [
  {
    q: "Where can I rent a bike in Nagercoil?",
    a: "You can rent a bike or scooter directly from Rio Bike Rental, located at Muppidari Amman Kovil, Cholavar St, opposite Railway Road, Kottar, Nagercoil, Tamil Nadu 629002. We are located right opposite Railway Road, a short ride from Nagercoil Junction Railway Station.",
  },
  {
    q: "What documents are required to rent a two-wheeler?",
    a: "You will need: 1) A valid original Indian Driving Licence (with two-wheeler endorsement) or an International Driving Permit for foreign tourists. 2) Original Government ID proof (Aadhaar card, Passport, or Voter ID). 3) A refundable security deposit as agreed at booking.",
  },
  {
    q: "Do you provide scooter (Activa) rentals in Nagercoil?",
    a: "Yes! We maintain automatic scooters like Honda Activa that are easy to ride, lightweight, and fuel-efficient. They are the most popular choice for couples, solo travelers, and city sightseeing in Nagercoil.",
  },
  {
    q: "Can I rent a Royal Enfield Bullet for a Kanyakumari trip?",
    a: "Yes. We have Royal Enfield Bullet and cruiser motorcycles available for highway touring and Kanyakumari trips. Kanyakumari is approximately 20 km from our Kottar shop along the smooth NH-66 highway.",
  },
  {
    q: "What rental durations are available?",
    a: "We offer flexible rental packages: 24-hour daily rentals, weekend rentals, weekly rentals, and customized long-term rental plans for tourists and working professionals.",
  },
  {
    q: "Is Rio Bike Rental close to Nagercoil Railway Station?",
    a: "Yes. Our shop in Kottar is located right opposite Railway Road, just 2-3 minutes from Nagercoil Junction (NCJ) Railway Station. You can walk or take a quick auto-rickshaw straight to our shop upon arrival.",
  },
  {
    q: "Can I take a rental bike to Suchindram and Thirparappu?",
    a: "Yes. All our rental two-wheelers are well-maintained and permitted for travel across Kanyakumari district, including Suchindram (12 km), Muttom Beach (30 km), Padmanabhapuram (16 km), and Thirparappu Falls (40 km).",
  },
  {
    q: "How do I book a bike or check current rates?",
    a: "Call us directly at +91 97900 76737, or send a WhatsApp message with your travel dates and required vehicle. We confirm availability immediately with transparent pricing.",
  },
  {
    q: "What are Rio Bike Rental's opening hours? Is pickup available 24 hours?",
    a: "Yes! Rio Bike Rental is open 24 hours (24/7 round-the-clock). We provide 24-hour vehicle handover and drop-off, making it effortless for passengers arriving on early morning or late night trains at Nagercoil Junction Railway Station (NCJ). Simply call or WhatsApp +91 97900 76737.",
  },
];

export const STATIC_PAGES = [
  {
    slug: "/",
    navLabel: "All Rentals",
    title: "Bike Rental in Nagercoil | Rio Bike Rental, Kottar",
    description: "Rio Bike Rental in Kottar, Nagercoil offers reliable bike, scooter (Activa), and Royal Enfield Bullet rentals. Affordable daily & weekly rates, easy pickup near Railway Road and Nagercoil Junction. Call +91 97900 76737.",
    h1: "Bike Rental in Nagercoil",
    subtitle: "Reliable Scooter & Motorcycle Rentals in Kottar",
    intro: "Rent automatic Honda Activa scooters, fuel-efficient commuter bikes, and Royal Enfield Bullets directly from Rio Bike Rental. Located at Muppidari Amman Kovil, Cholavar St, opposite Railway Road in Kottar—just 2 minutes from Nagercoil Junction Railway Station. Transparent rates, zero middleman charges, open 24 hours with instant vehicle pickup.",
    badge: "Open 24 Hours • Kottar Storefront",
  },
  {
    slug: "/scooter-rental-nagercoil",
    navLabel: "Scooter Rental",
    title: "Scooter Rental in Nagercoil | Honda Activa Hire | Rio Bike Rental",
    description: "Rent Honda Activa scooters in Nagercoil with Rio Bike Rental, Kottar. Fuel-efficient automatic scooty hire for local travel, sightseeing, and couples. Call +91 97900 76737.",
    h1: "Scooter Rental in Nagercoil",
    subtitle: "Automatic Honda Activa & Gearless Scooty Hire in Kottar",
    intro: "Looking for an automatic scooter rental in Nagercoil? Our fleet of genuine Honda Activas is lightweight, fuel-efficient (45-50 km/l), and exceptionally easy to maneuver through Nagercoil city streets and Kottar markets. Open 24 hours with complimentary ISI-marked helmets and instant paperwork included.",
    badge: "24/7 Available for City & Couples",
  },
  {
    slug: "/bullet-rental-nagercoil",
    navLabel: "Royal Enfield Bullet",
    title: "Royal Enfield Bullet Rental in Nagercoil | 350cc Cruiser Hire",
    description: "Rent 350cc Royal Enfield Bullet motorcycles in Nagercoil with Rio Bike Rental, Kottar. Perfect for Kanyakumari coastal road trips and Western Ghats. Call +91 97900 76737.",
    h1: "Royal Enfield Bullet Rental in Nagercoil",
    subtitle: "350cc Highway Cruisers for Kanyakumari Coastal Rides",
    intro: "Experience the ultimate freedom on the road with a Royal Enfield Bullet 350cc rental in Nagercoil. Featuring signature exhaust thump, high-torque highway cruising, dual-channel ABS, and comfortable touring saddles. 24-hour pickup available for early 5:00 AM Kanyakumari sunrise runs.",
    badge: "24/7 Highway Cruiser Choice",
  },
  {
    slug: "/bike-rental-nagercoil",
    navLabel: "Motorcycle Rental",
    title: "Motorcycle & Bike Rental in Nagercoil | Rio Bike Rental Kottar",
    description: "Rent reliable commuter motorcycles in Nagercoil from Rio Bike Rental. 110cc to 150cc bikes delivering 55-65 km/l for work travel, daily commuting, and budget exploration. Call +91 97900 76737.",
    h1: "Motorcycle & Bike Rental in Nagercoil",
    subtitle: "Affordable Geared Commuter Bikes for Daily & Weekly Hire",
    intro: "Need a durable, high-mileage geared motorcycle in Nagercoil? Our commuter fleet (110cc–150cc) delivers 55–65 km/litre, making it the most cost-effective way to travel for field work, business trips, or long-distance exploration across Kanyakumari district. Open 24 hours daily.",
    badge: "24 Hours Service • 55-65 km/l",
  },
  {
    slug: "/bike-rental-near-nagercoil-railway-station",
    navLabel: "Near Railway Station",
    title: "Bike Rental Near Nagercoil Railway Station (NCJ) | Rio Bike Rental",
    description: "Fast two wheeler bike and scooter rental near Nagercoil Junction Railway Station. Shop located opposite Railway Road in Kottar (2 mins walk/ride). Call +91 97900 76737.",
    h1: "Bike Rental Near Nagercoil Railway Station",
    subtitle: "Fast Walk-in Pickup Just 2 Minutes from Nagercoil Junction (NCJ)",
    intro: "Arriving by train at Nagercoil Junction (NCJ)? Rio Bike Rental is open 24 hours and located right opposite Railway Road in Kottar, barely 2 minutes from the station exit. Whether your train arrives at 4:00 AM or midnight, walk or take a 1-minute auto straight to our shop, collect your vehicle, and hit the road.",
    badge: "24/7 Pickup • 2 Mins from Station",
  },
  {
    slug: "/kanyakumari-bike-rental",
    navLabel: "Kanyakumari Trip",
    title: "Bike Rental for Kanyakumari Trip from Nagercoil | Rio Bike Rental",
    description: "Rent Royal Enfield Bullets and bikes for your Kanyakumari road trip from Rio Bike Rental, Kottar. Easy 20 km ride via NH-66. Call +91 97900 76737.",
    h1: "Bike Rental for Kanyakumari Trip",
    subtitle: "Two-Wheeler Hire from Nagercoil for Sunrise & Sunset Tours",
    intro: "Planning a road trip to Kanyakumari? Nagercoil is just 20 km away along the smooth 4-lane NH-66 highway. With our 24-hour service, rent a two-wheeler from Rio Bike Rental in Kottar as early as 4:30 AM to catch the magical sunrise, avoid tourist car parking jams, and explore Vivekanandar Rock with ease.",
    badge: "24/7 Sunrise & Sunset Tours",
  },
  {
    slug: "/kottar-bike-rental",
    navLabel: "Kottar Location",
    title: "Bike Rental in Kottar Nagercoil | Near Railway Road | Rio Bike Rental",
    description: "Two wheeler bike and scooter rental in Kottar, Nagercoil near Railway Road and Muppidari Amman Kovil. Instant walk-in pickup. Call +91 97900 76737.",
    h1: "Bike Rental in Kottar, Nagercoil",
    subtitle: "Convenient Two-Wheeler Rental Opposite Railway Road",
    intro: "Rio Bike Rental is proudly based in the historic neighborhood of Kottar, Nagercoil. Located at Muppidari Amman Kovil, Cholavar St, opposite Railway Road. Open 24 hours daily with round-the-clock pickup and drop for instant, hassle-free scooter and bike rentals.",
    badge: "Open 24 Hours • Kottar",
  },
  {
    slug: "/places-to-visit-from-nagercoil",
    navLabel: "Sightseeing Guide",
    title: "Places to Visit from Nagercoil by Bike | Local Travel Guide",
    description: "Explore Suchindram, Kanyakumari, Muttom Beach, and Thirparappu Falls by rental bike or scooter from Rio Bike Rental, Kottar, Nagercoil.",
    h1: "Places to Visit from Nagercoil by Bike",
    subtitle: "Complete Two-Wheeler Sightseeing Guide for Kanyakumari District",
    intro: "With a rental bike or scooter from Rio Bike Rental in Kottar, the entirety of Kanyakumari district is yours to explore: Suchindram Temple (12 km), Kanyakumari Cape (20 km), Padmanabhapuram Palace (16 km), Muttom Beach Lighthouse (30 km), and Thirparappu Falls (40 km).",
    badge: "Kanyakumari Tourist Routes",
  },
];
