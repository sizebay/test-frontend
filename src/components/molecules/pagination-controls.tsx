"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import ButtonAtom from "../atoms/button-atom"

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
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <ButtonAtom
        variant="outline"
        size="sm"
        onClick={onPrevPage}
        disabled={!hasPrevPage || isLoading}
        className="flex items-center gap-1"
      >
        <ChevronLeft className="h-4 w-4" />
        Anterior
      </ButtonAtom>
      
      <span className="text-sm text-muted-foreground min-w-[80px] text-center">
        Página {currentPage}
      </span>
      
      <ButtonAtom
        variant="outline"
        size="sm"
        onClick={onNextPage}
        disabled={!hasNextPage || isLoading}
        className="flex items-center gap-1"
      >
        Próximo
        <ChevronRight className="h-4 w-4" />
      </ButtonAtom>
    </div>
  )
}