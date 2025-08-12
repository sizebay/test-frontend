import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Search } from "lucide-react";

export function SearchInput({
  value,
  onChange,
  onSearch,
  isLoading = false,
  placeholder = "Search...",
}: {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  isLoading?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex w-full max-w-md gap-2 group">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
          className="pl-10 h-12 bg-card border-card-border focus:border-primary transition-all duration-300 hover-glow"
        />
      </div>
      <Button
        onClick={onSearch}
        disabled={!value.trim() || isLoading}
        className="h-12 px-6"
        variant="hero"
      >
        {isLoading ? (
          <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        ) : (
          "Buscar"
        )}
      </Button>
    </div>
  );
}
