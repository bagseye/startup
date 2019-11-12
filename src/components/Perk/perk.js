import React from "react"
import styled from "styled-components"

const Perk = ({ img, alt, title, content }) => {
  return (
    <PerkWrapper className="perk">
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{content}</p>
    </PerkWrapper>
  )
}

const PerkWrapper = styled.article`
  padding: 1rem;
  max-width: 260px;
  margin: 0 auto;

  img {
    box-sizing: border-box;
    width: 100%;
    padding: 1.75rem;
  }
`

export default Perk
