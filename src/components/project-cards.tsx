"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  time: string;
  title: string;
  description: string;
}

export function ProjectCards({
  name,
  time,
  title,
  description,
  ...props
}: ProjectCardProps) {
  return (
    <div className="w-full group/card">
      <div
        className={cn(
          "text-gray-800 dark:text-gray-200 border cursor-pointer overflow-hidden relative card h-64 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          {/* <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png"
            className="h-10 w-10 rounded-full border-2 object-cover"
          /> */}
          <div className="flex flex-col">
            <p className="font-normal text-base  relative z-10">{name}</p>
            <p className="text-sm">{time}min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl  relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm  relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
