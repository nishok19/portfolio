import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const MainPage = ({ menuOpened }: any) => {
  return (
    <div className="container">
      <Home menuOpened={menuOpened} />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainPage;
