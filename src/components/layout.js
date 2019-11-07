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
  color: red;
`

export default Layout
