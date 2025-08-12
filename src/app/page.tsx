import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import { HeroSection } from "@/components/organisms/hero-section";
import { UserResultSection } from "@/components/organisms/user-result-section";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "GitView",
  description: "Ferramenta de pesquisa de repositórios GitHub",
};

export default async function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div>Carregando...</div>}>
        <Header />
        <HeroSection />
        <UserResultSection />
        <Footer />
      </Suspense>
    </div>
  );
}
