"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <span className="uppercase font-bold">Nico's Blog</span>
        <div className="py-8 flex flex-col justify-between h-full items-start">
          <div className="flex flex-col gap-y-8 text-2xl ">
            <MobileLink
              href="/"
              onOpenChange={setOpen}
              className={cn(
                "flex items-center transition-colors duration-300 text-black dark:text-white hover:text-blue-500 dark:hover:text-slate-400"
              )}
            >
              <span className="font-bold">Home</span>
            </MobileLink>
            <MobileLink
              href="/blog"
              onOpenChange={setOpen}
              className={cn(
                "flex items-center transition-colors duration-300 text-black dark:text-white hover:text-blue-500 dark:hover:text-slate-400"
              )}
            >
              <span className="font-bold">Blog</span>
            </MobileLink>
            <MobileLink
              href="/about"
              onOpenChange={setOpen}
              className={cn(
                "flex items-center transition-colors duration-300 text-black dark:text-white hover:text-blue-500 dark:hover:text-slate-400"
              )}
            >
              <span className="font-bold">About</span>
            </MobileLink>
          </div>
          <div>
            <SheetFooter>
              <div className="flex gap-x-6">
                <Button variant="ghost" size="sm">
                  <FaGithub size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <FaTwitter size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <FaLinkedin size={20} />
                </Button>
              </div>
            </SheetFooter>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
