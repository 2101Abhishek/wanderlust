const sampleListings = [
  {
    title: "Beachfront Villa",
    description: "A beautiful villa overlooking the beach.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 5000,
    location: "Miami",
    country: "USA"
  },
  {
    title: "Mountain Retreat",
    description: "A serene getaway in the mountains.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 3000,
    location: "Colorado",
    country: "USA"
  },
  {
    title: "Countryside Farmhouse",
    description: "A cozy farmhouse surrounded by greenery.",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 1500,
    location: "Kentucky",
    country: "USA"
  },
  {
    title: "City Loft Apartment",
    description: "Modern loft in the heart of the city.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 2500,
    location: "New York",
    country: "USA"
  },
  {
    title: "Desert Oasis",
    description: "A luxurious stay in the middle of the desert.",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 4000,
    location: "Arizona",
    country: "USA"
  },
  {
    title: "Lakeside Cabin",
    description: "A peaceful cabin beside a scenic lake.",
    image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 3200,
    location: "Minnesota",
    country: "USA"
  },
  {
    title: "Ski Chalet",
    description: "A perfect retreat for ski lovers.",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 6000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Jungle Treehouse",
    description: "A treehouse adventure in the jungle.",
    image: "https://images.unsplash.com/photo-1529973625058-a665431328fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 2700,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Historic Castle",
    description: "A royal experience in a historic castle.",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 10000,
    location: "Edinburgh",
    country: "Scotland"
  },
  {
    title: "Ocean View Penthouse",
    description: "A penthouse with breathtaking ocean views.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 9000,
    location: "Los Angeles",
    country: "USA"
  },
  {
    title: "Hillside Bungalow",
    description: "A cozy bungalow on a hillside.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 2800,
    location: "San Francisco",
    country: "USA"
  },
  {
    title: "Modern Glass House",
    description: "A stunning modern house with glass walls.",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 7500,
    location: "Seattle",
    country: "USA"
  },
  {
    title: "Luxury Yacht",
    description: "A fully equipped luxury yacht for sailing.",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 20000,
    location: "Miami",
    country: "USA"
  },
  {
    title: "Country Inn",
    description: "A traditional inn in the countryside.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 2200,
    location: "New York",
    country: "USA"
  },
  {
    title: "Urban Loft",
    description: "An urban loft in a bustling city center.",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 3500,
    location: "Chicago",
    country: "USA"
  },
  {
    title: "Eco Retreat",
    description: "A sustainable eco-friendly retreat in the forest.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 3200,
    location: "Oregon",
    country: "USA"
  },
  {
    title: "Vineyard Estate",
    description: "A private vineyard estate with luxury accommodations.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 8000,
    location: "California",
    country: "USA"
  },
  {
    title: "Private Island",
    description: "An exclusive private island escape.",
    image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 15000,
    location: "Bahamas",
    country: "Bahamas"
  },
  {
    title: "Penthouse Suite",
    description: "A luxurious penthouse with sweeping city views.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 10000,
    location: "San Francisco",
    country: "USA"
  },
  {
    title: "Luxury Mansion",
    description: "A massive mansion with all the high-end amenities.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 20000,
    location: "Los Angeles",
    country: "USA"
  },
  {
    title: "Lakefront Cottage",
    description: "A small but cozy cottage by the lake.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 2500,
    location: "Perth",
    country: "Scotland"
  },
  {
    title: "Parisian Apartment",
    description: "A charming apartment in the heart of Paris.",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 4500,
    location: "Paris",
    country: "France"
  },
  {
    title: "Tokyo Penthouse",
    description: "A modern penthouse with stunning city views.",
    image: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 8500,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Bali Beach House",
    description: "A luxurious beach house in Bali.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 6000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Santorini Villa",
    description: "A stunning villa with views of the Aegean Sea.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 12000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Swiss Chalet",
    description: "A cozy chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 7000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Sydney Harbor Apartment",
    description: "A luxurious apartment with views of the Sydney Opera House.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 9500,
    location: "Sydney",
    country: "Australia"
  },
  {
    title: "Venice Canal House",
    description: "A historic house on the canals of Venice.",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 8000,
    location: "Venice",
    country: "Italy"
  },
  {
    title: "Dubai Luxury Villa",
    description: "A luxurious villa in the heart of Dubai.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 18000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Cape Town Beach House",
    description: "A beautiful beach house in Cape Town.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 5500,
    location: "Cape Town",
    country: "South Africa"
  }
];

module.exports = { data: sampleListings };