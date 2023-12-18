import ProjectCard from "../project-card/project-card.component";

import "./projects-section.component.scss";

const projects = [
  {
    id: 1,
    title: "React Loft-Taxi",
    description:
      "Клиент приложения для заказа такси. Доступный функционал: авторизация, заполнение платежных данных, запрос на построение маршрута по заданным адресам, построение маршрута на карте. Адреса и данные для авторизации заданы на сервере. Флаг авторизации и платежные данные сохраняются в localstorage.",
    image: "./images/projects/taxi.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/loft-taxi-react",
    previewUrl: "https://loft-taxi-react.vercel.app/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description:
      "Сайт визитка с проектами и информацией о разработчике. Доступна навигация, бургер-меню на мобильных версиях и связь с разработчиком через форму с помощью сервиса emailjs-com",
    image: "./images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/portfolio",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Vue Gitogram",
    description:
      "Клиент приложения для отслеживания и взаимодействия с репозиториями. Необходима учетная запись GitHub. Хранение данных осуществляется средствами Vuex. За маршрутизацию по страницам сайта отвечает vue-router. В шапке на главной странице располагаются сторис из файлов Readme репозиториев, находящихся в тренде за последнюю неделю. При нажатии на стори появляются слайды с Readme с возможностью поставить STAR этому репозиторию. Понравившиеся репозитории отображаются на главной странице, а также на странице пользователя в разделе Following.",
    image: "./images/projects/gitogram.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/gitogram",
    previewUrl: "https://tequilex.github.io/gitogram/dist/",
  },
  {
    id: 4,
    title: "VanillaJS SurfBoards",
    description:
      "Surfboard - Лендинг для интернет-магазина. Perfect Pixel. Адаптивная верстка (по ТЗ, под ширины экранов: 768px и 480px). Формирование структуры CSS, с входным файлом стилей, с применением SCSS. Создание виджетов на странице: аккордеон, слайдеры, модальное окно - с реализацией на JavaScript и jQuery. Верстка формы заказа с использованием Ajax, обработка ответа от сервера. Подключение Яндекс.Карты. Реализация видео-плеера при помощи HTML5 Video API. Реализация функционала переключения секций: OnePageScroll. Сборка проекта в Gulp.",
    image: "./images/projects/surf.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/surffboards",
    previewUrl: "https://tequilex.github.io/surffboards/dist/",
  },
  {
    id: 5,
    title: "First Project",
    description:
      "Описание проекта и функционал: Верстка десктопной версии многостраничного сайта по макету в Figma, с использованием методологии БЭМ и Flexbox. Приведение верстки в соответствии с Perfect Pixel. Работа со шрифтами, анимациями CSS, подключение иконок к проекту, реализация динамических элементов страниц, верстка формы, изучение и применение частых приемов верстки.",
    image: "./images/projects/air-asia.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/airasia",
    previewUrl: "https://tequilex.github.io/airasia/",
  },
  {
    id: 6,
    title: "Custom Build Webpack",
    description:
      "Собственная сборка вебпак для использования при разработке проектов. Поддерживает работу с less, saass, typescript... Для разработки установлен webpack-dev-server. Имеет два вида сборки prod и dev.",
    image: "./images/projects/webpack.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/webpack-tequilex",
  },
  {
    id: 7,
    title: "AmiraFest - freelance project",
    description:
      "Веб-приложение для участников фестиваля. Создана админ-панель, для отображения информации о зарегистрированных участниках фестиваля (выбранные пакеты и их стоимость, личная информация и другое). Использовалась база данных FireBase.",
    image: "./images/projects/amirafest.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/mirafest",
    previewUrl: "https://amirafest.vercel.app/",
  },
  {
    id: 8,
    title: "Crown-clothing",
    description:
      "Учебный проект crwn-clothing. Реализация интернет магазина одежды. Реализована навигация, отображение товаров из базы данных, возможность положить товары в корзину, с подсчетом общей стоимости. Использована бд google firebase.",
    image: "./images/projects/crwn-clothing.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tequilex/crwn-clothing",
    previewUrl: "#",
    
  },
  {
    id: 9,
    title: "В работе",
    description:
      "Проект находится в разработке",
    image: "./images/projects/plug.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">Мои проекты</h2>
      <ul className="projects__cards">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
