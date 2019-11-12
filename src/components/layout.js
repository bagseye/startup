import React from "react"
import styled from "styled-components"
import "typeface-gothic-a1"
import "./reset.css"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <div className="layout">{children}</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
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
`

export default Layout
