import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function EventsBooking() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Calendar className="w-16 h-16 mx-auto mb-8" />
        <h2 className="text-3xl font-bold mb-6">
          Quer Organizar um Evento?
        </h2>
        <p className="text-lg font-open-sans max-w-2xl mx-auto mb-8">
          A Cervejaria Bebrum é o lugar perfeito para seus eventos corporativos, 
          aniversários, confraternizações e encontros especiais.
        </p>
        <Button 
          variant="secondary" 
          size="lg"
          className="bg-white text-primary hover:bg-gray-100"
        >
          Solicitar Orçamento
        </Button>
      </div>
    </section>
  )
}