import React from "react";
import Skill from "./Skill";
import Tools from "./Tools";

export default function Skills() {
  return (
    <div className="flex flex-col text-center md:mt-0 pt-24 justify-center items-center">
      <h3 className="text-4xl text-zinc-400 pb-10">
        Professional <span className="text-white">Skillset</span>
      </h3>
      <Skill />
      <h3 className="text-4xl text-white py-10">
        Tools <span className="text-zinc-400">I use</span>
      </h3>
      <Tools />
    </div>
  );
}
