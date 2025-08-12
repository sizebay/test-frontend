"use client"
import React, { ReactNode } from "react"

interface StatBadgeProps {
    icon: ReactNode
    label: string
    className?: string
}

export function StatBadge({ icon, label, className = "" }: StatBadgeProps) {
    return (
        <span className={`flex rounded-2xl py-1 px-3 items-center gap-2 ${className}`}>
            {icon}
            {label}
        </span>
    )
}
