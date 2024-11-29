import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"

export function VisitCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1438557068880-c5f474830377?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cervejaria"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Conheça Nossa Cervejaria
        </h2>
        <p className="text-xl text-gray-200 mb-8 font-open-sans max-w-2xl mx-auto">
          Venha descobrir como produzimos nossas cervejas artesanais e degustar direto da fonte.
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
          <Link href="/visita">Agendar Visita</Link>
        </Button>
      </div>
    </section>
  )
}