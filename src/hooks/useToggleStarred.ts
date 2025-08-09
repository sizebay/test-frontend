import { starRepository, unstarRepository } from "@/services/github/fetchStars"

export function useToggleStarred() {

    async function star(owner: string, repo: string) {
        try {
            await starRepository(owner, repo)
            return true
        } catch (error) {
            console.error("Erro ao dar estrela", error)
            return false
        }
    }

    async function unstar(owner: string, repo: string) {
        try {
            await unstarRepository(owner, repo)
            return true
        } catch (error) {
            console.error("Erro ao remover estrela", error)
            return false
        }
    }

    return { star, unstar }
}

