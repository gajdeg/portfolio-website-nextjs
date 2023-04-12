import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero(props) {
  const [text, count] = useTypewriter({
    words: ["Hi There!", "I`m Geri Kadiu", "<FrontEndDeveloper />"],
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
          priority={true}
        />
      </div>
      <div className="z-19">
        <h2 className="text-md uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Developer
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </motion.div>
  );
}

export default Hero;
