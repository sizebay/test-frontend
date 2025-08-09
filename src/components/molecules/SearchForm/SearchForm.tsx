import React, { FormEvent } from "react";
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import { Loader2, Search } from "lucide-react";

interface SearchFormProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    loading?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

export function SearchForm({
    value,
    onChange,
    onSearch,
    loading = false,
    disabled = false,
    placeholder = "Digite o nome do usuário GitHub",
}: SearchFormProps) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!disabled && !loading) {
            onSearch();
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-3 items-center justify-center w-full max-w-md mx-auto"
        >
            <Input
                className="text-white placeholder:text-gray-300 bg-transparent border border-white/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md transition"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled || loading}
            />
            <Button
                type="submit"
                disabled={disabled || loading || !value.trim()}
                className="flex items-center gap-2"
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        Buscando...
                    </>
                ) : (
                    <>
                        <Search className="w-5 h-5" />
                        Pesquisar
                    </>
                )}
            </Button>
        </form>
    );
}
