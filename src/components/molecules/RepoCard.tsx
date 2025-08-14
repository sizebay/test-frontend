import type { Repositorio } from '@/types/github'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { FaArrowRight, FaCode, FaUser } from 'react-icons/fa'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { LanguageIcon } from '../atoms/LanguageIcon'
import Image from 'next/image'

export default function RepoCard({ repo, ownerRepoCount,
  showOwner = true, }: {
    repo: Repositorio, ownerRepoCount?: number
    showOwner?: boolean
  }) {
  return (
    <Link
      href={`/${repo.usuario.login}/${encodeURIComponent(repo.nome)}`}>
      <div className=" flex flex-col h-full h-48 rounded-2xl border bg-[#2A2118] border-[#4A3426]  text-[#E3B873] p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div className="bg-[#2A2118]">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-white"><RiGitRepositoryFill /> {repo.nome}</h3>
          <p className="text-sm mt-2 text-[#C9A77A] line-clamp-3">{repo.descricao ?? 'Sem descrição'}</p>

          <div className="mt-auto">
            <div className="mt-8 text-sm flex items-center gap-2">
              {/* <FaCode /> */}

              <LanguageIcon language={repo.linguagem} size="text-2xl" />
              <span> {repo.linguagem ?? '—'}</span>
            </div>

          {showOwner && (
            <div className="mt-3 text-sm flex items-center gap-2">
              {repo.usuario?.avatar_url && (
                <Image
                  src={repo.usuario.avatar_url}
                  alt={repo.usuario.login}
                  width={30}
                  height={20}
                  className="rounded-full"
                />
              )}
              {repo.usuario?.login || '-'}
                {typeof ownerRepoCount === 'number' && (
                <span className="ml-2 rounded-full bg-white/5 px-2 py-0.5 text-xs ring-1 ring-white/10">
                  {ownerRepoCount} repos
                </span>
              )}
            </div>
             )}
          </div>
          
          {/* <Link className="mt-3 inline-block underline" href={`/${repo.usuario.login}/${repo.nome}`}> Detalhes </Link> */}
          {/* <Link className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 mt-2"
          href={`/${repo.usuario.login}/${encodeURIComponent(repo.nome)}`}>Detalhes <FaArrowRight /></Link> */}
        </div>
      </div>
    </Link>
  )
}