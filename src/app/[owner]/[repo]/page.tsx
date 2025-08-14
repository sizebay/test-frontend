'use client'

import { useParams } from 'next/navigation'
import RepoDetails from "@/components/organisms/RepoDetails";
import UserProfileCard from '@/components/organisms/UserProfileCard';

export default function PageDetails() {
    const { owner, repo } = useParams<{ owner: string; repo: string }>()

    return (
        <main className="flex min-h-screen flex-col bg-[#332820] text-[#4A3426] py-4">
            <UserProfileCard owner={owner} />
            <RepoDetails owner={owner} repo={repo} />
        </main>
    );
}