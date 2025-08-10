import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full text-gray-300">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold text-white">
                Sizebay
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Construindo soluções digitais de alto impacto para o
                seu negócio.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Navegação
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/">Início</Link>
                </li>

                <li>
                  <Link href="/search-repositories">
                    Repositórios
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Contato
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Email: ncls.braga19@gmail.com</li>
                <li>Telefone: (92) 98202-7275</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            &copy; 2025 Sizebay. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
