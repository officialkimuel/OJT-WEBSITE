import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kimuel Lagnason</h1>
        <p className={styles.description}>
        As a 22-year-old Information Technology student at Saint Columban College in Pagadian City, I'm currently enhancing my skills as a Front-End Developer intern at Studio Pinya. I'm focused on contributing innovative design solutions and employing the latest web technologies for our team's success.
        </p>
        <a href="mailto:officialkimuel9@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    
  );
};
