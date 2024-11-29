import Link from "next/link"
import { Beer, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#8B4513] text-[#F5DEB3]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Beer className="h-8 w-8" />
              <span className="text-2xl font-bold">Bebrum</span>
            </Link>
            <p className="text-sm font-open-sans">
              Tradição em cerveja artesanal desde 2010.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-open-sans">
              <li>
                <Link href="/sobre" className="hover:text-[#DEB887] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/cervejas" className="hover:text-[#DEB887] transition-colors">
                  Nossas Cervejas
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-[#DEB887] transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#DEB887] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 font-open-sans">
              <li>Rua da Cerveja, 123</li>
              <li>São Paulo - SP</li>
              <li>Tel: (11) 1234-5678</li>
              <li>contato@bebrum.com.br</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/cervejariabebrum" target="_blank" rel="noopener noreferrer" className="hover:text-[#DEB887] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/cervejariabebrum" target="_blank" rel="noopener noreferrer" className="hover:text-[#DEB887] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/cervejariabebrum" target="_blank" rel="noopener noreferrer" className="hover:text-[#DEB887] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#DEB887]/30">
          <p className="text-center text-sm font-open-sans">
            © {new Date().getFullYear()} Cervejaria Bebrum. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}