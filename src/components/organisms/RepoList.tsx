'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import useUserRepo from '@/hooks/useUserRepo';
import RepoCard from '@/components/molecules/RepoCard';
import RepoCardSkeleton from '@/components/molecules/RepoCardSkeleton';
import Button from '@/components/atoms/Button';

type Props = {
  username: string;
  perPage?: number;
};

export default function RepoList({ username, perPage = 12 }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const page = useMemo(() => {
    const p = Number(params.get('page') ?? '1');
    return Number.isFinite(p) && p > 0 ? p : 1;
  }, [params]);

  // mantém ?q= na URL
  const q = params.get('q') ?? username;

  const {
    data: repos = [],
    isLoading,
    isError,
    error,
    isFetching,
  } = useUserRepo(username, page, perPage);

  if (!username) return <p className="text-[#E3B873]">Insira um usuário para começar.</p>;

  const pushWithParams = (nextPage: number) => {
    const usp = new URLSearchParams(params.toString());
    usp.set('q', q);
    usp.set('page', String(nextPage));
    router.push(`?${usp.toString()}`);
  };

  const hasPrev = page > 1 && !isLoading;
  // Heurística: API não retorna total — habilita próxima se a página veio cheia
  const hasNext = repos.length === perPage && !isLoading;

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: perPage }).map((_, i) => (
          <RepoCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) return <p className="text-rose-300">Erro: {(error as Error)?.message ?? 'Falha ao listar repositórios.'}</p>;
  if (repos.length === 0) return <p className="text-[#E3B873]">Nenhum repositório encontrado.</p>;

  return (
    <section className="space-y-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((r) => (
          <RepoCard key={r.id} repo={r} showOwner={false} />
        ))}
        {isFetching &&
          Array.from({ length: Math.max(0, perPage - repos.length) }).map((_, i) => (
            <RepoCardSkeleton key={`fetch-${i}`} />
          ))}
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button onClick={() => pushWithParams(page - 1)} disabled={!hasPrev}>
          <FaArrowLeft /> Anterior
        </Button>

        <span className="min-w-28 text-center text-white text-sm font-semibold">
          Página <strong>{page}</strong>
          {isFetching && <span className="ml-2 animate-pulse opacity-70">Atualizando…</span>}
        </span>

        <Button onClick={() => pushWithParams(page + 1)} disabled={!hasNext}>
          Próxima <FaArrowRight />
        </Button>
      </div>
    </section>
  );
}