import { Beer, Leaf, Thermometer, Clock, Award } from "lucide-react"

const steps = [
  {
    icon: Leaf, // Substituímos Grain por Leaf
    title: "Seleção dos Ingredientes",
    description: "Escolhemos cuidadosamente os melhores maltes, lúpulos e leveduras."
  },
  {
    icon: Thermometer,
    title: "Mostura e Fervura",
    description: "Processo controlado para extrair os melhores sabores dos ingredientes."
  },
  {
    icon: Clock,
    title: "Fermentação",
    description: "Tempo e temperatura ideais para desenvolver aromas e sabores únicos."
  },
  {
    icon: Beer,
    title: "Maturação",
    description: "Período de descanso para aprimorar o sabor e aroma da cerveja."
  },
  {
    icon: Award,
    title: "Controle de Qualidade",
    description: "Rigorosos testes para garantir a excelência do produto final."
  }
]

export function BrewingProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nosso Processo de Fabricação
          </h2>
          <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
            Cada etapa é cuidadosamente executada para garantir a qualidade excepcional das nossas cervejas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon // Atribuímos o componente do ícone
            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="absolute -top-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm font-open-sans">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
