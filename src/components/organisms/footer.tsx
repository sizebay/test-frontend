export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/40">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} GitView. Todos os direitos reservados
          (Aplicação de avaliação Sizebay).
        </p>
      </div>
    </footer>
  );
}
