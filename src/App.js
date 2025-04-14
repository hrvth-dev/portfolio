import { useState } from "react";
import TerminalIntro from "./components/Terminal";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      {showMainContent ? (
        <>
          <Header />
          <AboutMe />
          <Skills />
          <Projects />
        </>
      ) : (
        <TerminalIntro onFinish={() => setShowMainContent(true)} onSkip={() => setShowMainContent(true)} />
      )}
    </>
  );
}
