import Image from "next/image";
import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <Image
        src={props.imgUrl}
        alt="Profile picture"
        width={300}
        height={300}
        priority={true}
      />
      <div className="pt-10">
        <h1 className="text-4xl">{props.title}</h1>
        <p className="text-left text-zinc-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
          suscipit tellus mauris a diam maecenas.
        </p>
      </div>
    </div>
  );
}
