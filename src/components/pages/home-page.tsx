import MainTemplate from "../templates/main-template"
import RepoList from "../organisms/repo-list"

export default function HomePage() {
  return (
    <MainTemplate>
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold">Ferramenta de pesquisa GitHub</h1>
          <p className="text-muted-foreground">
            Digite o username do GitHub para listar os repositórios públicos. Cache feito com fetch (Next.js) e SWR.
          </p>
        </div>
        <RepoList />
      </div>
    </MainTemplate>
  )
}
