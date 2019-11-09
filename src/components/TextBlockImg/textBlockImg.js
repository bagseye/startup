import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const TextBlockImg = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "macbook-pad.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage Tag="section" fluid={data.file.childImageSharp.fluid}>
      <TextBlockImgWrapper>
        <div className="content-container">
          <h2>{title}</h2>
          {children}
        </div>
      </TextBlockImgWrapper>
    </BackgroundImage>
  )
}

const TextBlockImgWrapper = styled.section`
  text-align: center;
  padding: 100px 30px;
`

export default TextBlockImg
