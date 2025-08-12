import { RepoDetails as RepoDetailsType } from '@/types/github'
import MainTemplate from '../templates/main-template'
import RepoDetails from '../organisms/repo-details'

interface RepoDetailsPageProps {
  data: RepoDetailsType
}

export default function RepoDetailsPage({ data }: RepoDetailsPageProps) {
  return (
    <MainTemplate>
      <RepoDetails data={data} />
    </MainTemplate>
  )
}