export function formatNumber(n: number) {
  try {
    return new Intl.NumberFormat("pt-BR").format(n)
  } catch {
    return String(n)
  }
}

export function formatDateISO(iso: string) {
  try {
    const d = new Date(iso)
    return new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium", timeZone: "UTC" }).format(d)
  } catch {
    return iso
  }
}
