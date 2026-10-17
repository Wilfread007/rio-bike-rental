export const BUSINESS = {
  name: "Rio Bike Rental",
  phone: "+91 97900 76737",
  tel: "tel:+919790076737",
  whatsapp: "https://wa.me/919790076737?text=Hi%20Rio%20Bike%20Rental%2C%20I%20want%20to%20rent%20a%20bike%20in%20Nagercoil",
  instagram: "https://www.instagram.com/riobikerental/",
  address: "Muppidari Amman Kovil, Cholavar St, opposite Railway Road, Kottar, Nagercoil, Tamil Nadu 629002",
  map: "https://www.google.com/maps/search/?api=1&query=Rio+Bike+Rental+Kottar+Nagercoil",
};

// Edit these to match your real fleet.
// Optional: add `photo: "/photos/scooter.jpg"` (file in /public/photos) to show a real photo instead of the drawing.
export const FLEET: { name: string; desc: string; best: string; kind: "scooter" | "bike"; color: string; photo?: string }[] = [
  { kind: "scooter", color: "#ff5a36", name: "Scooters", desc: "Easy to ride, light on fuel. Best for town, beach and temple visits.", best: "Couples and families" },
  { kind: "bike", color: "#0e9f7e", name: "Commuter bikes", desc: "Reliable everyday bikes with good mileage for longer road days.", best: "Daily travel and work" },
  { kind: "bike", color: "#0b1f3a", name: "Geared & touring bikes", desc: "Stronger bikes for highway rides toward Kanyakumari and the hills.", best: "Trips and groups" },
];

export const STEPS = [
  { t: "Call or WhatsApp", d: "Tell us your dates and the kind of bike you want." },
  { t: "Bring your documents", d: "Carry a valid driving licence and an ID proof." },
  { t: "Pick up at Kottar", d: "We are opposite Railway Road, a short ride from Nagercoil Junction." },
  { t: "Ride and return", d: "Return the bike on the agreed date with the fuel level you started with." },
];

export const PLACES = [
  { n: "Suchindram", k: "12 km", d: "Thanumalayan temple" },
  { n: "Kanyakumari", k: "20 km", d: "Sunrise point and Vivekananda Rock" },
  { n: "Muttom Beach", k: "30 km", d: "A quiet shore and lighthouse" },
  { n: "Thirparappu Falls", k: "40 km", d: "Waterfalls and a Shiva temple" },
];

export const FAQ = [
  { q: "Where can I rent a bike in Nagercoil?", a: "Rio Bike Rental is in Kottar, Nagercoil, opposite Railway Road near Muppidari Amman Kovil, Cholavar Street." },
  { q: "What documents do I need to rent a bike?", a: "A valid driving licence and a government ID. Call +91 97900 76737 to confirm before you come." },
  { q: "Can I rent a bike for one day or a week?", a: "Yes. We rent by the day, by the week and for longer stays. Call or WhatsApp for current rates." },
  { q: "Can I ride to Kanyakumari from Nagercoil?", a: "Yes. Kanyakumari is about 20 km away. Tell us your route and we will suggest the right bike." },
  { q: "How do I book?", a: "Call or WhatsApp +91 97900 76737 with your dates. We will confirm availability." },
];
