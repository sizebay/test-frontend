import { PropsWithChildren } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export const MainTemplate = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
