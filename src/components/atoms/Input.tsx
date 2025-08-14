'use client'

import { ComponentProps } from "react"

export default function Input(props: ComponentProps<'input'>) {
    return (
        <input className="sm:w-64 md:w-110 border
         bg-[#2A2118] text-[#E3B873] placeholder-[#E3B873]/55
        border-2 border-[#4A3426]  rounded-full md:rounded-lg px-3 py-2 
           focus:outline-none focus:border-[#E3B873] focus:ring-2 focus:ring-[#E3B873]/35
           transition-colors duration-200 ease-in-out pl-8" {...props} />
    )
}