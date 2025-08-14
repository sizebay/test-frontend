export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-[#1A140F] py-4 text-center text-white text-sm font-medium shadow-inner">
      <p>© {new Date().getFullYear()} — Todos os direitos reservados</p>
      <p className="mt-1 text-[#E3B873]">Desenvolvido por Analice Moschen</p>
    </footer>
  );
}
