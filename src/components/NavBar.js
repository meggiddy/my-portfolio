import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import logo from "./images/MaggieLogo.png";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="">
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-56 -my-10" />
        </NavLink>

        <div className="relative top-[-6px] flex ml-auto gap-2 items-center">
          {" "}
          <a
            href="https://www.linkedin.com/in/maggie-muriithi/"
            target="_blank"
            rel="noreferrer"
            className={"hover:animate-bounce hover:p-3 hover:text-sky-300"}
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/meggiddy"
            target="_blank"
            rel="noreferrer"
            className={"hover:animate-bounce hover:p-3 hover:text-sky-300"}
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
        <div className="ml-auto">
          <Nav>
            <Bars onClick={toggleMenu} />
            <NavMenu
              show={showMenu}
              className={` ${showMenu ? "rounded-lg bg-white/70 mx-4" : ""}`}
            >
              <NavLink
                to="/about"
                activeclassname="active"
                onClick={closeMenu}
                className={"hover:animate-bounce hover:p-3 hover:text-sky-400"}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                activeclassname="active"
                onClick={closeMenu}
                className={"hover:animate-bounce hover:p-3 hover:text-sky-400"}
              >
                Projects
              </NavLink>
              <NavLink
                to="/resume"
                activeclassname="active"
                onClick={closeMenu}
                className={"hover:animate-bounce hover:p-3 hover:text-sky-400"}
              >
                Resume
              </NavLink>
              <NavLink
                to="/contacts"
                activeclassname="active"
                onClick={closeMenu}
                className={"hover:animate-bounce hover:p-3 hover:text-sky-400"}
              >
                Contact Me
              </NavLink>
              <NavLink
                to="/blog"
                activeclassname="active"
                onClick={closeMenu}
                className={"hover:animate-bounce hover:p-3 hover:text-sky-400"}
              >
                Blog
              </NavLink>
            </NavMenu>
          </Nav>
        </div>
      </div>
      <hr className="my-2 border-white" />
    </div>
  );
}

export default NavBar;
