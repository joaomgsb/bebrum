export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center bg-primary">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossa História</h1>
          <p className="text-xl md:text-2xl font-open-sans max-w-2xl mx-auto">
            Uma jornada de paixão pela cerveja artesanal
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <div className="space-y-12">
              <div className="bg-tertiary/20 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">A Descoberta</h2>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  Há alguns anos, em uma viagem de trabalho na Alemanha, tive a oportunidade de ir com amigos a uma Brauerei (cervejaria) local na cidade de Ratingen (vizinha a Düsseldorf). Ali fui apresentado àquela que se tornaria a principal responsável por me enveredar no universo cervejeiro: Uma ALTBIER! Os alemães dali diziam ser a melhor e mais antiga cerveja de toda Alemanha. No primeiro gole, um choque de sabores, um aroma caramelizado meio do café ao chocolate, um amargor forte mas equilibrado. Ali entendi que eu não entendia nada de cerveja e comecei a me apaixonar pelos sabores da, na minha opinião, a melhor escola cervejeira do mundo.
                </p>
              </div>

              <div className="bg-secondary/10 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">Os Primeiros Passos</h2>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  De volta ao Brasil e já entendendo um pouco mais de cerveja, surgiu uma oportunidade e sem pensar comprei de um amigo o meu primeiro equipamento para produzir cerveja em casa. Minha esposa me chamou de louco - "mas ela é que ficou louca com a bagunça que faz". Como não sabia nada do processo de produção, me aprofundei nos estudos para criar coragem e fazer minha primeira cerveja, marinheiro de primeira viagem gastei mais do que 12 horas para fazer meus primeiros 30 litros de mosto. Conferia tudo duas vezes antes de fazer, o cuidado extremo com a assepsia de tudo estava lá como deve ser.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">O Nascimento da Bebrum</h2>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  A primeira cerveja foi de cara uma England IPA, meu estilo favorito na época. E demorou mais 25 dias depois das 12 horas de trabalho para que os 30 litros ficassem prontos. Finalmente eu e meu sócio de brassagem Breno pudemos degustar o primeiro gole da primeira cerveja "made by myself". Sensação inigualável! Neste momento de êxtase e prazer em realizar um feito, percebi, depois de 47 anos, que havia nascido para isso: fazer cerveja e levar às pessoas momentos deliciosamente prazerosos. Ali mesmo Breno e eu começamos a especular a possibilidade de viver da cerveja, e depois de muito entusiasmo, planejamento, e esforço – "muito esforço messsmmmooo" - nasceu a Bebrum Cervejaria para trazer mais qualidade e sabor às nossas cervejas de forma Naturalmente Artesanal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {[
              {
                title: "Seleção dos Ingredientes",
                description: "Escolhemos cuidadosamente os melhores maltes, lúpulos e leveduras."
              },
              {
                title: "Mostura e Fervura",
                description: "Processo controlado para extrair os melhores sabores dos ingredientes."
              },
              {
                title: "Fermentação",
                description: "Tempo e temperatura ideais para desenvolver aromas e sabores únicos."
              },
              {
                title: "Maturação",
                description: "Período de descanso para aprimorar o sabor e aroma da cerveja."
              },
              {
                title: "Controle de Qualidade",
                description: "Rigorosos testes para garantir a excelência do produto final."
              }
            ].map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="absolute -top-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm font-open-sans">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}