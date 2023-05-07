import React from "react";
interface Props {
  title: string;
  description: string;
  img: string;
  alt: string;
  githubLink: string;
  liveLink: string;
}

import { AiOutlineGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
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
        width={256}
        height={500}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pb-2 space-x-3 h-10">
        <button>
          <a href={liveLink}>
            <CgWebsite style={{ height: "2em", width: "2em" }} />
          </a>
        </button>
        <button className="h-10">
          <a href={githubLink}>
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
