"use client"
import React, { useState, useEffect, KeyboardEvent } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useToggleStarred } from "@/hooks/useToggleStarred"


interface RepoCardProps {
    id: number
    name: string
    description: string | null
    language: string | null
    ownerLogin: string
    isStarred?: boolean
    onToggleStar?: (owner: string, repoName: string, isCurrentlyStarred: boolean) => void
}

export function RepoCard({
    id,
    name,
    description,
    language,
    ownerLogin,
    isStarred = false,
    onToggleStar,
}: RepoCardProps) {
    const [loading, setLoading] = React.useState(false)

    const handleStarClick = () => {
        if (loading) return
        setLoading(true)
        if (onToggleStar) {
            onToggleStar(ownerLogin, name, isStarred)
        }
        setLoading(false)
    }


    return (
        <Card className="bg-white/10 hover:bg-white/20 transition cursor-pointer min-h-[14rem] rounded-lg shadow-md border border-white/20 relative">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <Link
                        href={`/repositories/${ownerLogin}/${name}`}
                        className="hover:underline text-white font-semibold flex-1"
                    >
                        {name}
                    </Link>
                    <span
                        role="button"
                        tabIndex={0}
                        onClick={handleStarClick}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault()
                                handleStarClick()
                            }
                        }}
                        aria-label={isStarred ? "Remover estrela" : "Dar estrela"}
                        title={isStarred ? "Remover estrela" : "Dar estrela"}
                        className={`transition inline-flex items-center justify-center ${loading ? "cursor-wait" : "cursor-pointer"}`}
                    >
                        {isStarred ? (
                            <Star className="h-6 w-6 text-yellow-400" fill="currentColor" stroke="none" />
                        ) : (
                            <Star className="h-6 w-6 text-yellow-400" />
                        )}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-3 text-gray-300 text-sm min-h-[4.5rem]">
                    {description || "Sem descrição"}
                </p>
                <p className="text-gray-400 text-xs mt-2">
                    Linguagem: {language || "Não informada"}
                </p>
            </CardContent>
        </Card>
    )
}
