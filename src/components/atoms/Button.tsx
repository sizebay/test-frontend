'use client'

import { ComponentProps } from "react"

export default function Button({ children, ...rest }: ComponentProps<'button'>) {
    return (
        <button className="w-60 rounded-2xl border
        bg-[#4A3426] text-[#1A140F] border border-[#C98E56]
        hover:bg-[#B77D45] hover:border-[#B77D45]
        inline-flex items-center justify-center gap-2 px-8 py-1.5 
        text-lg text-white font-semibold shadow-md 
            active:scale-95 active:shadow-inner
            focus:outline-none focus:ring-2 focus:ring-[#E3B873]/40
             cursor-pointer transition-all duration-200 ease-in-out
             disabled:opacity-60 disabled:cursor-not-allowed" {...rest}>
            {children}
        </button>
    )
}
