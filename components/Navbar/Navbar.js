import Image from "next/image";
import "./Nav.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <header>
        <Link href="/" className="logo">
          Nishok ;)
        </Link>

        <nav>
          <ul>
            <li>
              <Link
                href="/"
                // className={({ isActive }) => (isActive ? "activeNavLink" : "")}
              >
                Home
              </Link>
            </li>
            <li>
              {/* <Link href="/"> */}
              <Link
                href="/mywork"
                // className={({ isActive }) => (isActive ? "activeNavLink" : "")}
              >
                My work
              </Link>
              {/* </Link> */}
            </li>
            <li>
              <Link href="/">My skills</Link>
            </li>
            <li>
              <Link href="/">Hire me</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="social-header">
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/nishok-maharaaj-835867196/">
              <Image
                width={10}
                height={10}
                src="/images/linkedin-vector.svg"
                alt="LinkedIn"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                width={10}
                height={10}
                src="/images/insta-vector.svg"
                alt="Instagram"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                width={10}
                height={10}
                src="/images/mail-icon.svg"
                alt="Mail"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
