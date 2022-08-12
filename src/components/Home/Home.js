import "./Home.scss";

import Hero from "./Hero/Hero";
import Project1 from "./Projects/Project1";
import Project23 from "./Projects/Project23";
import SkillGrid from "./SkillGrid/SkillGrid";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      {/* <Nav /> */}
      <Hero />
      <Project1 />
      <SkillGrid />
      <Project23 />
      <Footer />
    </div>
  );
};

export default Home;
