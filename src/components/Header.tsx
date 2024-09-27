"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-background/60 backdrop-blur-sm z-50 border-b-[1px] border-b-primary/10 shadow-md">
      <div className="flex items-center justify-between p-4 md:p-5">
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <button
            className="md:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <nav
          className={`${
            navbarOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-background md:bg-transparent py-4 md:py-0`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button variant="ghost" asChild className="w-full md:w-auto">
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild className="w-full md:w-auto">
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild className="w-full md:w-auto">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
