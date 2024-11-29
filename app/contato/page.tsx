import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"
import { ContactMap } from "@/components/sections/contact-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seja Nosso Parceiro
            </h2>
            <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
              Quer se tornar um distribuidor ou parceiro? Entre em contato conosco e saiba como.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}