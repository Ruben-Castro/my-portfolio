import React from "react";
import ProjectCard from "./project-card";
import tinyHouse from "../../public/images/tinyHouse.jpg";
import textSummarizer from "../../public/images/text_summarizer.png";
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
            techStack={["Typescript", "React", "Node", "GraphQL", "MongoDB"]}
          />
          <ProjectCard
            img={textSummarizer}
            title="Text Summarizer API"
            description="This Rest API accepts a url to a document and returns a summary of the document. It was written with FastAPI and was deployed to Heroku. It is dockerized, has a swagger UI and is fully documented. I also used github actions to automate the testing and deployment process."
            alt="Text Summarizer Docs Image"
            githubLink="https://github.com/Ruben-Castro/text_summarization_microservice"
            liveLink="https://frozen-chamber-25489.herokuapp.com/docs"
            techStack={["Python", "FastAPI", "Docker", "Heroku", "Swagger"]}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Project;
