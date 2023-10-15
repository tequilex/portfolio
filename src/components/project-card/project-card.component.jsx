import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ReactComponent as Brackets } from "../../assets/brackets.svg";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import "./project-card.styles.scss";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { title, description, image, gitUrl, previewUrl } = project;

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className="project__wrapper"
      transition={{ duration: 0.3, delay: index * 0.4 }}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="project__img-container">
        <div className="overlay">
          <a href={gitUrl} className="link" target="_blank" rel="noreferrer">
            <Brackets />
          </a>
          {previewUrl && (
            <a
              href={previewUrl}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <Eye />
            </a>
          )}
        </div>
        <img className="project__img" src={image} alt={`${title}`} />
      </div>
      <div className="project__title">{title}</div>
      <div className="project__description">{description}</div>
    </motion.div>
  );
};
export default ProjectCard;
