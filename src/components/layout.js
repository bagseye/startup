import React from "react"
import "./reset.css"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"
import SEO from "../components/Seo/seo"
import { GlobalStyles } from "../styles/GlobalStyles"
import { TypographyStyles } from "../styles/TypographyStyles"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <TypographyStyles />
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
