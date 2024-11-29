import { OptimizedImage } from "@/components/ui/optimized-image"

const pastEvents = [
  {
    title: "Festival de Verão 2023",
    image: "/images/events/past-1.jpg"
  },
  {
    title: "Oktoberfest 2023",
    image: "/images/events/past-2.jpg"
  },
  {
    title: "Workshop de Produção",
    image: "/images/events/past-3.jpg"
  },
  {
    title: "Noite de Harmonização",
    image: "/images/events/past-4.jpg"
  }
]

export function EventsGallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Galeria de Eventos
          </h2>
          <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
            Momentos memoráveis dos nossos eventos anteriores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEvents.map((event) => (
            <div
              key={event.title}
              className="group relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <OptimizedImage
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/80 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}