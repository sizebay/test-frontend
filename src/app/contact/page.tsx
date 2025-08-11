"use client";

import { Github, LinkedinIcon } from "lucide-react";
import React from "react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-500 to-black flex items-center justify-center px-6 py-16 text-white relative">
            <div className="absolute inset-0 z-10">
                <img
                    src="/assets/download.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
                {/* Texto */}
                <section className="flex-1 max-w-lg">
                    <p className="italic text-lg mb-2">Olá, me chamo</p>
                    <h1 className="font-mono font-bold text-4xl mb-6">Victor Tavares</h1>
                    <p className="font-mono text-sm mb-4 leading-relaxed">
                        Sou formado em Design pela Católica de Santa Catarina e atuo como desenvolvedor de software há 5 anos, além de trabalhar como designer UX/UI nos últimos 2 anos. Tenho experiência com diversas ferramentas e tecnologias, sempre buscando soluções inovadoras.
                    </p>
                    <p className="font-mono text-sm mb-8 leading-relaxed">
                        Meu objetivo é ajudar sua empresa a construir  o futuro que deseja alcançar.
                    </p>

                    {/* Botões */}
                    <div className="flex gap-6">
                        <a
                            href="https://www.linkedin.com/in/victor-tavares-7343061b6/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2  bg-blue-600 hover:bg-blue-700 transition rounded px-6 py-3 font-mono font-semibold"
                        >
                            <LinkedinIcon className="w-5 h-5" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/VictorTavaress"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 flex gap-2 hover:bg-gray-900 transition rounded px-6 py-3 font-mono font-semibold"
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </a>
                    </div>
                </section>

                {/* Foto */}
                <section className="flex-1 flex justify-center md:justify-end">
                    <div className="relative">
                        <img
                            src="/assets/me.png"
                            alt="Foto de Victor Tavares"
                            className="w-md h-md object-cover rounded-full border-4 border-blue-400 shadow-lg"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
