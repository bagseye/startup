import React from "react"
import { ButtonStyles } from "./ButtonStyles"

const Button = ({ text, to, as }) => {
  return (
    <ButtonStyles as={as} to={to}>
      {text}
    </ButtonStyles>
  )
}

export default Button
