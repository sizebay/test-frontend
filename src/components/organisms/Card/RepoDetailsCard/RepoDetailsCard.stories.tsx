import React from 'react'
import { RepoDetailsCard } from './RepoDetailsCard'

export default {
    title: 'Organisms/RepoDetailsCard',
    component: RepoDetailsCard,
}

export const Default = () => (
    <RepoDetailsCard
        fullName="victortavares/my-repo"
        description="This is a detailed description"
        stars={150}
        forks={30}
        issues={4}
        language="TypeScript"
        createdAt="2023-01-01T00:00:00Z"
        updatedAt="2023-05-01T00:00:00Z"
        htmlUrl="https://github.com/victortavares/my-repo"
    />
)
