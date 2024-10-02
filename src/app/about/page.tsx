"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

import MobileMenu from "@/components/MobileMenu";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { SoftSkills } from "./components/SoftSkills";
import { Languages } from "./components/Languages";

const menuItems = [
  { id: "profile", label: "Profile" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "softSkills", label: "Soft Skills" },
  { id: "languages", label: "Languages" }
];

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    menuItems.forEach((item) => {
      if (sectionRefs.current[item.id]) {
        if (sectionRefs.current[item.id]) {
          observer.observe(sectionRefs.current[item.id] as Element);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const headerHeight = 81;
    const section = sectionRefs.current[sectionId];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth"
      });
    }
  };

  const renderContent = () => {
    return (
      <div className="space-y-36">
        <Profile
          ref={(el) => {
            sectionRefs.current.profile = el;
          }}
        />

        <Skills
          ref={(el) => {
            sectionRefs.current.skills = el;
          }}
        />

        <Experience
          ref={(el) => {
            sectionRefs.current.experience = el;
          }}
        />

        <Education
          ref={(el) => {
            sectionRefs.current.education = el;
          }}
        />

        <Certifications
          ref={(el) => {
            sectionRefs.current.certifications = el;
          }}
        />

        <SoftSkills
          ref={(el) => {
            sectionRefs.current.softSkills = el;
          }}
        />

        <Languages
          ref={(el) => {
            sectionRefs.current.languages = el;
          }}
        />
      </div>
    );
  };

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden flex-1 w-full shrink-0 md:sticky md:block">
        <div className="h-full py-6 pr-6 lg:py-8">
          <div className="h-full rounded-md  bg-background">
            <div className="p-4">
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                Getting Started
              </h4>
              <nav className="grid grid-flow-row auto-rows-max text-sm">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline ${
                      activeSection === item.id
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_50px]">
        <div className="mx-auto w-full min-w-0">
          <MobileMenu
            menuItems={menuItems}
            activeSection={activeSection}
            setActiveSection={handleMenuClick}
          />
          <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="truncate">About Me</div>
            <ChevronRight className="h-4 w-4" />
            <div className="font-medium text-foreground">
              {menuItems.find((item) => item.id === activeSection)?.label}
            </div>
          </div>

          <div className="pb-12 pt-8">
            <div className="mdx">{renderContent()}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
