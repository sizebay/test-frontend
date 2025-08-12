import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-r from-black via-blue-900 to-blue-600 flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-10">
        <img
          src="/assets/banner.jpg"
          alt="thumb"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="text-white ">
          <h1 className="font-mono text-3xl md:text-5xl leading-snug mb-6">
            Uma lista de repositórios <br />
            como você <span className="text-blue-400 font-bold">nunca viu</span>
          </h1>
          <Link href="/repositories" className="flex items-center gap-4 text-blue-400 uppercase tracking-widest text-sm hover:text-blue-300 transition">
            <p>Procurar repositórios</p>
            <span className="inline-block border border-white hover:border-blue-400 hover:bg-blue-400 hover:text-blue-700 rounded-full p-2">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  )
}