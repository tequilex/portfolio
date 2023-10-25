import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as VkLogo } from "../../assets/vk-circled.svg";
import { ReactComponent as WhatsAppLogo } from "../../assets/whatsapp.svg";
import { ReactComponent as TelegramLogo } from "../../assets/telegram-app.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin.svg";

import Form from "../form/form.component";

import "./contact-section.styles.scss";

const variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="contacts"
      id="contacts"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ delay: 0.5 }}
    >
      <div className="contacts__wrapper">
        <div className="contacts__title">Контакты</div>
        <p className="contacts__text">
          В настоящее время я ищу новые возможности, мой почтовый ящик всегда
          открыт. Независимо от того, есть ли у вас вопрос или вы просто хотите
          поздороваться, я сделаю все возможное, чтобы ответить вам!
        </p>
        <ul className="contacts__list">
          <li className="contacts__item">
            <a
              href="https://github.com/tequilex"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo />
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://vk.com/patya23" target="_blank" rel="noreferrer">
              <VkLogo />
            </a>
          </li>
          <li className="contacts__item">
            <a
              href="https://api.whatsapp.com/send?phone=79182005354"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppLogo />
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://t.me/tequilex" target="_blank" rel="noreferrer">
              <TelegramLogo />
            </a>
          </li>
          <li className="contacts__item">
            <a
              href="https://github.com/tequilex"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogo />
            </a>
          </li>
        </ul>
      </div>
      <Form />
    </motion.div>
  );
};
export default ContactSection;
