import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full
    px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] text-gray-500
        text-2xl"
      >
        About
      </h3>

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
        className="mt-24 md:mb-0 flex-shrink-0 w-52 h-52 md:w-[300px] md:h-[300px]
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
        className="space-y-3 px-0 md:px-10"
      >
        <h4 className="text-xl font-semibold ">
          Here is a<span className="font-bold"> little </span>
          background
        </h4>
        <p className="text-base">
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
    </motion.div>
  );
}
