import { PropsWithChildren } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export const MainTemplate = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-8 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};
