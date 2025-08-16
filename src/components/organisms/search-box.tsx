"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input, InputProps } from "../molecules";
import { Button } from "../atoms";

type SearchBoxProps = InputProps;

export function SearchBox(props: SearchBoxProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const defaultValue = searchParams.get("search")?.toString();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.delete("search");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const onSubmit = (formData: FormData) => {
    const searchTerm = formData.get("searchTerm") as string;
    handleSearch(searchTerm);
  };

  return (
    <form action={onSubmit} className="w-full">
      <div className="w-full flex flex-col lg:flex-row gap-4 items-center">
        <Input
          placeholder="Buscar"
          name="searchTerm"
          id="searchTerm"
          leftIcon={<Search />}
          defaultValue={defaultValue}
          {...props}
        />
        <Button className="w-full lg:w-fit" variant="secondary" type="submit">
          Buscar
        </Button>
        {searchParams.get("search") && (
          <Button size="icon" variant="tertiary" onClick={clearSearch}>
            <X size={16} />
          </Button>
        )}
      </div>
    </form>
  );
}
