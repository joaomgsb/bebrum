import { BeersHero } from "@/components/sections/beers-hero"
import { BeerCatalog } from "@/components/sections/beer-catalog"
import { BeerStyles } from "@/components/sections/beer-styles"

export default function BeersPage() {
  return (
    <div className="min-h-screen">
      <BeersHero />
      <BeerStyles />
      <BeerCatalog />
    </div>
  )
}