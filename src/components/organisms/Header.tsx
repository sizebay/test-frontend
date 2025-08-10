import Link from "next/link";
import { ThemeToggle } from "../atoms/ThemeToggle";

export const Header = () => {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-semibold">
              GitHub Explorer
            </Link>
            <div className="flex items-center gap-4">
              <nav className="flex items-center gap-6 text-sm">
                <Link href="/" className="hover:underline">
                  Início
                </Link>
                <Link
                  href="/search-repositories"
                  className="hover:underline"
                >
                  Repositórios
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
