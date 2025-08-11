import { fetchRepoDetails } from '@/services/github'
import RepoDetailsPage from '@/components/pages/repo-details-page'
 
export default async function Page({
  params,
}: {
  params: Promise<{ owner: string, repo: string }>
}) {
  const { owner, repo } = await params
  const data = await fetchRepoDetails(owner, repo)

  return <RepoDetailsPage data={data} />
}