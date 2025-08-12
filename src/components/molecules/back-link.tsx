"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackLink() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="mb-6">
      <button 
        onClick={handleBack}
        className="inline-flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        aria-label="Voltar para a busca"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </button>
    </div>
  )
}