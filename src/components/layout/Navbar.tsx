'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../../app/icon2.png'; // sem chaves

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#4A3426] bg-[#1A140F]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 text-[#E3B873]">
          <Image
            src={logo}
            alt="Logo"
            width={30} 
            height={30}
            className="rounded"
          />
          <span className="font-semibold">RepoList</span>
        </Link>

        {/* Redes sociais (desktop) */}
        <div className="hidden items-center gap-4 md:flex text-[#E3B873]/80">
          <Link href="https://github.com" target="_blank" className="hover:text-[#E3B873]">
            <FaGithub size={20} />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" className="hover:text-[#E3B873]">
            <FaLinkedin size={20} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" className="hover:text-[#E3B873]">
            <FaInstagram size={20} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="inline-flex items-center rounded-lg p-2 text-[#E3B873] md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#4A3426] bg-[#1A140F] md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            <li className="flex gap-4 px-3 py-2 text-[#E3B873]/80">
              <Link href="https://github.com" target="_blank" onClick={() => setOpen(false)}>
                <FaGithub size={20} />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" onClick={() => setOpen(false)}>
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" onClick={() => setOpen(false)}>
                <FaInstagram size={20} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
