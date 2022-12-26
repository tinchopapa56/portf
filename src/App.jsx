import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/portfolio/ProjectList";
import { ThemeContext } from "./context";

const App = () => {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div>
      {/* // style={{
      //   backgroundColor: darkMode ? "#222" : "white",
      //   color: darkMode && "white",
      // }}
    // > */}
      {/* <Toggle /> */}
      <Intro />
      <ProjectList />
      <About />
      <Contact />
    </div>
  );
};

export default App;
