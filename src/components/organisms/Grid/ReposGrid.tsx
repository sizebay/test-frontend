import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RepoCard } from "../Card/RepoCard/RepoCard"
import { Skeleton } from "../../atoms/Skeleton/Skeleton"
import { Card } from "@/components/ui/card"

export interface Repo {
    id: number
    name: string
    description: string | null
    language: string | null
    owner: {
        login: string
    }
    isStarred?: boolean // novo
}

interface ReposGridProps {
    repos: Repo[]
    isLoading: boolean
    isFetchingNextPage: boolean
    loadMoreRef?: React.RefObject<HTMLDivElement | null>
    onToggleStar?: (owner: string, repoName: string, isCurrentlyStarred: boolean) => void
}

export function ReposGrid({
    repos,
    isLoading,
    isFetchingNextPage,
    loadMoreRef,
    onToggleStar,
}: ReposGridProps) {
    return (
        <div className="overflow-y-auto flex-1 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 hide-scrollbar">
            <AnimatePresence>
                {repos.map((repo) => (
                    <motion.div
                        key={repo.id}
                        initial={{ opacity: 0, scale: 0.8, scaleY: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, scaleY: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, scaleY: 0, y: 20 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.05,
                            ease: "easeOut",
                        }}
                    >
                        <RepoCard
                            id={repo.id}
                            name={repo.name}
                            description={repo.description}
                            language={repo.language}
                            ownerLogin={repo.owner.login}
                            isStarred={repo.isStarred}
                            onToggleStar={onToggleStar}
                        />
                    </motion.div>
                ))}

                {(isLoading || isFetchingNextPage) &&
                    [...Array(6)].map((_, i) => (
                        <motion.div
                            key={"skeleton-" + i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Card className="bg-white/10 rounded-lg shadow-md border border-white/20 p-4 space-y-4 min-h-[14rem]">
                                <Skeleton className="h-5 w-3/4 rounded-md" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-full rounded-md" />
                                    <Skeleton className="h-4 w-5/6 rounded-md" />
                                    <Skeleton className="h-4 w-2/3 rounded-md" />
                                </div>
                                <Skeleton className="h-3 w-1/2 rounded-md mt-auto" />
                            </Card>
                        </motion.div>
                    ))}
            </AnimatePresence>
            {loadMoreRef && <div ref={loadMoreRef} style={{ height: "1px", width: "100%" }} />}
        </div>
    )
}
