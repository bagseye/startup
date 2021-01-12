import React from "react"
import "./reset.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SEO from "../components/Seo/seo"
import GlobalStyles from "../styles/GlobalStyles"
import TypographyStyles from "../styles/TypographyStyles"
import Logo from "../images/startup-logo.svg"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <TypographyStyles />
      <Navbar Logo={Logo} />
      <div className="layout">{children}</div>
      <Footer Logo={Logo} />
    </>
  )
}

export default Layout
