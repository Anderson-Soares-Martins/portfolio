import { forwardRef } from "react";

export const Education = forwardRef<
  HTMLDivElement,
  { ref: React.Ref<HTMLDivElement> }
>((props, ref) => {
  return (
    <div id="education" className="space-y-6" ref={ref}>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Education
        </h1>
      </div>
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Bachelor&apos;s in Computer Science
        </h3>
        <p>Universidade do Vale do Itajaí (UNIVALI)</p>
        <p className="text-sm text-muted-foreground">Currently Enrolled</p>
      </div>
    </div>
  );
});

Education.displayName = "Education";
