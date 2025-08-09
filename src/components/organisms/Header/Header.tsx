"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Github, Instagram, LinkedinIcon } from 'lucide-react'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/repositories', label: 'Repositórios' },
    { href: '/contato', label: 'Contato' },
]

export const Header: React.FC = () => {
    const pathname = usePathname()

    return (
        <header className="w-full text-white fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <Link href="/" className="flex items-center space-x-2 font-bold text-lg">
                    <span className="text-white">teste</span>
                    <span className="text-blue-400">frontend</span>
                </Link>

                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition font-semibold hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold line-through' : ''
                                    }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/victor-tavares-7343061b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-400 transition"
                    >
                        <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/VictorTavaress"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-blue-400 transition"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </header>
    )
}