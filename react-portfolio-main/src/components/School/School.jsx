import React from "react";
import styles from "./School.module.css";
import { getImageUrl } from "../../utils";

export const School = () => {
  return (
    <section className={styles.container} id="school">
      <h2 className={styles.title} style={{ textAlign: "center" }}>
        School & Department
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
            src={getImageUrl("school/scc.png")}
            alt="Saint Columban College"
            className={styles.image}
            style={{ marginTop: "-80px", width: "auto", height: "auto" }}
          />
          <p
            className={styles.imageDescription}
            style={{ marginTop: "-90px", marginBottom: "10px" }}
          >
            Saint Columban College
          </p>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Known to be one of the most leading institutions in Pagadian City,
            Saint Columban College, in its pursuit of academic excellence and
            character formation, has taken on the spotlight of producing
            globally-competitive graduates since its founding. As an institution
            since 1957, SCC offers the complete educational package from
            kindergarten to graduate school. Withstanding every challenge and
            adversities for 64 years and counting; SCC became not just an
            institution but a home to many SCCians.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "45%",
          }}
        >
          <img
            src={getImageUrl("school/ccs.png")}
            alt="College of Computer Studies"
            className={styles.image}
            style={{ marginTop: "-80px", width: "auto", height: "auto" }}
          />
          <p
            className={styles.imageDescription}
            style={{ marginTop: "-90px", marginBottom: "10px" }}
          >
            College of Computing Studies
          </p>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Established in 1992, the College of Computing Studies Department at
            Saint Columban College became a standout department in the 1990s.
            Offering degrees such as BSIT, BSCS, BLIS, and BSIS, it catered to
            the burgeoning need for tech professionals. Known for blending
            theory with practical skills, the department prepared students for
            the fast-evolving tech industry. Its reputation for excellence in
            computing and information technology education remains a cornerstone
            of Saint Columban College.
          </p>
        </div>
      </div>
    </section>
  );
};
