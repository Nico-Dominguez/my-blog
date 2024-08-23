import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <nav className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
      <Link
        href="/"
        className={cn(
          "relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 "
        )}
        onClick={() => setActivePath("/")}
      >
        <span className="relative z-10 text-gray-600 dark:text-gray-50">
          Home
        </span>
        {activePath === "/" && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        )}
      </Link>
      <Link
        href="/blog"
        className={cn(
          "relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 "
        )}
        onClick={() => setActivePath("/blog")}
      >
        Blog
        {activePath === "/blog" && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        )}
      </Link>
      <Link
        href="/about"
        className={cn(
          "relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 "
        )}
        onClick={() => setActivePath("/about")}
      >
        About
        {activePath === "/about" && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
