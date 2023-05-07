import React from "react";
interface Props {
  title: string;
  description: string;
  img: StaticImageData;
  alt: string;
  githubLink: string;
  liveLink: string;
}

import { AiOutlineGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import Image, { StaticImageData } from "next/image";

const ProjectCard = ({
  title,
  description,
  img,
  alt,
  githubLink,
  liveLink,
}: Props) => {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white">
      <Image
        className="h-64 sm:h-52 sm:w-full sm:object-cover "
        src={img}
        alt={alt}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pb-2 space-x-3 h-10">
        <button title="Go To Site">
          <a href={liveLink} title="live application">
            <CgWebsite style={{ height: "2em", width: "2em" }} />
          </a>
        </button>
        <button title="Source Code">
          <a href={githubLink} title="Github source code">
            <AiOutlineGithub style={{ height: "2em", width: "2em" }} />
          </a>
        </button>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Typescript
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Node
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          GraphQL
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          React
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Mongo DB
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Fullstack
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
