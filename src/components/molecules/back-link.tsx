import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BackLink() {
  return (
    <div className="mb-6">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        aria-label="Voltar para a busca"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>
    </div>
  )
}