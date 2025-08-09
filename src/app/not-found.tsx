export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Página não encontrada
        </p>
        <a href="/" className="underline hover:no-underline">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
}
