import React from "react";
import ProjectCard from "./ProjectCard";
import StreamyPic from "../../assets/Streamy1.png";
import ParsecPic from "../../assets/Parsec1.png";
import MeetupsPic from "../../assets/Meetups1.png";

export default function Projects() {
  return (
    <div className="flex flex-col text-center pt-24 md:mt-0 items-center">
      <h3 className="text-4xl text-zinc-400 ">
        My Recent <span className="text-white">Works</span>
      </h3>
      <ul className="flex flex-col sm:flex-row w-3/4">
        <ProjectCard imgUrl={StreamyPic} title="Streamy" />
        <ProjectCard imgUrl={MeetupsPic} title="Meetups" />
        <ProjectCard imgUrl={ParsecPic} title="Dashboard" />
      </ul>
    </div>
  );
}
