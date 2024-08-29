import React from "react";
import ProjectCard from "../project-cards";
import { GrAchievement, GrBarChart, GrReactjs } from "react-icons/gr";
import { siteConfig } from "../../../config/site";

const Projects = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Projects
      </h3>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          name="Nico"
          time="5"
          title="Marketing Portfolio"
          description="Created a website using vite With React to showcase my portfolio"
          icon={<GrReactjs size="40" />}
          tags="HTML, CSS, JS, React, Tailwind, Browser-Router"
          href={siteConfig.links.personalSite}
        />
        {/* <ProjectCard
          name="Nico"
          time="5"
          title="Project 1"
          description="this is going to be a quick summary of the project I made. It will take 5 minutes to read"
        />
        <ProjectCard
          name="Nico"
          time="5"
          title="Project 1"
          description="this is going to be a quick summary of the project I made. It will take 5 minutes to read"
        />
        <ProjectCard
          name="Nico"
          time="5"
          title="Project 1"
          description="this is going to be a quick summary of the project I made. It will take 5 minutes to read"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
