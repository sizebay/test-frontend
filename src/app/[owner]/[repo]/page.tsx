import { fetchRepoDetails } from '@/services/github'
import RepoDetailsPage from '@/components/pages/repo-details-page'
import type { Metadata } from 'next'
 
export async function generateMetadata({
  params,
}: {
  params: Promise<{ owner: string, repo: string }>
}): Promise<Metadata> {
  const { owner, repo } = await params
  
  try {
    const data = await fetchRepoDetails(owner, repo)
    
    return {
      title: `${data.full_name} - GitHub Repository`,
      description: data.description || `Repositório ${data.full_name} no GitHub`,
      openGraph: {
        title: `${data.full_name} - GitHub Repository`,
        description: data.description || `Repositório ${data.full_name} no GitHub`,
        type: 'website',
        locale: 'pt_BR',
        url: `https://github.com/${owner}/${repo}`,
        siteName: 'Ferramenta de pesquisa GitHub',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${data.full_name} - GitHub Repository`,
        description: data.description || `Repositório ${data.full_name} no GitHub`,
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  } catch (error) {
    return {
      title: `${owner}/${repo} - GitHub Repository`,
      description: `Repositório ${owner}/${repo} no GitHub`,
    }
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ owner: string, repo: string }>
}) {
  const { owner, repo } = await params
  const data = await fetchRepoDetails(owner, repo)

  return <RepoDetailsPage data={data} />
}