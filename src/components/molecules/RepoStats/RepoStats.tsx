"use client"
import React from "react"
import { Star, GitFork, AlertCircle, Code } from "lucide-react"
import { StatBadge } from "../../atoms/Badge/StatBadge"

interface RepoStatsProps {
    stars: number
    forks: number
    issues: number
    language: string | null
}

export function RepoStats({ stars, forks, issues, language }: RepoStatsProps) {
    return (
        <div className="flex flex-wrap gap-6 text-gray-200">
            <StatBadge
                icon={<Star className="w-5 h-5 text-yellow-400" />}
                label={`${stars} estrelas`}
                className="bg-yellow-100/50"
            />
            <StatBadge
                icon={<GitFork className="w-5 h-5 text-blue-300" />}
                label={`${forks} forks`}
                className="bg-blue-100/50"
            />
            <StatBadge
                icon={<AlertCircle className="w-5 h-5 text-red-400" />}
                label={`${issues} issues abertas`}
                className="bg-red-100/50"
            />
            <StatBadge
                icon={<Code className="w-5 h-5 text-green-300" />}
                label={language || "Não informada"}
                className="bg-green-100/50"
            />
        </div>
    )
}
