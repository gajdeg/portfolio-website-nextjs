import Head from "next/head";
import { Rajdhani } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ParticleBackground from "@/components/ParticleBg";
import Skills from "@/components/skills/Skills";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "600" });
export default function Home() {
  return (
    <div
      style={rajdhani.style}
      className=" text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0"
    >
      <ParticleBackground />

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
      <section id="skills" className="">
        <Skills />
      </section>
      {/* Projects */}
      {/* Contact Me*/}
      {/* <Link href="#hero">
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
      </Link> */}
    </div>
  );
}
