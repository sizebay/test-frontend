import { ThemeToggle } from "@/components/atoms/ThemeToggle";

export default function Home() {
  return (
    <div className="flex justify-between items-center p-4">
      <h1>Home</h1>
      <ThemeToggle />
    </div>
  );
}
