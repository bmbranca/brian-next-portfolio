import React from "react";
import Image from "next/image";
import { projectData } from "./project-data";
import { Project, IconContainer, Git, ViewSite } from "./styled";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <Project>
      <Image
        src={projectData[0].image}
        width="400"
        height="500"
        alt="React E-Commerce Prject"
      />
      <h3 style={{ marginBottom: "0" }}>{projectData[0].name}</h3>
      <h4 style={{ marginTop: "0" }}>{projectData[0].tech}</h4>
      <IconContainer>
        <Link href="/projects">
          <a>
            <Git />
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <ViewSite />
          </a>
        </Link>
      </IconContainer>
    </Project>
  );
}
