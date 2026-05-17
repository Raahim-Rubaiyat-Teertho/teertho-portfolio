import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function AboutMe() {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center"
      id="about"
    >
      <div className="md:grid grid-cols-2 gap-2">
        <div className="flex flex-col justify-center items-center">
          {/* <h1 className="text-6xl font-space pb-10 text-center">About Me</h1> */}
          <motion.p
            className="text-center font-space px-6 md:px-24"
            initial={{ opacity: 0, y: -50 }} // Start above and invisible
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 1, delay: 0 }} // Smooth animation
            viewport={{ once: true, amount: 0.3 }} // Starts after typing finishes
          >
            <h1 className="text-6xl font-space pb-10">About Me</h1>
            <p className="text-gray-200 pb-10">
              Hi, I'm a 25-year-old Computer Science graduate from Dhaka,
              Bangladesh. I'm passionate about building software and exploring
              new tech like AI and machine learning. I enjoy learning every day
              and trying my hand at projects that simplify life in small ways.
              When I'm not coding, you'll likely find me making music, a
              creative way to relax and express myself.
            </p>
          </motion.p>
        </div>
        <div className="flex justify-center items-center">
          <motion.p
            className="text-center font-space px-24"
            initial={{ opacity: 0, y: 50 }} // Start above and invisible
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.5, delay: 0 }} // Smooth animation
            viewport={{ once: true, amount: 0.4 }} // Starts after typing finishes
          >
            <img
              className="rounded-full md:size-72 object-cover"
              src="./273578610_5162929663771084_7411328744564490725_n(1).jpg"
              alt="my-picture"
            />
          </motion.p>
        </div>
      </div>
    </div>
  );
}
