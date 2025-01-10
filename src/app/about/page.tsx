"use client";

import React, { useRef, useState } from "react";
import { FileDown, X } from "lucide-react";

import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";
import { SoftSkills } from "./components/SoftSkills";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PulsatingButton from "@/components/ui/pulsating-button";

const AboutMe = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container flex-1 items-start lg:gap-10">
      <main className="relative py-6 lg:gap-10 lg:py-12 w-full flex flex-col gap-10">
        <Profile />
        <Skills />
        <SoftSkills />
      </main>

      <PulsatingButton
        className="fixed  bottom-4 right-4"
        onClick={() => setOpenModal(true)}
      >
        <FileDown /> CV
      </PulsatingButton>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="absolute inset-0"
            onClick={() => setOpenModal(false)}
          />
          <div className="relative bg-background rounded-lg p-8 max-w-[32rem] w-full">
            <Button
              className="absolute top-4 right-4"
              variant={"ghost"}
              onClick={() => setOpenModal(false)}
            >
              <X />
            </Button>
            <h2 className="text-3xl font-semibold text-center">
              Download Resume
            </h2>
            <div className="flex justify-center mt-8 space-x-10">
              <Link
                href={"/Linknderson Soares Martins - Resume.pdf"}
                target="_blank"
                download={"Anderson Soares Martins - Resume.pdf"}
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="gap-x-2"
                  onClick={() => setOpenModal(false)}
                >
                  <FileDown />
                  English
                </Button>
              </Link>
              <Link
                href={"/Anderson Soares Martins - Currículo.pdf"}
                target="_blank"
                download={"Anderson Soares Martins - Currículo.pdf"}
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="gap-x-2"
                  onClick={() => setOpenModal(false)}
                >
                  <FileDown />
                  Português
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
