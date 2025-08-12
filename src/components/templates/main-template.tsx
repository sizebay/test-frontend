import type { ReactNode } from "react"

import Header from "../organisms/header"
import Footer from "../organisms/footer"

export default function MainTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}
