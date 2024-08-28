import React from "react";
import { ProjectCards } from "../project-cards";

const Projects = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Projects
      </h3>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCards
          name="Nico"
          time="5"
          title="Marketing Portfolio"
          description="Created a website using vite With React to showcase my portfolio"
        />
        <ProjectCards
          name="Nico"
          time="5"
          title="Project 1"
          description="this is going to be a quick summary of the project I made. It will take 5 minutes to read"
        />
        <ProjectCards
          name="Nico"
          time="5"
          title="Project 1"
          description="this is going to be a quick summary of the project I made. It will take 5 minutes to read"
        />
        <ProjectCards
          name="Nico"
          time="5"
          title="Project 1"
          description="this is going to be a quick summary of the project I made. It will take 5 minutes to read"
        />
      </div>
    </div>
  );
};

export default Projects;
