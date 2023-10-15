import ProjectCard from "../project-card/project-card.component";

import "./projects-section.component.scss";

const projects = [
  {
    id: 1,
    title: "React Loft-Taxi",
    description:
      "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/taxi.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/loft-taxi-react",
    previewUrl: "https://loft-taxi-react.vercel.app/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description:
      "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/portfolio",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Vue Gitogram",
    description:
      "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/gitogram.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/gitogram",
    previewUrl: "https://tequilex.github.io/gitogram/dist/",
  },
  {
    id: 4,
    title: "VanillaJS SurfBoards",
    description:
      "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/surf.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/surffboards",
    previewUrl: "https://tequilex.github.io/surffboards/dist/",
  },
  {
    id: 5,
    title: "First Project",
    description:
      "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/air-asia.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/airasia",
    previewUrl: "https://tequilex.github.io/airasia/",
  },
  {
    id: 6,
    title: "Custom Build Webpack",
    description:
      "Project 1 description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum neque eum molestias alias, voluptatem minima vero facere doloremque dolorum? Asperiores iusto tenetur suscipit ad dolorem assumenda veniam necessitatibus fuga.",
    image: "./images/projects/webpack.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/webpack-tequilex",
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">My Projects</h2>
      <ul className="projects__cards">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
