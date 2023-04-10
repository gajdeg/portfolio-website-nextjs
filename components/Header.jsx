import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Header(props) {
  return (
    <header className="fixed w-100 p-5 top-0 flex items-start justify-between mx-auto z-20 xl:items-center bg-[#201a26]">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/*Social Icons*/}
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

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hover:scale-125 duration-300 hover:duration-300 cursor-pointer">
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Contact
          </p>
        </div>
      </motion.div>
    </header>
  );
}
