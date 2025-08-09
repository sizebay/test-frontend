import axios from "axios"

/**
 * Dá star em um repositório
 * @param owner Dono do repositório (ex: "octocat")
 * @param repo Nome do repositório (ex: "Hello-World")
 * @returns true se deu star com sucesso
 */
export async function starRepository(owner: string, repo: string): Promise<boolean> {
    try {
        console.log("Starring repository:", owner, repo);
        await axios.put(
            `https://api.github.com/user/starred/${owner}/${repo}`,
            null, // body vazio
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            }
        )

        return true
    } catch (error) {
        console.error(`Erro ao dar star em ${owner}/${repo}:`, error)
        return false
    }
}

/**
 * Remove o star de um repositório
 * @param owner Dono do repositório (ex: "octocat")
 * @param repo Nome do repositório (ex: "Hello-World")
 * @returns true se removeu com sucesso
 */
export async function unstarRepository(owner: string, repo: string): Promise<boolean> {
    try {
        await axios.delete(
            `https://api.github.com/user/starred/${owner}/${repo}`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            }
        )

        return true
    } catch (error) {
        console.error(`Erro ao remover star de ${owner}/${repo}:`, error)
        return false
    }
}
