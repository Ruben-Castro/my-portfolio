import React from "react";
import ProjectCard from "./project-card";
import tinyHouse from "../../public/images/tinyHouse.jpg";
const Project = () => {
  return (
    <section id="projects">
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <h2 className="flex justify-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pb-6">
          Projects
        </h2>
        <div className="flex space-x-3">
          <ProjectCard
            img={tinyHouse}
            title="Tiny House"
            description="Tiny House is a Airbnb clone website"
            alt="tiny house image"
            githubLink="https://github.com/Ruben-Castro/TinyHouse_V2"
            liveLink=""
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
