"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { beers } from "@/lib/data/beers"
import { Beer, Droplet } from "lucide-react"

export function BeerCatalog() {
  const [selectedBeer, setSelectedBeer] = useState(beers[0])

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[500px] lg:h-auto rounded-lg overflow-hidden shadow-xl">
            <OptimizedImage
              src={selectedBeer.image}
              alt={selectedBeer.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{selectedBeer.name}</h2>
              <p className="text-xl text-gray-600 font-open-sans">{selectedBeer.style}</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Beer className="w-6 h-6 text-primary" />
                <div>
                  <span className="text-sm text-gray-500">Teor Alcoólico</span>
                  <p className="font-semibold">{selectedBeer.abv}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Droplet className="w-6 h-6 text-primary" />
                <div>
                  <span className="text-sm text-gray-500">IBU (Amargor)</span>
                  <p className="font-semibold">{selectedBeer.ibu}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Sobre esta cerveja</h3>
              <p className="text-gray-600 font-open-sans leading-relaxed">
                {selectedBeer.description}
              </p>
            </div>

            <div className="pt-4">
              <span className="text-2xl font-bold text-primary">{selectedBeer.price}</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {beers.map((beer) => (
              <Button
                key={beer.id}
                variant={selectedBeer.id === beer.id ? "default" : "outline"}
                className={`w-full transition-all duration-300 ${
                  selectedBeer.id === beer.id 
                    ? "bg-primary hover:bg-primary/90" 
                    : "hover:border-primary hover:text-primary"
                }`}
                onClick={() => setSelectedBeer(beer)}
              >
                {beer.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}