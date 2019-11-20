import React from "react"
import styled from "styled-components"
import "typeface-gothic-a1"
import "./reset.css"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  font-family: "Gothic A1", sans-serif;
  color: #fff;
  background-color: #060c21;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 1.4;
  }

  h1,
  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.4;
  }

  .content-container {
    margin: 0 auto;
    width: 100%;
    max-width: 850px;
  }

  .flex-container {
    display: flex;

    &.trio-block {
      flex-direction: column;

      @media (min-width: 992px) {
        flex-direction: row;
      }
    }
  }

  .section-padding {
    padding: 100px 30px;
  }

  .text-center {
    text-align: center;
  }
`

export default Layout
