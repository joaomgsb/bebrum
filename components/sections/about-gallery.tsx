import { OptimizedImage } from "@/components/ui/optimized-image"

const images = [
  {
    src: "/images/gallery/brewing-1.jpg",
    alt: "Processo de fabricação"
  },
  {
    src: "/images/gallery/brewery-2.jpg",
    alt: "Instalações da cervejaria"
  },
  {
    src: "/images/gallery/tasting-3.jpg",
    alt: "Degustação de cervejas"
  },
  {
    src: "/images/gallery/equipment-4.jpg",
    alt: "Equipamentos"
  }
]

export function AboutGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Nossa Cervejaria em Imagens
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.src}
              className="relative h-64 group overflow-hidden rounded-lg shadow-md"
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}