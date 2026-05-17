import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Reusable Project Card
function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="min-w-[320px] max-w-md bg-slate-950 text-white border-2 border-amber-50 rounded-2xl p-6 flex flex-col justify-around">
      <h2 className="text-3xl mb-3">{title}</h2>
      <p className="mb-3 text-sm text-gray-400">{description}</p>
      <p className="mb-2">
        <b>Tech Stack:</b> {tech}
      </p>
      <a
        href={link}
        className="hover:text-blue-500 underline "
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
}

// Your project data
const projects = [
  {
    title: "Hotdog Not Hotdog App",
    description:
      "An android app that takes a food picture as input and uses deep learning to predict if the given picture is of a hotdog or not. This project was inspired from the TV series 'Silicon Valley'.",
    tech: "Flutter, Dart, Python, Tensorflow",
    link: "https://github.com/Raahim-Rubaiyat-Teertho/Hotdog-Not-Hotdog-App",
  },
  {
    title: "Shobaike Janao",
    description:
      "A platform for both musical artists and listeners. Artists can efficiently promote their music and interact with their audience while listeners can discover new music, artists and give their reviews and feedbacks",
    tech: "ReactJS, Django, SQLite, Javascript, Python",
    link: "https://github.com/Raahim-Rubaiyat-Teertho/shobaike-janao-music-promo-website",
  },
  {
    title: "Sentence To Spotify",
    description:
      "An application uses AI to recognize the emotion from a sentence and then suggests five songs based on that emotion. ",
    tech: "Python, Tensorflow, HuggingFace, Streamlit",
    link: "https://github.com/Raahim-Rubaiyat-Teertho/sentence-spotify",
  },
  {
    title: "To-Do App Project",
    description:
      "A To-Do app with customized features like adding daily tasks automatically, persistent notifications, consistency statistics etc.",
    tech: "Firebase, Flutter, Dart, Python",
    link: "https://github.com/Raahim-Rubaiyat-Teertho/todo_app_project",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [dragLimit, setDragLimit] = useState({ left: 0, right: 0 });

  // Resize-aware constraint calculation
  const calculateDragLimit = () => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const containerWidth = container.offsetWidth;
    const scrollWidth = inner.scrollWidth;

    const buffer = 32; // extra pixels to ensure no clipping
    const leftLimit = containerWidth - scrollWidth - buffer;
    setDragLimit({ left: leftLimit, right: 0 });
  };

  useEffect(() => {
    calculateDragLimit();
    window.addEventListener("resize", calculateDragLimit);
    return () => window.removeEventListener("resize", calculateDragLimit);
  }, []);

  return (
    <div
      className="h-auto w-full flex flex-col items-center mb-40"
      id="projects"
    >
      {/* Heading */}
      <motion.div
        className="text-center font-space sm:px-52 md:px-72 px-7 text-sm"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-6xl font-space pb-10 pt-10">Pet Projects</h1>
        <p className="mb-10">
          Welcome to the projects section. Here, you will find some of my pet
          projects that I have worked on over the years. I had a lot of fun
          building these projects and most importantly, I learned a lot.
        </p>
      </motion.div>

      {/* Scrollable slider */}
      <motion.div ref={containerRef} className="w-full overflow-hidden px-5">
        <motion.div
          ref={innerRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={dragLimit}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </motion.div>
      </motion.div>

      <div className="my-10 mx-10 text-center">
        <a
          href="https://github.com/Raahim-Rubaiyat-Teertho"
          className="hover:text-blue-500 underline "
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out more of my projects on my Github profile
        </a>
      </div>
    </div>
  );
}
