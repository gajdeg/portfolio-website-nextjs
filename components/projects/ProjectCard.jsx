import Image from "next/image";
import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border m-2 rounded-lg">
      <Image
        src={props.imgUrl}
        alt="Profile picture"
        width={300}
        height={300}
        priority={true}
      />
      <h1 className="text-4xl pt-10">Parsec</h1>
      <p className="text-left pt-10">
        Online code and markdown editor build with react.js. Online Editor which
        supports html, css, and js code with instant view of website. Online
        markdown editor for building README file which supports GFM, Custom Html
        tags with toolbar and instant preview.Both the editor supports auto save
        of work using Local Storage
      </p>
    </div>
  );
}
