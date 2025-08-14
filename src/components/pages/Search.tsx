'use client'

import { useEffect, useState } from 'react'
import SearchBox from '@/components/molecules/SearchBox'
import RepoList from '@/components/organisms/RepoList'
import UserProfileCard from '../organisms/UserProfileCard'
import { useRouter, useSearchParams } from 'next/navigation'
import useUserRepo from '@/hooks/useUserRepo'

export default function Search() {
  const [username, setUsername] = useState('')
  const router = useRouter();
  const params = useSearchParams();

  // Preenche o input ao entrar/voltar com ?q=
  useEffect(() => {
    const q = params.get('q') ?? '';
    setUsername(q);
  }, [params]);

  // Busca os repos do usuário atual 
  const { data: repos = [], isLoading: loadingRepos } = useUserRepo(username, 1, 30)

  // Quando o usuário envia a busca, atualiza a URL
  const handleSearch = (u: string) => {
    const q = u.trim()
    router.push(q ? `?q=${encodeURIComponent(q)}` : '?')
  }

  return (
    <main className="space-y-4">

      <SearchBox onSearch={handleSearch} />

      {username && (
        <div className="mt-6">
          <UserProfileCard owner={username} />
        </div>
      )}

      {username && <RepoList username={username} />}
     
       </main>
  )
}
