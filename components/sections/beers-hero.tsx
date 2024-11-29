import { OptimizedImage } from "@/components/ui/optimized-image"

export function BeersHero() {
  return (
    <section className="relative h-[60vh] flex items-center pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Nossas Cervejas
        </h1>
        <p className="text-xl md:text-2xl font-open-sans max-w-2xl mx-auto">
          Descubra nossa seleção de cervejas artesanais, produzidas com paixão e ingredientes selecionados.
        </p>
      </div>
    </section>
  )
}