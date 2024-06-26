import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        officialkimuel
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#school">School & Department</a>
          </li>
          <li>
            <a href="#industry">Industry</a>
          </li>
          <li>
            <a href="#ojt">OJT Blog</a>
          </li>
          <li>
            <a href="#training">Training & Seminars</a>
          </li>
          <li>
            <a href="#tour">Educational Tour</a>
          </li>
          <li>
            <a href="#research">Research Festival</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
