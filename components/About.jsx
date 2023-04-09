import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
export default function About() {
  return (
    <div
      className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full
    px-10 justify-evenly mx-auto items-center"
    >
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/aboutPic.jpg"
        alt="user picture"
        className="mt-20 md:mb-0 flex-shrink-0 w-52 h-52 md:w-[300px] md:h-[300px]
        rounded-full object-cover md:rounded-lg 
        xl:w-[400px] xl:h-[400px] "
      />
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-3 px-0 md:px-10 text-left"
      >
        <p className=" text-zinc-400 sm:text-[18px] text-[14px] text-secondary edison uppercase tracking-wider">
          Introduction
        </p>
        <h4 className="text-4xl font-semibold ">Overview.</h4>
        <p className=" text-zinc-400 text-base sm:text-lg md:text-xl lg:text-2xl">
          As a front-end developer, my expertise lies in creating and
          maintaining user interfaces for web applications. I possess a solid
          understanding of HTML, CSS, and JavaScript and specialize in popular
          front-end frameworks like React. My proficiency in JavaScript allows
          me to create dynamic and interactive interfaces, while my experience
          with React enables me to build scalable and reusable components. I am
          also well-versed in Next.js, a framework for building server-side
          rendered React applications that provide fast-loading and SEO-friendly
          web pages. Overall, my skills in JavaScript, React, and Next.js allow
          me to create responsive and high-quality user interfaces for web
          applications.
        </p>
      </motion.div>
    </div>
  );
}
