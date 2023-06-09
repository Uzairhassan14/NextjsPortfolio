import React from "react";
import Image from "next/image";
import html from "./../../../public/assets/skills/html.png";
import css from "./../../../public/assets/skills/css.png";
import javascript from "./../../../public/assets/skills/javascript.png";
import react from "./../../../public/assets/skills/react.png";
import node from "./../../../public/assets/skills/node.png";
import aws from "./../../../public/assets/skills/aws.png";
import firebase from "./../../../public/assets/skills/firebase.png";
import github1 from "./../../../public/assets/skills/github1.png";
import nextjs from "./../../../public/assets/skills/nextjs.png";
import shopify from "./../../../public/assets/skills/shopify.png";
import tailwind from "./../../../public/assets/skills/tailwind.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={html}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={css}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={javascript}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={react}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={node}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={aws}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>aws</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={firebase}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={github1}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={nextjs}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={tailwind}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={shopify}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>shopify</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
