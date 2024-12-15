export const routes = {
  home: '/',
  about: '/sobre',
  beers: '/cervejas',
  events: '/eventos',
  contact: '/contato',
  beer: (id: string) => `/cervejas/${id}`,
  event: (id: string) => `/eventos/${id}`,
} as const

export type AppRoutes = typeof routes