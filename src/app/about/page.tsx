import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GrGithub, GrLinkedin, GrTwitter } from "react-icons/gr";
import { siteConfig } from "../../../config/site";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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

  const images = [
    {
      title: "My Car",
      url: "/carousel/car.webp",
    },
    {
      title: "Bogota, Colombia",
      url: "/carousel/bogota.webp",
    },
    {
      title: "Santa Marta, Colombia",
      url: "/carousel/waves.webp",
    },
    {
      title: "San Fransisco, California",
      url: "/carousel/sf-3.webp",
    },
    {
      title: "Golden Gate Bridge",
      url: "/carousel/golden.webp",
    },
    {
      title: "Blue Ridge Mountains",
      url: "/carousel/hiking-photo.webp",
    },
  ];

  return (
    <section className="flex flex-col justify-center px-8 text-gray-900 dark:text-gray-100 antialiased max-w-2xl mx-auto mb-12">
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
      <div className="flex flex-col  text-zinc-500 dark:text-zinc-500 max-w-prose mx-auto mb-12">
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Skills:
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 p-2 bg-muted-foreground/10 rounded-sm border-2 mb-12">
          {skills.map((skill) => (
            <div key={skill}>
              <Badge>{skill}</Badge>
            </div>
          ))}
        </div>
        <p className="mb-5">
          Hello! I&#39;m an aspiring Front-End Web Developer based in Columbia,
          SC. With a solid foundation in Advertising from the University of
          South Carolina, I&#39;ve expanded my skill set through intensive
          self-study in web development. This unique blend of creative marketing
          background and technical prowess equips me with a holistic approach to
          building engaging web experiences.
        </p>
        <p className="mb-5">
          Driven by passion and armed with hands-on projects, I&#39;ve honed my
          skills in HTML, CSS, JavaScript, and modern frameworks. I&#39;m now
          eager to leverage my diverse background and newly acquired technical
          skills to contribute fresh perspectives and innovative solutions as a
          Front-End Web Developer.
        </p>

        <p className="mb-5">
          When Im not working, I like to play soccer, travel the world, or drive
          my car. I currently drive a 2018 Honda Civic Si and have modified it a
          bit!
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
          Lets Connect:
        </h2>
        <div className="flex gap-4">
          <Link href={siteConfig.links.github} target="_blank">
            <GrGithub size="30" />
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank">
            <GrTwitter size="30" />
          </Link>

          <Link href={siteConfig.links.linkedin} target="_blank">
            <GrLinkedin size="30" />
          </Link>
        </div>
      </div>

      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-2/3 xl:basis-3/4 2xl:basis-4/5"
              >
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={image.url}
                        alt={image.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full ">
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default page;
