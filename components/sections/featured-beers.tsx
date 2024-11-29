import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"

const featuredBeers = [
  {
    id: 1,
    name: "Pilsen Artesanal",
    description: "Cerveja leve e refrescante com notas sutis de malte",
    image: "/images/beers/pilsen.jpg",
    price: "R$ 22,90"
  },
  {
    id: 2,
    name: "IPA Tropical",
    description: "Aromática e intensa com lúpulos selecionados",
    image: "/images/beers/ipa.jpg",
    price: "R$ 24,90"
  },
  {
    id: 3,
    name: "Stout Premium",
    description: "Encorpada com notas de café e chocolate",
    image: "/images/beers/stout.jpg",
    price: "R$ 26,90"
  }
]

export function FeaturedBeers() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Cervejas em Destaque
          </h2>
          <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
            Conheça algumas das nossas cervejas mais populares, produzidas com ingredientes selecionados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBeers.map((beer) => (
            <div 
              key={beer.id} 
              className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={beer.image}
                  alt={beer.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    asChild 
                    variant="secondary"
                    className="bg-white/90 hover:bg-white text-primary transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Link href={`/cervejas/${beer.id}`}>Ver Detalhes</Link>
                  </Button>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {beer.name}
                </h3>
                <p className="text-gray-600 mb-4 font-open-sans">
                  {beer.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary transform group-hover:scale-110 transition-transform duration-300">
                    {beer.price}
                  </span>
                  <Button 
                    asChild 
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    <Link href={`/cervejas/${beer.id}`}>Saiba Mais</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <Link href="/cervejas">Ver Todas as Cervejas</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}