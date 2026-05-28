import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useEffect } from "react";

export default function Intro() {
  const words = [
    {
      text: "Hi, ",
    },
    {
      text: "I'm ",
    },
    {
      text: "Teertho",
    },
  ];
  return (
    <div
      className="h-screen md:h-screen w-full flex flex-col justify-center items-center"
      id="intro"
    >
      {/* <motion.span className="text-6xl font-space pb-10">
        {displayText}
      </motion.span> */}
      <TypewriterEffectSmooth
        words={words}
        speed={10}
        // deleteSpeed={20}
        // wrapperClassName="text-center font-space  text-gray-200"
        className={"text-6xl :text-6xl text-center"}
      />
      <motion.p
        className=" text-center font-space sm:px-52 md:px-72 px-7 text-sm"
        initial={{ opacity: 0, y: -50 }} // Start above and invisible
        animate={{ opacity: 1, y: 0 }} // Slide down & fade in
        transition={{ duration: 0.7, delay: 0.7 }} // Starts after typing finishes
      >
        I'm a software engineer from Dhaka, Bangladesh who loves building
        software, exploring AI/ML, and learning something new every day. Music
        is my creative escape.
      </motion.p>

      <motion.p
        className=" text-center font-space sm:px-52 md:px-72 px-7 text-sm"
        initial={{ opacity: 0, y: -50 }} // Start above and invisible
        animate={{ opacity: 1, y: 0 }} // Slide down & fade in
        transition={{ duration: 0.7, delay: 0.7 }} // Starts after typing finishes
      >
        <a href="#about">
          <button className="mt-7 px-3 py-2 bg-blue-600 text-white rounded-lg font-medium">
            More About Me
          </button>
        </a>
      </motion.p>
    </div>
  );
}
