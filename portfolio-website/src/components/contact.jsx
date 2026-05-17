import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import linkedin from "/linkedin.png";
import mail from "/mail.png";

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-auto mb-30 md:mb-40 w-full flex flex-col items-center"
    >
      <motion.p
        className=" text-center font-space sm:px-52 md:px-72 px-7 text-sm"
        initial={{ opacity: 0, y: -50 }} // Start above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 1, delay: 0 }} // Smooth animation
        viewport={{ once: true, amount: 0.3 }} // Starts after typing finishes
      >
        <h1 className="text-6xl font-space pb-10 pt-10">Contact</h1>
        <p className="mb-10">
          Whether it’s a collaboration, opportunity, or just a conversation, I’d
          be happy to connect.
        </p>
      </motion.p>

      <motion.p
        // className=" text-center font-space sm:px-52 md:px-72 px-7 text-sm"
        initial={{ opacity: 0, y: 50 }} // Start above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 1, delay: 0 }} // Smooth animation
        viewport={{ once: true, amount: 0.3 }} // Starts after typing finishes
      >
        <div className="flex flex-col md:flex-row items-center gap-3">
          <a
            href="mailto:raahim.rubaiyat2021@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-blue-600 rounded-md w-fit"
          >
            <img src={mail} alt="mail" className="w-6 h-6" />

            <span>raahim.rubaiyat2021@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/raahim-rubaiyat-teertho-7ab41428b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-blue-600 rounded-md"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />

            <span>LinkedIn</span>
          </a>
        </div>
      </motion.p>
    </div>
  );
}
