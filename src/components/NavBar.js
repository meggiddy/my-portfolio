import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import logo from "./images/MaggieLogo.png";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-72 -my-10" />
        <div className="ml-auto">
          <Nav>
            <Bars onClick={toggleMenu}  />
            <NavMenu show={showMenu}>
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
              <NavLink to="/projects" activeclassname="active">
                Projects
              </NavLink>
              <NavLink to="/contact" activeclassname="active">
                Contact Me
              </NavLink>
              <NavLink to="/blog" activeclassname="active">
                Blog
              </NavLink>
              <a
                href="https://www.linkedin.com/in/maggie-muriithi/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-2xl ml-4" />
              </a>
              <a
                href="https://github.com/meggiddy"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-2xl ml-4" />
              </a>
            </NavMenu>
          </Nav>
        </div>
      </div>
      <hr className="my-2 border-white" />
    </>
  );
}

export default NavBar;
