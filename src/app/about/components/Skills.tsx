import { OrbitSkills } from "@/components/OrbitSkills";
import { forwardRef } from "react";

export const Skills = forwardRef<
  HTMLDivElement,
  { ref: React.Ref<HTMLDivElement> }
>((props, ref) => {
  return (
    <div id="skills" className="space-y-6" ref={ref}>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Skills
        </h1>
      </div>
      <ul className="list-disc pl-6 space-y-2">
        <li>Languages: JavaScript, TypeScript, SQL, Python, Java</li>
        <li>
          Frameworks and Libraries: React, Next.js, React Native, Tailwind CSS,
          Styled-components
        </li>
        <li>
          Tools and Platforms: Git, GitHub, Docker, Firebase, Vercel, Postgre
        </li>
        <li>Methodologies: Agile, Scrum</li>
        <li>
          Other Skills: UX/UI Design, Unit Testing (Jest, Testing Library),
          RESTful API, GraphQL
        </li>
      </ul>
      <OrbitSkills />
    </div>
  );
});

Skills.displayName = "Skills";
