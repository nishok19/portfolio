import "./Footer.scss";
// import heroGraphic from "../../../assets/images/hero-graphic.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="hero-graphic-footer">
        {/* <img src={heroGraphic} alt="design" /> */}
      </div>
      <div className="footer-ques">
        Like what you see? <span>Hire me</span>
      </div>
      <div className="footer-nav">
        <span className="footer-logo">
          <a href="/">Orion;)</a>
        </span>
        <ul>
          <li>
            <a href="/">My work</a>
          </li>
          <li>
            <a href="/">My skills</a>
          </li>
          <li>
            <a href="/">Hire me</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
