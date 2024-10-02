import { forwardRef } from "react";

export const Languages = forwardRef<
  HTMLDivElement,
  { ref: React.Ref<HTMLDivElement> }
>((props, ref) => {
  return (
    <div id="languages" className="space-y-6" ref={ref}>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Languages
        </h1>
      </div>
      <ul className="list-disc pl-6 space-y-2">
        <li>Portuguese: Native</li>
        <li>English: Intermediate</li>
      </ul>
    </div>
  );
});

Languages.displayName = "Languages";
