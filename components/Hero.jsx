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
    const hash = e.target.parentNode.hash;
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [text, count] = useTypewriter({
    words: ["Hi I`m Geri Kadiu", "<Developer />"],
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
          src="/../public/aboutPic1.png"
          alt="Profile picture"
          width={180}
          height={180}
          style={{ borderRadius: "" }}
          priority={true}
        />
      </div>
      <div className="z-20">
        <h2 className="text-md uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Developer
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 sm:flex-row flex flex-col">
          <Link href="#about" replace>
            <button className="heroButton" onClick={handleScroll}>
              About
            </button>
          </Link>
          <Link href="#skills" replace>
            <button className="heroButton" onClick={handleScroll}>
              Skills
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#about">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
