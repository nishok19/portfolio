import "./Nav.scss";
import LinkedinVect from "../../assets/images/linkedin-vector.svg";
import InstaVect from "../../assets/images/insta-vector.svg";
import MailIcon from "../../assets/svg/mail-icon.svg";

import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navAnim = useSpring({
    from: { opacity: 0, x: 30 },
    to: { opacity: 1, x: 0 },
    config: { duration: 600 },
  });

  const socioAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400 },
  });

  return (
    <div className="nav-container">
      <header>
        <animated.a style={socioAnim} href="/" className="logo">
          Nishok ;)
        </animated.a>

        <nav>
          <ul>
            <animated.li style={navAnim}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activeNavLink" : "")}
              >
                Home
              </NavLink>
            </animated.li>
            <animated.li style={navAnim}>
              {/* <a href="/"> */}
              <NavLink
                to="mywork"
                className={({ isActive }) => (isActive ? "activeNavLink" : "")}
              >
                My work
              </NavLink>
              {/* </a> */}
            </animated.li>
            <animated.li style={navAnim}>
              <a href="/">My skills</a>
            </animated.li>
            <animated.li style={navAnim}>
              <a href="/">Hire me</a>
            </animated.li>
          </ul>
        </nav>
      </header>
      <div className="social-header">
        <ul>
          <animated.li style={socioAnim}>
            <a href="https://www.linkedin.com/in/nishok-maharaaj-835867196/">
              <img src={LinkedinVect} alt="LinkedIn" />
            </a>
          </animated.li>
          <animated.li style={socioAnim}>
            <a href="/">
              <img src={InstaVect} alt="Instagram" />
            </a>
          </animated.li>
          <animated.li style={socioAnim}>
            <a href="/">
              <img src={MailIcon} alt="Mail" />
            </a>
          </animated.li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
