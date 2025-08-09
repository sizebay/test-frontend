"use client"
import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { RepoStats } from "../../../molecules/RepoStats/RepoStats"
import { RepoDates } from "../../../molecules/RepoDates/RepoDates"
import Link from "next/link"

interface RepoDetailsCardProps {
    fullName: string
    description: string | null
    stars: number
    forks: number
    issues: number
    language: string | null
    createdAt: string
    updatedAt: string
    htmlUrl: string
}

export function RepoDetailsCard({
    fullName,
    description,
    stars,
    forks,
    issues,
    language,
    createdAt,
    updatedAt,
    htmlUrl,
}: RepoDetailsCardProps) {
    return (
        <Card className="relative z-20 w-full max-w-3xl bg-white/10 border border-white/20 shadow-lg rounded-lg backdrop-blur-md p-6">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-white space-y-6"
            >
                <CardHeader className="flex flex-col gap-1 break-words">
                    <CardTitle className="text-3xl font-bold break-words">
                        {fullName}
                    </CardTitle>
                    <p className="text-gray-300 break-words whitespace-normal">
                        {description || "Sem descrição"}
                    </p>
                </CardHeader>


                <CardContent className="space-y-4">
                    <RepoStats stars={stars} forks={forks} issues={issues} language={language} />

                    <RepoDates createdAt={createdAt} updatedAt={updatedAt} />

                    <Link
                        href={htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        Ver no GitHub
                    </Link>
                </CardContent>
            </motion.div>
        </Card>
    )
}
