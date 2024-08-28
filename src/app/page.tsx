"use client";

import Hero from "@/components/home-page/Hero";
import Blog from "@/components/home-page/Blog";
import Projects from "@/components/home-page/Projects";
import FixedContactForm from "@/components/home-page/FixedContactForm";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center px-8 text-gray-900 dark:text-gray-100 antialiased">
        <div className="flex flex-col justify-center items-start mx-auto mb-16 max-w-2xl">
          <Hero />
          {/* blog section */}
          <Blog />
          {/* project section */}
          <Projects />
        </div>
        {/* <FixedContactForm /> */}
      </main>
    </>
  );
}
