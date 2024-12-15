export function generateBrewerySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Brewery',
    name: 'Cervejaria Bebrum',
    description: 'Cervejaria artesanal com tradição em produzir cervejas especiais de alta qualidade.',
    url: 'https://bebrum.com.br',
    telephone: '(31) 99592-4022',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Paranaiba, 228',
      addressLocality: 'Brumadinho',
      addressRegion: 'MG',
      postalCode: '32481-156',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-20.151390',
      longitude: '-44.200760'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '14:00',
        closes: '22:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '12:00',
        closes: '22:00'
      }
    ],
    image: [
      'https://bebrum.com.br/images/brewery.jpg',
      'https://bebrum.com.br/images/beers.jpg'
    ],
    priceRange: '$$'
  }
}

export function generateBeerSchema(beer: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: beer.name,
    description: beer.description,
    image: beer.image,
    offers: {
      '@type': 'Offer',
      price: beer.price.replace('R$ ', '').replace(',', '.'),
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock'
    },
    brand: {
      '@type': 'Brand',
      name: 'Bebrum'
    }
  }
}