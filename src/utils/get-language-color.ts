export function getLanguageColor(language: string | null) {
  const colors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3776ab",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    HTML: "#e34c26",
    CSS: "#1572b6",
    Vue: "#4fc08d",
    React: "#61dafb",
    Go: "#00add8",
    Rust: "#dea584",
    PHP: "#777bb4",
    Ruby: "#701516",
    Swift: "#fa7343",
    Kotlin: "#a97bff",
  };
  return colors[language || ""] || "#8b949e";
}
