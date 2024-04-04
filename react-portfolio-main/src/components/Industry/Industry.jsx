import React from "react";
import styles from "./Industry.module.css";
import { getImageUrl } from "../../utils";

export const Industry = () => {
  return (
    <section className={styles.container} id="industry">
      <h2 className={styles.title}>Industry</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("Industry/pinya.jpg")}
          className={styles.aboutImage}
        />
        <p className={styles.imageDescription}>
        Situated in Cebu, Philippines, Studio Pinya has been revolutionizing webtoon storytelling since 2017. Founded by two college friends with a shared passion for comics, the studio blends Filipino artistry and narratives to create unique webtoons. Beyond producing captivating stories, Studio Pinya aims to elevate Filipino talent on a global stage, offering local artists a platform to turn their passions into careers. It stands as a testament to innovation, cultural storytelling, and the power of Filipino creativity, making significant impacts both locally and internationally.        </p>
      </div>
    </section>
  );
};