import styles from "./App.module.css";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { School } from "./components/School/School";
import { Industry } from "./components/Industry/Industry";
import { Ojt } from "./components/Ojt/Ojt";
import { Training } from "./components/Training/Training";
import { Tour } from "./components/Tour/Tour";
import { Research } from "./components/Research/Research";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";




function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Home/>
      <About />
      <School/>
      <Industry/>
      <Ojt/>
      <Training/>
      <Tour/>
      <Research/>
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
