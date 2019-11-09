import React from "react"
import styled from "styled-components"

const Perk = ({ title, content }) => {
  return (
    <PerkWrapper>
      <h3>{title}</h3>
      <p>{content}</p>
    </PerkWrapper>
  )
}

const PerkWrapper = styled.article``

export default Perk
