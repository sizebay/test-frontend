"use client";

import React from "react";
import "devicon/devicon.min.css";

const languageIcons: Record<string, string> = {
   // Linguagens de programação muito comuns
  "JavaScript": "devicon-javascript-plain colored",
  "TypeScript": "devicon-typescript-plain colored",
  "Python": "devicon-python-plain colored",
  "Java": "devicon-java-plain colored",
  "C": "devicon-c-plain colored",
  "C++": "devicon-cplusplus-plain colored",
  "C#": "devicon-csharp-plain colored",
  "Go": "devicon-go-plain colored",
  "Rust": "devicon-rust-plain colored",
  "PHP": "devicon-php-plain colored",
  "Ruby": "devicon-ruby-plain colored",
  "Swift": "devicon-swift-plain colored",
  "Kotlin": "devicon-kotlin-plain colored",
  "Dart": "devicon-dart-plain colored",
  "Scala": "devicon-scala-plain colored",
  "Haskell": "devicon-haskell-plain colored",
  "Elixir": "devicon-elixir-plain colored",
  "Clojure": "devicon-clojure-plain colored",
  "Objective-C": "devicon-objectivec-plain colored",
  "OCaml": "devicon-ocaml-plain colored",
  "Erlang": "devicon-erlang-plain colored",
  "F#": "devicon-fsharp-plain colored",
  "R": "devicon-r-original colored",
  "Julia": "devicon-julia-plain colored",
  "Fortran": "devicon-fortran-plain colored",
  "Lua": "devicon-lua-plain colored",
  "Perl": "devicon-perl-plain colored",
  "Crystal": "devicon-crystal-original colored",
  "Zig": "devicon-zig-original colored",
  "Nim": "devicon-nim-plain colored",

  // “Linguagens”/formatos comuns no GitHub
  "HTML": "devicon-html5-plain colored",
  "HTML5": "devicon-html5-plain colored",
  "CSS": "devicon-css3-plain colored",
  "CSS3": "devicon-css3-plain colored",
  "Sass": "devicon-sass-original colored",
  "SCSS": "devicon-sass-original colored",
  "Less": "devicon-less-plain colored",

  // Script/Terminal
  "Shell": "devicon-bash-plain colored",
  "Shell Script": "devicon-bash-plain colored",
  "Bash": "devicon-bash-plain colored",
  "PowerShell": "devicon-powershell-plain colored",

  // Front-end frameworks
  "Vue": "devicon-vuejs-plain colored",
  "Vue.js": "devicon-vuejs-plain colored",
  "Svelte": "devicon-svelte-plain colored",
  "Angular": "devicon-angularjs-plain colored",
  "AngularJS": "devicon-angularjs-plain colored",
  "React": "devicon-react-original colored", // normal quando o repo é majoritariamente JSX/TSX

  // Dados, notebooks e ciência
  "Jupyter Notebook": "devicon-jupyter-plain colored",
  "MATLAB": "devicon-matlab-plain colored",

  // Infra/DevOps que podem aparecer como “linguagem”
  "Dockerfile": "devicon-docker-plain colored",
  "Docker": "devicon-docker-plain colored",
  "Makefile": "devicon-gnu-plain colored",
  "Nix": "devicon-nixos-plain colored",

  // Compiladores/Build
  "CMake": "devicon-cmake-plain colored",

  // DB/SQL
  "SQL": "devicon-postgresql-plain colored",
  "PLpgSQL": "devicon-postgresql-plain colored",
  "TSQL": "devicon-microsoftsqlserver-plain colored",
  "MySQL": "devicon-mysql-plain colored",
  "PostgreSQL": "devicon-postgresql-plain colored",
  "SQLite": "devicon-sqlite-plain colored",
  "MariaDB": "devicon-mariadb-plain colored",
  "Oracle PL/SQL": "devicon-oracle-original colored",

  "TeX": "devicon-latex-original colored",
  "LaTeX": "devicon-latex-original colored",

  // Funcionais / alternativos
  "Elm": "devicon-elm-plain colored",
  "Reason": "devicon-reason-plain colored", // ReasonML
  "NixOS": "devicon-nixos-plain colored",

  //
  "COBOL": "devicon-cobol-plain colored",
  "Pascal": "devicon-pascal-plain colored",
  "FortranFree": "devicon-fortran-plain colored",
  "Assembly": "devicon-atom-original colored",
};

type LanguageIconProps = {
    language?: string | null;
    size?: string; // ex: "text-lg" ou "text-xl"
};

export function LanguageIcon({ language, size = "text-lg" }: LanguageIconProps) {
    const iconClass = language && languageIcons[language] ?
        languageIcons[language] : "";
    return <i className={`${iconClass} ${size}`} title={language || "—"} />;
}