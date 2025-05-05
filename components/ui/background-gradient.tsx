"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      container.style.setProperty("--x-offset", `${x}`);
      container.style.setProperty("--y-offset", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative group/card w-full",
        className
      )}
    >
      <div className="absolute -inset-px  rounded-[22px] group-hover/card:opacity-100 opacity-0 blur transition duration-500" />
      <div className="relative h-full bg-background rounded-[20px]">
        {children}
      </div>
    </div>
  );
};