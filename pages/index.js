import Head from "next/head";
import { Rajdhani } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ParticleBackground from "@/components/ParticleBg";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Experiences from "@/components/experiences/Experiences";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "600" });
export default function Home() {
  return (
    <div
      style={rajdhani.style}
      className=" text-white snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden"
    >
      <ParticleBackground />

      <Head>
        <title>Geri`s Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="">
        <Skills />
      </section>
      {/* Experience */}
      <section id="experiences" className="">
        <Experiences />
      </section>
      {/* Projects */}
      <section id="projects" className="">
        <Projects />
      </section>
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
