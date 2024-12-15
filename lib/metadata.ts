import { Metadata } from 'next/types'

export const siteConfig = {
  name: 'Cervejaria Bebrum',
  description: 'Descubra o sabor único das cervejas artesanais Bebrum. Tradição, qualidade e paixão em cada gole.',
  url: 'https://bebrum.com.br',
  ogImage: 'https://bebrum.com.br/og.jpg',
  links: {
    instagram: 'https://instagram.com/cervejariabebrum',
    facebook: 'https://facebook.com/cervejariabebrum',
    twitter: 'https://twitter.com/cervejariabebrum'
  }
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/favicon.ico',
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ],
      type: 'website',
      locale: 'pt_BR',
      siteName: siteConfig.name
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@cervejariabebrum'
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}