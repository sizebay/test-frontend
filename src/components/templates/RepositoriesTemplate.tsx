"use client"
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { SearchForm } from "../molecules/SearchForm/SearchForm"
import { Button } from "../../components/atoms/Button/Button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../components/atoms/Select/Select"
import { ReposGrid } from "../organisms/Grid/ReposGrid"
import { useGithubRepos } from "@/hooks/useGithubRepos"
import { useQueryClient } from "@tanstack/react-query"
import { useToggleStarred } from "@/hooks/useToggleStarred"


export function RepositoriesTemplate() {
    const [username, setUsername] = useState("")
    const [searchUsername, setSearchUsername] = useState("")
    const [type, setType] = useState("all")
    const [language, setLanguage] = useState("")
    const [sort, setSort] = useState("updated")

    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useGithubRepos(searchUsername, { type, language, sort })

    // usa os hooks de star e unstar


    const observerRef = useRef<IntersectionObserver | null>(null)
    const loadMoreRef = useRef<HTMLDivElement | null>(null)

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0]
            if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
                fetchNextPage()
            }
        },
        [fetchNextPage, hasNextPage, isFetchingNextPage]
    )

    useEffect(() => {
        if (observerRef.current) observerRef.current.disconnect()

        const scrollContainer = document.querySelector(".overflow-y-auto")
        observerRef.current = new IntersectionObserver(handleObserver, {
            root: scrollContainer,
            rootMargin: "0px",
            threshold: 0,
        })

        if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current)
        return () => observerRef.current?.disconnect()
    }, [handleObserver])

    const handleSearch = useCallback(() => {
        if (username) setSearchUsername(username)
    }, [username])

    useEffect(() => {
        if (searchUsername) {
            setSearchUsername(prev => prev)
        }
    }, [type, language, sort])

    const repos = useMemo(() => {
        const map = new Map()
        data?.pages.flat().forEach(repo => {
            if (!map.has(repo.id)) {
                map.set(repo.id, repo)
            }
        })
        return Array.from(map.values())
    }, [data])

    const queryClient = useQueryClient()
    const { star, unstar } = useToggleStarred()

    const handleToggleStar = async (owner: string, repoName: string, isCurrentlyStarred: boolean) => {
        let success = false
        if (isCurrentlyStarred) {
            success = await unstar(owner, repoName)
        } else {
            success = await star(owner, repoName)
        }
        if (success) {
            await queryClient.invalidateQueries({ queryKey: ["repos", searchUsername, { type, language, sort }] })
        } else {
            alert("Erro ao atualizar estrela")
        }
    }

    const hasRepos = repos.length > 0
    const isFilterApplied = type !== "all" || language !== "" || sort !== "updated"
    const showFilters = hasRepos || isFilterApplied

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-black via-blue-900 to-blue-600 flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
            <div className="absolute inset-0 z-10">
                <img src="/assets/thumb2.jpg" alt="thumb" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-20 w-full max-w-4xl max-h-[80vh] bg-white/10 border border-white/20 shadow-lg rounded-lg backdrop-blur-md flex flex-col">
                <div className="p-6 flex flex-col flex-1 overflow-hidden">
                    <h1 className="text-white text-center text-2xl font-semibold mb-4">
                        Buscar repositórios por usuário
                    </h1>

                    <SearchForm
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onSearch={handleSearch}
                        loading={isLoading}
                    />

                    {showFilters && (
                        <div className="mt-4 flex justify-between gap-4 ">
                            <Select
                                value={language || "all"}
                                onValueChange={(val) => setLanguage(val === "all" ? "" : val)}
                            >
                                <SelectTrigger className="w-full text-white">
                                    <SelectValue placeholder="Linguagem" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todas as linguagens</SelectItem>
                                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                                    <SelectItem value="TypeScript">TypeScript</SelectItem>
                                    <SelectItem value="Python">Python</SelectItem>
                                    <SelectItem value="Java">Java</SelectItem>
                                    <SelectItem value="Go">Go</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={type} onValueChange={setType}>
                                <SelectTrigger className="w-full text-white">
                                    <SelectValue placeholder="Tipo" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todos</SelectItem>
                                    <SelectItem value="owner">Criador</SelectItem>
                                    <SelectItem value="member">Membros</SelectItem>
                                    <SelectItem value="source">Fontes</SelectItem>
                                    <SelectItem value="fork">Forks</SelectItem>
                                    <SelectItem value="archived">Arquivados</SelectItem>
                                    <SelectItem value="sponsorable">Patrocinável</SelectItem>
                                    <SelectItem value="mirror">Espelhos</SelectItem>
                                    <SelectItem value="template">Templates</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={sort} onValueChange={setSort}>
                                <SelectTrigger className="w-full text-white">
                                    <SelectValue placeholder="Ordenar por" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="updated">Atualizado</SelectItem>
                                    <SelectItem value="name">Nome</SelectItem>
                                    <SelectItem value="stargazers">Estrelas</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    {error && (
                        <p className="text-red-400 text-center font-medium mb-4">
                            {(error as Error).message || "Erro desconhecido"}
                        </p>
                    )}

                    {!isLoading && repos.length === 0 && searchUsername && (
                        <>
                            <p className="text-center text-gray-300 mt-4 mb-4">Nenhum repositório encontrado.</p>
                            {isFilterApplied && (
                                <div className="flex justify-center mt-4">
                                    <Button
                                        onClick={() => {
                                            setType("all")
                                            setLanguage("")
                                            setSort("updated")
                                        }}
                                        className="bg-gray-600/30 hover:bg-gray-700 text-white px-4 py-2 rounded"
                                    >
                                        Limpar filtros
                                    </Button>
                                </div>
                            )}
                        </>
                    )}

                    <ReposGrid
                        repos={repos}
                        isLoading={isLoading}
                        isFetchingNextPage={isFetchingNextPage}
                        loadMoreRef={loadMoreRef}
                        onToggleStar={handleToggleStar} // Passa o callback
                    />
                </div>
            </div>
        </div>
    )
}
