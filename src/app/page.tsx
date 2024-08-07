// app/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="mb-4">
        {
          "Hi, I'm Anderson Soares Martins. I'm a Front-end Devepoler specializing in React and React Native."
        }
      </p>
      <Button asChild>
        <Link href="/projects">View My Projects</Link>
      </Button>
    </main>
  );
}
