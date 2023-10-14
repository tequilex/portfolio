import "./project-card.styles.scss";

const ProjectCard = ({ project }) => {
  const { title, description, image, gitUrl, previewUrl } = project;
  return (
    <div className="project__wrapper">
      <div className="project__img-container">
        <img className="project__img" src={image} alt={`${title}`} />
      </div>
      <div className="project__title">{title}</div>
      <div className="project__description">{description}</div>
    </div>
  );
};
export default ProjectCard;
