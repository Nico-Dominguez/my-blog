"use client";
import React, { useState } from "react";
import { DarkMode } from "./darkmode";
import MobileNav from "./mobile-nav";
import { siteConfig } from "../../config/site";
import MainNav from "./main-nav";

const SiteHeader = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="sticky-nav h-14 flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-white dark:bg-zinc-900 bg-opacity-60">
      <DarkMode />
      <MainNav />
      <MobileNav />
    </header>
  );
};

export default SiteHeader;
