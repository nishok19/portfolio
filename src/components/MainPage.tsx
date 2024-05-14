import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const MainPage = ({ menuOpened, setSection }: any) => {
  return (
    <div className="container">
      <Home setSection={setSection} menuOpened={menuOpened} />
      <Skills setSection={setSection} />
      <Projects setSection={setSection} />
      <Contact setSection={setSection} />
    </div>
  );
};

export default MainPage;
