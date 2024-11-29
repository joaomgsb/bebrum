import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Tradição em Cerveja Artesanal
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-open-sans max-w-2xl mx-auto">
          Descubra o sabor único das nossas cervejas artesanais, produzidas com paixão e ingredientes selecionados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/cervejas">Conheça Nossas Cervejas</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Link href="/sobre">Nossa História</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}