"use client"

import { useParams } from "next/navigation"
import { useGithubRepoDetails } from "@/hooks/useGithubRepoDetails"
import { RepoDetailsTemplate } from "@/components/templates/RepoDetailsTemplate"

export default function RepoDetailsPage() {
    const { owner, repo } = useParams() as { owner: string; repo: string }
    const { data, isLoading, error } = useGithubRepoDetails(owner, repo)

    return <RepoDetailsTemplate isLoading={isLoading} error={error as Error | null} data={data} />
}
