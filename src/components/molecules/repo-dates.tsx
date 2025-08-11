import { formatDateISO } from "@/lib/format"

interface RepoDatesProps {
  createdAt: string
  updatedAt: string
}

export default function RepoDates({ createdAt, updatedAt }: RepoDatesProps) {
  return (
    <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
      <div>
        <span className="font-medium text-foreground">Criado em: </span>
        {formatDateISO(createdAt)}
      </div>
      <div>
        <span className="font-medium text-foreground">Atualizado em: </span>
        {formatDateISO(updatedAt)}
      </div>
    </div>
  )
}