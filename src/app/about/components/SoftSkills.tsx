import { forwardRef } from "react";

export const SoftSkills = forwardRef<
  HTMLDivElement,
  { ref: React.Ref<HTMLDivElement> }
>((props, ref) => {
  return (
    <div id="softSkills" className="space-y-6" ref={ref}>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Soft Skills
        </h1>
      </div>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Communication: Excellent verbal and written communication skills.
        </li>
        <li>
          Problem Solving: Proven ability to identify and solve complex problems
          efficiently and creatively.
        </li>
        <li>
          Teamwork: Ability to work well in a team, promoting a collaborative
          and productive environment.
        </li>
        <li>
          Time Management: Excellent organizational and time management skills,
          ensuring deadlines are met.
        </li>
      </ul>
    </div>
  );
});

SoftSkills.displayName = "SoftSkills";
