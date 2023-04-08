import Head from "next/head";
import { Rajdhani } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Link from "next/link";
import Image from "next/image";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "600" });
export default function Home() {
  return (
    <div
      style={rajdhani.style}
      className="bg-[#201a26] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0"
    >
      <Head>
        <title>Geri`s Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="s">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me*/}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/../public/profilePic.jpg"
              width={40}
              height={40}
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
