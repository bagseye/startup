import React, { useState } from "react"
import { mainMenuItems } from "../../constants/links"
import { NavbarStyles } from "./NavbarStyles"
const Navbar = ({ Logo }) => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavbarStyles>
      <div className="masthead flex-container">
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
        <h2 className="navbar__logo">Startup</h2>
      </div>
      <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
        {mainMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={`#${item.text}`}>{item.text}</a>
            </li>
          )
        })}
      </ul>
    </NavbarStyles>
  )
}

export default Navbar
