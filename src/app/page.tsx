import ButtonAtom from "@/components/atoms/button-atom";
import InputAtom from "@/components/atoms/input-atom";
import SearchBox from "@/components/molecules/search-box";
import RepoList from "@/components/organisms/repo-list";
import { fetchUserRepos } from "@/services/github";

export default async function Home() {

  const testUserName = "JorgeMadson";

  const repos = await fetchUserRepos(testUserName);

  return (
    <main>
      <section className="flex flex-col items-center my-10">
        <RepoList />
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
