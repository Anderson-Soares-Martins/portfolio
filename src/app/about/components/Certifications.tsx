import { forwardRef } from "react";

export const Certifications = forwardRef<
  HTMLDivElement,
  { ref: React.Ref<HTMLDivElement> }
>((props, ref) => {
  return (
    <div id="certifications" className="space-y-6" ref={ref}>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Certifications
        </h1>
      </div>
      <ul className="list-disc pl-6 space-y-2">
        <li>NLW Expert React Native track | Rocketseat (2024)</li>
        <li>NLW Expert React track | Rocketseat (2024)</li>
      </ul>
    </div>
  );
});

Certifications.displayName = "Certifications";
