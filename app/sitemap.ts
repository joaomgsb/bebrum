import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/metadata'
import { beers } from '@/lib/data/beers'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/sobre',
    '/cervejas',
    '/eventos',
    '/contato',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const beerRoutes = beers.map((beer) => ({
    url: `${siteConfig.url}/cervejas/${beer.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...beerRoutes]
}