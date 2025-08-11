"use client"

import React from "react"
import { RepoDetailsCard } from "@/components/organisms/Card/RepoDetailsCard/RepoDetailsCard"
import { Loader2 } from "lucide-react"

interface RepoDetailsTemplateProps {
    isLoading: boolean
    error: Error | null
    data?: {
        full_name: string
        description: string | null
        stargazers_count: number
        forks_count: number
        open_issues_count: number
        language: string | null
        created_at: string
        updated_at: string
        html_url: string
    }
}

export function RepoDetailsTemplate({ isLoading, error, data }: RepoDetailsTemplateProps) {
    return (
        <div className="relative min-h-screen bg-gradient-to-r from-black via-blue-900 to-blue-600 flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
            <div className="absolute inset-0 z-10">
                <img
                    src="/assets/thumb2.jpg"
                    alt="thumb"
                    className="w-full h-full object-cover"
                />
            </div>


            {isLoading && (
                <div className="relative z-20 flex flex-col items-center justify-center py-16 text-white">
                    <Loader2 className="animate-spin w-8 h-8 mb-4" />
                    Carregando repositório...
                </div>
            )}

            {error && (
                <p className="relative z-20 text-red-400 text-center font-medium">
                    {error.message || "Erro ao carregar detalhes."}
                </p>
            )}

            {data && (
                <RepoDetailsCard
                    fullName={data.full_name}
                    description={data.description}
                    stars={data.stargazers_count}
                    forks={data.forks_count}
                    issues={data.open_issues_count}
                    language={data.language}
                    createdAt={data.created_at}
                    updatedAt={data.updated_at}
                    htmlUrl={data.html_url}
                />
            )}
        </div>
    )
}
