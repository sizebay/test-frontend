"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import ButtonAtom from "../atoms/button-atom"
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation"

type PaginationControlsProps = {
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
  onNextPage: () => void
  onPrevPage: () => void
  isLoading?: boolean
}

export default function PaginationControls({
  currentPage,
  hasNextPage,
  hasPrevPage,
  onNextPage,
  onPrevPage,
  isLoading = false
}: PaginationControlsProps) {
  useKeyboardNavigation({
    onArrowLeft: hasPrevPage && !isLoading ? onPrevPage : undefined,
    onArrowRight: hasNextPage && !isLoading ? onNextPage : undefined,
    enabled: true
  })

  return (
    <div className="space-y-2">
      <nav aria-label="Navegação de páginas" className="flex items-center justify-center gap-2 sm:gap-4 py-6 px-4">
      <ButtonAtom
        variant="outline"
        size="sm"
        onClick={onPrevPage}
        disabled={!hasPrevPage || isLoading}
        className="flex items-center gap-1 text-xs sm:text-sm px-2 sm:px-3"
        aria-label={`Ir para página anterior (página ${currentPage - 1})`}
        aria-disabled={!hasPrevPage || isLoading}
      >
        <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Anterior</span>
        <span className="sm:hidden">Ant</span>
      </ButtonAtom>
      
      <span 
        className="text-xs sm:text-sm text-muted-foreground min-w-[60px] sm:min-w-[80px] text-center"
        aria-current="page"
        aria-label={`Página atual: ${currentPage}`}
      >
        Página {currentPage}
      </span>
      
      <ButtonAtom
        variant="outline"
        size="sm"
        onClick={onNextPage}
        disabled={!hasNextPage || isLoading}
        className="flex items-center gap-1 text-xs sm:text-sm px-2 sm:px-3"
        aria-label={`Ir para próxima página (página ${currentPage + 1})`}
        aria-disabled={!hasNextPage || isLoading}
      >
        <span className="hidden sm:inline">Próximo</span>
        <span className="sm:hidden">Próx</span>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
      </ButtonAtom>
      </nav>
      <p className="text-xs text-muted-foreground text-center">
        Use as setas ← → do teclado para navegar
      </p>
    </div>
  )
}