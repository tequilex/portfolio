import React from "react";

import ProjectCard from "../project-card/project-card.component";

import "./projects-section.component.scss";

const projects = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Portfolio Website",
    description: "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  return (
    <div className="projects">
      <h2 className="projects__title">My Projects</h2>
      <div className="projects__cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;



