import React, { useState } from "react"
import links from "../../constants/links"
import Logo from "../../images/startup-logo.svg"
import { Link, animateScroll as scroll } from "react-scroll"
import { NavStyles } from "../../styles/navStyles"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavStyles>
      <div className="masthead flex-container">
        <img src={Logo} alt="Startup Logo" />
        <button
          className={isOpen ? "toggle-btn toggle-btn-active" : "toggle-btn"}
          type="button"
          onClick={toggleNav}
          aria-label="Menu Button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                activeClass="active"
                to={item.text}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </NavStyles>
  )
}

export default Navbar
