import React from "react";
import { DiReact, DiMongodb, DiGit, DiVisualstudio } from "react-icons/di";
import { IconContext } from "react-icons";
import {
  SiFigma,
  SiFirebase,
  SiLinux,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiPostman,
  SiVercel,
} from "react-icons/si";

export default function Tools() {
  return (
    <IconContext.Provider value={{ className: "react-icons", size: "5rem" }}>
      <ul className="flex flex-wrap justify-center lg:flex-nowrap">
        <li className="skill-card">
          <DiVisualstudio />
        </li>
        <li className="skill-card">
          <SiPostman />
        </li>
        <li className="skill-card">
          <SiVercel />
        </li>
        <li className="skill-card">
          <SiLinux />
        </li>
        <li className="skill-card">
          <SiFigma />
        </li>
        <li className="skill-card">
          <SiMongodb />
        </li>
      </ul>
    </IconContext.Provider>
  );
}
