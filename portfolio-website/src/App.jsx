import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AboutMe from "./components/about";
import { BackgroundBeams } from "./components/ui/background-beams";
import Intro from "./components/intro";
import Experience from "./components/experience";
import Navbar from "./components/ui/navbar";
import Projects from "./components/projects";
import Music from "./components/music";
import Footer from "./components/ui/footer";
import Contact from "./components/contact";
import Education from "./components/education";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <title>Teertho | Portfolio</title>
      <Navbar />
      <Intro />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <BackgroundBeams />
      <Music />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
