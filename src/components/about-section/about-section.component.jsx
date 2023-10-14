import { React, useState } from "react";

import TabButton from "../tabButton/tabButton.component";

import aboutImg from "../../assets/about-image.png";

import "./about-section.styles.scss";

const datas = [
  {
    title: "Skills",
    id: "skills",
    stacks: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "JavaScript",
      "React",
    ],
  },
  {
    title: "Education",
    id: "education",
    stacks: [
      "Fullstack Academy of Code",
      "University of California, Santa Cruz",
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    stacks: ["AWS Cloud Practitioner", "Google Professional Cloud Developer"],
  },
];

const AboutSection = () => {
  const [data, setData] = useState(datas[0].stacks);

  const handleChange = (data) => {
    setData(data);
  };

  // console.log(data);

  return (
    <div className="about">
      <div className="about__img-wrapper">
        <img className="about__img" src={aboutImg} alt="about_image" />
      </div>
      <div className="about__info">
        <h2 className="about__title">About me</h2>
        <p className="about__subtitle">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and I
          am excited to work with others to create amazing applications.
        </p>
        <div className="about__tabs">
          {datas.map((data) => {
            return (
              <TabButton
                key={data.id}
                change={() => handleChange(data.stacks)}
                data={data}
              />
            );
          })}
        </div>
        <ul className="about__text">
          {data.map((stack, index) => {
            return (
              <li className="about__text-item" key={index}>
                {stack}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
