import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Education() {
  return (
    <div
      className="h-auto mb-30 md:mb-40 w-full flex flex-col items-center"
      id="education"
    >
      <motion.p
        className=" text-center font-space sm:px-52 md:px-72 px-7 text-sm"
        initial={{ opacity: 0, y: -50 }} // Start above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 1, delay: 0 }} // Smooth animation
        viewport={{ once: true, amount: 0.3 }} // Starts after typing finishes
      >
        <h1 className="text-6xl font-space pb-10 pt-10">Education</h1>
      </motion.p>

      <motion.p
        // className=" text-center font-space sm:px-52 md:px-72 px-7 text-sm"
        initial={{ opacity: 0, y: 50 }} // Start above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 1, delay: 0 }} // Smooth animation
        viewport={{ once: true, amount: 0.3 }} // Starts after typing finishes
      >
        <div
          id="experience-grid"
          className="grid grid-cols-3 gap-10 w-full md:px-20"
        >
          <div className="pl-10 md:pl-0 flex flex-row justify-center items-center py-5 hover:bg-slate-800 rounded-xl">
            BRAC University, Bangladesh
          </div>
          <div className="col-span-2 flex flex-col justify-center pr-5 md:pr-0 md:pl-7">
            <h3 className="text-2xl font-bold">
              Bachelor Of Science In Computer Science
            </h3>
            {/* <p className="text-sm text-gray-400 pt-2">
              <span className="font-bold"> Part-Time</span>
            </p> */}
            <p className="text-sm text-gray-400 pt-2 pb-5">
              <span className="font-bold"> June 2021 - November 2025</span>
            </p>

            <p className="text-sm text-gray-400">
              <span className="font-bold"> Academic Thesis: </span>
              Enhancing Medical Image Segmentation With Parameter-Efficient
              Involutional Neural Networks And Diverse Datasets.
              <span className="font-bold"> (Ongoing for publication)</span>
            </p>
          </div>
        </div>
      </motion.p>
    </div>
  );
}
