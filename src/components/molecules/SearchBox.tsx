'use client'

import { useEffect, useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { IoMdSearch } from 'react-icons/io'
import { useSearchParams } from 'next/navigation'

export default function SearchBox({ onSearch }: { onSearch: (u: string) => void }) {
    const [username, setUsername] = useState('')
    const [focused, setFocused] = useState(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(username.trim())
    }
    
    return (
        <form
            onSubmit={submit}
            className="w-full flex justify-center items-center py-4"
        >
            <div className="inline-flex items-stretch w-full max-w-lg gap-2">
                <div className="relative w-full">
                    <IoMdSearch size={22} className={`absolute top-1/2 -translate-y-1/2 text-[#E3B873] transition-all duration-300 ${focused ? "right-3 left-auto" : "left-1.5"
                        }`}
                    />
                    <Input placeholder="Digite o username do Github" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        aria-label="username" onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)} />
                </div>
                <Button onClick={() => onSearch(username)}>Buscar</Button>
            </div>
        </form>
    )
}