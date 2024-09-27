// app/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="w-full flex-1
     flex flex-col justify-center items-center px-4 py-8 gap-y-8 sm:gap-y-16"
    >
      <div className="shadow-move" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Welcome to My Portfolio
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/logo.svg"
          alt="Anderson Soares Martins"
          width={150}
          height={150}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
        />
        <p className="text-primary text-2xl sm:text-3xl md:text-4xl mt-4 text-center">
          Anderson Soares Martins
        </p>
      </div>
      <Button
        asChild
        className="px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8 rounded-full shadow-xl"
      >
        <Link href="/about" className="text-white font-bold text-lg sm:text-xl">
          GET STARTED
        </Link>
      </Button>
    </main>
  );
}
