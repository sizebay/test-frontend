import Link from "next/link";
import { ThemeToggle } from "../atoms/ThemeToggle";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold">
          GitHub Explorer
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:underline">
              Início
            </Link>
            <Link href="/repos" className="hover:underline">
              Repositórios
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
