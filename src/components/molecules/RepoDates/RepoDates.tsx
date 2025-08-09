"use client"
import React from "react"

interface RepoDatesProps {
    createdAt: string
    updatedAt: string
}

export function RepoDates({ createdAt, updatedAt }: RepoDatesProps) {
    return (
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
                <p className="font-semibold text-gray-300">Criado em:</p>
                {new Date(createdAt).toLocaleDateString("pt-BR")}
            </div>
            <div>
                <p className="font-semibold text-gray-300">Última atualização:</p>
                {new Date(updatedAt).toLocaleDateString("pt-BR")}
            </div>
        </div>
    )
}
