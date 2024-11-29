import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
        <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Endereço</h3>
          <p className="text-gray-600 font-open-sans">
            {CONTACT_INFO.address.street}, {CONTACT_INFO.address.number}<br />
            {CONTACT_INFO.address.neighborhood}<br />
            {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}<br />
            {CONTACT_INFO.address.zipCode}
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
        <Phone className="h-6 w-6 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Telefone</h3>
          <p className="text-gray-600 font-open-sans">
            {CONTACT_INFO.phone}
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
        <Clock className="h-6 w-6 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
          <p className="text-gray-600 font-open-sans">
            Segunda a Sexta: 14h às 22h<br />
            Sábado e Domingo: 12h às 22h
          </p>
        </div>
      </div>
    </div>
  )
}