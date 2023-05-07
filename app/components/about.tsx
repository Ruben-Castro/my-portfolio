import React from "react";
import { FaHiking } from "react-icons/fa";
import { BsController } from "react-icons/bs";
import { MdSportsMartialArts } from "react-icons/md";
import { AiOutlineCompass } from "react-icons/ai";
import Image from "next/image";
const About = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                interests
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Me
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                In my spare time I Like to Hike, practice jujitsu,play video
                games, and travel.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="data:image/jpeg;base64,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"
            width={500}
            height={500}
            alt="code"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Hello I'm Ruben Castro Espinoza I'm a fullstack software
                engineer currently working for Northop Grumman. I graduated from
                Lehigh University with a bachelors in Computer Engineering and I
                have a continuing education certificate in Machine Learning from
                UCSD. I'm passionate about software development and love to
                collaborate with others to tackle complex problems. In my free
                time I like to do the following activities.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FaHiking
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Hike
                    </strong>{" "}
                    I love to hike in the weekends to clear my mind and connect
                    with nature. My favorite hike to date is Mt.Fuji which I
                    completed back in 2019.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdSportsMartialArts
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Jujitsu
                    </strong>{" "}
                    I recently started practicing jujitsu at the start of of
                    2023.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BsController
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Gamer
                    </strong>{" "}
                    When I have time I like to play some video games. Interests
                    include FPS, RPG, and Turn-based strategy.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <AiOutlineCompass
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Travel
                    </strong>{" "}
                    I love to travel. I've been to 22 states, 8 countries and
                    counting.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
