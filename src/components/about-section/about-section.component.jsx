import { React, useState } from "react";

import TabButton from "../tabButton/tabButton.component";

import aboutImg from "../../assets/about-image.png";

import "./about-section.styles.scss";

const datas = [
  {
    title: "Навыки",
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
    title: "Образование",
    id: "education",
    stacks: ["Full stack разработчик LOFTSCHOOL", "Самообразование"],
  },
  {
    title: "Сертификаты",
    id: "certifications",
    stacks: [
      "Основы верстки сайтов 'LOFTSCHOOL' c 18.04.2022 по 22.05.2022",
      "Веб-разработка для начинающих 'LOFTSCHOOL' с 06.06.2022 по 17.07.2022",
      "Комплексное обучение JavaScript 'LOFTSCHOOL' c 01.08.2022 по 18.09.2022",
      "Vue.js Продвинутая веб разработка 'LOFTSCHOOL' с 26.09.2022 по 06.11.2022",
      "React.js Разработка веб-приложений 'LOFTSCHOOL' с 14.11.2022 по 25.12.2022",
      "Node.js Серверный JavaScript 'LOFTSCHOOL' с 09.01.2023 по 19.02.2023",
      "Комплексное обучение PHP 'LOFTSCHOOL' с 27.02.2023 по 09.04.2023",
    ],
  },
];

const AboutSection = () => {
  const [isActive, setActive] = useState('tab__button-footer active')
  const [data, setData] = useState(datas[0].stacks);

  const handleChange = (data) => {
    setData(data);
  };


  return (
    <div className="about" id="about">
      <div className="about__img-wrapper">
        <img className="about__img" src={aboutImg} alt="about_image" />
      </div>
      <div className="about__info">
        <h2 className="about__title">Обо мне</h2>
        <p className="about__subtitle">
          Я веб-разработчик полного цикла со страстью к созданию интерактивных и
          адаптивных веб-приложений. У меня есть опыт работы с JavaScript,
          React, Redux, Node.js , Express, PostgreSQL, Sequelize, HTML, CSS и
          Git. Я быстро учусь и всегда стремлюсь расширить свои знания и навыки.
          Я командный игрок, и мне не терпится поработать с другими над
          созданием потрясающих приложений.
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
