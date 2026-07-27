export const business = {
  name: "Shree Anand Mithai Bhandar",
  shortName: "Shree Anand",
  tagline: "Gaya's house of pure-ghee mithai since 1962",
  phoneDisplay: "+91 98350 41276",
  phone: "+919835041276",
  whatsapp: "919835041276",
  email: "hello@shreeanandmithai.in",
  street: "Tekari Road, near Vishnupad Mandir",
  city: "Gaya",
  state: "Bihar",
  postalCode: "823001",
  country: "IN",
  hours: "Open daily · 7:00 AM – 10:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Vishnupad%20Mandir%2C%20Gaya%2C%20Bihar%20823001&output=embed",
  mapLink:
    "https://www.google.com/maps/dir/?api=1&destination=Vishnupad+Mandir,Gaya,Bihar+823001",
  geo: { lat: 24.7466, lng: 85.0093 },
  social: {
    instagram: "https://instagram.com/shreeanandmithai",
    facebook: "https://facebook.com/shreeanandmithai",
    youtube: "https://youtube.com/@shreeanandmithai",
  },
};

export const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  "Hello Shree Anand Mithai Bhandar, I'd like to place a sweets order.",
)}`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: business.name,
  description:
    "Traditional Bihari sweet shop in Gaya crafting pure desi-ghee mithai, tilkut, anarsa and festive gift boxes since 1962.",
  telephone: business.phoneDisplay,
  email: business.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "22:00",
    },
  ],
  sameAs: [business.social.instagram, business.social.facebook, business.social.youtube],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1264",
  },
};
