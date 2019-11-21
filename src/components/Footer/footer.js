import React from "react"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"

const Footer = () => {
  return (
    <FooterWrapper>
      {socialIcons.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        )
      })}
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 20px 30px;
  text-align: center;

  a {
    color: #fff;
    font-size: 1.75rem;
    padding: 0 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
