import Image from "next/image";
import React from "react";
import logo from "../assets/Commit.png";

export default function CommitLogo() {
  return (
    <div>
      <Image src={logo} alt="Commit s.r.l" />
    </div>
  );
}
