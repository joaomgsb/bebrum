import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  variant?: "default" // A propriedade `variant` é mantida, mas só suporta "default"
}

export function Logo({ variant = "default" }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png" // Caminho para a imagem dentro da pasta `public/images`
        alt="BEBRUM Logo"
        width={100} // Ajuste o tamanho conforme necessário
        height={100} // Ajuste o tamanho conforme necessário
        className="transition-transform duration-200 hover:scale-105" // Animação opcional no hover
        priority // Carrega o logotipo com prioridade
      />
    </Link>
  )
}
