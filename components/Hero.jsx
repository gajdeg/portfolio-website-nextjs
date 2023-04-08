import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Hero(props) {
  const router = useRouter();

  const handleScroll = (e) => {
    e.preventDefault();
    const hash = e.target.innerHTML;
    const element = document.querySelector(`#${hash}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [text, count] = useTypewriter({
    words: ["Hi I`m Geri Kadiu", "<FrontEndDeveloper />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <div className="relative mx-auto object-cover">
        <Image
          src="/../public/profilePic.jpg"
          alt="Profile picture"
          width={128}
          height={128}
          style={{ borderRadius: "50%" }}
          priority={true}
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <button className="heroButton" onClick={handleScroll}>
            about
          </button>

          <button className="heroButton" onClick={handleScroll}>
            experience
          </button>
          <button className="heroButton" onClick={handleScroll}>
            skills
          </button>

          <button className="heroButton" onClick={handleScroll}>
            projects
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
