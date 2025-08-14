"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { FavoritesCounter } from "@/components/atoms/FavoritesCounter";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-semibold text-lg">
              GitHub Explorer
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <nav className="flex items-center gap-6 text-sm">
                <Link
                  href="/"
                  className="hover:underline transition-colors"
                >
                  Início
                </Link>
                <Link
                  href="/search-repositories"
                  className="hover:underline transition-colors"
                >
                  Repositórios
                </Link>
                <Link
                  href="/favorites"
                  className="hover:underline flex items-center gap-1 transition-colors"
                >
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Favoritos</span>
                  <FavoritesCounter />
                </Link>
              </nav>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                href="/favorites"
                className="p-2 hover:bg-accent rounded-md transition-colors"
              >
                <Heart className="h-5 w-5" />
                <FavoritesCounter />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-background/95 backdrop-blur">
              <nav className="flex flex-col py-4 space-y-2">
                <Link
                  href="/"
                  className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="/search-repositories"
                  className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Repositórios
                </Link>
                <div className="px-4 py-2 flex items-center justify-between">
                  <span>Tema</span>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
