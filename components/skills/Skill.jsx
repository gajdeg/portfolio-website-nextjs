import React from "react";
import { DiReact, DiMongodb, DiGit, DiJavascript } from "react-icons/di";
import { IconContext } from "react-icons";
import { SiFirebase, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Skill() {
  return (
    <IconContext.Provider value={{ className: "react-icons", size: "5rem" }}>
      <ul className="flex flex-wrap justify-center p-12 lg:flex-nowrap">
        <li className="skill-card">
          <DiJavascript />
        </li>
        <li className="skill-card">
          <DiReact />
        </li>
        <li className="skill-card">
          <DiGit />
        </li>
        <li className="skill-card">
          <SiTailwindcss />
        </li>
        <li className="skill-card">
          <SiNextdotjs />
        </li>
        <li className="skill-card">
          <SiFirebase />
        </li>
      </ul>
    </IconContext.Provider>
  );
}
