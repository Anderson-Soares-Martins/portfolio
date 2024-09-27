"use client";

import React, { useState } from "react";
import { ChevronRight, Linkedin, Mail, Phone, ChevronLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Timeline } from "@/components/ui/timeline";
import TimelineEvent from "@/components/TimeLineEvent";
import { Button } from "@/components/ui/button";

import timeLineImage1DeppenMaps from "@/assets/timeline-images/timeline-image-deppen-maps.png";
import timeLineImage2DeppenMaps from "@/assets/timeline-images/timeline-image-deppen-maps2.png";
import timeLineImage3DeppenMaps from "@/assets/timeline-images/timeline-image-deppen-maps3.png";
import timeLineImage4DeppenMaps from "@/assets/timeline-images/timeline-image-deppen-maps4.png";

import timeLineImage1bilds from "@/assets/timeline-images/timeline-image-bilds.webp";
import timeLineImage2bilds from "@/assets/timeline-images/timeline-image-bilds2.webp";
import timeLineImage3bilds from "@/assets/timeline-images/timeline-image-bilds3.webp";
import timeLineImage4bilds from "@/assets/timeline-images/timeline-image-bilds4.webp";

import timeLineImage1resleeve from "@/assets/timeline-images/timeline-image-resleeve-auth.png";
import timeLineImage2resleeve from "@/assets/timeline-images/timeline-image-resleeve-auth2.png";
import timeLineImage3resleeve from "@/assets/timeline-images/timeline-image-resleeve-auth3.png";

import timeLineImage1lottoBalls from "@/assets/timeline-images/timeline-image-lottoBalls.png";
import timeLineImage2lottoBalls from "@/assets/timeline-images/timeline-image-lottoBalls2.png";
import timeLineImage3lottoBalls from "@/assets/timeline-images/timeline-image-lottoBalls3.png";
import timeLineImage4lottoBalls from "@/assets/timeline-images/timeline-image-lottoBalls4.png";
import MobileMenu from "@/components/MobileMenu";

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

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="space-y-6">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
              Anderson Soares Martins
            </h1>
            <div className="space-y-2">
              <p>Age: 24 years old</p>
              <p>Location: Palhoça, SC</p>
              <div className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a
                  href="mailto:andersoaresmartins@gmail.com"
                  className="font-medium text-primary hover:underline"
                >
                  andersoaresmartins@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={18} />
                <a
                  href="tel:+5548996084908"
                  className="font-medium text-primary hover:underline"
                >
                  (48) 99608-4908
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="mr-2" size={18} />
                <a
                  href="https://www.linkedin.com/in/anderson-soares-martins-a3b5b21aa"
                  className="font-medium text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <FaGithub className="mr-2" size={18} />
                <a
                  href="https://github.com/Anderson-Soares-Martins"
                  className="font-medium text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                Professional Summary
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Dedicated Frontend Developer with 2 years of experience,
                specializing in React, Next.js, and React Native. Seeking to
                join a dynamic team to contribute technical expertise and soft
                skills in creating innovative web and mobile solutions.
                Possesses a solid understanding of HTML, CSS, JavaScript, and
                responsive design principles, complemented by strong
                communication, teamwork, and problem-solving abilities.
              </p>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="space-y-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Languages: JavaScript, TypeScript</li>
              <li>
                Frameworks and Libraries: React, Next.js, React Native, Tailwind
                CSS, Styled-components
              </li>
              <li>
                Tools and Platforms: Git, GitHub, Docker, Firebase, Vercel
              </li>
              <li>Methodologies: Agile, Scrum</li>
              <li>
                Other Skills: UX/UI Design, Unit Testing (Jest, Testing
                Library), RESTful API, GraphQL
              </li>
            </ul>
          </div>
        );
      case "experience":
        return (
          <div className="space-y-6">
            <Timeline
              data={[
                {
                  title: "january 2023 - Deepen",
                  content: (
                    <TimelineEvent
                      description="Developed and maintained a web application using React and
                  LeafletJS for map integration and visualization."
                      images={[
                        timeLineImage1DeppenMaps.src,
                        timeLineImage2DeppenMaps.src,
                        timeLineImage3DeppenMaps.src,
                        timeLineImage4DeppenMaps.src
                      ]}
                    />
                  )
                },
                {
                  title: "March 2023 - Deepen",
                  content: (
                    <TimelineEvent
                      description="Created a cross-platform social networking app with React Native."
                      images={[
                        timeLineImage1bilds.src,
                        timeLineImage2bilds.src,
                        timeLineImage3bilds.src,
                        timeLineImage4bilds.src
                      ]}
                    />
                  )
                },
                {
                  title: "April 2024 - RESLEEVE",
                  content: (
                    <TimelineEvent
                      description="Collaborated on implementing secure authentication flows using
                  Auth0."
                      images={[
                        timeLineImage1resleeve.src,
                        timeLineImage2resleeve.src,
                        timeLineImage3resleeve.src
                      ]}
                    />
                  )
                },
                {
                  title: "June 2024 - Deepen",
                  content: (
                    <TimelineEvent
                      description="Used React Native to build a mobile application for a lottery game."
                      images={[
                        timeLineImage1lottoBalls.src,
                        timeLineImage2lottoBalls.src,
                        timeLineImage3lottoBalls.src,
                        timeLineImage4lottoBalls.src
                      ]}
                    />
                  )
                }
              ]}
            />

            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Frontend Developer | Deepen
              </h3>
              <p className="text-sm text-muted-foreground">
                January 2023 - Present
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Developed and maintained a web application using React and
                  LeafletJS for map integration and visualization.
                </li>
                <li>
                  Created a cross-platform social networking app with React
                  Native.
                </li>
                <li>
                  Collaborated with the back-end team to define and consume
                  RESTful APIs.
                </li>
                <li>
                  Actively participated in sprint planning and review meetings.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Frontend Developer | RESLEEVE
              </h3>
              <p className="text-sm text-muted-foreground">
                April 2024 – May 2024
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Collaborated on implementing secure authentication flows using
                  Auth0.
                </li>
                <li>
                  Used Next.js to build a modern and scalable web application.
                </li>
                <li>
                  Integrated Sentry for error monitoring and Amplitude/Segment
                  for user analytics.
                </li>
              </ul>
            </div>
          </div>
        );
      case "education":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Bachelor&apos;s in Computer Science
              </h3>
              <p>Universidade do Vale do Itajaí (UNIVALI)</p>
              <p className="text-sm text-muted-foreground">
                Currently Enrolled
              </p>
            </div>
          </div>
        );
      case "certifications":
        return (
          <div className="space-y-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>NLW Expert React Native track | Rocketseat (2024)</li>
              <li>NLW Expert React track | Rocketseat (2024)</li>
            </ul>
          </div>
        );
      case "softSkills":
        return (
          <div className="space-y-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Communication: Excellent verbal and written communication
                skills.
              </li>
              <li>
                Problem Solving: Proven ability to identify and solve complex
                problems efficiently and creatively.
              </li>
              <li>
                Teamwork: Ability to work well in a team, promoting a
                collaborative and productive environment.
              </li>
              <li>
                Time Management: Excellent organizational and time management
                skills, ensuring deadlines are met.
              </li>
            </ul>
          </div>
        );
      case "languages":
        return (
          <div className="space-y-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Portuguese: Native</li>
              <li>English: Intermediate</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  const currentIndex = menuItems.findIndex((item) => item.id === activeSection);
  const prevSection = menuItems[currentIndex - 1];
  const nextSection = menuItems[currentIndex + 1];

  const handleNavigation = (direction: "prev" | "next") => {
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < menuItems.length) {
      setActiveSection(menuItems[newIndex].id);
      // Scroll to top of the content
      window.scrollTo(0, 0);
    }
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
                    onClick={() => setActiveSection(item.id)}
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
            setActiveSection={setActiveSection}
          />
          <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="truncate">About Me</div>
            <ChevronRight className="h-4 w-4" />
            <div className="font-medium text-foreground">
              {menuItems.find((item) => item.id === activeSection)?.label}
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
              {menuItems.find((item) => item.id === activeSection)?.label}
            </h1>
          </div>
          <div className="pb-12 pt-8">
            <div className="mdx">{renderContent()}</div>
            <div className="flex justify-between mt-8">
              {prevSection && (
                <Button
                  onClick={() => handleNavigation("prev")}
                  variant="outline"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> {prevSection.label}
                </Button>
              )}
              {nextSection && (
                <Button
                  onClick={() => handleNavigation("next")}
                  variant="outline"
                  className="ml-auto"
                >
                  {nextSection.label} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
