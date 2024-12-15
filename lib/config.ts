export const config = {
  site: {
    name: 'Cervejaria Bebrum',
    description: 'Tradição em cerveja artesanal desde 2010',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bebrum.com.br',
    ogImage: '/images/og.jpg',
    author: 'Cervejaria Bebrum',
    links: {
      instagram: 'https://instagram.com/cervejariabebrum',
      facebook: 'https://facebook.com/cervejariabebrum',
      twitter: 'https://twitter.com/cervejariabebrum'
    }
  },
  contact: {
    address: {
      street: 'Av. Paranaiba',
      number: '228',
      neighborhood: 'Jota',
      city: 'Brumadinho',
      state: 'MG',
      zipCode: '32481-156'
    },
    phone: '(31) 99592-4022',
    email: 'contato@bebrum.com.br'
  },
  hours: {
    weekday: {
      open: '14:00',
      close: '22:00'
    },
    weekend: {
      open: '12:00',
      close: '22:00'
    }
  }
} as const

export type Config = typeof config