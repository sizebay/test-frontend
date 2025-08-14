import type { GitHubUser, Repositorio } from '@/types/github'

//Função para mapear o retorno da API do Github
function mapearRepositorio(repo: any): Repositorio {
  return {
    id: repo.id,
    nome: repo.name, 
    descricao: repo.description,
    num_estrelas: repo.stargazers_count,
    num_forks: repo.forks_count,
    edicoes_abertas: repo.open_issues_count,
    linguagem: repo.language,
    data_criacao: repo.created_at,
    ultima_atualizacao: repo.updated_at,
    link_repositorio: repo.html_url,
    usuario: {
      login: repo.owner?.login ?? '',
      avatar_url: repo.owner.avatar_url,
    },
  }
}

//Função que busca a lista dos repositórios de um usuário
export async function fetchUserRepos(username: string, page=1, perPage=12) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`);
  if (!response.ok) throw new Error('Falha ao buscar repositórios');

  const data = await response.json()
  return (data as any[]).map(mapearRepositorio)
}

export async function fetchRepoDetails(owner: string, repo: string) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!response.ok) throw new Error('Falha ao buscar detalhes do repositório');
  
  const data = await response.json()
  return mapearRepositorio(data)
}

export async function fetchUser(owner: string): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${owner}`);
  if (!res.ok) throw new Error("Falha ao buscar usuário");
  return res.json();
}
