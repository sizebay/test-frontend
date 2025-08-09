export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white">Sizebay</h2>
            <p className="mt-2 text-sm text-gray-400">
              Construindo soluções digitais de alto impacto para o seu
              negócio.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Repositórios
                </a>
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

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Siga-nos
            </h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 Sizebay. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
