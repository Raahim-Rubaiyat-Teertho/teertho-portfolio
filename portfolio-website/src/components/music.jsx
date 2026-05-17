import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Music() {
  return (
    <div
      id="music"
      className="h-auto mb-30 md:mb-40 w-full flex flex-col items-center"
    >
      <motion.p
        className=" text-center font-space sm:px-52 md:px-72 px-7 text-sm"
        initial={{ opacity: 0, y: -50 }} // Start above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 1, delay: 0 }} // Smooth animation
        viewport={{ once: true, amount: 0.3 }} // Starts after typing finishes
      >
        <h1 className="text-6xl font-space pb-10 pt-10">My Music</h1>
        <p className="mb-10">
          Alongside development, I spend most of my time playing guitar and
          working on music projects. Here's a look at some of my bands that I
          play in.
        </p>
      </motion.p>

      <motion.p
        // className=" text-center font-space sm:px-52 md:px-72 px-7 text-sm"
        initial={{ opacity: 0, y: 50 }} // Start above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 1, delay: 0 }} // Smooth animation
        viewport={{ once: true, amount: 0.3 }} // Starts after typing finishes
      >
        <div className="flex flex-col md:grid grid-cols-2 gap-3">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/2syAlw5ORkQnNKeo717bip?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />

          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/7osq8zc4aK3JlQlMVWBqPO?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />

          <div className="col-span-2 flex justify-center">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/3qskfyIRwZtp6uIfj6OFcL?utm_source=generator"
              width="md:75%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </motion.p>
    </div>
  );
}
