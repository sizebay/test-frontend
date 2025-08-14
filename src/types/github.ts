export type Repositorio = {
    id: number,
    nome: string,
    descricao: string,
    num_estrelas: number,
    num_forks: number,
    edicoes_abertas: number,
    linguagem: string,
    data_criacao: string,
    ultima_atualizacao: string,
    link_repositorio: string,
    usuario: {
        login: string,
        avatar_url: string;
    }
}

export type GitHubUser = {
    avatar_url: string;
    login: string;
    name: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    location?: string | null;
    company?: string | null;
    blog?: string | null;
};