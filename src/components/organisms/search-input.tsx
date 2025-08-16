"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input, InputProps } from "../molecules";
import { Button } from "../atoms";
import { useCallback, useState } from "react";

type SearchInputProps = InputProps;

export function SearchInput(props: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const defaultValue = searchParams.get("search")?.toString();

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, [searchTerm]);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-center">
      <Input
        placeholder="Buscar"
        leftIcon={<Search />}
        onChange={(e) => setSearchTerm(e.target.value)}
        defaultValue={defaultValue}
        {...props}
      />
      <Button
        className="w-full lg:w-fit"
        onClick={handleSearch}
        variant="secondary"
      >
        Buscar
      </Button>
    </div>
  );
}
