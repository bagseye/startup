import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "macbook-pad.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <BannerWrapper>
      <BackgroundImage
        Tag="section"
        className="hero-image"
        fluid={data.file.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <h1>The Title</h1>
      </BackgroundImage>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section`
  .gatsby-image-wrapper {
    height: 100vh;
  }
`

export default Banner
