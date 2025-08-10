"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBoxProps {
  initialValue?: string;
}

export const SearchBox = ({ initialValue = "" }: SearchBoxProps) => {
  const [username, setUsername] = useState(initialValue);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(
        `/search-repositories?username=${encodeURIComponent(
          username.trim()
        )}`
      );
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-md gap-2"
    >
      <Input
        type="text"
        placeholder="Digite o nome do usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-1"
      />
      <Button>Buscar</Button>
    </form>
  );
};
