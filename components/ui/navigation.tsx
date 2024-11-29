"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag, Info, Beer, Calendar, Users, Instagram, MessageSquare } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Sobre Nós", href: "/sobre", icon: Info },
  { name: "Nossas Cervejas", href: "/cervejas", icon: Beer },
  { name: "Eventos", href: "/eventos", icon: Calendar },
  { name: "Contato", href: "/contato", icon: Users },
  { name: "Redes Sociais", href: "/redes-sociais", icon: Instagram },
  { name: "Feedback", href: "/feedback", icon: MessageSquare },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed inset-y-0 left-0 z-50">
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        <nav
          className={cn(
            "bg-white w-64 h-full shadow-lg transform transition-transform duration-200 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )}
        >
          <div className="p-6">
            <Link href="/" className="block mb-8">
              <Image
                src="/images/logo.png"
                alt="Bebrum Cervejaria"
                width={150}
                height={60}
                className="w-auto h-12"
              />
            </Link>

            <div className="space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <Button variant="ghost" size="icon">
          <ShoppingBag className="h-6 w-6" />
        </Button>
      </div>
    </>
  )
}