import React from "react";
import { IoMdSchool } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import commitLogo from "@/assets/Commit.png";
import accentureLogo from "@/assets/Accenture.png";

export default function Experiences() {
  return (
    <div className="flex flex-col items-center pt-24">
      <h3 className="text-4xl text-zinc-400 pb-10 text-center">
        Education & Work <span className="text-white">Experience</span>
      </h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#b366ff67", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #b266ff" }}
          date="09/2015 - 06/2019"
          iconStyle={{ background: "#b266ff" }}
          icon={<IoMdSchool />}>
          <h3 className="text-2xl">Hermann Gmeiner</h3>
          <span className="text-zinc-300">Computer Software Engineering</span>
          <p />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#b366ff67", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #b266ff" }}
          date="06/2021 - 08/2021"
          iconStyle={{ background: "#fff" }}
          icon={<Image src={commitLogo} alt="Commit s.r.l" />}>
          <h3 className="text-2xl">Commit s.r.l</h3>
          <span className="text-zinc-300"> Frontend Developer Internship</span>
          <p>
            Responsive Web Design · JSON · React.js · Node.js · MongoDB ·
            JavaScript · Cascading Style Sheets (CSS) · HTML
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#b366ff67", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #b266ff" }}
          date="09/2019 - 03/2023"
          iconStyle={{ background: "#b266ff" }}
          icon={<FaUniversity />}>
          <h3 className="text-2xl">Università degli Studi di Milano-Bicocca</h3>
          <span className="text-zinc-300">Bachelor`s degree, Informatics</span>
          <p />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#b366ff67", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #b266ff" }}
          date="09/2021 - 11/2024"
          iconStyle={{ background: "#fff" }}
          icon={<Image src={commitLogo} alt="Commit s.r.l" />}>
          <h3 className="text-2xl">Commit s.r.l</h3>
          <span className="text-zinc-300"> Frontend Developer</span>
          <p>
            Next.js · Git · Web Development · Tailwind CSS · JSON · React.js ·
            Node.js · Typescript · Cascading Style Sheets (CSS) · HTML
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#b366ff67", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #b266ff" }}
          date="12/2024 - Present"
          iconStyle={{ background: "#fff" }}
          icon={
            <Image
              src={accentureLogo}
              alt="Accenture Technology Solutions s.r.l"
            />
          }>
          <h3 className="text-2xl">Accenture Technology Solutions s.r.l</h3>
          <span className="text-zinc-300">Software Engineering Sr Analyst</span>
          <p>
            Azure · Git · Web Development · Material UI · JSON · React.js ·
            Node.js · Typescript · Cascading Style Sheets (CSS) · HTML
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
