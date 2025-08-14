"use client";

import Image from "next/image";
import userUserProfile from "@/hooks/userUserProfile";

function NumberPill({ label, value }: { label: string; value: number }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full 
      bg-[#4A3426] px-3 py-1 text-sm text-[#E3B873] ring-1 ring-[#E3B873]/30">

      <strong className="font-semibold">{value}</strong> {label}
    </span>
  );
}

export default function UserProfileCard({ owner }: { owner: string }) {
  const { data, isLoading, isError, error } = userUserProfile(owner);

  if (isLoading) return <p className="p-4 text-[#E3B873]">Carregando perfil…</p>;

  if (isError || !data) {
    return (
      <p className="p-4 text-[#E3B873]">
        Erro: {error instanceof Error ? error.message : "Usuário não encontrado"}
      </p>
    );
  }

  return (
    <section className="w-full">
      <article className="w-full max-w-4xl mx-auto rounded-2xl border border-[#4A3426] bg-[#1A140F]/80 shadow-sm backdrop-blur p-6">
        <header className="flex items-center gap-4 mb-4">
          <Image src={data.avatar_url} alt={data.login} width={64} height={64} className="rounded-full border border-[#E3B873]" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#E3B873]">{data.name || data.login}</h2>
            <p className="text-sm opacity-80 text-[#E3B873]/70">@{data.login}</p>
          </div>
        </header>

        {data.bio && <p className="text-sm text-[#E3B873]/80 mb-4">{data.bio}</p>}

        <div className="flex flex-wrap items-center gap-2">
          <NumberPill label="repositórios" value={data.public_repos} />
          <NumberPill label="seguidores" value={data.followers} />
          <NumberPill label="seguindo" value={data.following} />
        </div>
      </article>
    </section>
  );
}
