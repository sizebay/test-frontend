import React from 'react'
import { RepoCard } from './RepoCard'

export default {
    title: 'Organisms/RepoCard',
    component: RepoCard,
}

export const Default = () => (
    <RepoCard
        id={123}
        name="My repo"
        description="This is a description"
        language="TypeScript"
        ownerLogin="victortavares"
    />
)

export const WithoutDescription = () => (
    <RepoCard
        id={124}
        name="No description repo"
        description={null}
        language="JavaScript"
        ownerLogin="someone"
    />
)
