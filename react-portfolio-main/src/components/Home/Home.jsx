import React from "react";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section className={styles.container} id="home">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            className={styles.imageDescription}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Purpose of Practicum
          </p>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            As a pioneering intern and Front-end Developer at Studio Pinya,my
            role is to develop a website that enables easy uploading and sharing
            of novels and comics. My goal is to create an intuitive, engaging
            platform that connects creators with a global audience, enhancing
            the digital storytelling experience. This project not only aligns
            with Studio Pinya's vision to innovate in digital publishing but
            also provides me with significant experience in web development and
            design.
          </p>
          <p
            className={styles.imageDescription}
            style={{ marginTop: "100px", marginBottom: "20px" }}
          >
            Program & Degree
          </p>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Pursuing a Bachelor of Science in Information Technology (BSIT), my
            program focuses on equipping students with a broad range of
            technical and analytical skills required in the IT industry. It
            covers fundamental areas such as software development, network
            administration, web development, and database management. The
            curriculum blends theoretical knowledge with practical application,
            preparing us for both current technological demands and future
            advancements. Through coursework, hands-on projects, and
            internships, the program emphasizes problem-solving, technical
            proficiency, and effective communication, aiming to produce
            well-rounded IT professionals ready for diverse technology-related
            careers.
          </p>
        </div>
      </div>
    </section>
  );
};
