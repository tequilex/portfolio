import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ReactComponent as Brackets } from "../../assets/brackets.svg";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as Click } from "../../assets/click.svg";
import "./project-card.styles.scss";

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("project__description");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { title, description, image, gitUrl, previewUrl } = project;

  const activeToggler = () => {
    if (!open) {
      setIsActive("project__description active");
    } else {
      setIsActive("project__description");
    }
    setOpen(!open);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className="project__wrapper"
      transition={{ duration: 0.3, delay: index * 0.3 }}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="project__img-container">
        <Click className="click" />
        <div className="overlay">
          <a href={gitUrl} className="link" target="_blank" rel="noreferrer">
            <Brackets className="icon__url" />
          </a>
          {previewUrl && (
            <a
              href={previewUrl}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <Eye className="icon__url" />
            </a>
          )}
        </div>
        <img className="project__img" src={image} alt={`${title}`} />
      </div>
      <div className="project__title">
        {title}
      </div>
      <div className={isActive}>{description}</div>
      {!open ? (
        <div onClick={activeToggler} className="toggle">Развернуть</div>
      ) : (
        <div onClick={activeToggler} className="toggle">Свернуть</div>
      )}
    </motion.div>
  );
};
export default ProjectCard;
