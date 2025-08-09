import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SearchBoxProps {
  initialValue?: string;
}

export const SearchBox = ({ initialValue = "" }: SearchBoxProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <form className="flex w-full items-center gap-2">
      <Input
        aria-label="GitHub username"
        placeholder="Digite o username do GitHub..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link
        className="cursor-pointer"
        href={{
          pathname: "/search-repositories",
          query: value ? { username: value } : {},
        }}
      >
        <Button>Buscar</Button>
      </Link>
    </form>
  );
};
