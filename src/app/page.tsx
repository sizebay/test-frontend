import ButtonAtom from "@/components/atoms/button-atom";
import InputAtom from "@/components/atoms/input-atom";
import { fetchUserRepos } from "@/services/github";

export default async function Home() {

  const testUserName = "JorgeMadson";

  const repos = await fetchUserRepos(testUserName);

  return (
    <main>
      <section className="flex flex-col items-center my-10">
        <form className="flex flex-col items-center">
          <h1>Ferramenta de pesquisa github</h1>
          <InputAtom placeholder="Digite o nome do repositório" defaultValue={testUserName} />
          <ButtonAtom className="mt-4">Pesquisar</ButtonAtom>
        </form>
      </section>
      <section className="flex flex-col items-center h-96 overflow-auto">
        <h2>Repositórios</h2>
        <code>
          {repos.map(r => <p key={r.id}>{r.name}</p>)}
        </code>
      </section>
    </main>
  );
}
