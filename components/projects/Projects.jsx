import React from "react";
import ProjectCard from "./ProjectCard";
import StreamyPic from "../../assets/Streamy1.png";
import ParsecPic from "../../assets/Parsec1.png";
import MeetupsPic from "../../assets/Meetups1.png";

export default function Projects() {
  return (
    <div className="flex flex-col text-center md:mt-0 items-center p-24 justify-center">
      <h3 className="text-4xl text-zinc-400 pb-10">
        My Recent <span className="text-white">Works</span>
      </h3>
      <ul className="flex flex-col sm:flex-row">
        <ProjectCard imgUrl={StreamyPic} title="Streamy" />
        <ProjectCard imgUrl={MeetupsPic} title="Meetups" />
        <ProjectCard imgUrl={ParsecPic} title="Dashboard" />
      </ul>
    </div>
  );
}
