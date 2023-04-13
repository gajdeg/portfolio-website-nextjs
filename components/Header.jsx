import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

export default function Header(props) {
  return (
    <header className="fixed w-100 p-5 top-0 flex justify-between mx-auto z-20 items-center bg-[#201a26]">
      {/*Social Icons Motion Div*/}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <SocialIcon
          className="hover:scale-125 duration-300 hover:duration-300 "
          url="https://github.com/ger11kadiu"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:scale-125 duration-300 hover:duration-300 "
          url="https://www.linkedin.com/in/geri-kadiu-b853451a7/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:scale-125 duration-300 hover:duration-300 "
          url="https://t.me/ger11k"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      {/*Menu Motion Div*/}
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:flex"
      >
        <Link href="/#about" scroll={false}>
          <button className="menuItem">About</button>
        </Link>
        <Link href="/#skills" scroll={false}>
          <button className="menuItem">Skills</button>
        </Link>
        <Link href="/#experiences" scroll={false}>
          <button className="menuItem">Experience</button>
        </Link>
        <Link href="/#projects" scroll={false}>
          <button className="menuItem">Projects</button>
        </Link>
      </motion.div>
      {/*Contact Me Motion Div*/}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex"
      >
        <Link href="/#contact" scroll={false}>
          <div className="hover:scale-125 duration-300 hover:duration-300 cursor-pointer flex">
            <div className="text-2xl">
              <FiMail />
            </div>
            <div className="px-2 uppercase hidden md:inline-flex text-base text-gray-400">
              Contact
            </div>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
