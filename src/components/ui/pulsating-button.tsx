"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#0096ff",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-full text-white bg-primary px-6 py-2 aspect-square",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative flex flex-col z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-full bg-inherit animate-pulse opacity-50 -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
