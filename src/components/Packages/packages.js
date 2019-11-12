import React from "react"
import styled from "styled-components"

const Packages = ({ title, children }) => {
  return (
    <PackagesWrapper>
      <h2>{title}</h2>
      <div className="flex-container">{children}</div>
    </PackagesWrapper>
  )
}

const PackagesWrapper = styled.section`
  padding: 100px 30px;
  text-align: center;

  .flex-container {
    flex-direction: column-reverse;
    padding-top: 80px;
    align-items: center;
    justify-content: center;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
`

export default Packages
