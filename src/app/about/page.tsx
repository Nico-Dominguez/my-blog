import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const page = () => {
  const skills = [
    "html",
    "css",
    "js",
    "ts",
    "react",
    "nextjs",
    "mongodb",
    "supabase",
    "node",
    "tailwindcss",
    "express",
    "mdx",
    "ssr",
  ];

  return (
    <section className="flex flex-col justify-center px-8 text-gray-900 dark:text-gray-100 antialiased max-w-2xl mx-auto">
      <div className="flex flex-col justify-center items-start mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          About Me
        </h1>
        <Link
          href="https://x.com/webdevnico"
          target="_blank"
          className="overflow-hidden rounded-full shadow-xl ring-1 ring-slate-900/5 relative bg-white h-48 w-48 border-2 border-foreground"
        >
          <Image
            src="/Nico-Headshot-1-min.png"
            width={200}
            height={200}
            alt="picture of Nico"
          />
        </Link>
      </div>
      <div className="flex flex-col  text-zinc-500 dark:text-zinc-500 max-w-prose mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Skills:
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 p-2 bg-muted-foreground/10 rounded-sm border-2 mb-12">
          {skills.map((skill) => (
            <div>
              <Badge>{skill}</Badge>
            </div>
          ))}
        </div>
        <p className="mb-5">
          Hello! I'm an aspiring Front-End Web Developer based in Columbia, SC.
          With a solid foundation in Advertising from the University of South
          Carolina, I've expanded my skill set through intensive self-study in
          web development. This unique blend of creative marketing background
          and technical prowess equips me with a holistic approach to building
          engaging web experiences.
        </p>
        <p className="mb-5">
          Driven by passion and armed with hands-on projects, I've honed my
          skills in HTML, CSS, JavaScript, and modern frameworks. I'm now eager
          to leverage my diverse background and newly acquired technical skills
          to contribute fresh perspectives and innovative solutions as a
          Front-End Web Developer.
        </p>

        <p className="mb-5">
          When Im not working, I like to play soccer, travel the world, or drive
          my car. I currently drive a 2018 Honda Civic Si and have modified it a
          bit!
        </p>
      </div>
    </section>
  );
};

export default page;
