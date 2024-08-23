import Link from "next/link";
import React from "react";
import { ChevronDown } from "lucide-react";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import PostItem from "../post-item";

const Blog = () => {
  const latestPosts = sortPosts(posts).slice(0, 2);
  return (
    <section className="flex flex-col w-full">
      <header>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Recent Blogs
        </h3>
      </header>

      <ul className="flex flex-col flex-grow ">
        {" "}
        {latestPosts.map((post) => (
          <li key={post.slug} className="first:border-t first:border-border">
            <PostItem
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          </li>
        ))}
      </ul>

      <Link
        href="/blog"
        className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
      >
        See all Blogs
        <ChevronDown className="h-4 w-4 ml-1" />
      </Link>
    </section>
  );
};

export default Blog;
