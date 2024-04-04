import React from "react";
import styles from "./Tour.module.css";
import { getImageUrl } from "../../utils";

export const Tour = () => {
  return (
    <section className={styles.container} id="tour">
      <h2 className={styles.title} style={{ marginBottom: "20px" }}>
      Educational Tour
      </h2>
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
            maxWidth: "45%",
          }}
        >
          <img
            src={getImageUrl("sch/scc.png")}
            alt="Content"
            className={styles.image}
          />
          <p
            className={styles.imageDescription}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Coming Soon...
          </p>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Text
          </p>
        </div>
      </div>
    </section>
  );
};
