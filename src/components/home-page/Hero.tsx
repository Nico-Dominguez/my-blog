import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
      <div className="flex md:w-3/4 flex-col mt-6">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
          Nico Dominguez
        </h1>
        <div className="mb-5">
          <p className="text-zinc-600 dark:text-zinc-500">
            Self-taught{" "}
            <span className="text-blue-500 dark:text-white">
              Frontend Developer
            </span>{" "}
            looking for his first opportunity to make an impact.
          </p>
        </div>
        <p className="mb-5 text-zinc-500 dark:text-zinc-500">
          I&rsquo;ve been learning for about one year now. Life has taken me
          through many journeys, but this seems to be my greatest challenge yet.
          However with all the rigors, the feeling of extasy is worth it when I
          create projects that are functional, responsive, and user-friendly.
        </p>
        <p className="text-zinc-600 dark:text-zinc-500">
          You can find me on{" "}
          <Link href="https://x.com/webdevnico" className="font-bold">
            <span className="relative dark:text-white text-blue-500">
              Twitter
            </span>
          </Link>{" "}
          to follow my journey and view my thoughts.
        </p>
      </div>
      <div className="relative flex-shrink p-4 md:p-4 md:order-last order-first">
        <Link
          href="https://x.com/webdevnico"
          target="_blank"
          className="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20"
        >
          <Image
            src="/Nico-Headshot-1-min.png"
            width={100}
            height={100}
            alt="picture of Nico"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
