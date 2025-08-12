export default function Footer() {
  return (
    <footer className="w-full border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex justify-between flex-wrap gap-2">
        <p>&copy; {new Date().getFullYear()} Pesquisa Github</p>
        <p>Construído com Next.js e NUQS</p>
      </div>
    </footer>
  )
}
