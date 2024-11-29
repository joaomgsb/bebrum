import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Open_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

const playfair = Playfair_Display({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })

export const metadata: Metadata = {
  title: 'Cervejaria Bebrum - Tradição em Cerveja Artesanal',
  description: 'Descubra o sabor único das cervejas artesanais Bebrum. Tradição, qualidade e paixão em cada gole.',
  keywords: 'cerveja artesanal, cervejaria, bebrum, cerveja especial, brewery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${playfair.className} ${openSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}