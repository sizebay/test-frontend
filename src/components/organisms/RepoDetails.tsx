'use client'

import Button from "@/components/atoms/Button";
import useRepoDetails from "@/hooks/userRepoDetails";
import Link from "next/link";
import { FaBug, FaCalendarAlt, FaCodeBranch, FaExclamationCircle, FaStar, FaSyncAlt } from "react-icons/fa";
import { LanguageIcon } from "../atoms/LanguageIcon";

export default function RepoDetails({ owner, repo }: { owner: string; repo: string }) {
    const { data, isLoading, isError, error } = useRepoDetails(owner, repo)

    if (isLoading) return <p>Carregando...</p>
    if (isError) return <p>Erro: {(error as Error).message}</p>
    if (!data) return <p>Repositório não encontrado</p>

    const formatDate = (d?: string) => {
        if (!d) return "-";
        const date = new Date(d);
        if (Number.isNaN(date.getTime())) return "-";
        return new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "medium",
            
            timeStyle: undefined,
        }).format(date);
    };

    return (
        <section className="w-full flex justify-center">
            <article className="w-full max-w-4xl  mx-auto max-w-3xl rounded-2xl border border-[#4A3426] bg-[#1A140F]/80 shadow-sm backdrop-blur p-6 sm:p-8">
                <header className="text-center space-y-2 mb-6">
                    <h2 className="text-3xl font-bold tracking-tight text-[#E3B873]">{data.nome}</h2>
                    <p className="text-white">{(data.descricao || '').trim() || 'Sem descrição'}</p>
                </header>
                <ul className="grid gap-4 sm:grid-cols-3 text-[#E3B873] text-center">
                    <li className="flex flex-col items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        {data.num_estrelas} estrelas
                    </li>
                    <li className="flex flex-col items-center gap-1">
                        <FaCodeBranch className="text-purple-300" />
                        {data.num_forks} forks
                    </li>
                    <li className="flex flex-col items-center gap-1">
                        <FaExclamationCircle className="text-rose-300" />
                        {data.edicoes_abertas} edições
                    </li>
                    <li className="flex flex-col items-center gap-1">
                        <LanguageIcon language={data.linguagem} size="text-2xl" />
                        {data.linguagem}
                    </li>
                </ul>

                <hr className="my-4 border-[#4A3426]" />

                <div className="flex flex-col sm:flex-row justify-around text-[#E3B873] text-sm gap-4">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-sky-300" />
                        <span>Criação: {formatDate(data.data_criacao)}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <FaSyncAlt className="text-amber-300" />
                        <span>Atualização: {formatDate(data.ultima_atualizacao)}</span>
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <Link href={data.link_repositorio} target="_blank">
                        <Button>Ver no GitHub</Button>
                    </Link>
                </div>
            </article>
        </section>
    )
}