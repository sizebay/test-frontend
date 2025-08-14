import { FaGithub } from "react-icons/fa";

export default function MainTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-[#332820] text-[#4A3426]">
            <header className="flex items-center justify-center px-6 py-6">
                <h1 className="flex items-center gap-2 text-4xl font-bold text-white">
                    {/* <FaGithub className="text-white" size={32} /> */}
                    Listagem de Repositórios</h1>
            </header>
            <main className="flex-1 px-12 py-4">{children}</main>
        </div>
    )
}