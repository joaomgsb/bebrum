export function ContactHero() {
  return (
    <section className="relative h-[60vh] flex items-center pt-20">
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Entre em Contato
        </h1>
        <p className="text-xl md:text-2xl font-open-sans max-w-2xl mx-auto">
          Estamos aqui para atender você
        </p>
      </div>
    </section>
  )
}