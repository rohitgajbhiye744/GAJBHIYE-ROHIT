import { HERO } from "../constants";
import { motion } from "framer-motion";
import carlImg from '../assets/carl.jpg';

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">
          {HERO.description}
        </p>
        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1usjhzOVT6btAUJrJJ4KXEPqaWyJ3pto_/view?usp=sharing" // Update this path to the actual resume file
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 text-lg font-semibold text-white rounded-lg border border-stone-50/30 bg-black/20 hover:bg-gray-600 hover:transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={carlImg}
          width={550}
          alt="Rohit Gajbhiye"
          className="rounded-3xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
