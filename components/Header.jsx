import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Header(props) {
  return (
    <header className="fixed p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/*Social Icons*/}
        <SocialIcon
          url="https://github.com/ger11kadiu"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/geri-kadiu-b853451a7/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        className=" fixed p-5 top-0 right-0"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
