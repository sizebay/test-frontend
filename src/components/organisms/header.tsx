import Link from "next/link"
import { Github } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-medium" aria-label="Página inicial">
          <Github className="h-5 w-5" />
          <span>Pesquisa Github</span>
        </Link>
        <nav aria-label="principal" className="text-sm text-muted-foreground">
          <span className="sr-only">Navegação</span>
          <a
            href="https://github.com/jorgemadson"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground underline underline-offset-4"
          >
            Desenvolvido por Jorge Madson
          </a>
        </nav>
      </div>
    </header>
  )
}
