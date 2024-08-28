import React, { useState, useEffect, useRef, ReactElement } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  time: string;
  title: string;
  description: string;
  icon?: ReactElement;
  tags?: string;
}

export default function ProjectCard({
  name,
  time,
  title,
  description,
  icon,
  tags,
  className,
  ...props
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  const tagArray = tags ? tags.split(",").map((tag) => tag.trim()) : [];

  return (
    <div
      className={cn("w-full group/card", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
      {...props}
    >
      <div
        className={cn(
          "border cursor-pointer overflow-hidden relative card h-auto min-h-80 rounded-xl shadow-xl mx-auto flex flex-col justify-center gap-4 p-4 bg-white dark:bg-gray-800"
        )}
      >
        {isHovered && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-400 opacity-80 transition-opacity duration-300"
            style={{
              maskImage: `radial-gradient(circle 230px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 230px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            }}
          />
        )}
        <div className="absolute inset-0 text-black bg-background bg-opacity-40 transition-opacity duration-300 group-hover/card:opacity-60" />
        <div className="z-10">
          {icon ? (
            <div className="h-10 w-10 flex items-center justify-center">
              {React.cloneElement(icon, { className: "text-foreground" })}
            </div>
          ) : null}
        </div>
        <div className="text content z-10">
          <h1 className="font-bold text-lg md:text-xl relative z-10 text-foreground">
            {title}
          </h1>
          <p className="font-normal text-sm relative z-10 my-4 text-foreground/80">
            {description}
          </p>
          {tagArray.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tagArray.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-background border font-light text-xs rounded-md italic text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
