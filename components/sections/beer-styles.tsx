import { Beer, Wheat, Flame, Leaf, Star, Coffee } from "lucide-react"

const styles = [
  {
    icon: Beer,
    name: "Cream Ale",
    description: "Cerveja leve e refrescante, perfeita para todas as ocasiões."
  },
  {
    icon: Star,
    name: "Pilsen",
    description: "Clássica cerveja tcheca com sabor equilibrado e refrescante."
  },
  {
    icon: Flame,
    name: "Red Ale",
    description: "Cerveja avermelhada com notas de caramelo e malte tostado."
  },
  {
    icon: Leaf,
    name: "Bohemian Pilsner",
    description: "Cerveja tradicional da Boêmia com maltes nobres."
  },
  {
    icon: Coffee,
    name: "Altbier",
    description: "Cerveja alemã com notas de café e chocolate."
  },
  {
    icon: Wheat,
    name: "Hefe Weiss",
    description: "Cerveja de trigo alemã com aroma de banana e cravo."
  }
]

export function BeerStyles() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Nossos Estilos</h2>
          <p className="mt-4 text-lg text-gray-600 font-open-sans">
            Conheça os diferentes estilos de cerveja que produzimos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style) => (
            <div
              key={style.name}
              className="flex flex-col items-center p-8 bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group"
            >
              <style.icon className="w-12 h-12 text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{style.name}</h3>
              <p className="text-gray-600 text-center font-open-sans">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}